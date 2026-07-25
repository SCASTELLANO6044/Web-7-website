"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/projects";
import { useEditorialGridMotion } from "@/components/editorial-grid-motion";

export function MidSectionGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  useEditorialGridMotion(sectionRef, "primary");

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#080706] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/45">
          <span>Capabilities / 01—06</span>
          <span aria-hidden="true">Build system</span>
        </div>

        <div className="grid grid-cols-2 overflow-hidden border-l border-t border-white/20 [grid-auto-rows:calc((100vw-2.5rem)/2)] md:grid-cols-12 md:[grid-auto-rows:clamp(4.75rem,8.05vw,8rem)]">
          <div
            data-grid-cell
            className="relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden border-b border-r border-white/20 bg-[#11100f] p-5 md:col-span-5 md:row-span-4 md:p-8"
          >
            <span data-grid-rule className="absolute left-0 top-0 h-px w-full bg-[#ff0000]" />
            <p className="eyebrow">Digital work, built in full</p>
            <div className="overflow-hidden">
              <h2 data-grid-text className="display mt-8 max-w-md text-[15vw] leading-[0.78] md:mt-0 md:text-[5.4vw]">
                Thought meets technology.
              </h2>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/62">
              The disciplines behind a website that earns attention and keeps it.
            </p>
          </div>

          <div
            data-grid-cell
            className="relative col-span-2 overflow-hidden border-b border-r border-white/20 bg-white/[0.03] md:col-span-4 md:row-span-4"
          >
            <div data-grid-mask className="absolute inset-0 overflow-hidden">
              <Image
                data-grid-image
                src="/reference/portfolio-1.jpg"
                alt="A considered digital project presented in the studio portfolio"
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
            <span className="absolute bottom-4 left-4 z-10 text-[10px] uppercase tracking-[0.16em] text-white/70 md:bottom-6 md:left-6">
              One system, every detail
            </span>
          </div>

          <div
            data-grid-cell
            className="relative flex items-end overflow-hidden border-b border-r border-white/20 bg-[#ff0000] p-4 text-[#090909] md:col-span-3 md:row-span-2 md:p-6"
          >
            <span data-grid-depth className="display text-[23vw] leading-none md:text-[7.6vw]">01</span>
            <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.14em] md:right-6 md:top-6">Web7</span>
          </div>

          <div
            data-grid-cell
            className="col-span-2 flex items-center border-b border-r border-white/20 bg-[#0c0b0a] p-5 md:col-span-3 md:row-span-2 md:p-6"
          >
            <p className="scribble max-w-[13rem] text-xl leading-tight text-[#ff0000] md:text-2xl">
              A clear point of view, right down to the interaction.
            </p>
          </div>

          {services.map(([number, lead, title, body], index) => (
            <article
              key={number}
              data-grid-cell
              className={`group relative col-span-2 overflow-hidden border-b border-r border-white/20 p-5 transition-colors duration-300 hover:bg-white/[0.045] md:col-span-3 md:row-span-3 md:p-6 ${index === 0 ? "md:col-start-1" : ""}`}
            >
              <span className="text-xs text-[#ff0000]">{number}</span>
              <p className="scribble mt-7 text-lg leading-tight text-[#ff0000]">{lead}</p>
              <h3 className="mt-3 text-lg leading-tight text-white md:text-xl">{title}</h3>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/60">{body}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#ff0000] transition-[width] duration-300 group-hover:w-full" />
            </article>
          ))}

          <div
            data-grid-cell
            className="col-span-2 flex items-end justify-between border-b border-r border-white/20 bg-[#f3efe8] p-5 text-[#090909] md:col-span-3 md:row-span-3 md:p-6"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em]">From strategy to launch</p>
              <p className="display mt-4 text-4xl leading-[0.8] md:text-5xl">Ready to make it count?</p>
            </div>
            <Link
              href="/services"
              className="ml-4 inline-grid size-11 shrink-0 place-items-center rounded-full border border-[#090909]/25 transition-colors hover:bg-[#ff0000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#090909]"
              aria-label="Explore capabilities"
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
