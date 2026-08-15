import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/motion";
import TiltedCard from "@/components/tilted-card";
import { MoveUpRight, ArrowUpRight } from "lucide-react";

export function ProjectsOverview() {
    return (
        <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div className="min-w-0">
              <h2 className="display mt-3 text-[clamp(2.5rem,11vw,4.5rem)] md:text-7xl">
                Creado para dar vida a tus ideas y
                <br />
                hacer que tu negocio crezca.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden text-xs uppercase tracking-[.13em] text-[#ff0000] md:block"
            >
              Todo nuestro trabajo ↗
            </Link>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.06}
                className="h-full"
              >
                <TiltedCard className="h-full" captionText="Ver proyecto">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group flex h-full cursor-pointer flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-image object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#f3efe8] px-3 py-1 text-[10px] uppercase tracking-wider text-[#090909]">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex flex-1 items-start justify-between gap-4 pt-4">
                      <div className="min-w-0">
                        <h3 className="display text-3xl">{project.title}</h3>
                        <p className="mt-1 text-xs text-white/55">
                          {project.description}
                        </p>
                      </div>
                      <MoveUpRight className="mt-1 size-5 text-[#ff0000] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </TiltedCard>
              </Reveal>
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[.13em] text-[#ff0000] md:hidden"
          >
            Todo nuestro trabajo <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    );
}
