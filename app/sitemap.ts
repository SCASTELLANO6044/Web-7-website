import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { localizePath } from "@/lib/locale";
import { getSiteUrl, locales, markets } from "@/lib/site";
import { languageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", "/about", "/portfolio", "/contact",
    ...projects.map(({ slug }) => `/portfolio/${slug}`),
    ...markets.map((market) => `/web-design/${market}`),
  ];
  return paths.flatMap((path) => locales.map((locale) => ({
    url: `${getSiteUrl()}${localizePath(path, locale)}`,
    alternates: { languages: languageAlternates(path) },
  })));
}
