import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Instrument_Serif, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { site } from "../lib/site";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const deva = Noto_Sans_Devanagari({
  variable: "--font-deva",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.company, url: site.companyUrl }],
  creator: site.company,
  publisher: site.company,
  category: "Family safety",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  appLinks: {
    android: { package: site.androidPackage, app_name: site.name },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable} ${deva.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
