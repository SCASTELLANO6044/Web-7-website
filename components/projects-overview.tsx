import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/motion";
import { MoveUpRight, ArrowUpRight } from "lucide-react";

export function ProjectsOverview() {
    return (
        <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Selected work / 01—06</p>
              <h2 className="display mt-3 text-5xl md:text-7xl">
                Made to mean
                <br />
                something.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden text-xs uppercase tracking-[.13em] text-[#ff0000] md:block"
            >
              View all work ↗
            </Link>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-12">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.06}
                className={index === 0 ? "md:col-span-7" : "md:col-span-5"}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div
                    className={`relative overflow-hidden bg-white/5 ${index === 0 ? "aspect-[1.15/1]" : "aspect-[1.35/1]"}`}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="project-image object-cover"
                      sizes="(min-width: 768px) 60vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-[#f3efe8] px-3 py-1 text-[10px] uppercase tracking-wider text-[#090909]">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between pt-4">
                    <div>
                      <h3 className="display text-3xl">{project.title}</h3>
                      <p className="mt-1 text-xs text-white/55">
                        {project.description}
                      </p>
                    </div>
                    <MoveUpRight className="mt-1 size-5 text-[#ff0000] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[.13em] text-[#ff0000] md:hidden"
          >
            View all work <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    );
}