"use client";

import { useEffect, useState } from "react";

// Decorative effects wait for idle time; primary media can opt into startup
// immediately after hydration while retaining motion/data-saving preferences.
export function useDeferredVisual({ deferUntilIdle = true } = {}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;

    let frame = 0;
    let idle = 0;
    let timer = 0;
    const enable = () => setReady(!motion.matches);
    const schedule = () => {
      if (!deferUntilIdle) {
        enable();
        return;
      }
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          if (typeof window.requestIdleCallback === "function") {
            idle = window.requestIdleCallback(enable, { timeout: 2000 });
          } else {
            timer = window.setTimeout(enable, 200);
          }
        });
      });
    };
    const onMotionChange = () => {
      if (motion.matches) setReady(false);
      else if (!deferUntilIdle || document.readyState === "complete") schedule();
    };

    if (!deferUntilIdle || document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    motion.addEventListener("change", onMotionChange);

    return () => {
      window.removeEventListener("load", schedule);
      motion.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(frame);
      if (idle) window.cancelIdleCallback(idle);
      clearTimeout(timer);
    };
  }, [deferUntilIdle]);

  return ready;
}
