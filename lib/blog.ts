export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  tags: string[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "h1b-lottery-2028",
    title: "H-1B Lottery 2028: Wage-Weighted Selection Odds, Dates & Strategy",
    excerpt:
      "The H-1B lottery is no longer random. Since 2026, USCIS weights selection by wage level — Level IV filings get 4 entries, Level I gets just 1. Here's how the new system works, what your real odds are, and how to maximize them.",
    datePublished: "2026-10-10T00:00:00+00:00",
    dateModified: "2026-10-10T00:00:00+00:00",
    readingMinutes: 12,
    tags: ["H-1B Lottery", "Guides"],
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
