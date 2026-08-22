"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RippleDistortion from "@/components/RippleDistortion/RippleDistortion";

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO_SRC = "/visuals/hero-video.mp4";

export function HeroSection() {
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

            mm.add(
                {
                    desktop: "(min-width: 768px)",
                    mobile: "(max-width: 767px)",
                },
                (context) => {
                    const { desktop } = context.conditions as {
                        desktop: boolean;
                        mobile: boolean;
                    };

                    const titleIntroY = desktop ? 200 : 120;
                    const titleScrollY = desktop ? -600 : -350;
                    const titleScrollScale = desktop ? 0.6 : 0.7;
                    const contentY = desktop ? -400 : -220;
                    const contentScale = desktop ? 0.6 : 0.75;

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
                            start: desktop ? "5% top" : "10% top",
                            end: "100% top",
                            scrub: 1,
                        },
                    });
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="hero relative isolate flex min-h-dvh overflow-hidden bg-[#050404] px-5 pb-8 pt-32 md:px-8"
        >
            <div className="absolute inset-0 z-[1]">
                <RippleDistortion
                    src={HERO_VIDEO_SRC}
                    brushSize={110}
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
                    trigger="hover"
                    clickStrength={2}
                    quality="medium"
                    enabled
                />
            </div>

            <div
                className="hero-video-overlay"
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col justify-between">
                {/* Información superior */}
                <div className="flex justify-between gap-4 text-[10px] uppercase tracking-[.15em] text-white/55">
                    <span>Estudio digital / 28.00° N</span>
                    <span className="text-right">
                        Canary Islands
                    </span>
                </div>

                {/* Título principal */}
                <div
                    ref={titleScrollRef}
                    className="pointer-events-none absolute inset-x-0 top-[25%] flex justify-center px-2 md:px-0"
                >
                    <div ref={titleIntroRef}>
                        <Reveal>
                            <div className="text-center">
                                <p
                                    className="eyebrow mb-6 text-white"
                                    style={{ color: "white" }}
                                >
                                    Estudio de desarrollo web / Mirando al futuro
                                </p>

                                <h1 className="display max-w-6xl text-[clamp(3.15rem,16.4vw,10.25rem)] leading-[.78] md:text-[clamp(4rem,10.7vw,10.25rem)]">
                                    Experiencias digitales
                                    <br />
                                    <span className="outline-text">
                                        que dejan huella.
                                    </span>
                                </h1>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Texto + CTA */}
                <div
                    ref={contentRef}
                    className="absolute bottom-[8%] left-5 right-5 z-10 max-w-none md:bottom-[10%] md:left-auto md:right-0 md:max-w-md"
                >
                    <Reveal
                        delay={2.2}
                        className="ml-auto"
                    >
                        <p className="text-sm leading-7 text-white/70">
                            Creamos sitios web para empresas que quieren
                            destacar, transmitir confianza y crecer.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/10 px-5 py-3 text-xs uppercase tracking-[.11em] transition-colors duration-300 hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-[#090909] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3efe8]"
                        >
                            Empieza tu proyecto
                            <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}