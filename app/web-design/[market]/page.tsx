import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getLocale, localizePath } from "@/lib/locale";
import { regionalContent } from "@/lib/market-content";
import { getSiteUrl, markets, serviceAreas } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

type Props = { params: Promise<{ market: string }> };

function findMarket(value: string) {
  const market = markets.find((candidate) => candidate === value);
  if (!market) notFound();
  return market;
}

export async function generateMetadata({ params }: Props) {
  const market = findMarket((await params).market);
  const locale = await getLocale();
  return pageMetadata({ path: `/web-design/${market}`, locale, ...regionalContent[locale].markets[market] });
}

export default async function MarketPage({ params }: Props) {
  const market = findMarket((await params).market);
  const locale = await getLocale();
  const content = regionalContent[locale];
  const page = content.markets[market];
  const origin = getSiteUrl();
  const url = `${origin}${localizePath(`/web-design/${market}`, locale)}`;
  const faqs = [[page.question, page.answer], ...content.faqs];
  const linkClass = "inline-flex items-center gap-3 border-b border-current pb-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0000]";

  return (
    <>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Service", "@id": `${url}#service`, name: page.title, description: page.description, url,
            provider: { "@id": `${origin}/#organization` }, areaServed: serviceAreas[markets.indexOf(market)] },
          { "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: content.home, item: `${origin}${localizePath("/", locale)}` },
            { "@type": "ListItem", position: 2, name: page.title, item: url },
          ] },
        ],
      }} />
      <section className="px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1540px]">
          <nav aria-label={content.home} className="mb-12 flex flex-wrap gap-3 text-xs text-white/60">
            <Link href={localizePath("/", locale)} className="hover:underline">{content.home}</Link><span aria-hidden="true">/</span><span aria-current="page">{page.name}</span>
          </nav>
          <p className="eyebrow" style={{ color: "#9d9a96" }}>Web7 / {page.name}</p>
          <h1 className="display mt-6 max-w-6xl text-[clamp(2.8rem,7vw,7rem)] leading-[1.02]">{page.title}</h1>
          <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-2">
            <p className="max-w-xl text-lg leading-8 text-white/80">{page.intro}</p>
            <div className="md:justify-self-end"><Link href={localizePath("/contact", locale)} className={`${linkClass} mt-2 text-[#ff5555]`}>{content.contact}<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3efe8] px-5 py-20 text-[#090909] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1540px] gap-10 md:grid-cols-2">
          <div><h2 className="display max-w-xl text-4xl leading-tight md:text-5xl">{content.needsTitle}</h2><p className="mt-8 max-w-xl text-base leading-8 text-black/75">{page.focus}</p></div>
          <ul className="space-y-7">{page.needs.map((need) => <li key={need} className="border-t border-black/25 pt-5 text-base leading-8">{need}</li>)}</ul>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="display text-4xl leading-tight md:text-5xl">{content.processTitle}</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">{content.process.map(([title, body], index) => <li key={title} className="border-t border-white/20 pt-5"><span className="text-sm text-[#ff5555]">0{index + 1}</span><h3 className="mt-5 text-xl">{title}</h3><p className="mt-4 text-base leading-8 text-white/70">{body}</p></li>)}</ol>
          <div className="mt-16 border-y border-white/20 py-8"><p className="max-w-2xl text-base leading-8 text-white/70">{content.proof}</p><Link href={localizePath("/portfolio/good-meals", locale)} className={`${linkClass} mt-6`}>{content.work}<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
        </div>
      </section>
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-[1540px] gap-10 md:grid-cols-12">
          <h2 className="display text-4xl leading-tight md:col-span-4 md:text-5xl">{content.faqTitle}</h2>
          <div className="md:col-span-7 md:col-start-6">{faqs.map(([question, answer]) => <div key={question} className="border-t border-white/20 py-6"><h3 className="text-xl leading-snug">{question}</h3><p className="mt-4 text-base leading-8 text-white/70">{answer}</p></div>)}<Link href={localizePath("/contact", locale)} className={`${linkClass} mt-8 text-[#ff5555]`}>{content.contact}<ArrowUpRight aria-hidden="true" size={18} /></Link></div>
        </div>
      </section>
    </>
  );
}
