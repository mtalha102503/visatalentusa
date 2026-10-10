import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VisaTalentUSA terms of service — the rules for using this site.",
  alternates: { canonical: "https://visatalentusa.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 2026</p>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          By using VisaTalentUSA ("the site"), you agree to these terms. If
          you do not agree, please do not use the site.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          What this site is
        </h2>
        <p>
          VisaTalentUSA publishes H-1B sponsor statistics derived from public
          U.S. Department of Labor disclosure data, plus informational guides
          and tools. The site is operated by HireSkys.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Acceptable use
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Scrape the site aggressively or circumvent access controls.</li>
          <li>Republish our content as your own without attribution.</li>
          <li>Use the site to mislead others about immigration outcomes.</li>
          <li>Attempt to disrupt the site or its infrastructure.</li>
        </ul>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Intellectual property
        </h2>
        <p>
          Our original text, design, and tools are our property. The
          underlying DOL disclosure data is public U.S. government data. You
          may quote brief excerpts with attribution and a link back to the
          source page.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          No warranties
        </h2>
        <p>
          The site is provided "as is" without warranties of any kind. We do
          not warrant that the site will be uninterrupted, error-free, or that
          the data is complete or current. See our{" "}
          <a href="/disclaimer" className="text-blue-600 hover:underline">
            Disclaimer
          </a>{" "}
          for more on data limitations.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, VisaTalentUSA and HireSkys
          shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of the site.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Changes
        </h2>
        <p>
          We may update these terms from time to time. Continued use of the
          site after changes means you accept the updated terms.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">Contact</h2>
        <p>
          Questions about these terms? Reach us via our{" "}
          <a href="/contact" className="text-blue-600 hover:underline">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
