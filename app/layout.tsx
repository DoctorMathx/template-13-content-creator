import type { Metadata } from "next";
import { Inter, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const dmSans = DM_Sans({ variable: "--font-display", subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700"] });
const dmSerif = DM_Serif_Display({ variable: "--font-serif", subsets: ["latin"], display: "swap", weight: "400", style: ["normal", "italic"] });

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://template-13-content-creator.vercel.app").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`, template: `%s · ${siteConfig.brand.name}` },
  description: "A creator's home online — newsletter, podcast, essays and the small shop.",
  openGraph: { type: "website", siteName: siteConfig.brand.name, url: siteUrl, locale: "en_NG" },
  twitter: { card: "summary_large_image", creator: "@" + siteConfig.brand.name.replace(/\s/g, "").toLowerCase() },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${dmSerif.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
