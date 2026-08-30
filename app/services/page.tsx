import { getServices } from "@/lib/projects";
import { MidSectionSlogan } from "@/components/mid-section-slogan";
import { HeroAlternative } from "@/components/hero-alternative";
import { getLocale } from "@/lib/locale";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Services");
    return { title: t("metadata") };
}
export default async function Services() {
    const locale = await getLocale();
    const t = await getTranslations("Services");
    const services = getServices(locale);
    return (
        <section className="px-5 pb-0 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">

                <HeroAlternative 
                    text1={t("eyebrow")}
                    text2={t("title")}
                    text3={t("outline")}
                    text4="" 
                />
                
                <div className="mt-20 border-t border-white/15">
                    {services.map(([number, lead, title, body]) => (
                        <article
                            key={number}
                            className="grid gap-6 border-b border-white/15 py-9 md:grid-cols-12 md:py-12"
                        >
                            <span className="text-xs text-[#ff0000] md:col-span-1">
                                {number}
                            </span>
                            <div className="md:col-span-4">
                                <p className="scribble text-xl text-[#ff0000]">{lead}</p>
                                <h2 className="mt-3 text-2xl">{title}</h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-white/60 md:col-span-5">
                                {body}
                            </p>
                            <span className="text-xs uppercase tracking-[.12em] text-white/45 md:col-span-2">
                                {t("from")}
                            </span>
                        </article>
                    ))}
                </div>

                <div className="pt-20 md:pt-32">
                    <MidSectionSlogan 
                        text1={t("sloganEyebrow")}
                        text2={t("sloganTitle")}
                        text3={t("sloganCta")}
                    />
                </div>
            </div>
        </section>
    );
}
