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
        const smoother = ScrollSmoother.create({
            smooth: 2.5,
            effects: true,
            smoothTouch: 0.1,
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