"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function LoadingScreen() {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = element.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el?.remove();
      return;
    }
    const ctx = gsap.context(() =>
      gsap
        .timeline()
        .to(".loader-number", {
          textContent: 7,
          duration: 0.65,
          snap: { textContent: 1 },
          ease: "power2.out",
        })
        .to(el, {
          yPercent: -100,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.inOut",
          onComplete: () => el.remove(),
        }),
    );
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={element}
      className="fixed inset-0 z-50 grid place-items-center bg-[#f3efe8] text-[#090909]"
    >
      <div className="text-center">
        <p className="eyebrow text-[#090909]">Web7 / Canary Islands</p>
        <p className="loader-number display mt-2 text-[22vw] leading-none">0</p>
      </div>
    </div>
  );
}
