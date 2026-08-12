import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const HERO_VIDEO_SRC = "/visuals/hero-video.mp4";
const HERO_VIDEO_POSTER_SRC = "/visuals/hero-poster.jpg";

export function HeroSection() {
    return (
        <section className="hero relative isolate flex min-h-dvh overflow-hidden bg-[#050404] px-5 pb-8 pt-32 md:px-8">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={HERO_VIDEO_POSTER_SRC}
                aria-hidden="true"
                tabIndex={-1}
            >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
            <div className="hero-video-overlay" aria-hidden="true" />
            <div className="relative z-10 mx-auto flex w-full max-w-[1540px] flex-col justify-between">
                <div className="flex justify-between text-[10px] uppercase tracking-[.15em] text-white/55">
                    <span>Estudio digital / 28.00Â° N</span>
                    <span>Canary Islands</span>
                </div>
                <div className="py-14 md:py-20">
                    <Reveal>
                        <p className="eyebrow mb-6">
                            Estudio de desarrollo web / Mirando al futuro
                        </p>
                        <h1 className="display max-w-6xl text-[clamp(3.15rem,16.4vw,10.25rem)] leading-[.78] md:text-[clamp(4rem,10.7vw,10.25rem)]">
                            Experiencias digitales
                            <br />
                            <span className="outline-text">que dejan huella.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15} className="ml-auto mt-10 max-w-md">
                        <p className="text-sm leading-7 text-white/70">
                            Creamos sitios web para empresas que quieren destacar, transmitir confianza y crecer.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/35 bg-black/10 px-5 py-3 text-xs uppercase tracking-[.11em] transition-colors duration-300 hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-[#090909] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3efe8]"
                        >
                            Empieza tu proyecto <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}