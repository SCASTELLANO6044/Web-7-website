import Link from "next/link";
import { services } from "@/lib/projects";
import { Reveal } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";

export function MidSectionGrid(){
    return (
        <section className="px-5 py-24 md:px-8 md:py-36">
            <div className="mx-auto max-w-[1540px]">
                <Reveal>
                    <p className="eyebrow">Capabilities / 01—06</p>
                    <h2 className="display mt-3 max-w-3xl text-5xl leading-[.88] md:text-7xl">
                        The right combination of thought and technology.
                    </h2>
                </Reveal>
                <div className="mt-16 grid border-t border-white/20 md:grid-cols-2">
                    {services.map(([number, lead, title, body], i) => (
                        <Reveal
                            key={number}
                            delay={i * 0.04}
                            className="border-b border-white/20 py-7 md:px-7 md:odd:border-r"
                        >
                            <div className="flex gap-6">
                                <span className="text-xs text-[#ff0000]">{number}</span>
                                <div>
                                    <p className="scribble text-lg text-[#ff0000]">{lead}</p>
                                    <h3 className="mt-2 text-xl">{title}</h3>
                                    <p className="mt-3 max-w-md text-xs leading-6 text-white/60">
                                        {body}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <Link
                    href="/services"
                    className="mt-9 inline-flex items-center gap-2 text-xs uppercase tracking-[.13em] text-[#ff0000]"
                >
                    Explore capabilities <ArrowUpRight size={15} />
                </Link>
            </div>
        </section>
    );
}