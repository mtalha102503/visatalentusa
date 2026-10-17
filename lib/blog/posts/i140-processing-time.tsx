import Link from "next/link";

export default function I140ProcessingTimeContent() {
  return (
    <>
      <p className="lead">
        <strong>I-140 processing time</strong> is the question every
        employment-based green card applicant asks after PERM approval — and
        the answer in 2026 is better than it has been in years. USCIS decided
        half of all regular I-140 petitions in just <strong>3.7 months</strong>{" "}
        in FY 2026, the fastest median since 2021. But your timeline depends
        heavily on your EB category, whether you pay for premium processing,
        and which service center handles your case. This complete guide breaks
        down current I-140 processing times by category with real USCIS data,
        explains premium processing, and shows exactly where I-140 fits in
        your green card journey.
      </p>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/i140-processing-timeline.svg"
          alt="I-140 processing time 2026: regular vs premium processing timelines by EB category with USCIS median data"
          className="h-auto w-full"
          width={1200}
          height={630}
        />
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">I-140 Processing Time: Key Facts (October 2026)</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li><strong>National median (regular):</strong> 3.7 months in FY 2026 — fastest since 2021, down from 7.9 months in FY 2025</li>
          <li><strong>Premium processing:</strong> $2,965 fee; 15 business-day guarantee for most categories, 45 business days for EB-1C and EB-2 NIW</li>
          <li><strong>Base filing fee:</strong> $715 for Form I-140 (plus applicable Asylum Program fee)</li>
          <li><strong>By category range:</strong> 4.5–22.5 months standard across EB categories; EB-2 NIW up to 20 months at some centers</li>
          <li><strong>What comes before:</strong> PERM labor certification (typically 18–30 months) for EB-2/EB-3 — see our <Link href="/blog/perm-processing-time" className="underline">PERM processing time guide</Link></li>
          <li><strong>Official source:</strong> USCIS processing times page and quarterly petition data, updated regularly</li>
        </ul>
      </div>

      <h2>What Is Form I-140 and Where Does It Fit?</h2>
      <p>
        Form I-140, Immigrant Petition for Alien Workers, is the USCIS petition
        your employer files (or you file yourself, for EB-1A and EB-2 NIW) to
        classify you under an employment-based green card category. It is{" "}
        <strong>step two</strong> of the standard employment-based green card
        pipeline:
      </p>
      <ol className="list-decimal space-y-2 pl-6">
        <li><strong>PERM labor certification</strong> (EB-2/EB-3 only) — DOL certifies no qualified U.S. workers available. Typically 18–30 months.</li>
        <li><strong>Form I-140</strong> — USCIS adjudicates the immigrant petition. This guide.</li>
        <li><strong>Priority date waits</strong> — applicants from India and China often wait years for visa availability per the monthly Visa Bulletin.</li>
        <li><strong>Form I-485 or consular processing</strong> — the final green card application once the priority date is current.</li>
      </ol>
      <p>
        I-140 approval <strong>locks in your priority date</strong> — the single
        most important date in your green card journey. That is why processing
        speed here matters so much.
      </p>

      <h2>Current I-140 Processing Times by Category (2026)</h2>
      <p>
        USCIS publishes processing time ranges by form, category, and service
        center. Based on current USCIS data, here is what to expect:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left">EB Category</th>
              <th className="border border-slate-200 p-3 text-left">Standard Processing</th>
              <th className="border border-slate-200 p-3 text-left">Premium Available?</th>
              <th className="border border-slate-200 p-3 text-left">Premium Guarantee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium">EB-1A (Extraordinary Ability)</td>
              <td className="border border-slate-200 p-3">4.5 – 22.5 months</td>
              <td className="border border-slate-200 p-3">Yes</td>
              <td className="border border-slate-200 p-3">15 business days</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium">EB-1B (Outstanding Researcher)</td>
              <td className="border border-slate-200 p-3">4.5 – 22.5 months</td>
              <td className="border border-slate-200 p-3">Yes</td>
              <td className="border border-slate-200 p-3">15 business days</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium">EB-1C (Multinational Executive)</td>
              <td className="border border-slate-200 p-3">4.5 – 22.5 months</td>
              <td className="border border-slate-200 p-3">Yes</td>
              <td className="border border-slate-200 p-3">45 business days</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium">EB-2 NIW (National Interest Waiver)</td>
              <td className="border border-slate-200 p-3">Up to 20 months</td>
              <td className="border border-slate-200 p-3">Yes</td>
              <td className="border border-slate-200 p-3">45 business days</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium">EB-2 (PERM-based) / EB-3</td>
              <td className="border border-slate-200 p-3">Up to 22.5 months</td>
              <td className="border border-slate-200 p-3">Available for some</td>
              <td className="border border-slate-200 p-3">Varies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-slate-500">
        Source: USCIS processing times data, 2026. Ranges vary by service center;
        check the USCIS processing times tool for your specific category and center.
      </p>

      <h2>I-140 Processing Is Faster Than Any Year Since 2021</h2>
      <p>
        Here is the trend that matters most. USCIS historical data shows regular
        I-140 processing hit its fastest median in years:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left">Fiscal Year</th>
              <th className="border border-slate-200 p-3 text-left">Regular I-140 Median</th>
              <th className="border border-slate-200 p-3 text-left">Premium I-140 Median</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-slate-200 p-3">2021</td><td className="border border-slate-200 p-3">8.2 months</td><td className="border border-slate-200 p-3">0.4 months</td></tr>
            <tr className="bg-slate-50"><td className="border border-slate-200 p-3">2022</td><td className="border border-slate-200 p-3">9.3 months</td><td className="border border-slate-200 p-3">0.3 months</td></tr>
            <tr><td className="border border-slate-200 p-3">2023</td><td className="border border-slate-200 p-3">4.3 months</td><td className="border border-slate-200 p-3">0.3 months</td></tr>
            <tr className="bg-slate-50"><td className="border border-slate-200 p-3">2024</td><td className="border border-slate-200 p-3">7.1 months</td><td className="border border-slate-200 p-3">0.3 months</td></tr>
            <tr><td className="border border-slate-200 p-3">2025</td><td className="border border-slate-200 p-3">7.9 months</td><td className="border border-slate-200 p-3">0.7 months</td></tr>
            <tr className="bg-green-50"><td className="border border-slate-200 p-3 font-semibold">2026 (through June 30)</td><td className="border border-slate-200 p-3 font-semibold text-green-700">3.7 months ✅</td><td className="border border-slate-200 p-3">1.2 months</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Regular processing <strong>more than halved</strong> from FY 2025 (7.9
        months) to FY 2026 (3.7 months). Interestingly, premium processing medians
        have crept up — the premium clock's fine print (pauses for RFEs, clock
        restarts) means real-world premium timelines often exceed the nominal
        guarantee.
      </p>

      <h2>Premium Processing: Is the $2,965 Worth It?</h2>
      <p>
        Premium processing (Form I-907, <strong>$2,965</strong> as of 2026)
        guarantees USCIS will take adjudicative action — approval, denial, RFE,
        or notice of intent to deny — within <strong>15 business days</strong>{" "}
        for most I-140 categories, or <strong>45 business days</strong> for
        EB-1C and EB-2 NIW.
      </p>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">Important: premium processing does NOT increase approval odds</p>
        <p className="mt-1 text-sm text-amber-800">
          USCIS applies the exact same legal standards whether or not you pay
          for premium. It only speeds up the decision timeline. A weak petition
          gets denied faster — not approved.
        </p>
      </div>
      <p className="mt-4"><strong>When premium processing makes sense:</strong></p>
      <ul className="list-disc space-y-1 pl-6">
        <li>You need the I-140 approved quickly to preserve H-1B extensions beyond year 6</li>
        <li>Your priority date is near-current and every month counts</li>
        <li>Job portability (AC21) planning requires an approved I-140</li>
        <li>Employer is willing to pay (many do for key hires)</li>
      </ul>
      <p className="mt-2"><strong>When to skip it:</strong></p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Your priority date is years away anyway (common for India/China EB-2/EB-3)</li>
        <li>The petition has any weakness — an RFE under premium clock creates time pressure</li>
        <li>Regular processing is already fast (3.7-month median in FY 2026)</li>
      </ul>

      <h2>What Slows Down I-140 Processing?</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li><strong>Requests for Evidence (RFEs):</strong> The #1 delay. Ability-to-pay issues are the most common RFE trigger — USCIS scrutinizes whether the employer can pay the offered wage from the priority date onward.</li>
        <li><strong>Incomplete petitions:</strong> Missing credential evaluations, experience letters, or financial documents.</li>
        <li><strong>Service center workload:</strong> Texas and Nebraska centers historically carry heavier I-140 loads than others.</li>
        <li><strong>Category complexity:</strong> EB-2 NIW requires adjudicators to evaluate the three-prong Dhanasar framework — inherently more subjective and variable than EB-1 credential review.</li>
        <li><strong>PERM issues carrying over:</strong> If the underlying PERM had problems, USCIS may re-examine them at the I-140 stage.</li>
      </ul>

      <h2>How to Check Your I-140 Status</h2>
      <ol className="list-decimal space-y-2 pl-6">
        <li><strong>USCIS Case Status Online:</strong> Enter your receipt number (three letters + ten digits, e.g., LIN2490123456) at{" "}
          <a href="https://egov.uscis.gov/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">egov.uscis.gov</a>.</li>
        <li><strong>USCIS Processing Times tool:</strong> Select Form I-140, your category, and service center for the current estimated range at{" "}
          <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">egov.uscis.gov/processing-times</a>.</li>
        <li><strong>Ask your attorney/employer:</strong> They receive all notices. Beneficiaries often cannot see the full picture alone.</li>
        <li><strong>e-Request / Service Request:</strong> If your case is outside normal processing times, file an online service request.</li>
      </ol>

      <h2>What Happens After I-140 Approval?</h2>
      <p>
        I-140 approval locks in your <strong>priority date</strong>. Then:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Watch the monthly <strong>Visa Bulletin</strong> (Department of State) for your priority date to become current</li>
        <li>Once current: file <strong>Form I-485</strong> (adjustment of status, if in the U.S.) or go through <strong>consular processing</strong> abroad</li>
        <li>After 180 days with a pending I-485, <strong>AC21 portability</strong> lets you change jobs in a same-or-similar role</li>
      </ul>
      <p>
        For applicants from India and China in EB-2/EB-3, the Visa Bulletin wait
        — not I-140 processing — is the real bottleneck, often stretching 7–14+
        years.
      </p>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Coming from PERM?</p>
        <p className="mt-1 text-sm text-blue-800">
          If you are still in the PERM stage, read our{" "}
          <Link href="/blog/perm-processing-time" className="underline font-medium">
            complete PERM processing time guide
          </Link>{" "}
          with real DOL data — it is the step right before I-140 for EB-2 and EB-3 cases.
        </p>
      </div>

      <h2>Official Sources</h2>
      <ul className="list-disc space-y-1 pl-6 text-sm">
        <li><a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">USCIS Processing Times</a> — official current estimates by form, category, and service center</li>
        <li><a href="https://www.uscis.gov/i-140" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">USCIS Form I-140</a> — official form page, instructions, and filing guidance</li>
        <li><a href="https://www.uscis.gov/i-907" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">USCIS Form I-907</a> — official premium processing request, fees, and eligible categories</li>
        <li><a href="https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">USCIS Immigration Data &amp; Statistics</a> — quarterly petition data by form type</li>
        <li><a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Visa Bulletin (Department of State)</a> — monthly priority-date movement</li>
      </ul>

      <p className="text-xs text-slate-400 mt-8">
        Processing times are medians and ranges from USCIS-published data
        (FY 2021–2026) — individual cases vary. This guide is for
        informational purposes only and does not constitute legal advice. Consult
        a licensed immigration attorney for your specific situation.
      </p>
    </>
  );
}
