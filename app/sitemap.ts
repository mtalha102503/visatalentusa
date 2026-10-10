import type { MetadataRoute } from "next";
import { getSearchIndex, getTitles } from "@/lib/data";
import { blogPosts } from "@/lib/blog";

const BASE = "https://visatalentusa.com";

// No trailing slashes anywhere — matches Next.js default (trailingSlash: false).
// A trailing slash on these routes returns 308, so the sitemap must use the
// canonical non-slash form.
function cleanUrl(path: string): string {
  const noSlash = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  return `${BASE}${encodeURI(noSlash)}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await getSearchIndex();
  // Use the real build date so lastmod reflects when the data was generated,
  // not a hardcoded stale date.
  const now = new Date();

  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  function add(url: string, lastModified: Date, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number) {
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({ url, lastModified, changeFrequency, priority });
  }

  add(BASE, now, "daily", 1);
  add(cleanUrl("/blog"), now, "weekly", 0.8);
  for (const p of blogPosts) {
    add(cleanUrl(`/blog/${p.slug}`), new Date(p.dateModified), "monthly", 0.8);
  }
  add(cleanUrl("/sponsors"), now, "weekly", 0.9);
  add(cleanUrl("/tools/lottery-odds"), now, "monthly", 0.8);
  add(cleanUrl("/tools/sponsor-match"), now, "weekly", 0.85);
  const titles = await getTitles();
  for (const t of titles) {
    if (!t.slug || typeof t.slug !== "string") continue;
    const slug = t.slug.trim().toLowerCase();
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) continue;
    add(cleanUrl(`/tools/sponsor-match/${slug}`), now, "monthly", 0.7);
  }
  add(cleanUrl("/about"), now, "monthly", 0.5);
  add(cleanUrl("/contact"), now, "yearly", 0.3);
  add(cleanUrl("/privacy"), now, "yearly", 0.3);
  add(cleanUrl("/disclaimer"), now, "yearly", 0.3);
  add(cleanUrl("/terms"), now, "yearly", 0.3);
  for (const e of index) {
    if (!e.slug || typeof e.slug !== "string") continue;
    const slug = e.slug.trim().toLowerCase();
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) continue;
    add(cleanUrl(`/sponsors/${slug}`), now, "monthly", 0.7);
  }

  return entries;
}
