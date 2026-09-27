import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...siteConfig.nav, ...siteConfig.footerLegal];

  return pages.map(({ href }) => ({
    url: `${siteConfig.siteUrl}${href === "/" ? "" : href}`,
    changeFrequency: href.startsWith("/legal") ? "yearly" : "monthly",
    priority: href === "/" ? 1 : href.startsWith("/legal") ? 0.3 : 0.8,
  }));
}
