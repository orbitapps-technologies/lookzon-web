import type { Metadata } from "next";

/** Single source of truth for SEO + brand details. */
export const site = {
  name: "Lookzon",
  url: "https://www.lookzon.com",
  title: "Lookzon — Family Safety App with Live Location & Crash Detection",
  shortTitle: "Lookzon — Family safety, one voice away",
  description:
    "Lookzon is India's family safety app: live location sharing, crash detection, safe zones, SOS and a voice assistant that understands Hindi, Hinglish and English.",
  company: "ORBITAPPS TECHNOLOGIES LLP",
  companyUrl: "https://www.orbitappstechnologiesllp.com",
  streetAddress: "Aspire Coworks, No. 472/7 Balaji Arcade, Koramangala 4th Block",
  postalCode: "560095",
  email: "Lookzonsupport@gmail.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.lookzon.app",
  androidPackage: "com.lookzon.app",
  locality: "Bengaluru",
  region: "Karnataka",
  country: "IN",
  keywords: [
    "family safety app",
    "family locator app India",
    "live location sharing",
    "location tracking app for family",
    "crash detection app",
    "SOS app India",
    "safe zone alerts",
    "child location tracker",
    "parents location tracker",
    "Hindi voice assistant",
    "Lookzon",
  ],
} as const;

/** Builds per-page metadata with a canonical URL and matching Open Graph / Twitter tags. */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // a page-level openGraph replaces the layout's, so every page lists the shared image itself
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.shortTitle }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
