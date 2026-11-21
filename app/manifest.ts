import type { MetadataRoute } from "next";
import { site } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.shortTitle,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f14",
    theme_color: "#0b0f14",
    lang: "en-IN",
    categories: ["lifestyle", "utilities", "navigation"],
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    related_applications: [
      { platform: "play", url: site.playStoreUrl, id: site.androidPackage },
    ],
    prefer_related_applications: false,
  };
}
