export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  tags: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "h1b-lottery-2028",
    title: "H-1B Lottery 2028: Odds, Registration Dates & Wage-Weighted Selection Guide",
    excerpt:
      "Complete H-1B lottery 2028 guide: wage-weighted selection odds by level (15% to 61%), expected registration dates, fees, and proven strategies to maximize your chances — backed by 2M+ real DOL filing records.",
    datePublished: "2026-10-10T00:00:00+00:00",
    dateModified: "2026-10-10T00:00:00+00:00",
    readingMinutes: 18,
    tags: ["H-1B Lottery", "Guides", "H-1B Odds"],
    faqs: [
      {
        question: "When is the H-1B lottery 2028 registration?",
        answer: "USCIS has not announced FY2028 dates yet. Based on the FY2027 pattern, expect registration in early March 2027, with selection notices by late March 2027. USCIS typically announces dates in January or February.",
      },
      {
        question: "What are my H-1B lottery 2028 chances at Level 2 wage?",
        answer: "DHS projects roughly 31% selection for Level II wage registrations — about double the Level I rate. Your actual odds depend on the overall wage mix of the registration pool.",
      },
      {
        question: "Is the H-1B still a lottery in 2028?",
        answer: "Yes, but a weighted lottery. Selection remains random within the entry pool — a Level I registration with 1 entry can absolutely be selected. Higher wage levels simply hold more entries (up to 4x), which shifts the probabilities without eliminating chance.",
      },
      {
        question: "Can two employers register me for the H-1B lottery 2028?",
        answer: "Yes — multiple legitimate employers may each register you. But the anti-gaming rule assigns the lowest wage level across all your registrations to every one of them, so a weak second registration can drag down a strong first one.",
      },
      {
        question: "Does a higher salary guarantee H-1B selection?",
        answer: "No. Even at Level IV, DHS projects ~61% selection — meaning nearly 4 in 10 Level IV registrations are still not selected. Higher wages dramatically improve odds; they guarantee nothing.",
      },
      {
        question: "How do I find my OEWS wage level?",
        answer: "Ask your employer or immigration attorney for your SOC (occupation) code and worksite area. Then check the Department of Labor's OEWS wage data for that occupation-area pair — your offered wage determines which of the four levels you clear.",
      },
      {
        question: "Will there be a second H-1B lottery round for FY2028?",
        answer: "Possibly, if the first selection doesn't fill the 85,000 cap. USCIS did not need a second round for FY2027 (~35.3% selected). Watch for announcements in late spring 2027.",
      },
      {
        question: "What is the H-1B lottery 2028 registration fee?",
        answer: "$215 per beneficiary, paid by the employer at registration. This is separate from petition filing fees ($460–$780 base, plus training and fraud fees) due only if selected.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
