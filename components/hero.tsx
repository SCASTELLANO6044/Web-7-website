import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function HeroSection(){
    return(
        <section className="relative flex min-h-dvh overflow-hidden px-5 pb-8 pt-32 md:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(255,184,179,.16),transparent_22%),radial-gradient(circle_at_30%_85%,rgba(255,184,179,.10),transparent_27%)]" />
            <div className="relative mx-auto flex w-full max-w-[1540px] flex-col justify-between">
                <div className="flex justify-between text-[10px] uppercase tracking-[.15em] text-white/55">
                    <span>Digital work / 28.00° N</span>
                    <span>Canary Islands</span>
                </div>
                <div className="py-14 md:py-20">
                    <Reveal>
                        <p className="eyebrow mb-6">
                            Website dev studio / Est. for what&apos;s next
                        </p>
                        <h1 className="display max-w-6xl text-[16.4vw] leading-[.78] md:text-[10.7vw]">
                            Digital experiences
                            <br />
                            <span className="outline-text">worth noticing.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15} className="ml-auto mt-10 max-w-md">
                        <p className="text-sm leading-7 text-white/70">
                            Web7 designs and develops distinctive websites for businesses
                            ready to be seen, trusted and chosen.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs uppercase tracking-[.11em] transition-colors hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-[#090909]"
                        >
                            Start your project <ArrowUpRight size={15} />
                        </Link>
                    </Reveal>
                </div>
                <div className="flex items-end justify-between">
                    <p className="scribble max-w-[190px] text-xl leading-tight text-[#ff0000]">
                        Built in the seven islands. Made for everywhere.
                    </p>
                    <ArrowDownRight className="size-8 text-[#ff0000]" />
                </div>
            </div>
        </section>
    );
}