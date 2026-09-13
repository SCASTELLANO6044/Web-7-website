"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Server-rendered content and anything already in view paint immediately.
    // Only enhance sections that the visitor has yet to scroll to.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    const animation = element.animate(
      [{ opacity: 0, transform: "translateY(22px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 700, delay: delay * 1000, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" },
    );
    animation.pause();

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      animation.play();
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(element);

    return () => {
      observer.disconnect();
      animation.cancel();
    };
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
