import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VisaTalentUSA privacy policy — what data we collect and how we use it.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 2026</p>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          VisaTalentUSA is a public data reference site. We collect as little
          as possible.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Information we collect
        </h2>
        <p>
          <strong>Usage data:</strong> we use privacy-friendly analytics to
          understand aggregate traffic (pages viewed, referrers, device
          types). This data is aggregated and never tied to an individual.
        </p>
        <p>
          <strong>Contact emails:</strong> if you email us, we keep your
          message only as long as needed to respond.
        </p>
        <p>
          <strong>Accounts:</strong> we offer no accounts, logins, or
          newsletters, so we store no user profiles.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">Cookies</h2>
        <p>
          We use a minimal set of cookies for site functionality and
          aggregated analytics. We do not use cross-site tracking cookies.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">Advertising</h2>
        <p>
          We may display ads served by third-party networks. Those networks
          may use cookies to serve relevant ads; their practices are governed
          by their own privacy policies. You can opt out of personalized
          advertising in your browser settings.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Data source
        </h2>
        <p>
          Employer statistics on this site are derived from the U.S.
          Department of Labor&apos;s public LCA disclosure files. No personal
          data of visa beneficiaries is published on this site.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">Contact</h2>
        <p>
          Privacy questions:{" "}
          <a
            href="mailto:contact@visatalentusa.com"
            className="font-medium text-blue-700 underline underline-offset-2"
          >
            contact@visatalentusa.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
