import type { MetadataRoute } from "next";
import { getSearchIndex } from "@/lib/data";

const BASE = "https://visatalentusa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const index = getSearchIndex();
  const now = new Date("2026-10-08");
  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...index.map((e) => ({
      url: `${BASE}/sponsors/${e.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
