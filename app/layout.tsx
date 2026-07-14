import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { LoadingScreen } from "@/components/motion";

export const metadata: Metadata = {
  title: { default: "Web7 — Website Dev Studio", template: "%s — Web7" },
  description:
    "Web7 designs and develops premium websites for ambitious businesses in the Canary Islands and beyond.",
  keywords: [
    "web design Canary Islands",
    "website development",
    "Web7",
    "premium web design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#f3efe8] focus:p-3 focus:text-black"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
