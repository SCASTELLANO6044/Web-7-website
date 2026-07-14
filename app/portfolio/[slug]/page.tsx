import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    return { title: project?.title ?? "Project" };
}
export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();
    return (
        <>
            <section className="px-5 pb-10 pt-36 md:px-8 md:pt-44">
                <div className="mx-auto max-w-[1540px]">
                    <div className="flex justify-between text-[10px] uppercase tracking-[.15em] text-white/55">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="display mt-12 text-7xl leading-[.78] md:text-[10vw]">
                        {project.title}
                    </h1>
                    <p className="mt-10 max-w-md text-sm leading-7 text-white/65">
                        {project.description}
                    </p>
                </div>
            </section>
            <section className="px-5 md:px-8">
                <div className="relative mx-auto aspect-[1.5/1] max-w-[1540px] overflow-hidden bg-white/5">
                    <Image
                        src={project.image}
                        alt=""
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </section>
            <section className="px-5 py-24 md:px-8 md:py-36">
                <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-12">
                    <div className="md:col-span-3">
                        <p className="eyebrow">Project details</p>
                    </div>
                    <div className="grid gap-12 md:col-span-8 md:grid-cols-2">
                        <div>
                            <p className="text-xs uppercase tracking-[.12em] text-[#ffb8b3]">
                                Services
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-white/70">
                                {project.services.map((x) => (
                                    <li key={x}>{x}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[.12em] text-[#ffb8b3]">
                                Technology
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-white/70">
                                {project.technologies.map((x) => (
                                    <li key={x}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-24 grid max-w-[1540px] gap-12 border-t border-white/15 pt-10 md:grid-cols-3">
                    <div>
                        <p className="eyebrow">The challenge</p>
                        <p className="mt-5 text-sm leading-7 text-white/70">
                            {project.challenge}
                        </p>
                    </div>
                    <div>
                        <p className="eyebrow">The response</p>
                        <p className="mt-5 text-sm leading-7 text-white/70">
                            {project.solution}
                        </p>
                    </div>
                    <div>
                        <p className="eyebrow">The result</p>
                        <ul className="mt-5 space-y-3 text-sm text-white/70">
                            {project.results.map((x) => (
                                <li key={x}>— {x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link
                    href="/contact"
                    className="mt-20 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em] text-[#ffb8b3]"
                >
                    Build something considered <ArrowUpRight size={15} />
                </Link>
            </section>
        </>
    );
}
