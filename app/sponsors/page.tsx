import type { Metadata } from "next";
import Link from "next/link";
import { getSearchIndex } from "@/lib/data";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = {
  title: "All 1,000 Top H-1B Sponsors (2026)",
  description:
    "Browse all 1,000 top H-1B visa sponsors ranked by filings. Search, sort by approval rate or salary, and click any employer for full sponsorship data.",
  alternates: { canonical: "https://visatalentusa.com/sponsors" },
  openGraph: {
    title: "All 1,000 Top H-1B Sponsors (2026) | VisaTalentUSA",
    description:
      "Browse all 1,000 top H-1B visa sponsors. Search, sort by approval rate or salary.",
    url: "https://visatalentusa.com/sponsors",
    type: "website",
  },
};

export default async function SponsorsPage() {
  const sponsors = await getSearchIndex();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All 1,000 Top H-1B Sponsors (2026)",
    description:
      "Complete ranked list of the top 1,000 H-1B visa sponsors by FY2026 filings.",
    url: "https://visatalentusa.com/sponsors",
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">All Sponsors</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        All 1,000 Top H-1B Sponsors — FY2026
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Every employer ranked by certified H-1B filings. Use the filter to find
        a company, or tap a column header to sort by filings, approval rate, or
        salary.
      </p>

      <div className="mt-8">
        <SponsorsClient sponsors={sponsors} />
      </div>

      <p className="mt-8 text-xs text-slate-500">
        Data: U.S. Department of Labor LCA disclosure files, FY2026. Approval
        rates are LCA certification rates, not USCIS petition outcomes.
      </p>
    </div>
  );
}
