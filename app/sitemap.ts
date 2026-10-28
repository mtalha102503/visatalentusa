import type { MetadataRoute } from "next";
import { getSearchIndex, getTitles } from "@/lib/data";
import { blogPosts } from "@/lib/blog";

const BASE = "https://visatalentusa.com";

// No trailing slashes anywhere — matches Next.js default (trailingSlash: false).
// A trailing slash on these routes returns 308, so the sitemap must use the
// canonical non-slash form.
// Job-title pages that are code artifacts or meaningless generics — noindex
// in the title template, and excluded here. Must mirror isJunkTitle in the
// title page.
const JUNK_TITLES = new Set([
  "ii", "ui", "ar", "avp", "systems", "software", "leader", "staff", "tiktok-shop",
]);
function isJunkTitle(slug: string): boolean {
  return JUNK_TITLES.has(slug) || /-jc\d+/.test(slug);
}

function cleanUrl(path: string): string {
  const noSlash = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  return `${BASE}${encodeURI(noSlash)}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const index = await getSearchIndex();
  // lastmod is per section: pages carry their own publish date in metadata
  // (sponsors 2026-10-09, titles 2026-10-11); genuinely dynamic pages use the
  // build date.
  const now = new Date();
  const SPONSOR_DATE = new Date("2026-10-09T00:00:00+00:00");
  const TITLE_DATE = new Date("2026-10-11T00:00:00+00:00");

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
  add(cleanUrl("/author/muhammad-talha"), now, "monthly", 0.5);
  add(cleanUrl("/sponsors"), now, "weekly", 0.9);
  add(cleanUrl("/tools/lottery-odds"), now, "monthly", 0.8);
  add(cleanUrl("/tools/sponsor-match"), now, "weekly", 0.85);
  add(cleanUrl("/tools/sponsor-match/titles"), now, "weekly", 0.8);
  add(cleanUrl("/tools/wage-level"), now, "weekly", 0.85);
  add(cleanUrl("/tools/h1b-transfer"), now, "weekly", 0.85);
  add(cleanUrl("/tools/processing-time"), now, "weekly", 0.85);
  add(cleanUrl("/tools/lottery-results"), now, "weekly", 0.85);
  add(cleanUrl("/tools/day-1-cpt"), now, "weekly", 0.85);
  add(cleanUrl("/tools/i140-approval-rates"), now, "weekly", 0.85);
  add(cleanUrl("/tools/priority-date-tracker"), now, "weekly", 0.85);
  add(cleanUrl("/tools/cap-exempt-employers"), now, "weekly", 0.85);
  add(cleanUrl("/state-of-h1b-2026"), now, "monthly", 0.8);
  const titles = await getTitles();
  for (const t of titles) {
    if (!t.slug || typeof t.slug !== "string") continue;
    const slug = t.slug.trim().toLowerCase();
    if (!slug || !/^[a-z0-9-]+$/.test(slug)) continue;
    if (isJunkTitle(slug)) continue;
    add(cleanUrl(`/tools/sponsor-match/${slug}`), TITLE_DATE, "monthly", 0.7);
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
    add(cleanUrl(`/sponsors/${slug}`), SPONSOR_DATE, "monthly", 0.7);
  }

  return entries;
}
