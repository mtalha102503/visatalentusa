import type { MetadataRoute } from "next";
import { getSearchIndex } from "@/lib/data";
import { blogPosts } from "@/lib/blog";

const BASE = "https://visatalentusa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await getSearchIndex();
  const now = new Date("2026-10-08");
  return [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/sponsors`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/tools/lottery-odds`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
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
