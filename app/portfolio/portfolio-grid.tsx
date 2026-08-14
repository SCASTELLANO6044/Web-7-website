"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import SpecularButton from "@/components/specular-button";

const categories = [
    "Todos",
    ...Array.from(new Set(projects.map((p) => p.category))),
];
export function PortfolioGrid() {
    const [active, setActive] = useState("Todos");
    const shown =
        active === "Todos" ? projects : projects.filter((p) => p.category === active);
    return (
        <>
            <div className="mb-12 flex flex-wrap gap-2">
                {categories.map((category) => (
                    <SpecularButton
                        key={category}
                        onClick={() => setActive(category)}
                        size="custom"
                        radius={999}
                        tint={active === category ? "#ff0000" : "#ffffff"}
                        tintOpacity={active === category ? 1 : 0}
                        textColor={active === category ? "#090909" : "#f5f5f5"}
                        lineColor="#ffffff"
                        baseColor={active === category ? "#6b0000" : "#303030"}
                        style={{
                            backgroundColor: active === category ? "#ff0000" : "transparent",
                            border: `1px solid ${active === category ? "#ff0000" : "rgba(255, 255, 255, 0.2)"}`,
                        }}
                        className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.1em] transition-colors ${active === category ? "border-[#ff0000] bg-[#ff0000] text-[#090909]" : "border-white/20 hover:border-white/60"}`}
                    >
                        {category}
                    </SpecularButton>
                ))}
            </div>
            <div className="grid gap-x-5 gap-y-12 md:grid-cols-2">
                {shown.map((project, index) => (
                    <Link
                        className={`group block ${index % 3 === 0 ? "md:col-span-2" : ""}`}
                        href={`/portfolio/${project.slug}`}
                        key={project.slug}
                    >
                        <div
                            className={`relative overflow-hidden bg-white/5 ${index % 3 === 0 ? "aspect-[1.8/1]" : "aspect-[1.15/1]"}`}
                        >
                            <Image
                                src={project.image}
                                alt=""
                                fill
                                className="project-image object-cover"
                                sizes="(min-width: 768px) 80vw, 100vw"
                            />
                            <span className="absolute left-4 top-4 bg-[#090909]/85 px-3 py-1 text-[10px] uppercase tracking-wider">
                                {project.category}
                            </span>
                        </div>
                        <div className="flex items-start justify-between gap-4 pt-4">
                            <div className="min-w-0">
                                <h2 className="display text-4xl">{project.title}</h2>
                                <p className="mt-1 max-w-md text-xs leading-5 text-white/55">
                                    {project.description}
                                </p>
                            </div>
                            <ArrowUpRight className="size-5 text-[#ff0000] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
