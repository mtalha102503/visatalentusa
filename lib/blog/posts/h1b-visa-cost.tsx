import Link from "next/link";

export default function H1BVisaCostContent() {
  return (
    <>
      <p className="lead">
        How much does an H-1B visa cost? For a regular employer, a new
        cap-subject H-1B petition costs <strong>$3,545 online</strong> in
        USCIS fees — $6,510 with premium processing. A small
        for-profit employer pays $2,225 (a small nonprofit that owes ACWIA pays
        $1,925 for a new cap-subject petition). A university or research nonprofit filing a
        cap-exempt petition pays $960. Those are the real 2026 figures
        from USCIS Form G-1055, edition 10/26/26 — not estimates. The
        $3,545 is the employer&apos;s budget for this example. A worker
        applying at a U.S. consulate generally pays a $205 visa
        application fee. This
        guide breaks down every fee, shows the arithmetic for each
        employer type and each petition type — new, transfer, extension,
        amendment — explains who pays what by law, and covers
        dependents, payment rules, and the 2026 fee changes that are
        actually in effect, blocked, or only proposed.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the H-1B visa cost at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Regular employer, new cap petition (online):</strong>{" "}
            $3,545 — $6,510 with premium processing. Paper filing:
            $3,595.
          </li>
          <li>
            <strong>Small for-profit employer (25 or fewer full-time
            employees), new cap petition:</strong> $2,225 online
            (small nonprofit that owes ACWIA: $1,925).
          </li>
          <li>
            <strong>Lowest initial-petition total:</strong> a university or
            ACWIA-exempt nonprofit filing a cap-exempt petition pays
            $960.
          </li>
          <li>
            <strong>Most expensive realistic path:</strong> a covered
            employer (50+ US employees, over half in H-1B or L-1
            status) pays $7,545 for a new cap petition — $10,510 with
            premium processing.
          </li>
          <li>
            <strong>Who pays the most:</strong> the employer. The
            ACWIA training fee can never be charged to the worker in
            any form, and petition costs cannot be shifted to the
            worker if they would push pay below the required wage.
          </li>
          <li>
            <strong>What is NOT in these totals:</strong> attorney
            fees (separate, and they vary by firm); the $100,000
            proclamation payment, which is blocked by court orders and
            is not being collected; and the proposed $103,265 fee,
            which is not in force.
          </li>
          <li>
            <strong>Figures source:</strong> USCIS Form G-1055, Fee
            Schedule, edition 10/26/26 (page last updated October 28,
            2026). All totals below are computed from those figures,
            with the arithmetic shown.
          </li>
        </ul>
      </div>

      <h2>How much does an H-1B visa cost? The short answer</h2>
      <p>
        There is no single H-1B visa cost, because the total depends on
        three things: the size and type of the employer, the kind of
        petition, and whether premium processing is used. A regular
        employer filing a brand-new cap-subject petition pays $3,545
        online. The same petition from a small for-profit employer
        costs $2,225 (a small nonprofit that owes ACWIA pays $1,925 for a new cap-subject petition).
        A transfer to a new employer costs $3,330 for a regular
        employer. A first extension costs $2,830. A second or later
        extension costs $1,330. And a bare amendment — one that does
        not extend stay — costs $1,330.
      </p>
      <p>
        Premium processing adds a flat $2,965 to any of those totals.
        It buys speed, not a better outcome: USCIS guarantees an
        action within 15 business days, not an approval. The
        $100,000 payment is not in any of these totals — it is
        blocked by court orders and not currently collected — and
        neither is the proposed $103,265 fee, which has no final rule
        and no effective date.
      </p>
      <p>
        The table below is the whole guide in miniature. Every figure
        in it is built up, fee by fee, in the sections that follow —
        so if you only need one number, take it here, and if you need
        to defend it in a budget meeting, the arithmetic is two
        sections down.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Summary totals by petition type and employer type, online filing</caption>
          <thead>
            <tr>
              <th scope="col">Petition</th>
              <th scope="col">Regular employer</th>
              <th scope="col">Small for-profit employer (≤25 FTE)</th>
              <th scope="col">ACWIA-exempt nonprofit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New cap petition (online)</td>
              <td>$3,545</td>
              <td>$2,225</td>
              <td>$960 cap-exempt (new petition); $1,175 cap-subject</td>
            </tr>
            <tr>
              <td>Transfer / change of employer (online)</td>
              <td>$3,330</td>
              <td>$2,010</td>
              <td>$960</td>
            </tr>
            <tr>
              <td>First extension (online)</td>
              <td>$2,830</td>
              <td>$1,510</td>
              <td>$460</td>
            </tr>
            <tr>
              <td>Second or later extension (online)</td>
              <td>$1,330</td>
              <td>$760</td>
              <td>$460</td>
            </tr>
            <tr>
              <td>Bare amendment, no extension (online)</td>
              <td>$1,330</td>
              <td>$760</td>
              <td>$460</td>
            </tr>
            <tr>
              <td>Add premium processing (Form I-907)</td>
              <td>+$2,965</td>
              <td>+$2,965</td>
              <td>+$2,965</td>
            </tr>
            <tr>
              <td>Add if a covered employer (50/50 test)</td>
              <td>+$4,000</td>
              <td>+$4,000</td>
              <td>Apply the separate 50/50 workforce test</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two warnings before you use these numbers. First, standard
        employers pay $50 more to file Form I-129 on paper. For small
        employers and nonprofits, the base fee is $460 either way. Second, several older guides
        still show the pre-March 2026 premium fee of $2,805 or omit
        the Asylum Program Fee entirely. Both are wrong against the
        current G-1055, edition 10/26/26.
      </p>

      <h2>Every H-1B fee, in one table</h2>
      <p>
        The table below lists eight fees and explains when each one
        applies. None of them is optional except premium processing.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Every H-1B fee, its amount, and what it applies to</caption>
          <thead>
            <tr>
              <th scope="col">Fee</th>
              <th scope="col">Amount</th>
              <th scope="col">Applies to</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>H-1B electronic registration</td>
              <td>$215 per beneficiary</td>
              <td>
                Cap-subject petitions only, paid in the March
                registration window. Non-refundable even if the
                beneficiary is not selected. Not charged on transfers,
                extensions, or amendments.
              </td>
            </tr>
            <tr>
              <td>Form I-129 base fee</td>
              <td>$780 paper / $730 online; $460 for small employers (≤25 FTE) and nonprofits</td>
              <td>
                Every H-1B petition — new, transfer, extension,
                amendment. A small employer is one with 25 or fewer
                full-time-equivalent employees.
              </td>
            </tr>
            <tr>
              <td>Asylum Program Fee</td>
              <td>$600 regular / $300 small employer / $0 nonprofit</td>
              <td>
                Every I-129 petition, all petition types. There is no
                first-extension limit on this fee, unlike ACWIA.
              </td>
            </tr>
            <tr>
              <td>ACWIA training fee</td>
              <td>$1,500 (26+ FTE) / $750 (≤25 FTE) / $0 if exempt</td>
              <td>
                Initial petitions, change-of-employer petitions, and
                the first extension for a given worker with a given
                employer. Not second or later extensions, and not
                bare amendments. Exempt: institutions of higher
                education, their affiliated nonprofits, nonprofit and
                government research organizations, primary and
                secondary schools, and nonprofits running
                curriculum-related clinical training programs.
              </td>
            </tr>
            <tr>
              <td>Fraud Prevention and Detection Fee</td>
              <td>$500</td>
              <td>
                Initial petitions and change-of-employer petitions
                only. Not same-employer extensions or amendments.
                Principal worker only, not dependents.
              </td>
            </tr>
            <tr>
              <td>Public Law 114-113 (9-11) fee</td>
              <td>$4,000 (H-1B)</td>
              <td>
                Covered employers only: 50 or more employees in the
                US and more than 50% of them in H-1B or L-1 status.
                Since September 9, 2026, it also applies to
                extension-of-stay petitions. Bare amendments remain
                exempt. Sunset: petitions filed on or before
                September 30, 2027, unless Congress extends it. The
                test counts employees, not full-time equivalents, so
                an employer with 25 or fewer FTE can still be a
                covered employer.
              </td>
            </tr>
            <tr>
              <td>Premium processing (Form I-907)</td>
              <td>$2,965</td>
              <td>
                Optional, in addition to all other fees. In effect
                since March 1, 2026 (up from $2,805). 15 business
                days to a USCIS action — approval, denial, RFE, or
                NOID — not a guaranteed approval.
              </td>
            </tr>
            <tr>
              <td>Consular visa application (MRV) fee</td>
              <td>$205 per person</td>
              <td>
                Paid to the Department of State at consular
                processing, for the principal and for each H-4
                dependent. Separate from USCIS fees, and normally
                paid by the applicant, not the employer.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        One figure deserves a note: some sites list the
        small-employer I-129 base fee online as $410 — the $50 online
        discount applied to the $460 rate. Form G-1055, edition
        10/26/26, lists it as <strong>$460 online</strong>, the same
        as paper. The $410 figure is refuted by the primary source,
        and every total in this guide uses $460.
      </p>
      <p>
        The other common error is the missing Asylum Program Fee.
        Several older guides quote a regular-employer total of $2,460
        — the pre-2024 figure, from before the fee existed. The 2024
        USCIS fee rule (89 FR 6194, effective April 1, 2024) added
        the $600/$300/$0 Asylum Program Fee to every I-129, raised
        the standard base fee from $460 to $780, and raised the
        registration fee from $10 to $215. Any total that omits the
        asylum fee is out of date.
      </p>

      <h2>Total H-1B cost by employer type</h2>
      <p>
        The fee table above is the parts list. This section is the
        assembled price — the full cost of a new cap-subject petition
        for each kind of employer, with every component shown so you
        can check the arithmetic yourself. All totals are online
        filing. Standard employers pay $50 more to file Form I-129 on
        paper; for small employers and nonprofits, the base fee is
        $460 either way.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">New cap petition totals by employer type, online filing</caption>
          <thead>
            <tr>
              <th scope="col">Employer — new cap petition (online)</th>
              <th scope="col">Arithmetic</th>
              <th scope="col">Total</th>
              <th scope="col">With premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular (26+ FTE)</td>
              <td>$215 + $730 + $600 + $1,500 + $500</td>
              <td>$3,545</td>
              <td>$6,510</td>
            </tr>
            <tr>
              <td>Regular, covered employer (50/50 test)</td>
              <td>$3,545 + $4,000</td>
              <td>$7,545</td>
              <td>$10,510</td>
            </tr>
            <tr>
              <td>Small for-profit (≤25 FTE)</td>
              <td>$215 + $460 + $300 + $750 + $500</td>
              <td>$2,225</td>
              <td>$5,190</td>
            </tr>
            <tr>
              <td>Small for-profit, covered employer</td>
              <td>$2,225 + $4,000</td>
              <td>$6,225</td>
              <td>$9,190</td>
            </tr>
            <tr>
              <td>Small nonprofit (ACWIA due), cap-subject</td>
              <td>$215 + $460 + $0 + $750 + $500</td>
              <td>$1,925</td>
              <td>$4,890</td>
            </tr>
            <tr>
              <td>ACWIA-exempt nonprofit, cap-subject</td>
              <td>$215 + $460 + $0 + $0 + $500</td>
              <td>$1,175</td>
              <td>$4,140</td>
            </tr>
            <tr>
              <td>ACWIA-exempt nonprofit, cap-exempt</td>
              <td>$460 + $0 + $0 + $500</td>
              <td>$960</td>
              <td>$3,925</td>
            </tr>
            <tr>
              <td>Nonprofit, 26+ FTE, ACWIA due, cap-subject</td>
              <td>$215 + $460 + $0 + $1,500 + $500</td>
              <td>$2,675</td>
              <td>$5,640</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Read the arithmetic columns left to right: registration,
        I-129 base fee, Asylum Program Fee, ACWIA fee, Fraud
        Prevention fee. The $4,000 covered-employer fee is shown as
        a separate add-on because most employers are not covered —
        folding it into the headline total would overstate the cost
        for the large majority of sponsors.
      </p>

      <div>
        <svg
          role="img"
          aria-labelledby="cost-breakdown-title"
          viewBox="0 0 720 240"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="cost-breakdown-title">
            Where the $3,545 goes: registration $215, I-129 base fee
            $730, Asylum Program Fee $600, ACWIA training fee $1,500,
            Fraud Prevention fee $500 — regular employer, new
            cap-subject petition, online filing
          </title>
          <text x="20" y="24" fontSize="15" fontWeight="700" fill="#0f172a">
            Where the $3,545 goes — regular employer, new cap petition (online)
          </text>
          <rect x="20" y="40" width="41" height="48" fill="#0f172a" />
          <rect x="61" y="40" width="140" height="48" fill="#1d4ed8" />
          <rect x="201" y="40" width="115" height="48" fill="#2f6df6" />
          <rect x="316" y="40" width="288" height="48" fill="#f59e0b" />
          <rect x="604" y="40" width="96" height="48" fill="#64748b" />
          <text x="40.5" y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">
            $215
          </text>
          <text x="131" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
            $730
          </text>
          <text x="258" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
            $600
          </text>
          <text x="460" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
            $1,500
          </text>
          <text x="652" y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
            $500
          </text>
          <text x="20" y="112" fontSize="13" fontWeight="700" fill="#0f172a">
            ■ Registration $215 (6%)
          </text>
          <text x="20" y="134" fontSize="13" fontWeight="700" fill="#1d4ed8">
            ■ I-129 base fee $730 (21%)
          </text>
          <text x="20" y="156" fontSize="13" fontWeight="700" fill="#2f6df6">
            ■ Asylum Program Fee $600 (17%)
          </text>
          <text x="20" y="178" fontSize="13" fontWeight="700" fill="#b45309">
            ■ ACWIA training fee $1,500 (42%)
          </text>
          <text x="20" y="200" fontSize="13" fontWeight="700" fill="#64748b">
            ■ Fraud Prevention fee $500 (14%)
          </text>
          <text x="20" y="228" fontSize="12" fill="#64748b">
            The ACWIA training fee is the single largest cost — more than the base filing fee and the asylum fee combined.
          </text>
        </svg>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Figure: the $3,545 cost of a new cap-subject petition for a
        regular employer, split by fee. Source: USCIS Form G-1055,
        edition 10/26/26.
      </p>

      <p>
        <strong>Regular employers</strong> carry the full load: every
        fee at the standard rate. The ACWIA training fee alone is
        $1,500 — 42% of the total. A regular employer that meets the
        50/50 covered-employer test adds $4,000, taking a new cap
        petition to $7,545, or $10,510 with premium processing. That
        is the most expensive realistic first petition in the system.
      </p>
      <p>
        <strong>Small employers</strong> — 25 or fewer full-time
        employees — pay less at every step: a $460 base fee instead of
        $730, a $300 Asylum Program Fee instead of $600, and a $750
        ACWIA fee instead of $1,500, saving $1,320 on a new cap
        petition. Headcount counts affiliates and subsidiaries, so a
        nominally small company inside a large group may not qualify.
      </p>
      <p>
        <strong>Nonprofits split into two very different cases, and
        most guides blur them.</strong> A generic 501(c)(3) charity
        gets the $460 base fee and the $0 Asylum Program Fee — but it
        still owes the ACWIA fee unless it also fits one of the six
        exempt categories, so an ordinary nonprofit with 26 or more
        employees pays $2,675 for a cap-subject new petition (a small
        one pays $1,925). An ACWIA-exempt nonprofit — a
        university, an affiliated nonprofit, a nonprofit or government
        research organization, a primary or secondary school, or a
        nonprofit running curriculum-related clinical training — pays
        $0 ACWIA, and $960 in total if it is also cap-exempt. Check
        the exemption category before budgeting, not the tax status.
      </p>
      <p>
        <strong>Cap-exempt employers</strong> — institutions of
        higher education, their affiliated nonprofits, and nonprofit
        or government research organizations — skip the lottery
        entirely: no $215 registration fee, no March window, filings
        accepted year-round. That is why the lowest initial-petition total shown here
        is a cap-exempt university filing at $960.
      </p>

      <h2>How much does an H-1B transfer cost?</h2>
      <p>
        A transfer — legally a change of employer — is a new petition
        filed by the new employer. There is no lottery and no $215
        registration fee, because the worker has already been counted
        against the cap. But the new employer pays as if it were a
        first petition with that employer: the ACWIA fee applies, and
        the fraud fee applies, because both attach to
        change-of-employer petitions. One condition: this assumes the
        worker was previously counted against the cap. A worker whose
        only H-1B employment has been cap-exempt — for example, at a
        university — may still face the cap when moving to a
        cap-subject employer, if no other exemption applies.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Transfer totals by employer type, online filing</caption>
          <thead>
            <tr>
              <th scope="col">Employer — transfer (online)</th>
              <th scope="col">Arithmetic</th>
              <th scope="col">Total</th>
              <th scope="col">With premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular (26+ FTE)</td>
              <td>$730 + $600 + $1,500 + $500</td>
              <td>$3,330</td>
              <td>$6,295</td>
            </tr>
            <tr>
              <td>Regular, covered employer</td>
              <td>$3,330 + $4,000</td>
              <td>$7,330</td>
              <td>$10,295</td>
            </tr>
            <tr>
              <td>Small for-profit (≤25 FTE)</td>
              <td>$460 + $300 + $750 + $500</td>
              <td>$2,010</td>
              <td>$4,975</td>
            </tr>
            <tr>
              <td>Small nonprofit (ACWIA due)</td>
              <td>$460 + $0 + $750 + $500</td>
              <td>$1,710</td>
              <td>$4,675</td>
            </tr>
            <tr>
              <td>ACWIA-exempt nonprofit</td>
              <td>$460 + $0 + $0 + $500</td>
              <td>$960</td>
              <td>$3,925</td>
            </tr>
            <tr>
              <td>Nonprofit, 26+ FTE, ACWIA due</td>
              <td>$460 + $0 + $1,500 + $500</td>
              <td>$2,460</td>
              <td>$5,425</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The transfer total is $215 lower than the equivalent new cap
        petition — exactly the registration fee that does not apply.
        A regular employer pays $3,330 to hire an H-1B worker away
        from another sponsor, or $6,295 with premium processing.
        Note that the $100,000 proclamation payment does not apply
        to a transfer granted inside the US — and it is blocked in
        any event.
      </p>

      <h2>H-1B extension and amendment costs</h2>
      <p>
        Extensions and amendments are where employers most often
        overpay, because two fees drop off — and one of them drops
        off only after the first extension. The fraud fee never
        applies to a same-employer extension. The ACWIA fee applies
        to the first extension for a given worker with a given
        employer, and then stops: a second or later extension with
        the same employer owes no ACWIA fee. That rule comes from the
        Instructions for Form I-129 (edition 09/09/26), which exempt
        a second or subsequent request for an extension of stay.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Extension totals by employer type, online filing</caption>
          <thead>
            <tr>
              <th scope="col">Extension (online)</th>
              <th scope="col">Arithmetic</th>
              <th scope="col">Total</th>
              <th scope="col">Covered employer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular, first extension</td>
              <td>$730 + $600 + $1,500</td>
              <td>$2,830</td>
              <td>$6,830</td>
            </tr>
            <tr>
              <td>Regular, second or later extension</td>
              <td>$730 + $600</td>
              <td>$1,330</td>
              <td>$5,330</td>
            </tr>
            <tr>
              <td>Small for-profit, first extension</td>
              <td>$460 + $300 + $750</td>
              <td>$1,510</td>
              <td>$5,510</td>
            </tr>
            <tr>
              <td>Small for-profit, second or later extension</td>
              <td>$460 + $300</td>
              <td>$760</td>
              <td>$4,760</td>
            </tr>
            <tr>
              <td>Small nonprofit, first extension</td>
              <td>$460 + $0 + $750</td>
              <td>$1,210</td>
              <td>$5,210</td>
            </tr>
            <tr>
              <td>ACWIA-exempt nonprofit, any extension</td>
              <td>$460 + $0</td>
              <td>$460</td>
              <td>Apply the separate 50/50 workforce test</td>
            </tr>
            <tr>
              <td>Nonprofit, 26+ FTE, ACWIA due, first extension</td>
              <td>$460 + $0 + $1,500</td>
              <td>$1,960</td>
              <td>$5,960</td>
            </tr>
            <tr>
              <td>Nonprofit, 26+ FTE, ACWIA due, second or later extension</td>
              <td>$460 + $0</td>
              <td>$460</td>
              <td>$4,460</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Add $2,965 for premium processing to any row. The
        covered-employer column adds the $4,000 Public Law 114-113
        fee, which has applied to all extension-of-stay petitions —
        including same-employer extensions — since September 9, 2026.
        Before that date it applied only to initial and
        change-of-employer petitions. One more consequence of the
        first-vs-later rule: a regular employer&apos;s second
        extension costs less than half of its first — $1,330 against
        $2,830 — because the $1,500 ACWIA fee is gone.
      </p>
      <p>
        For a standard employer filing online, a bare amendment costs
        $1,330, the same as a second or later extension in this example. A bare amendment — one that changes the job, the
        location, or another material term without requesting an
        extension of stay — costs the base fee plus the Asylum
        Program Fee only. No ACWIA, no fraud fee, and no $4,000 fee
        even at a covered employer.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Bare amendment totals by employer type, online filing</caption>
          <thead>
            <tr>
              <th scope="col">Bare amendment, no extension (online)</th>
              <th scope="col">Arithmetic</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular</td>
              <td>$730 + $600</td>
              <td>$1,330</td>
            </tr>
            <tr>
              <td>Small</td>
              <td>$460 + $300</td>
              <td>$760</td>
            </tr>
            <tr>
              <td>Nonprofit (either kind)</td>
              <td>$460 + $0</td>
              <td>$460</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        An amendment <em>with</em> an extension of stay is priced as
        an extension: the totals in the extension table above, with
        ACWIA due if this is the first extension for this worker with
        this employer, and the $4,000 fee due if the employer is
        covered — because an extension is being requested. Whether a
        change needs an amendment at all depends on the facts; the{" "}
        <Link
          href="/tools/h1b-amendment-checker"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B amendment checker
        </Link>{" "}
        walks through the seven questions that decide it.
      </p>

      <h2>Who pays the H-1B fees — employer or employee?</h2>
      <p>
        This is the section that matters most to workers, and the one
        most guides get wrong. H-1B is an employer petition: the
        employer files it, and the employer pays for it. But the law
        draws three different lines. Some fees can never be charged
        to the worker in any form. Others are the employer&apos;s
        business expenses, which can only be shifted to the worker if
        the worker&apos;s pay stays at or above the required wage.
        And one fee — premium processing — is genuinely flexible,
        within limits.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Who pays each H-1B cost, and the rule behind it</caption>
          <thead>
            <tr>
              <th scope="col">Cost</th>
              <th scope="col">Who pays</th>
              <th scope="col">The rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACWIA training fee ($750 / $1,500)</td>
              <td>Employer — always</td>
              <td>
                The worker can never pay any part of it — not
                directly, not by wage deduction, not by
                reimbursement, not through a third party who is then
                repaid by the worker, and not through a penalty for
                leaving early. Even the worker&apos;s agreement does
                not cure it. INA 214(c)(9); 20 CFR 655.731(c)(10)(ii).
              </td>
            </tr>
            <tr>
              <td>Fraud Prevention fee ($500)</td>
              <td>Employer — always</td>
              <td>
                The worker can never pay any part of it — not
                directly, not by wage deduction, not by
                reimbursement. INA 214(c)(12)(A); DOL Fact Sheet 62H.
                The same never-pay protection as the ACWIA fee.
              </td>
            </tr>
            <tr>
              <td>I-129 base fee, Asylum Program Fee, $4,000 fee, registration fee</td>
              <td>Employer</td>
              <td>
                The employer&apos;s petition and the employer&apos;s
                business expenses. Shifting them is prohibited if it
                would drop pay below the required wage — the higher
                of the actual wage and the prevailing wage on the
                LCA. 20 CFR 655.731(c)(9).
              </td>
            </tr>
            <tr>
              <td>LCA and petition preparation, including petition attorney fees</td>
              <td>Employer</td>
              <td>
                Expressly listed as employer business expenses in
                DOL guidance. Same wage-floor rule: no deduction that
                takes pay below the required wage.
              </td>
            </tr>
            <tr>
              <td>Premium processing ($2,965)</td>
              <td>Either party, within limits</td>
              <td>
                The employer pays if speed is needed for business
                reasons. The worker may pay only if the speedup is
                genuinely for the worker&apos;s personal benefit, with
                voluntary written authorization meeting the DOL test
                in 20 CFR 655.731(c)(9)(iii). An offer letter that
                makes the worker pay does not count as voluntary.
              </td>
            </tr>
            <tr>
              <td>Consular MRV fee ($205), dependents&apos; I-539/I-765 fees, worker&apos;s own separate attorney</td>
              <td>Worker</td>
              <td>
                Personal costs, not petition costs. The worker
                normally pays the visa application fee at the
                consulate and the costs of dependents&apos;
                applications.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The wage-floor rule is what does the real work. Under 20 CFR
        655.731, the employer must pay the required wage — the higher
        of the actual wage paid to similarly employed workers at the
        worksite and the prevailing wage for the occupation and area,
        as attested on the Labor Condition Application. Deductions
        fall into three buckets. Prohibited deductions — the ACWIA fee
        in any part, the $500 fraud fee in any part, and any penalty
        for failing to complete the employment period — are never
        allowed, at any wage level. Business-expense deductions —
        petition attorney fees and filing costs — are allowed only if
        pay after the deduction stays at or above the required wage. Authorized
        deductions — required by law, reasonable and customary, or
        voluntarily authorized in writing by the worker, principally
        for the worker&apos;s benefit — are allowed only if they meet
        all the conditions in 20 CFR 655.731(c)(9)(iii), including
        that they are not a recoupment of a business expense.
      </p>
      <p>
        A third party does not launder a prohibited shift: an employer
        cannot have a staffing firm or agent front a fee and then have
        the worker repay it, if the substance is the worker bearing an
        employer cost. Repayment-on-leaving clauses tied to petition
        costs are the fact pattern in DOL enforcement cases.
      </p>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Penalties for improper fee-shifting
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Back wages:</strong> the amount of the unlawful
            deduction, owed to the worker.
          </li>
          <li>
            <strong>Civil money penalties:</strong> $2,364, $9,624,
            or $67,367 per violation, depending on the type and
            severity — the current tiers under DOL Fact Sheet 62U
            and the 2026 inflation-adjustment rule (91 FR 31358).
            The old $1,000–$35,000 range from the 2008 fact sheet
            is not the current figure and should not be quoted as
            one.
          </li>
          <li>
            <strong>Debarment:</strong> preclusion from the H-1B
            program for at least one year for certain violations,
            and up to three years in the more serious cases.
          </li>
          <li>
            <strong>Enforcement:</strong> DOL Wage and Hour Division
            investigations, including Secretary-certified
            investigations opened without a complaint under the
            Department&apos;s 2026 Project Firewall enforcement
            initiative. Workers can report violations to the Wage
            and Hour Division on DOL Form WH-4.
          </li>
        </ul>
      </div>
      <p>
        If you are a worker and an employer or agent asks you to pay
        the ACWIA fee, the fraud fee, or the petition filing fees —
        or to sign a repayment agreement covering them — that is the
        point to stop and get independent advice. The Instructions
        for Form I-129 say it plainly about ACWIA: the fee may not
        be assessed to the beneficiary.
      </p>

      <h2>Dependents and family costs</h2>
      <p>
        The petition fees above cover the principal worker only.
        A spouse and unmarried children under 21 in H-4 status add
        their own costs, and the cheapest way to pay them depends on
        whether the family is abroad or inside the US — and, inside
        the US, on whether they file on paper or online.
      </p>
      <h3>At a consulate abroad: $205 per dependent</h3>
      <p>
        Every H-4 dependent who needs a visa stamp pays the $205
        petition-based MRV fee — the principal pays $205 too, so a
        family of four (one principal, one spouse, two children)
        pays $820 in MRV fees. Some nationalities also owe a
        reciprocity fee when the visa is issued. For the two
        nationalities that matter most to H-1B families, there is
        none: the State Department&apos;s reciprocity schedules list
        the H-4 fee as <strong>None</strong> for both India and China,
        and the H-1B fee as None for both as well. The only
        difference is validity: an Indian H-4 visa is issued for
        multiple entries over 35 months, a Chinese H-4 for multiple
        entries over 12 months. In both cases, a derivative H-4 visa
        cannot outlast the principal worker&apos;s visa.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">H-4 reciprocity fees for India and China</caption>
          <thead>
            <tr>
              <th scope="col">Nationality</th>
              <th scope="col">H-4 reciprocity fee</th>
              <th scope="col">Entries</th>
              <th scope="col">Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>India</td>
              <td>None</td>
              <td>Multiple</td>
              <td>35 months</td>
            </tr>
            <tr>
              <td>China</td>
              <td>None</td>
              <td>Multiple</td>
              <td>12 months</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Source: US Department of State, Visa Reciprocity and Civil
        Documents by Country — India and China schedules, checked
        November 5, 2026. For any other nationality, check that
        country&apos;s schedule before budgeting: reciprocity fees are
        the one genuinely country-varying H-1B cost.
      </p>
      <h3>Inside the US: one paper fee covers the whole family</h3>
      <p>
        Inside the US, dependents extend or change to H-4 status on
        Form I-539. The fee is $470 on paper and $420 online — but
        the paper fee is per application, not per person. A family
        files one I-539, and each co-applicant files a Form I-539A
        at $0 additional fee. The spouse and unmarried children
        under 21 can be co-applicants only if they are all now in
        the same status or all in derivative status — H-4 families
        qualify; mixed-status families cannot file together. Each
        co-applicant completes a separate signed I-539A; a parent or
        guardian signs for a child under 14.
      </p>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          The online trap: a family of three pays $1,260 online, $470 on paper
        </p>
        <p className="mt-2 text-sm text-amber-900">
          Online I-539 filing is for a single applicant only — no
          co-applicants. USCIS states it plainly: a family applying
          together may file on paper and pay a single fee, or apply
          online as individuals and pay a fee for each application.
          A family of three filing online therefore pays $420 × 3 =
          $1,260, against $470 on paper. Online filing also does
          not support filing Form I-539 and Form I-765 together.
          For a family, paper is the cheaper route by $790.
        </p>
      </div>
      <h3>H-4 work permits: $520 paper, spouse only</h3>
      <p>
        An H-4 EAD — Form I-765, category (c)(26) — costs $520 on
        paper per application, and only a spouse can get one; H-4
        children cannot. Category (c)(26) cannot be filed online —
        USCIS&apos;s online system does not accept it — so the $470
        online I-765 rate does not apply to this category; budget
        for the paper fee. Eligibility is not automatic:
        the H-1B spouse must have an approved Form I-140, or hold
        H-1B status beyond the six-year limit under AC21. Each EAD
        is paid for again on renewal. There is no premium processing
        for an H-4 I-539 or a (c)(26) I-765, and the principal&apos;s
        premium processing does not speed up dependents&apos; cases.
        The full process is in our{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 EAD guide
        </Link>
        .
      </p>
      <p>
        Put together, a family inside the US pays $990 on paper for
        the whole package: $470 for the I-539 covering the family,
        plus $520 for the spouse&apos;s EAD. A single applicant filing
        online pays $940 — $420 for the I-539 online plus $520 for
        the paper I-765 — in two separate filings, since (c)(26)
        cannot be filed online and the two forms cannot be filed
        together online. There is no separate biometrics fee for Form
        I-539 in the current fee schedule. For the full H-4 journey,
        see our{" "}
        <Link
          href="/blog/h4-visa-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 visa guide
        </Link>
        .
      </p>

      <h2>Premium processing: is it worth $2,965?</h2>
      <p>
        Premium processing — Form I-907 — costs $2,965, in effect
        since March 1, 2026, when it rose from $2,805 under the DHS
        inflation-adjustment rule (91 FR 1059). It is the only
        optional fee in this guide, and the only one whose value
        depends entirely on timing.
      </p>
      <p>
        What it buys is a clock, not an outcome. USCIS guarantees an
        action within 15 business days of receiving a properly filed
        I-907: an approval, a denial, a Request for Evidence, or a
        Notice of Intent to Deny. An RFE or a NOID counts as an
        action — and it stops the clock. A fresh 15-business-day
        period starts when USCIS receives the response. Premium
        processing does not change the odds of approval. It does not
        make a weak petition strong, and it does not protect a
        petition from an RFE. It only makes the answer come faster.
      </p>
      <p>
        If USCIS takes no qualifying action within the period, the
        $2,965 is refunded and the case continues on the premium
        track. There is one exception: no refund is due if USCIS has
        opened a fraud or misrepresentation investigation. The fee
        cannot be waived. A separate Form I-907 must be filed for
        each petition, and the premium fee must be paid separately
        from the underlying petition fee — combining them is one of
        the classic rejection traps, covered in the payment section
        below.
      </p>
      <p>
        Premium processing may be worth the $2,965 when an employer
        needs a faster USCIS action. For an eligible H-1B transfer,
        the worker may be able to start the new job after the employer
        files a qualifying petition. Check whether portability applies
        before budgeting for premium processing solely to meet a start
        date. When is it not? When the petition is likely
        to draw an RFE anyway — a complex specialty-occupation case,
        a third-party worksite, a wage-level dispute — because the
        RFE stops the clock and the $2,965 buys very little. It is
        also poor value on a straightforward extension filed six
        months early, where regular processing has time to finish.
      </p>
      <p>
        One more limit: premium processing covers the petition only.
        It does not speed up a dependent&apos;s I-539 or H-4 EAD, and
        there is no premium option for those filings in the ordinary
        sense. A family that pays $2,965 for the principal&apos;s
        petition should not expect the dependents&apos; cases to move
        at the same speed.
      </p>

      <h2>How to pay USCIS fees in 2026</h2>
      <p>
        The amount is only half the problem. Since October 28, 2025,
        how you pay matters as much as how much you pay. Paper
        filings are now electronic-only: USCIS no longer accepts
        personal checks, business checks, money orders, or
        cashier&apos;s checks for paper-filed forms, unless the filer
        qualifies for a specific exemption. The two standard paper
        methods are Form G-1450, authorization for a credit card
        transaction, or Form G-1650, authorization for an ACH debit
        from a US bank account. A paper payment at all requires Form
        G-1651, certifying that electronic payment is not possible.
        Cash is never accepted. The change comes from USCIS Policy
        Alert PA-2025-19, implementing Executive Order 14247.
        Online filings are paid through the USCIS online account or
        Pay.gov by card or ACH at submission.
      </p>
      <p>
        Separate payments are the rule, not the exception. Premium
        processing must be paid separately from the underlying
        petition — a separate Form I-907 with its own payment
        authorization. Each form filed together with an H-1B petition
        needs its own payment instrument: a co-filed I-539, I-765, or
        I-824 cannot ride on the I-129&apos;s payment. The
        proclamation payment, when it was in effect, was separate
        again — paid through pay.gov before filing, with proof
        submitted with the petition. USCIS&apos;s own H-1B filing checklist (Form M-735) states its
        preference for a separate check for each fee, and warns that a
        single combined check gets the petition rejected if any fee
        does not apply or is incorrect. That guidance is written for
        checks. Card and ACH payments follow the electronic-payment
        methods in the paragraph above — a card authorization through
        Form G-1450, an ACH authorization through Form G-1650, or
        pay.gov for online filings. The safest practice is therefore a
        separate payment for each fee, in whichever form that fee is
        paid — even though the I-129 Instructions themselves contain
        no separate-payment rule for these three fees.
      </p>
      <h3>What happens if the wrong fee is paid</h3>
      <p>
        USCIS rejects the entire package and returns it. There is no
        top-up request and no chance to fix the amount in place. The
        filing date is lost, which can matter for a status gap, a cap
        filing window, or a premium clock — and the case must be
        refiled with a new, correct payment. Even a $1 difference is
        treated as an incorrect fee. A declined card or a failed or
        blocked ACH has the same effect as a wrong fee: rejection.
        Check available credit and ACH blocks before mailing. An
        I-907 postmarked on or after March 1, 2026 with the old
        $2,805 premium fee is rejected, and the petition reverts to
        regular processing.
      </p>
      <h3>Which fees are refundable</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Which H-1B fees are refundable, and when</caption>
          <thead>
            <tr>
              <th scope="col">Situation</th>
              <th scope="col">Refund?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Filing fee once USCIS accepts the case — including denial or withdrawal after processing begins</td>
              <td>No. Filing fees are generally non-refundable regardless of outcome (8 CFR 103.2). The fee buys adjudication, not approval. A denied petition must be refiled with a new full fee.</td>
            </tr>
            <tr>
              <td>Rejected filing — wrong fee, missing payment, or wrong form edition, before USCIS accepts the case</td>
              <td>Payment is returned with the package. It was never processed as an accepted filing, so this is a return, not a refund.</td>
            </tr>
            <tr>
              <td>Overpayment or USCIS error</td>
              <td>Refund of the excess may be requested through the USCIS Contact Center or in writing to the handling office.</td>
            </tr>
            <tr>
              <td>Registration fee ($215)</td>
              <td>Never — not if the beneficiary is not selected, and not if duplicate registrations are invalidated.</td>
            </tr>
            <tr>
              <td>Premium processing fee ($2,965)</td>
              <td>Yes, only if USCIS takes no qualifying action within the guaranteed period; the petition continues on the premium track. No refund if USCIS issues an approval, denial, RFE, or NOID in time, and none if a fraud or misrepresentation investigation is opened.</td>
            </tr>
            <tr>
              <td>Consular MRV fee ($205)</td>
              <td>No — non-refundable even if the visa is refused. A new application needs a new fee.</td>
            </tr>
            <tr>
              <td>Fee waivers</td>
              <td>Form I-129, Form I-907, and the H-1B statutory fees are not waivable on Form I-912. Do not plan around a waiver path for H-1B petition fees.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2026 fee changes: in effect, blocked, or only proposed</h2>
      <p>
        Most of the confusion about H-1B costs in 2026 comes from
        treating three different things as one fee hike. They are
        not. One is blocked by the courts. One is only a proposal.
        One is a real expansion that took effect on September 9,
        2026. This section is the dated status board — the only
        news-driven part of this guide. Everything else here is
        evergreen.
      </p>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <p className="font-semibold text-slate-900">
          Status board — checked November 5, 2026
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-800">
          <li>
            <strong>$100,000 proclamation payment — BLOCKED, not
            collected.</strong> See below; full timeline on our{" "}
            <Link
              href="/blog/h1b-100k-fee-status"
              className="text-blue-700 underline underline-offset-2"
            >
              H-1B $100K fee status page
            </Link>
            .
          </li>
          <li>
            <strong>$103,265 fee — PROPOSAL ONLY.</strong> No final
            rule, no effective date, nothing owed.
          </li>
          <li>
            <strong>9-11 fee expansion — IN EFFECT since September 9,
            2026.</strong> Covered employers now pay $4,000 on all
            extension-of-stay petitions.
          </li>
          <li>
            <strong>Premium processing $2,805 → $2,965 — IN EFFECT
            since March 1, 2026.</strong>
          </li>
          <li>
            <strong>Visa Integrity Fee $250 — LEGISLATED, NOT
            COLLECTED.</strong> Budget it as a contingency only;
            never add it to a total.
          </li>
          <li>
            <strong>H.R. 1 fees (October 16, 2026) — NO CHANGE to
            H-1B core fees.</strong>
          </li>
        </ul>
      </div>
      <h3>The $100,000 payment: blocked, not collected</h3>
      <p>
        Proclamation 10973, signed September 19, 2025, imposed a
        $100,000 payment on certain new H-1B petitions. It has not
        been collected since the courts intervened: on June 8, 2026,
        the District of Massachusetts vacated the implementing
        guidance in California v. Mullin, and on September 30, 2026,
        the Northern District of California preliminarily enjoined
        enforcement under both proclamations in Global Nurse Force v.
        Trump (
        <a
          href="https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.130.0.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          September 30, 2026 order
        </a>). The government appealed to the Ninth Circuit on
        October 9, 2026 (No. 26-6667), and the same day asked the
        district court to pause its proceedings while the appeal is
        pending. The hearing on that stay request is set for January
        14, 2027. USCIS has said it will comply with the court orders
        — and that it still plans to collect the payment if the orders
        are lifted.
      </p>
      <p>
        The courts have not all agreed. In December 2025, the District
        of Columbia upheld the proclamation in Chamber of Commerce v.
        DHS; that ruling is on appeal to the D.C. Circuit, which heard
        argument on March 9, 2026 and has not yet ruled. The payment
        is not being collected while the blocking orders stand.
      </p>
      <p>
        Even when it was in effect, the payment did not touch every
        petition. It applied to new petitions for workers outside the
        US without a valid H-1B visa, and to petitions USCIS found
        ineligible — not to petitions filed before September 21,
        2025, not to travel by current H-1B holders, and not to
        in-US change-of-status, amendment, or extension petitions
        that USCIS granted. The only exception was an extraordinarily
        rare national-interest finding by the Secretary of Homeland
        Security. The full timeline, scope, and court status live on
        our{" "}
        <Link
          href="/blog/h1b-100k-fee-status"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B $100K fee status page
        </Link>{" "}
        — this guide does not duplicate it.
      </p>
      <h3>The $103,265 fee: a proposal, not a bill</h3>
      <p>
        On August 25, 2026, DHS published a notice of proposed
        rulemaking (91 FR 54817, Docket USCIS-2026-0298) that would
        add a $103,265 fee to cap-subject H-1B petitions at filing —
        including the 20,000 advanced-degree exemption — on top of
        every existing fee. Comments closed September 24, 2026.
        There is no final rule and no effective date. Nothing is owed.
      </p>
      <p>
        Two scope points matter. First, cap-exempt petitions are not
        covered — universities, affiliated nonprofits, and nonprofit
        or government research organizations would not pay it. Second,
        transfers are covered only when the petition is cap-subject.
        A transfer by a worker who was already counted against the
        cap is not a cap-subject petition, so on the best available
        reading the fee would not apply to it. But a worker who was
        never counted — for example, someone moving from a cap-exempt
        employer to a cap-subject employer — is filing a cap-subject
        petition, so the fee would apply to them if the rule is
        finalized as proposed. That second point is labelled honestly
        here: it comes from a law-firm summary of the proposal
        (Legal500), not from the Federal Register text itself, which
        does not use the word &ldquo;transfer.&rdquo; Treat it as the
        best available reading, not as a quoted rule.
      </p>
      <p>
        If both the $100,000 payment and the $103,265 fee ever took
        effect together, the proposal says its fee applies in
        addition to any proclamation payment — which is where the
        $203,265 figure in press coverage comes from. Today that
        stack is theoretical: neither fee is payable, so the combined
        figure is $0. Budget it as a contingency — for example, a
        contract clause or an escrow arrangement — not as a line in
        a cost total.
      </p>
      <h3>The 9-11 fee expansion: the one real 2026 increase</h3>
      <p>
        The only 2026 fee expansion actually in effect for H-1B is
        the Public Law 114-113 fee. A DHS final rule published
        August 10, 2026 (91 FR 51360), effective September 9, 2026,
        extended the $4,000 fee to all extension-of-stay petitions
        at covered employers — including same-employer extensions,
        which previously escaped it. Before that date, covered
        employers paid it only on initial and change-of-employer
        petitions. Bare amendments — those not seeking an extension
        — remain exempt. The fee sunsets for petitions filed after
        September 30, 2027, unless Congress extends it. USCIS
        confirmed the change on its I-129 page, and issued a new
        I-129 edition, 09/09/26, the same day.
      </p>
      <h3>The Visa Integrity Fee: legislated, not collected</h3>
      <p>
        The $250 Visa Integrity Fee was created by statute (Pub. L.
        119-21) and would apply at visa issuance, on top of the $205
        MRV fee, if implemented. As of checks from October 25 to
        November 2, 2026, it does not appear on the State
        Department&apos;s Fees for Visa Services schedule, and no
        collection start date has been published. Some guides present
        it as already payable — that is not supported by the
        schedule. Treat $250 per visa as a contingency, and never
        add it to a headline total.
      </p>
      <h3>How fees got here: the 2024 rule</h3>
      <p>
        The current fee structure dates to the USCIS fee schedule
        final rule published January 31, 2024 (89 FR 6194), effective
        April 1, 2024 — the first comprehensive USCIS fee adjustment
        since 2016. It raised the I-129 base fee from $460 to $780
        for standard employers (the old $460 rate became the
        small-employer and nonprofit rate), raised the registration
        fee from $10 to $215 (deferred to the FY2026 cap season),
        created the Asylum Program Fee, introduced the $50 online
        filing discount, and changed the premium processing clock
        from 15 calendar days to 15 business days. The ACWIA fee,
        the fraud fee, and the $4,000 fee are statutory and were not
        moved by that rule. A regular employer&apos;s core petition
        cost went from $2,460 before the rule to $3,380 on paper
        after it — $3,595 with registration, $3,545 online.
      </p>

      <h2>Are any countries charged a higher H-1B fee?</h2>
      <p>
        USCIS petition fees do not vary by nationality. At the
        consulate, applicants generally pay the $205 H visa application
        fee, and an additional visa issuance fee may depend on
        nationality.
      </p>
      <p>
        Searchers ask for three reasons. First, impact is concentrated
        even though the rule is neutral: in FY2024, 71% of approved
        H-1B petitions were for India-born beneficiaries and 11.7%
        were for China-born beneficiaries. These figures show the share
        of approved petitions by birthplace. The fee does not charge
        Indians more. Second, fee stories get
        mixed up with travel restrictions. Entry-restriction
        proclamations list countries — Afghanistan, Iran, Libya, Yemen,
        and others — but those are separate measures that do not set
        H-1B fees. A fee is not a travel ban. Third, the one genuinely
        country-varying H-1B cost is the reciprocity fee at consulates
        — small, post-specific, and unrelated to the headlines. For
        India and China it is None for both H-1B and H-4.
      </p>

      <h2>Is the H-1B worth the cost?</h2>
      <p>
        For most employers, the arithmetic is short. A regular
        employer pays $3,545 in government fees for a new cap
        petition — $6,510 with premium processing — against a worker
        whose median H-1B offered wage across listed sponsors is
        about $120,500. That median is taken across the 1,110 listed
        sponsors&apos; own FY2026 median wages, not across every
        individual filing. The fee is a fraction of one month&apos;s pay for
        the role it fills. The costs that actually break a sponsorship
        budget are not the USCIS fees: attorney fees, which are
        separate and vary by firm, and the cost of delay — a missed
        start date, a status gap, or a second lottery season.
      </p>
      <p>
        For the worker, the calculation is different. The worker does
        not pay the petition fees — the employer does, by law — but
        pays the $205 consular fee, travel, and the opportunity cost
        of the process. What the worker gets is access to US salaries
        and the green-card path: an approved I-140 is what eventually
        unlocks an H-4 spouse&apos;s work permit and extensions beyond
        the six-year H-1B limit. Whether that trade is worth it
        depends on the salary on offer and the sponsor&apos;s record.
        Our{" "}
        <Link
          href="/blog/h1b-salary-database"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B salary database guide
        </Link>{" "}
        shows the wages sponsors report offering, and the sponsor pages show
        each employer&apos;s filing volume and LCA certification rate.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How much does an H-1B visa cost in total?</h3>
      <p>
        For a regular employer, a new cap-subject petition costs
        $3,545 online ($3,595 on paper), or $6,510 with premium
        processing. A small for-profit employer pays $2,225 (a small
        nonprofit that owes ACWIA pays $1,925 for a new cap-subject petition). A university or ACWIA-exempt
        nonprofit filing a cap-exempt petition pays $960. Those totals are USCIS fees only — attorney fees are
        separate, and the blocked $100,000 payment and the proposed
        $103,265 fee are not in them.
      </p>

      <h3>Who pays H-1B fees — the employer or the employee?</h3>
      <p>
        The employer files the petition and pays the petition fees.
        The worker can never pay any part of the ACWIA training fee
        or the $500 fraud fee, in any form — not directly, not by
        deduction, not by reimbursement, and not through a third
        party. Other petition
        costs are the employer&apos;s business expenses and cannot be
        shifted to the worker if they would push pay below the
        required wage. The worker normally pays only personal costs:
        the $205 consular fee, travel, and dependents&apos;
        applications.
      </p>

      <h3>Can my employer make me pay back H-1B fees if I leave?</h3>
      <p>
        Not the ACWIA fee or the fraud fee, and not any petition
        cost through a penalty clause or a wage deduction that
        breaches the required wage. Repayment clauses tied to petition costs are the fact
        pattern in DOL enforcement cases, and an employer that
        enforces one risks back-wage liability, civil money
        penalties, and debarment. If you are asked to sign one, get
        independent advice before signing.
      </p>

      <h3>Can I pay for premium processing myself?</h3>
      <p>
        Only if the speedup is genuinely for your personal benefit —
        not your employer&apos;s deadline — and you voluntarily
        authorize it in writing under the DOL test in 20 CFR
        655.731(c)(9)(iii). An offer letter that makes you pay does
        not count as voluntary. If the employer needs the speed for
        business reasons, the employer pays.
      </p>

      <h3>Is the $100,000 H-1B fee still in effect?</h3>
      <p>
        No. As of November 5, 2026, it is blocked by a Massachusetts
        court&apos;s vacatur of the implementing guidance (June 8,
        2026) and a California preliminary injunction (September 30,
        2026), and it is not being collected. The government has
        appealed, and USCIS says it still plans to collect the
        payment if the orders are lifted. The full timeline is on our{" "}
        <Link
          href="/blog/h1b-100k-fee-status"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B $100K fee status page
        </Link>
        .
      </p>

      <h3>Is the $103,265 H-1B fee in effect?</h3>
      <p>
        No. It is a proposed rule published August 25, 2026 (91 FR
        54817, Docket USCIS-2026-0298). Comments closed September 24,
        2026, and no final rule or effective date has been published.
        Nothing is owed. It would apply to cap-subject petitions
        only, not to cap-exempt petitions — and, on the best
        available secondary reading, not to a transfer by a worker
        who was already counted against the cap. A never-counted
        worker moving to a cap-subject employer would be filing a
        cap-subject petition, so the fee would apply to them if the rule is finalized as proposed.
      </p>

      <h3>How much does an H-1B transfer cost?</h3>
      <p>
        A regular employer pays $3,330 online ($3,380 on paper), or
        $6,295 with premium processing. A small for-profit employer
        pays $2,010 (a small nonprofit pays $1,710). An ACWIA-exempt
        nonprofit pays $960. There is no $215 registration fee on a
        transfer, because the worker has already been counted against
        the cap — that assumes a previously counted worker. If the
        worker&apos;s only H-1B employment was cap-exempt and never
        counted, the cap may still apply. The transfer section above breaks the totals down by employer type.
      </p>

      <h3>How much does an H-1B extension cost?</h3>
      <p>
        A first extension for a regular employer costs $2,830 online;
        a second or later extension costs $1,330, because the ACWIA
        fee drops off after the first extension. A small for-profit
        employer pays $1,510 for a first extension and $760 for a
        second or later one (a small nonprofit pays $1,210 for a
        first extension). A covered employer adds $4,000 to either,
        under
        the September 9, 2026 expansion. Premium processing adds
        $2,965 to any row.
      </p>

      <h3>Does an H-1B amendment cost the same as an extension?</h3>
      <p>
        No. A bare amendment — one that does not request an extension
        of stay — costs $1,330 online for a regular employer, $760
        for a small employer, and $460 for a nonprofit: base fee
        plus Asylum Program Fee only. An amendment <em>with</em> an
        extension is priced as an extension, with ACWIA due if it is
        the first extension for that worker with that employer, and
        the $4,000 fee due if the employer is covered.
      </p>

      <h3>Do small employers and nonprofits pay less?</h3>
      <p>
        Yes, but differently. A small for-profit employer (25 or
        fewer full-time employees) pays a $460 base fee, a $300
        Asylum Program Fee, and a $750 ACWIA fee. A nonprofit pays a $460
        base fee and a $0 Asylum Program Fee — but it still owes the
        ACWIA fee unless it fits one of the six exempt categories
        (higher education, affiliated nonprofits, nonprofit or
        government research, primary and secondary schools, and
        clinical-training nonprofits). An ordinary nonprofit with 26 or more employees that is
        not exempt pays $2,675 for a cap-subject new petition,
        against $1,175 for an exempt one. A small ordinary nonprofit
        pays $1,925 for the same petition.
      </p>

      <h3>What is the H-1B registration fee, and is it refunded if I am not selected?</h3>
      <p>
        The registration fee is $215 per beneficiary, paid by the
        employer in the March registration window for cap-subject
        petitions. It is never refunded — not if the beneficiary is
        not selected, and not if duplicate registrations are
        invalidated. It is also charged only once, at registration;
        a selected beneficiary&apos;s petition does not carry a second
        registration fee.
      </p>

      <h3>How much is premium processing in 2026, and what does it guarantee?</h3>
      <p>
        Premium processing costs $2,965 since March 1, 2026, up from
        $2,805. It guarantees a USCIS action — approval, denial,
        RFE, or NOID — within 15 business days, not an approval. An
        RFE or NOID stops the clock, and a new 15-business-day
        period starts on the response. The fee is refunded only if
        USCIS takes no qualifying action in time, and not if a fraud
        or misrepresentation investigation is opened.
      </p>

      <h3>What happens if I pay the wrong USCIS fee?</h3>
      <p>
        USCIS rejects the entire package and returns it. There is no
        top-up. The filing date is lost, which can matter for a
        status gap or a cap filing window, and the case must be
        refiled with a new, correct payment. Even a $1 difference
        counts as an incorrect fee, and a declined card or failed ACH
        has the same effect as a wrong fee.
      </p>

      <h3>How much does an H-4 visa cost?</h3>
      <p>
        At a consulate abroad, $205 per dependent — the MRV fee, with
        no reciprocity fee for Indian or Chinese nationals. Inside
        the US, one $470 paper Form I-539 covers a whole family on
        Form I-539A forms; filing online costs $420 per person,
        because online I-539 accepts a single applicant only — a
        family of three pays $1,260 online against $470 on paper. An
        H-4 EAD for a qualifying spouse costs $520 on paper.
        Category (c)(26) cannot be filed online. See our{" "}
        <Link
          href="/blog/h4-visa-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 visa guide
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 EAD guide
        </Link>
        .
      </p>

      <h3>Are any countries charged a higher H-1B fee?</h3>
      <p>
        USCIS petition fees do not vary by nationality. At the
        consulate, applicants generally pay the $205 H visa application
        fee, and an additional visa issuance fee may depend on
        nationality. India is the most affected country by volume —
        about 71% of FY2024 H-1B approvals — not by a different rate.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.uscis.gov/g-1055"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form G-1055, Fee Schedule
          </a>{" "}
          (edition 10/26/26, page last updated October 28, 2026) —
          registration, I-129 base and small/nonprofit rates, Asylum
          Program Fee, ACWIA and fraud fees, premium processing,
          I-539 and I-765 amounts, and the $4,000 fee. The primary
          source for every figure in this guide.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-129"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-129, Petition for a Nonimmigrant Worker
          </a>{" "}
          — the September 9, 2026 fee expansion, the $100,000
          payment status, the I-129 edition 09/09/26, and the
          online-filing note. Instructions for Form I-129 (edition
          09/09/26): ACWIA first-extension exemptions, the
          &ldquo;may not be assessed to the beneficiary&rdquo; rule,
          and the covered-employer test.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/sites/default/files/document/forms/m-735.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Optional Checklist for Form I-129 H-1B Filings
            (Form M-735)
          </a>{" "}
          — states USCIS&apos;s preference for a separate check for each
          fee, and warns that a combined check gets the petition
          rejected if any fee does not apply or is incorrect. The
          checklist&apos;s language is check-specific; card and ACH
          payments follow the fee schedule&apos;s How to Pay instructions
          (Forms G-1450 and G-1650, pay.gov).
        </li>
        <li>
          Instructions for Form I-907 (edition 04/01/24) — premium
          processing as a separate form and separate payment, the
          15-day action clock, the RFE/NOID restart, and the refund
          rule with the fraud-investigation exception.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-539"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-539, Application to Extend/Change
            Nonimmigrant Status
          </a>{" "}
          — filing fee schedule and instructions. Instructions for
          Form I-539 (edition 08/28/24): who may be a co-applicant
          and the same-status-or-derivative-status condition. USCIS
          &ldquo;Check Your Eligibility to File Form I-539
          Online&rdquo;: online filing for yourself without
          co-applicants only, and the paper-single-fee vs
          online-per-application family rule.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/sites/default/files/document/reports/ola_signed_h1b_characteristics_congressional_report_FY24.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Characteristics of H-1B Specialty Occupation Workers,
            Fiscal Year 2024, Table 4a
          </a>{" "}
          — approved H-1B petitions by country of birth: India 283,755
          (71%), China 46,722 (11.7%); 399,378 total approvals.
        </li>
        <li>
          Federal Register — 9-11 Response and Biometric Entry-Exit
          Fee for H-1B and L-1 Visas (Doc. 2026-16231, August 10,
          2026, effective September 9, 2026; 91 FR 51360) — the
          extension of the $4,000 fee to extension-of-stay
          petitions.
        </li>
        <li>
          Federal Register — Adjustment to Premium Processing Fees
          (91 FR 1059, January 12, 2026, effective March 1, 2026) —
          premium processing $2,805 to $2,965.
        </li>
        <li>
          Federal Register — Fee for Certain H-1B Petitions, notice
          of proposed rulemaking (91 FR 54817, Docket USCIS-2026-0298,
          August 25, 2026; comments closed September 24, 2026) —
          the $103,265 proposal. No final rule has been published.
        </li>
        <li>
          Federal Register — 2026 civil money penalty
          inflation-adjustment rule (91 FR 31358) and the 2024 USCIS
          fee schedule final rule (89 FR 6194, effective April 1,
          2024) — penalty tiers and the 2024 fee history.
        </li>
        <li>
          Proclamation 10973 (September 19, 2025) and Proclamation
          11069 (September 18, 2026) — the $100,000 payment and its
          extension to September 21, 2027. Full court timeline on
          our{" "}
          <Link
            href="/blog/h1b-100k-fee-status"
            className="underline text-blue-600"
          >
            H-1B $100K fee status page
          </Link>
          .
        </li>
        <li>
          US Department of Labor — Fact Sheet 62H (prohibited and
          authorized wage deductions) and Fact Sheet 62U (enforcement
          authority, civil money penalties, debarment) — the
          who-pays rules and the penalty tiers in this guide.
        </li>
        <li>
          <a
            href="https://iseo.ucsd.edu/resources/family-resources/h4.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            UC San Diego International Services — H-4 Family Resources
          </a>{" "}
          — category (c)(26) for the H-4 EAD is not eligible to file
          Form I-765 online; the paper I-765 fee is $520.
        </li>
        <li>
          <a
            href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/China.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            US Department of State — Visa Reciprocity Schedule, China
          </a>{" "}
          — H-1B and H-4 reciprocity fee None, multiple entries, 12
          months. US Department of State — Visa Reciprocity Schedule,
          India — H-1B and H-4 reciprocity fee None, multiple
          entries, 35 months. Both schedules checked November 5,
          2026.
        </li>
        <li>
          US Department of State — Fees for Visa Services — the $205
          petition-based MRV fee.
        </li>
        <li>
          USCIS Policy Alert PA-2025-19 (August 29, 2025),
          implementing Executive Order 14247 — electronic-only
          payment for paper filings from October 28, 2025 (Forms
          G-1450, G-1650, G-1651).
        </li>
        <li>
          <a
            href="https://storage.courtlistener.com/recap/gov.uscourts.cand.457426/gov.uscourts.cand.457426.130.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Global Nurse Force v. Trump, No. 4:25-cv-08454 (N.D. Cal.)
          </a>{" "}
          — order granting in part the preliminary injunction on
          September 30, 2026 (2026 WL 2972985): the agency policies
          implementing the $100,000 payment were vacated and their
          enforcement enjoined under both proclamations.
        </li>
        <li>
          Secondary source, labelled as such: a Legal500 summary of
          the $103,265 proposal, for the single point that the
          proposal&apos;s scope turns on whether the petition is
          cap-subject — so a transfer by a previously counted worker
          is outside it, while a never-counted worker moving to a
          cap-subject employer is inside it. The Federal Register
          text of the proposal does not use the word
          &ldquo;transfer,&rdquo; so this point is presented as a
          secondary-source reading, not as a quoted rule.
        </li>
        <li>
          VisaTalentUSA&rsquo;s own analysis of U.S. Department of
          Labor LCA disclosure data (FY2024&ndash;FY2026) &mdash; the
          median offered wage across listed sponsors, about $120,500 — the median of the listed sponsors&apos; FY2026 median offered wages (1,110 employers; 243,729 FY2026 filings),
          used in the &ldquo;Is the H-1B worth the cost?&rdquo; section.
        </li>
        <li>
          <Link
            href="/blog/h1b-lca"
            className="underline text-blue-600"
          >
            VisaTalentUSA — H-1B LCA filing guide
          </Link>{" "}
          — how the Labor Condition Application behind every fee in
          this guide works.
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: November 5, 2026. Status last checked: November 5, 2026. Fees, filing
          addresses, and processing times change — confirm them on the
          linked USCIS and State Department pages before filing. Not
          legal advice — consult an immigration attorney for your
          case.
        </em>
      </p>
    </>
  );
}
