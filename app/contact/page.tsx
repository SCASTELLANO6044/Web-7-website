import { ContactForm } from "./contact-form";
import { getTranslations } from "next-intl/server";
export async function generateMetadata() {
    const t = await getTranslations("Contact");
    return { title: t("metadata") };
}
export default async function Contact() {
    const t = await getTranslations("Contact");
    return (
        <section className="px-5 pb-28 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                <p className="eyebrow" style={{ color: 'red' }}>
                    {t("eyebrow")}
                </p>
                <h1 className="display mt-4 max-w-5xl text-[clamp(3rem,14vw,6rem)] leading-[.8] md:text-[clamp(4rem,10vw,8rem)]">
                    {t("title")}
                    <br />
                    <span className="outline-text">
                    {t("outline")}</span>
                </h1>
                <div className="mt-20 grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="max-w-xs text-sm leading-7 text-white/65">
                            {t("intro")}
                        </p>
                        <div className="mt-12 space-y-6 text-xs leading-6">
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    Email
                                </p>
                                <a
                                    className="hover:text-[#ff0000]"
                                    href="mailto:web7canarias@gmail.com"
                                >
                                    web7canarias@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    {t("call")}
                                </p>
                                <a
                                    className="block hover:text-[#ff0000]"
                                    href="tel:+34620463759"
                                >
                                    Jose / +34 620 463 759
                                </a>
                                <a
                                    className="block hover:text-[#ff0000]"
                                    href="tel:+34627187274"
                                >
                                    Sergio / +34 627 187 274
                                </a>
                            </div>
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    {t("location")}
                                </p>
                                <p>Canary Islands, Spain</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
