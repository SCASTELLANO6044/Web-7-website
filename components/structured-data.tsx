import { getLocale, localizePath } from "@/lib/locale";
import { getTranslations } from "next-intl/server";
import { getSiteUrl, serviceAreas } from "@/lib/site";

export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export async function BusinessStructuredData() {
  const locale = await getLocale();
  const t = await getTranslations("SEO");
  const origin = getSiteUrl();
  return <StructuredData data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": `${origin}/#organization`,
        name: "Web7", alternateName: "Web7 Studio", url: origin,
        logo: `${origin}/logo/web7Logo.png`, description: t("about.description"),
        email: "web7canarias@gmail.com", telephone: "+34620463759",
        areaServed: serviceAreas,
        location: serviceAreas.slice(0, 2),
        contactPoint: ["+34620463759", "+34627187274"].map((telephone) => ({
          "@type": "ContactPoint", telephone, contactType: "customer service", email: "web7canarias@gmail.com",
        })),
      },
      {
        "@type": "WebSite", "@id": `${origin}/#website`, name: "Web7",
        url: origin, inLanguage: ["es", "en", "cs", "fr"],
        publisher: { "@id": `${origin}/#organization` },
      },
      {
        "@type": "Service", "@id": `${origin}${localizePath("/services", locale)}#service`,
        name: t("services.title"), description: t("services.description"),
        url: `${origin}${localizePath("/services", locale)}`,
        provider: { "@id": `${origin}/#organization` }, areaServed: serviceAreas,
      },
    ],
  }} />;
}
