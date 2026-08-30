"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function Footer() {
    const locale = useLocale();
    const t = useTranslations("Footer");
    const localize = (href: string) => (locale === "en" ? `/en${href}` : href);
    return (
        <footer className="bg-[#f3efe8] px-5 pb-6 pt-20 text-[#090909] md:px-8 md:pt-28">
            <div className="mx-auto max-w-[1540px]">
                <p className="eyebrow text-[#090909]">{t("idea")}</p>
                <Link
                    href={localize("/contact")}
                    className="group mt-4 flex items-end justify-between gap-4 border-b border-black/30 pb-8"
                >
                    <span className="display min-w-0 max-w-5xl text-[clamp(3rem,15vw,9.5rem)] leading-[.95] md:text-[clamp(4.5rem,10.5vw,10rem)]">
                        {t("headline")}
                    </span>
                    <ArrowUpRight className="mb-2 size-10 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 md:size-16" />
                </Link>
                <div className="grid gap-10 py-14 text-xs uppercase tracking-[.1em] md:grid-cols-4">
                    <div>
                        <p className="mb-3 text-black/45">
                            {t("description")}
                        </p>
                        <p>{t("location")}</p>
                    </div>
                    <div>
                        <p className="mb-3 text-black/45">{t("contact")}</p>

                        <div className="space-y-2">
                            <a
                                className="block hover:underline"
                                href="mailto:web7canarias@gmail.com"
                            >
                                web7canarias@gmail.com
                            </a>

                            <a className="block hover:underline" href="tel:+34620463759">
                                Jose +34 620 463 759
                            </a>

                            <a className="block hover:underline" href="tel:+34627187274">
                                Sergio +34 627 187 274
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-black/45">{t("explore")}</p>

                        <div className="space-y-2">
                            <Link className="block hover:underline" href={localize("/portfolio")}>
                                {t("work")}
                            </Link>

                            <Link className="block hover:underline" href={localize("/services")}>
                                {t("services")}
                            </Link>

                            <Link className="block hover:underline" href={localize("/about")}>
                                {t("about")}
                            </Link>
                        </div>
                    </div>
                    <div className="md:text-right">
                        <p className="mb-3 text-black/45">Web7</p>
                        <p>
                            {t("quality")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-black/15 pt-4 text-[10px] uppercase tracking-[.1em]">
                    <span>© {new Date().getFullYear()} Web7 Studio</span>
                    <span>{t("built")}</span>
                </div>
            </div>
        </footer>
    );
}
