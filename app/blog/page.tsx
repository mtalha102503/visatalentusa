import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "H-1B Visa Guides & Analysis",
  description:
    "In-depth guides on the H-1B lottery, salaries, sponsorship, and visa strategy — backed by real U.S. Department of Labor filing data.",
  alternates: { canonical: "https://visatalentusa.com/blog" },
  openGraph: {
    title: "H-1B Visa Guides & Analysis | VisaTalentUSA",
    description:
      "In-depth guides on the H-1B lottery, salaries, sponsorship, and visa strategy — backed by real filing data.",
    url: "https://visatalentusa.com/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Visa Guides &amp; Analysis
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Long-form guides on the lottery, salaries, sponsorship strategy, and
        more — every claim grounded in real Department of Labor filing data.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-900">
              <Link
                href={`/blog/${post.slug}/`}
                className="hover:text-blue-700 underline underline-offset-2"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm text-slate-600">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>
                {new Date(post.datePublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <Link
              href={`/blog/${post.slug}/`}
              className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 underline underline-offset-2"
            >
              Read the guide →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
