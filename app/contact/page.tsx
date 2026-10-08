import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the VisaTalentUSA team — corrections, data questions, and feedback.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact us</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          Questions about the data, a correction for an employer profile, or
          feedback on the site? Reach us at{" "}
          <a
            href="mailto:contact@visatalentusa.com"
            className="font-medium text-blue-700 hover:underline"
          >
            contact@visatalentusa.com
          </a>
          .
        </p>
        <p>
          <strong>Data corrections:</strong> employer names are normalized
          across millions of filings — if you spot a misattribution, tell us
          the employer page URL and the correct name and we&apos;ll fix it in
          the next data refresh.
        </p>
        <p>
          <strong>Legal/immigration advice:</strong> we can&apos;t answer
          questions about individual cases. Please consult a licensed
          immigration attorney.
        </p>
      </div>
    </div>
  );
}
