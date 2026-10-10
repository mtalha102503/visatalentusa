import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs, blogPosts } from "@/lib/blog";

const BASE = "https://visatalentusa.com";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      siteName: "VisaTalentUSA",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Dynamic import of the post content component
  const Content = (await import(`@/lib/blog/posts/${slug}`)).default;
  const url = `${BASE}/blog/${post.slug}`;

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        url,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
          "@type": "Organization",
          name: "VisaTalentUSA",
          url: `${BASE}/`,
        },
        publisher: {
          "@type": "Organization",
          name: "VisaTalentUSA",
          url: `${BASE}/`,
        },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: `${BASE}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700 underline underline-offset-2">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-700 underline underline-offset-2">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">{post.title}</span>
      </nav>

      {/* Article header */}
      <header className="mt-6">
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
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <span>
            Published{" "}
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </header>

      {/* Article body */}
      <article className="prose-h2 mt-8 space-y-5 text-slate-700 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:pt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_p.lead]:text-lg [&_p.lead]:text-slate-600 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:border [&_th]:border-slate-200 [&_th]:bg-slate-50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border [&_td]:border-slate-200 [&_td]:px-3 [&_td]:py-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <Content />
      </article>

      {/* Disclaimer */}
      <p className="mt-10 rounded-lg bg-slate-50 p-4 text-xs text-slate-500">
        <strong>Disclaimer:</strong> This guide is for informational purposes
        only and is not legal advice. Immigration rules change frequently —
        consult a qualified immigration attorney for advice about your specific
        situation. VisaTalentUSA is a <a href="https://hireskys.com" className="text-blue-700 underline underline-offset-2">HireSkys</a> company.
      </p>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold text-slate-900">More guides</h2>
          <div className="mt-4 space-y-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}/`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/30"
              >
                <p className="font-semibold text-slate-900 hover:text-blue-700">
                  {r.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
