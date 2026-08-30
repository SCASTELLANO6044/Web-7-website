import { PortfolioGrid } from "./portfolio-grid";
import { HeroAlternative } from "@/components/hero-alternative";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Portfolio");
    return { title: t("metadata") };
}
export default async function Portfolio() {
    const t = await getTranslations("Portfolio");
    return (
        <section className="px-5 pb-0 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                
                <HeroAlternative 
                    text1={t("eyebrow")}
                    text2={t("title")}
                    text3={t("outline")}
                    text4={t("description")}
                />
                
                <div className="mt-20">
                    <PortfolioGrid />
                </div>
            </div>
        </section>
    );
}
