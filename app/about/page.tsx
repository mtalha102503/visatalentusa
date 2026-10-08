import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About VisaTalentUSA — the H-1B sponsor intelligence database built from official U.S. Department of Labor disclosure data.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">About VisaTalentUSA</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
        <p>
          VisaTalentUSA answers one question for skilled workers around the
          world: <strong>which U.S. companies actually sponsor H-1B visas?</strong>
        </p>
        <p>
          Every year, U.S. employers file hundreds of thousands of Labor
          Condition Applications (LCAs) with the Department of Labor — the
          mandatory first step before any H-1B petition. This filing data is
          public, but it ships as massive spreadsheets that are nearly
          impossible to explore. We clean, normalize, and analyze every
          quarterly disclosure file so you can search any employer and see
          their filings, approval rates, offered salaries, top roles, and
          worksite states.
        </p>
        <p>
          We go further than a salary table. Because the 2026 H-1B lottery is
          wage-weighted — higher prevailing-wage levels earn up to four
          lottery entries — we compute each employer&apos;s wage-level mix and
          translate it into plain-English lottery positioning.
        </p>
        <h2 className="pt-4 text-xl font-bold text-slate-900">
          What we are not
        </h2>
        <p>
          We are an independent research project. We are not affiliated with
          the U.S. Department of Labor, USCIS, or any employer listed here. We
          are not a law firm and nothing on this site is legal advice. Filing
          data shows that a company sponsors H-1B workers in general — it does
          not guarantee sponsorship for any individual, role, or year.
        </p>
        <h2 className="pt-4 text-xl font-bold text-slate-900">Data & updates</h2>
        <p>
          Our database currently covers FY2024–FY2026 LCA disclosure data and
          is refreshed when the Department of Labor publishes new quarterly
          files. Where employer names vary across filings, we normalize them
          to a single profile; minor attribution quirks are possible in a
          dataset of this size.
        </p>
      </div>
    </div>
  );
}
