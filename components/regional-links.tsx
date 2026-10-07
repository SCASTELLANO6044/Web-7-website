import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getLocale, localizePath } from "@/lib/locale";
import { regionalContent } from "@/lib/market-content";
import { markets } from "@/lib/site";

export async function RegionalLinks() {
  const locale = await getLocale();
  const content = regionalContent[locale];
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="regions-title">
      <div className="mx-auto max-w-[1540px]">
        <p className="eyebrow" style={{ color: "#9d9a96" }}>Web7 / Canarias · Praha</p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <h2 id="regions-title" className="display max-w-2xl text-4xl leading-tight md:text-6xl">{content.heading}</h2>
          <p className="max-w-xl self-end text-base leading-8 text-white/70">{content.intro}</p>
        </div>
        <div className="mt-12 grid border-t border-white/20 md:grid-cols-3">
          {markets.map((market) => (
            <Link key={market} href={localizePath(`/web-design/${market}`, locale)} className="group border-b border-white/20 py-7 pr-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0000] md:pr-10">
              <h3 className="flex items-start justify-between gap-4 text-xl leading-snug group-hover:text-[#ff5555]">{content.markets[market].title}<ArrowUpRight aria-hidden="true" className="size-5 shrink-0" /></h3>
              <span className="mt-4 block text-sm text-white/60">{content.details}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
