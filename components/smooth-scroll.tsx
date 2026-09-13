"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScroll({
    children,
}: {
    children: ReactNode;
}) {
    useEffect(() => {
        // Native touch scrolling is already compositor-driven. ScrollSmoother
        // intercepts it and makes the entire page animate on every gesture,
        // which is noticeably less fluid on phones and tablets.
        if (window.matchMedia("(pointer: coarse), (max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let disposed = false;
        let smoother: { kill: () => void } | undefined;
        // Touch devices never download the desktop scrolling plugins.
        Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("gsap/ScrollSmoother")])
            .then(([{ default: gsap }, { ScrollTrigger }, { ScrollSmoother }]) => {
                if (disposed) return;
                gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
                smoother = ScrollSmoother.create({ smooth: 2.5, effects: true });
            }).catch(() => { /* Native scrolling remains available if a chunk fails. */ });

        return () => {
            disposed = true;
            smoother?.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
}
