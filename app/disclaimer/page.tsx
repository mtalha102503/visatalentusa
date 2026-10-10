import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "VisaTalentUSA disclaimer — our data is for information only and is not legal or immigration advice.",
  alternates: { canonical: "https://visatalentusa.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: October 2026</p>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          VisaTalentUSA is an informational reference site. Everything on this
          site is provided for general information only.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Not legal or immigration advice
        </h2>
        <p>
          Nothing on VisaTalentUSA constitutes legal advice, immigration
          advice, or a recommendation about any visa application. Immigration
          law is complex and changes frequently. Always consult a licensed
          immigration attorney for advice about your specific situation.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Data accuracy
        </h2>
        <p>
          Employer statistics on this site are derived from U.S. Department of
          Labor Labor Condition Application (LCA) disclosure data. While we
          work hard to process this data accurately, we cannot guarantee it is
          complete, current, or error-free. Filing counts, wages, and rates
          shown here are based on DOL filings — they are not USCIS petition
          outcomes, and past filings do not guarantee future sponsorship.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          No guarantees
        </h2>
        <p>
          We make no guarantees about H-1B lottery odds, approval likelihood,
          or any employer's future sponsorship behavior. Tools and estimates
          on this site (including the lottery odds calculator) are simplified
          models for illustration, not predictions.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          External links
        </h2>
        <p>
          We link to official sources such as USCIS, DOL, and DHS for your
          convenience. We do not control those sites and are not responsible
          for their content.
        </p>
        <h2 className="pt-2 text-xl font-bold text-slate-900">
          Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, VisaTalentUSA and its parent
          company HireSkys shall not be liable for any decisions you make
          based on information on this site.
        </p>
      </div>
    </div>
  );
}
