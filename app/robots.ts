import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // invite pages are personal links, not content for search results
      disallow: ["/join"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
