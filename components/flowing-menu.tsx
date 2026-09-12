"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import styles from "./flowing-menu.module.css";

type FlowingMenuItem = {
  link: string;
  text: string;
  image: string;
  number?: string;
  description?: string;
};

type FlowingMenuProps = {
  items: FlowingMenuItem[];
  label: string;
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
};

// Adapted from the React Bits FlowingMenu component.
export default function FlowingMenu({
  items,
  label,
  speed = 15,
  textColor = "var(--paper)",
  bgColor = "var(--ink)",
  marqueeBgColor = "var(--paper)",
  marqueeTextColor = "var(--red)",
  borderColor = "var(--line)",
}: FlowingMenuProps) {
  return (
    <nav
      aria-label={label}
      className={styles.menu}
      style={{
        "--menu-text": textColor,
        "--menu-background": bgColor,
        "--menu-marquee-background": marqueeBgColor,
        "--menu-marquee-text": marqueeTextColor,
        "--menu-border": borderColor,
      } as CSSProperties}
    >
      {items.map((item) => <MenuItem key={item.number ?? item.text} {...item} speed={speed} />)}
    </nav>
  );
}

function MenuItem({ link, text, image, number, description, speed }: FlowingMenuItem & { speed: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const transitionRef = useRef<gsap.core.Timeline | null>(null);
  const activeRef = useRef(false);
  const focusedRef = useRef(false);
  const hoveredRef = useRef(false);
  const visibleRef = useRef(false);
  const [repetitions, setRepetitions] = useState(4);

  useEffect(() => {
    const item = itemRef.current;
    const marquee = marqueeRef.current;
    const content = revealRef.current;
    const inner = innerRef.current;
    const part = inner?.firstElementChild;
    if (!item || !marquee || !content || !inner || !part) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const setup = () => {
        const width = part.getBoundingClientRect().width;
        if (!width) return;
        setRepetitions(Math.max(4, Math.ceil(item.clientWidth / width) + 2));
        animationRef.current?.kill();
        animationRef.current = gsap.fromTo(inner, { x: 0 }, {
          x: -width,
          duration: Math.max(1, speed),
          ease: "none",
          repeat: -1,
          paused: !activeRef.current || !visibleRef.current,
        });
      };
      const resizeObserver = new ResizeObserver(setup);
      resizeObserver.observe(item);
      resizeObserver.observe(part);
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        visibleRef.current = entry.isIntersecting;
        animationRef.current?.paused(!activeRef.current || !entry.isIntersecting);
      });
      intersectionObserver.observe(item);
      setup();

      return () => {
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        animationRef.current?.kill();
        transitionRef.current?.kill();
        animationRef.current = null;
        transitionRef.current = null;
        // React may clear refs before passive effect cleanup during unmount.
        // Keep the nodes from this effect's setup for media changes and teardown.
        gsap.set([marquee, content, inner], { clearProps: "transform" });
      };
    });
    return () => media.revert();
  }, [text, image, speed]);

  const reveal = (show: boolean, edge = 1) => {
    const marquee = marqueeRef.current;
    const content = revealRef.current;
    if (!marquee || !content) return;
    const wasActive = activeRef.current;
    activeRef.current = show;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animationRef.current?.paused(!show || !visibleRef.current);
    transitionRef.current?.kill();
    const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: "expo.out" } });
    transitionRef.current = timeline;
    if (show && !wasActive) {
      timeline.set(marquee, { y: 0, yPercent: edge * 101 });
      timeline.set(content, { y: 0, yPercent: edge * -101 }, 0);
    }
    timeline.to(marquee, { yPercent: show ? 0 : edge * 101 }, 0);
    timeline.to(content, { yPercent: show ? 0 : edge * -101 }, 0);
  };

  const handlePointer = (event: PointerEvent<HTMLAnchorElement>, entering: boolean) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover)").matches) return;
    hoveredRef.current = entering;
    const rect = event.currentTarget.getBoundingClientRect();
    const edge = event.clientY - rect.top < rect.height / 2 ? -1 : 1;
    reveal(entering || focusedRef.current, edge);
  };

  return (
    <div className={styles.item} ref={itemRef}>
      <Link
        href={link}
        className={styles.link}
        onPointerEnter={(event) => handlePointer(event, true)}
        onPointerLeave={(event) => handlePointer(event, false)}
        onFocus={(event) => {
          focusedRef.current = event.currentTarget.matches(":focus-visible");
          if (focusedRef.current) reveal(true);
        }}
        onBlur={() => {
          focusedRef.current = false;
          if (!hoveredRef.current) reveal(false);
        }}
      >
        {number && <span className={styles.number} aria-hidden="true">{number}</span>}
        <div className={styles.copy}>
          <h2 className={styles.title}>{text}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <ArrowUpRight className={styles.arrow} size={28} strokeWidth={1.25} aria-hidden="true" />
      </Link>
      <div className={styles.marquee} ref={marqueeRef} aria-hidden="true">
        <div className={styles.reveal} ref={revealRef}>
          <div className={styles.inner} ref={innerRef}>
            {Array.from({ length: repetitions }, (_, index) => (
              <div className={styles.part} key={index}>
                <span>{text}</span>
                <div className={styles.image} style={{ backgroundImage: `url("${image}")` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
