"use client";

import { ReactNode, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
    children,
}: {
    children: ReactNode;
}) {
    useLayoutEffect(() => {
        // Native touch scrolling is already compositor-driven. ScrollSmoother
        // intercepts it and makes the entire page animate on every gesture,
        // which is noticeably less fluid on phones and tablets.
        if (window.matchMedia("(pointer: coarse), (max-width: 767px)").matches) {
            return;
        }

        const smoother = ScrollSmoother.create({
            smooth: 2.5,
            effects: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
        </div>
    );
}
