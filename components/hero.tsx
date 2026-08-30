"use client";

import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RippleDistortion from "@/components/RippleDistortion/RippleDistortion";
import { useLocale, useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO_SRC = "/visuals/hero-video.mp4";

function subscribeToCoarsePointer(onStoreChange: () => void) {
    const mediaQuery = window.matchMedia("(pointer: coarse), (max-width: 767px)");

    mediaQuery.addEventListener("change", onStoreChange);

    return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function hasCoarsePointer() {
    return window.matchMedia("(pointer: coarse), (max-width: 767px)").matches;
}

function useStableMobileHeroHeight() {
    useLayoutEffect(() => {
        const root = document.documentElement;
        const mobileQuery = window.matchMedia("(max-width: 767px)");
        let lockedWidth = window.innerWidth;

        const setHeight = () => {
            if (!mobileQuery.matches) {
                root.style.removeProperty("--mobile-hero-height");
                return;
            }

            root.style.setProperty("--mobile-hero-height", `${window.innerHeight}px`);
        };

        // Mobile browser bars change only the viewport height. Keep the hero
        // fixed for those changes; update it when the device actually rotates
        // or the window changes width.
        const onResize = () => {
            if (Math.abs(window.innerWidth - lockedWidth) < 48) return;

            lockedWidth = window.innerWidth;
            setHeight();
        };

        const onBreakpointChange = () => {
            lockedWidth = window.innerWidth;
            setHeight();
        };

        setHeight();
        window.addEventListener("resize", onResize, { passive: true });
        mobileQuery.addEventListener("change", onBreakpointChange);

        return () => {
            window.removeEventListener("resize", onResize);
            mobileQuery.removeEventListener("change", onBreakpointChange);
            root.style.removeProperty("--mobile-hero-height");
        };
    }, []);
}

function HeroMedia() {
    // A low-resolution WebGL layer keeps the hero responsive on touch devices
    // while still allowing a finger tap to create the same ripple as a cursor.
    const isTouchDevice = useSyncExternalStore(
        subscribeToCoarsePointer,
        hasCoarsePointer,
        () => false
    );

    return (
        <RippleDistortion
            src={HERO_VIDEO_SRC}
            brushSize={isTouchDevice ? 92 : 110}
            strength={0.2}
            swirl={2}
            rings={2}
            spread={5}
            fade={6}
            spacing={8}
            dispersion={0.3}
            glint={0.1}
            tint="#ffffff"
            tintAmount={0}
            grayscale={false}
            highlightColor="#7a010c"
            trigger={isTouchDevice ? "both" : "hover"}
            clickStrength={2}
            quality={isTouchDevice ? "low" : "medium"}
            enabled
        />
    );
}

export function HeroSection() {
    const locale = useLocale();
    const t = useTranslations("Hero");
    const localize = (href: string) => (locale === "en" ? `/en${href}` : href);
    useStableMobileHeroHeight();

    const heroRef = useRef<HTMLElement | null>(null);
    const titleScrollRef = useRef<HTMLDivElement | null>(null);
    const titleIntroRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const titleIntro = titleIntroRef.current;
            const titleScroll = titleScrollRef.current;
            const hero = heroRef.current;
            const content = contentRef.current;

            if (!titleIntro || !titleScroll || !hero || !content) return;

            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                    const titleIntroY = 200;
                    const titleScrollY = -600;
                    const titleScrollScale = 0.6;
                    const contentY = -400;
                    const contentScale = 0.6;

                    // Intro del título
                    gsap.fromTo(
                        titleIntro,
                        {
                            opacity: 0,
                            y: titleIntroY,
                            scale: 0.6,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 1.2,
                            delay: 1.3,
                            ease: "power3.out",
                        }
                    );

                    // Salida del título al hacer scroll
                    gsap.to(titleScroll, {
                        y: titleScrollY,
                        scale: titleScrollScale,
                        opacity: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: hero,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1,
                        },
                    });

                    // Salida del contenido al hacer scroll
                    gsap.to(content, {
                        y: contentY,
                        scale: contentScale,
                        opacity: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: hero,
                            start: "5% top",
                            end: "100% top",
                            scrub: 1,
                        },
                    });
            });

            // Start after the loading screen has cleared. A shorter delay puts
            // this entire sequence behind the fixed loader on phones, making
            // the headline appear to be static when the page becomes visible.
            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(
                    titleIntro,
                    { opacity: 0, y: 96, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.05,
                        delay: 1.55,
                        ease: "power3.out",
                    },
                );
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero relative isolate flex overflow-hidden bg-[#050404] px-5 pb-8 pt-32 md:min-h-dvh md:px-8"
        >
            <div className="absolute inset-0 z-[1]">
                <HeroMedia />
            </div>

            <div
                className="hero-video-overlay"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col justify-between">
                {/* Información superior */}
                <div className="flex justify-between gap-4 text-[10px] uppercase tracking-[.15em] text-white/55">
                    <span>{t("top")}</span>
                    <span className="text-right">
                        Canary Islands
                    </span>
                </div>

                {/* Título principal */}
                <div
                    ref={titleScrollRef}
                    className="hero__title-wrap pointer-events-none absolute inset-x-0 top-[25%] flex justify-center px-2 md:px-0"
                >
                    <div ref={titleIntroRef}>
                        <Reveal>
                            <div className="text-center">
                                <p
                                    className="hero__eyebrow eyebrow mb-6 text-white"
                                    style={{ color: "white" }}
                                >
                                    {t("eyebrow")}
                                </p>

                                <h1 className="hero__title display max-w-6xl text-[clamp(3.15rem,16.4vw,10.25rem)] leading-[.78] md:text-[clamp(4rem,10.7vw,10.25rem)]">
                                    {t("title")}
                                    <br />
                                    <span className="outline-text">
                                        {t("outline")}
                                    </span>
                                </h1>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Texto + CTA */}
                <div
                    ref={contentRef}
                    className="hero__content absolute bottom-[8%] left-5 right-5 z-10 max-w-none md:bottom-[10%] md:left-auto md:right-0 md:max-w-md"
                >
                    <Reveal
                        delay={2.2}
                        className="ml-auto"
                    >
                        <p className="hero__description text-sm leading-7 text-white/70">
                            {t("description")}
                        </p>

                        <Link
                            href={localize("/contact")}
                            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/10 px-5 py-3 text-xs uppercase tracking-[.11em] transition-colors duration-300 hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-[#090909] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3efe8]"
                        >
                            {t("cta")}
                            <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
