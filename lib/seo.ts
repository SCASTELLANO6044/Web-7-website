import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLocale, localizePath, type Locale } from "@/lib/locale";
import { getSiteUrl, locales } from "@/lib/site";

export function languageAlternates(path: string) {
  const origin = getSiteUrl();
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `${origin}${localizePath(path, locale)}`])),
    "x-default": `${origin}${path}`,
  };
}

export function pageMetadata({ path, locale, title, description, image = "/opengraph-image" }: {
  path: string; locale: Locale; title: string; description: string; image?: string;
}): Metadata {
  const url = `${getSiteUrl()}${localizePath(path, locale)}`;
  const socialTitle = `${title} | Web7`;
  const ogLocales = { es: "es_ES", en: "en_GB", cs: "cs_CZ", fr: "fr_FR" };
  return {
    title: { absolute: socialTitle }, description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website", siteName: "Web7", title: socialTitle, description, url,
      locale: ogLocales[locale], alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      images: [{ url: image, alt: socialTitle }],
    },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] },
  };
}

export async function translatedMetadata(key: "home" | "services" | "about" | "portfolio" | "contact", path: string) {
  const locale = await getLocale();
  const t = await getTranslations("SEO");
  return pageMetadata({ path, locale, title: t(`${key}.title`), description: t(`${key}.description`) });
}
