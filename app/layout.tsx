import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { BusinessStructuredData } from "@/components/structured-data";
import "./globals.css";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { getLocale } from "@/lib/locale";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: "Web7", template: "%s | Web7" },
    description: t("description"),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const t = await getTranslations("Layout");
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <BusinessStructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#f3efe8] focus:p-3 focus:text-black"
        >
          {t("skip")}
        </a>

        <NextIntlClientProvider>
          <Header />

          <SmoothScroll>
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
