import { headers } from "next/headers";

export type Locale = "es" | "en";

export async function getLocale(): Promise<Locale> {
  return (await headers()).get("x-web7-locale") === "en" ? "en" : "es";
}

export function localizePath(path: string, locale: Locale) {
  if (locale === "es") return path;
  return path === "/" ? "/en" : `/en${path}`;
}
