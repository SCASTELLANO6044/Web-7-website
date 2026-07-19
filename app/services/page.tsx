import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/projects";
export const metadata = { title: "Capabilities" };
export default function Services() {
    return (
        <section className="px-5 pb-28 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                <p className="eyebrow">
                    Capabilities / Your online presence, properly considered
                </p>
                <h1 className="display mt-4 max-w-6xl text-6xl leading-[.8] md:text-9xl">
                    Designed to work.
                    <br />
                    <span className="outline-text">Built to last.</span>
                </h1>
                <div className="ml-auto mt-12 max-w-lg text-sm leading-7 text-white/60">
                    We bring the strategic, creative and technical pieces together, so
                    your website has a single standard from its first idea to its next
                    iteration.
                </div>
                <div className="mt-20 border-t border-white/15">
                    {services.map(([number, lead, title, body]) => (
                        <article
                            key={number}
                            className="grid gap-6 border-b border-white/15 py-9 md:grid-cols-12 md:py-12"
                        >
                            <span className="text-xs text-[#ff0000] md:col-span-1">
                                {number}
                            </span>
                            <div className="md:col-span-4">
                                <p className="scribble text-xl text-[#ff0000]">{lead}</p>
                                <h2 className="mt-3 text-2xl">{title}</h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-white/60 md:col-span-5">
                                {body}
                            </p>
                            <span className="text-xs uppercase tracking-[.12em] text-white/45 md:col-span-2">
                                From brief to launch
                            </span>
                        </article>
                    ))}
                </div>
                <div className="mt-20 bg-[#ff0000] p-8 text-[#090909] md:p-12">
                    <p className="eyebrow text-[#090909]">Not sure what you need?</p>
                    <h2 className="display mt-3 max-w-3xl text-5xl leading-[.85] md:text-7xl">
                        Start with a conversation.
                    </h2>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#090909] px-5 py-3 text-xs uppercase tracking-wider text-[#f3efe8]"
                        style={{ color: "#ffffff" }}
                    >
                        Get a free consultation <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
