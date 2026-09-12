import { getServices } from "@/lib/projects";
import { MidSectionSlogan } from "@/components/mid-section-slogan";
import { HeroAlternative } from "@/components/hero-alternative";
import { getLocale, localizePath } from "@/lib/locale";
import { getTranslations } from "next-intl/server";
import FlowingMenu from "@/components/flowing-menu";
import goodMealsHero from "@/assets/portfolio/goodmeals/goodmeals-hero.png";

const serviceImages = [
    goodMealsHero.src,
    "/visuals/hero-poster.jpg",
    "/reference/portfolio-1.jpg",
    "/visuals/hero-poster.jpg",
    "/reference/portfolio-2.jpg",
    "/reference/portfolio-1.jpg",
];

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
                
                <div className="mt-20">
                    <FlowingMenu
                        label={t("metadata")}
                        speed={7}
                        items={services.map(([number, , title, body], index) => ({
                            number,
                            text: title,
                            description: body,
                            link: localizePath("/contact", locale),
                            image: serviceImages[index],
                        }))}
                    />
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
