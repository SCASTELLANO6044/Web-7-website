"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDownRight, Check } from "lucide-react";
import { useEditorialGridMotion } from "@/components/editorial-grid-motion";

interface Reasons {
  reasons?: string[];
}

export function MidSectionGridAlternative({
  reasons = [
    "La estrategia es lo primero",
    "Experiencia profesional en cada proyecto",
    "Optimizado para velocidad y SEO",
    "Un proceso claro y colaborativo",
  ],
}: Reasons) {
  const sectionRef = useRef<HTMLElement>(null);
  useEditorialGridMotion(sectionRef, "alternative");

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#191817] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/45">
          <span>¿Por qué Web7? / Nuestra forma de trabajar</span>
          <span aria-hidden="true">02</span>
        </div>

        <div className="grid grid-cols-2 overflow-hidden border-l border-t border-white/15 [grid-auto-rows:calc((100vw-2.5rem)/2)] md:grid-cols-12 md:[grid-auto-rows:clamp(4.75rem,8.05vw,8rem)]">
          <div
            data-grid-cell
            className="relative col-span-2 row-span-3 flex flex-col justify-between overflow-hidden border-b border-r border-white/15 bg-[#f3efe8] p-5 text-[#090909] md:col-span-5 md:row-span-5 md:p-8"
          >
            <span data-grid-rule className="absolute left-0 top-0 h-px w-full bg-[#ff0000]" />
            <p className="eyebrow text-[#ff0000]">La ventaja de trabajar juntos</p>
            <div className="overflow-hidden">
              <h2 data-grid-text className="display mt-8 text-[16vw] leading-[0.76] md:mt-0 md:text-[6.1vw]">
                Sin complicaciones.
                Sin intermediarios.
              </h2>
            </div>
            <p className="mt-7 max-w-sm text-sm leading-7 text-[#090909]/70">
              Un buen proyecto digital nace del equilibrio entre tus objetivos y las necesidades de tu audiencia. Combinamos creatividad, estrategia y desarrollo para crear experiencias que generan resultados.
            </p>
          </div>

          <div
            data-grid-cell
            className="relative col-span-2 overflow-hidden border-b border-r border-white/15 bg-white/[0.04] md:col-span-4 md:row-span-5"
          >
            <div data-grid-mask className="absolute inset-0 overflow-hidden">
              <Image
                data-grid-image
                src="/reference/portfolio-2.jpg"
                alt="Escena arquitectónica de uno de nuestros proyectos"
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between text-[10px] uppercase tracking-[0.14em] text-white/75 md:bottom-6 md:left-6 md:right-6">
              <span>Claridad sin renunciar a nada</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </div>
          </div>

          <div
            data-grid-cell
            className="relative flex items-end overflow-hidden border-b border-r border-white/15 bg-[#0d0c0b] p-4 md:col-span-3 md:row-span-2 md:p-6"
          >
            <span data-grid-depth className="display text-[23vw] leading-none text-[#ff0000] md:text-[7.6vw]">007</span>
            <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.14em] text-white/45 md:right-6 md:top-6">Canary Islands</span>
          </div>

          <div
            data-grid-cell
            className="col-span-2 flex items-center border-b border-r border-white/15 bg-white/[0.03] p-5 md:col-span-3 md:row-span-3 md:p-6"
          >
            <p className="scribble max-w-[13rem] text-xl leading-tight text-[#ff0000] md:text-2xl">
              Habla directamente con quienes hacen el trabajo.
            </p>
          </div>

          <ul className="col-span-2 grid grid-cols-2 md:col-span-7 md:row-span-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <li
                key={reason}
                data-grid-cell
                className="relative flex min-h-[9rem] flex-col justify-between overflow-hidden border-b border-r border-white/15 bg-[#191817] p-4 md:min-h-0 md:p-6"
              >
                <span className="text-xs text-[#ff0000]">0{index + 1}</span>
                <div>
                  <Check size={17} className="mb-4 text-[#ff0000]" aria-hidden="true" />
                  <p className="max-w-[12rem] text-sm leading-5 text-white md:text-base md:leading-6">{reason}</p>
                </div>
              </li>
            ))}
          </ul>

          <div
            data-grid-cell
            className="col-span-2 flex items-end justify-between border-b border-r border-white/15 bg-[#ff0000] p-5 text-[#090909] md:col-span-5 md:row-span-2 md:p-6"
          >
            <p className="display max-w-sm text-4xl leading-[0.8] md:text-5xl">Los mejores proyectos empiezan con una conversación.</p>
            <span className="ml-5 text-[10px] font-semibold uppercase tracking-[0.14em]">Web7 / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
