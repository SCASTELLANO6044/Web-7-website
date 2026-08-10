import Link from "next/link";
import { ArrowUpRight, Home, Search, Send } from "lucide-react";

const suggestedRoutes = [
  {
    href: "/portfolio",
    label: "Ver proyectos",
    description: "Explora una seleccion de trabajos y conceptos Web7.",
    icon: Search,
  },
  {
    href: "/services",
    label: "Servicios",
    description: "Revisa como podemos dar forma a tu presencia online.",
    icon: ArrowUpRight,
  },
  {
    href: "/contact",
    label: "Contactar",
    description: "Cuentalo todo: idea, reto, presupuesto o una duda rapida.",
    icon: Send,
  },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_82%_18%,rgba(255,0,0,.2),transparent_25rem),linear-gradient(180deg,rgba(243,239,232,.08),transparent_62%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-[max(16px,calc((100vw-1540px)/2))] top-24 -z-10 h-[calc(100%-6rem)] border-x border-white/10 bg-[linear-gradient(90deg,transparent_33.2%,rgba(243,239,232,.08)_33.3%,rgba(243,239,232,.08)_33.42%,transparent_33.52%,transparent_66.55%,rgba(243,239,232,.08)_66.68%,rgba(243,239,232,.08)_66.8%,transparent_66.9%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1540px]">
        <div className="grid min-h-[calc(100dvh-14rem)] gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="eyebrow">Error 404 / ruta perdida</p>
            <h1 className="display mt-4 max-w-6xl text-[clamp(4.8rem,16vw,15rem)] leading-[.78]">
              Esta página
              <span className="outline-text block">no existe.</span>
            </h1>
          </div>

          <div className="md:col-span-4 md:pb-7">
            <p className="max-w-md text-sm leading-7 text-white/64">
              Puede que el enlace haya cambiado, que falte una letra o que esta idea
              todavia no haya llegado a produccion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex min-h-11 items-center gap-2 rounded-none bg-[#f3efe8] px-5 text-xs uppercase tracking-[.12em] !text-[#090909] transition-transform duration-200 hover:-translate-y-0.5 hover:!text-[#090909] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0000]"
              >
                <Home aria-hidden="true" size={16} strokeWidth={1.7} />
                Inicio
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-5 text-xs uppercase tracking-[.12em] text-[#f3efe8] transition-colors duration-200 hover:border-[#ff0000] hover:text-[#ff0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0000]"
              >
                Hablemos
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.7} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid border-t border-white/15 md:grid-cols-3">
          {suggestedRoutes.map(({ href, label, description, icon: Icon }, index) => (
            <Link
              key={href}
              href={href}
              className="group grid min-h-[180px] content-between gap-8 border-b border-white/15 py-6 transition-colors duration-200 hover:text-[#ff0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff0000] md:border-r md:px-7 md:last:border-r-0"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="text-xs text-white/45">0{index + 1}</span>
                <Icon
                  aria-hidden="true"
                  className="size-5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
              <span>
                <span className="block text-2xl">{label}</span>
                <span className="mt-3 block max-w-sm text-sm leading-6 text-white/56 group-hover:text-white/70">
                  {description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
