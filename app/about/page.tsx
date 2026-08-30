import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroAlternative } from "@/components/hero-alternative";
import { getLocale, localizePath } from "@/lib/locale";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("About");
    return { title: t("metadata") };
}
export default async function About() {
    const locale = await getLocale();
    const t = await getTranslations("About");
    const principles = t.raw("principles") as [string, string, string][];
    const tools = t.raw("toolsList") as string[];
    return (
        <>
            <section className="px-5 pb-0 pt-36 md:px-8 md:pt-48">
                <div className="mx-auto max-w-[1540px]">

                    <HeroAlternative
                        text1={t("eyebrow")}
                        text2={t("title")}
                        text3={t("outline")}
                        text4={t("intro")}
                    />

                </div>
            </section>
            <section className="bg-[#f3efe8] px-5 py-24 text-[#090909] md:px-8 md:py-36">
                <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-12">
                    <p className="eyebrow text-[#090909] md:col-span-3">{t("thinking")}</p>
                    <div className="md:col-span-8">
                        <h2 className="display text-5xl leading-[.9] md:text-7xl">
                            {t("thinkingTitle")}
                        </h2>
                        <div className="mt-12 grid gap-7 border-t border-black/20 pt-5 md:grid-cols-3">
                            {principles.map(([n, t, b]) => (
                                <div key={n}>
                                    <span className="text-xs text-black/50">{n}</span>
                                    <h3 className="mt-5 text-lg">{t}</h3>
                                    <p className="mt-3 text-xs leading-6 text-black/65">{b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-24 md:px-8 md:py-36">
                <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-2">
                    <div>
                        <p className="eyebrow">{t("tools")}</p>
                        <h2 className="display mt-3 text-5xl leading-[.88] md:text-7xl">
                            {t("creative")}
                            <br />
                            {t("precise")}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 border-t border-white/15 text-sm">
                        {tools.map((x, i) => (
                            <div key={x} className="border-b border-white/15 py-5">
                                <span className="mr-3 text-[#ff0000]">0{i + 1}</span>
                                {x}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-5 pb-28 md:px-8">
                <div className="mx-auto max-w-[1540px] border border-white/20 p-7 md:p-12">
                    <p className="scribble text-xl text-[#ff0000]">
                        {t("possible")}
                    </p>
                    <h2 className="display mt-5 max-w-4xl text-5xl leading-[.85] md:text-7xl">
                        {t("challenge")}
                    </h2>
                    <Link
                        href={localizePath("/contact", locale)}
                        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#ff0000]"
                    >
                        {t("cta")} <ArrowUpRight size={15} />
                    </Link>
                </div>
            </section>
        </>
    );
}
