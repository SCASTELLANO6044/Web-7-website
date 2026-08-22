"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GridVariant = "primary" | "alternative";

export function useEditorialGridMotion(
  sectionRef: RefObject<HTMLElement | null>,
  variant: GridVariant,
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const cells = gsap.utils.toArray<HTMLElement>("[data-grid-cell]", section);
      const masks = gsap.utils.toArray<HTMLElement>("[data-grid-mask]", section);
      const imageLayers = gsap.utils.toArray<HTMLElement>(
        "[data-grid-image]",
        section,
      );
      const textLines = gsap.utils.toArray<HTMLElement>(
        "[data-grid-text]",
        section,
      );
      const rules = gsap.utils.toArray<HTMLElement>("[data-grid-rule]", section);
      const depthLayers = gsap.utils.toArray<HTMLElement>(
        "[data-grid-depth]",
        section,
      );

      media.add("(min-width: 768px)", () => {
        const direction = variant === "primary" ? 1 : -1;
        const staggerFrom = variant === "primary" ? "start" : "end";

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            // Finish the composition exactly as the grid's visual centre meets
            // the viewport centre, where it receives the most attention.
            start: "top 82%",
            end: "center center",
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            rules,
            { scaleX: 0, transformOrigin: direction === 1 ? "left" : "right" },
            { scaleX: 1, duration: 0.7, stagger: 0.05 },
            0,
          )
          .fromTo(
            cells,
            { autoAlpha: 0, xPercent: 6 * direction, yPercent: 8, scale: 0.94 },
            {
              autoAlpha: 1,
              xPercent: 0,
              yPercent: 0,
              scale: 1,
              duration: 0.85,
              stagger: { each: 0.045, from: staggerFrom },
            },
            0.05,
          )
          .fromTo(
            masks,
            { clipPath: "inset(48% 48% 48% 48%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.05,
              stagger: { each: 0.1, from: staggerFrom },
              ease: "power4.inOut",
            },
            0.2,
          )
          .fromTo(
            imageLayers,
            { scale: 1.18, xPercent: 4 * direction },
            {
              scale: 1,
              xPercent: 0,
              duration: 1.15,
              stagger: { each: 0.1, from: staggerFrom },
              ease: "power3.out",
            },
            0.2,
          )
          .fromTo(
            textLines,
            { autoAlpha: 0, yPercent: 110 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.65,
              stagger: 0.07,
            },
            0.38,
          )
          .to(
            depthLayers,
            { yPercent: variant === "primary" ? -7 : 7, ease: "none" },
            0.18,
          );
      });

    }, section);

    return () => {
      context.revert();
      media.revert();
    };
  }, [sectionRef, variant]);
}
