import { headers } from "next/headers";

export type Locale = "es" | "en" | "cs";

export async function getLocale(): Promise<Locale> {
  const locale = (await headers()).get("x-web7-locale");
  return locale === "en" || locale === "cs" ? locale : "es";
}

export function localizePath(path: string, locale: Locale) {
  if (locale === "es") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
