// The public production origin, shared by canonical links, schema and the sitemap.
export function getSiteUrl() {
  const url = new URL(process.env.SITE_URL || "https://web7devs.com");
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error("SITE_URL must be an HTTP(S) origin without a path, credentials, query or fragment.");
  }
  return url.origin;
}

export const locales = ["es", "en", "cs", "fr"] as const;
export const markets = ["canarias", "prague", "spain"] as const;
export type Market = (typeof markets)[number];
export const serviceAreas = [
  { "@type": "AdministrativeArea", name: "Canary Islands, Spain" },
  { "@type": "City", name: "Prague, Czechia" },
  { "@type": "Country", name: "Spain" },
];
