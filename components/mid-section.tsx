import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";


interface MidSectionProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

export function MidSection({
    text1 = "Qué hacemos",
    text2 = "Creamos sitios web con la claridad necesaria para convertir y la personalidad suficiente para dejar huella.",
    text3 = "Desde la idea inicial hasta el lanzamiento, unimos diseño y desarrollo en un único proceso pensado al detalle.",
    text4 = "Para negocios locales, startups en crecimiento y equipos consolidados que buscan un trabajo de calidad."
}: MidSectionProps) {
    return (
        <section className="bg-[#f3efe8] px-5 py-24 text-[#090909] md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1540px] gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="eyebrow text-[#090909]">{text1}</p>
          </Reveal>
          <Reveal className="md:col-span-8">
            <h2 className="display text-[clamp(2.5rem,11vw,5rem)] leading-[.9] sm:text-6xl md:text-8xl">
              {text2}
            </h2>
            <div className="mt-12 grid gap-4 border-t border-black/20 pt-5 sm:grid-cols-3">
              <p className="text-xs leading-5">
                {text3}
              </p>
              <p className="text-xs leading-5">
                {text4}
              </p>
              <Link
                href="/about"
                className="group flex items-start justify-between text-xs uppercase tracking-wider"
              >
                Conoce Web7{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
}
