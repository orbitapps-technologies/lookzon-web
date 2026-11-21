import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-11-21");
  return [
    { url: `${site.url}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/contact`, lastModified: updated, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/privacy-policy`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/refund-policy`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
