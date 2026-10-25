import Link from "next/link";

export default function H1B100KFeeStatusContent() {
  return (
    <>
      <p className="lead">
        The $100,000 H-1B fee is <strong>not being collected today</strong>.
        Two federal courts have blocked the agencies from enforcing it, the
        government has appealed to the Ninth Circuit and asked that court to
        pause one of the blocking orders, and a separate DHS proposal for a
        $103,265 fee is still only a proposal. This page tracks the live
        status, the full court timeline, and the one fee proposal that is
        easy to confuse with it — with every date tied to its proclamation,
        court order, or Federal Register document.
      </p>

      <div className="rounded-lg border border-green-300 bg-green-50 p-5">
        <p className="font-semibold text-green-900">
          STATUS — BLOCKED (as of October 25, 2026)
        </p>
        <p className="mt-2 text-sm text-green-900">
          The $100,000 payment is <strong>not being collected</strong>. A
          Massachusetts court vacated the implementing policies on June 8,
          2026, and a California court blocked enforcement under both the
          original proclamation and its 2026 extension on September 30, 2026.
          The government&apos;s October 9, 2026 appeal to the Ninth Circuit
          does <strong>not</strong> lift either order — only a stay granted
          by an appeals court would. USCIS says it will comply with the
          orders for now, but still intends to collect the payment if an
          order is lifted.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the $100,000 H-1B fee at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>What it is:</strong> a $100,000 payment on certain new
            H-1B petitions, created by Presidential Proclamation 10973
            (September 19, 2025), effective September 21, 2025.
          </li>
          <li>
            <strong>Who it targeted:</strong> mainly new petitions for
            beneficiaries outside the United States without a valid H-1B
            visa, plus consular-notification cases — per USCIS guidance of
            October 20, 2025.
          </li>
          <li>
            <strong>Actually paid:</strong> the payment was made for over
            700 petitions while it was in force, according to the extension
            proclamation itself.
          </li>
          <li>
            <strong>Still on paper:</strong> Proclamation 11069 (September
            18, 2026) extended the restriction through September 21, 2027 —
            but enforcement is blocked, so the extension currently has no
            practical effect.
          </li>
          <li>
            <strong>The other fee:</strong> DHS proposed a separate
            $103,265 fee on cap-subject petitions on August 25, 2026. It is
            <strong>not in effect</strong>; comments closed September 24,
            2026, and no final rule has been issued.
          </li>
          <li>
            <strong>What changes the status:</strong> a stay granted by the
            First, Ninth, or D.C. Circuit; a merits win for the government;
            or a final $103,265 rule.
          </li>
        </ul>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/h1b-100k-fee-status-timeline.svg"
          alt="Timeline of the $100,000 H-1B fee: Proclamation 10973 on September 19, 2025, Boston court vacates it on June 8, 2026, DHS proposes a separate $103,265 fee on August 25, 2026, California blocks enforcement on September 30, 2026, and the government appeals to the Ninth Circuit on October 9, 2026"
          className="h-auto w-full"
          width={1200}
        />
      </div>

      <h2>What the $100,000 fee actually was</h2>
      <p>
        Presidential Proclamation 10973, titled “Restriction on Entry of
        Certain Nonimmigrant Workers,” restricted the entry of H-1B
        specialty-occupation workers unless their petition was accompanied
        or supplemented by a $100,000 payment from the employer. It directed
        the Department of Homeland Security to restrict decisions on
        petitions for workers outside the United States that lacked the
        payment, and the Department of State to verify payment during visa
        processing.
      </p>
      <p>
        Three clarifications mattered from the start. First, the payment was
        one-time per petition, not annual. Second, it applied only
        prospectively — petitions filed before September 21, 2025, approved
        petitions, and holders of valid H-1B visas were never covered, and
        current holders could keep traveling freely. Third, the Secretary
        of Homeland Security could grant national-interest exceptions for
        individual workers, companies, or industries — a route USCIS
        described as extraordinarily rare.
      </p>
      <p>
        For scale: before this proclamation, ordinary H-1B filing fees
        topped out at roughly $7,595 per petition depending on the employer
        and the case. The $100,000 payment was more than thirteen times
        that ceiling, which is exactly why it ended up in court within
        months.
      </p>

      <h2>Full timeline: from proclamation to three appeals courts</h2>
      <p>
        Every event below names the document or court behind it. Where a
        court order and press coverage disagree on a date, the court&apos;s
        own date is used — the California order, for example, is dated
        September 30, 2026 in the United States, even though it was
        reported on October 1 in South Asian press.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                Date
              </th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                Event
              </th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                What it meant
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Sep 19, 2025
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Presidential Proclamation 10973 signed
              </td>
              <td className="border border-slate-200 px-3 py-2">
                $100,000 payment created for certain new H-1B petitions,
                citing presidential entry-restriction power (INA §§
                212(f) and 215(a)).
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Sep 20, 2025
              </td>
              <td className="border border-slate-200 px-3 py-2">
                White House, USCIS, and CBP clarify scope
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Prospective only: earlier petitions, approved petitions,
                and valid visa holders are not covered.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Sep 21, 2025
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Proclamation takes effect (12:01 a.m. EDT)
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Collection begins for covered petitions; payment via
                Pay.gov, proof filed with the petition.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Oct 20, 2025
              </td>
              <td className="border border-slate-200 px-3 py-2">
                USCIS publishes detailed applicability guidance
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Defines exactly who pays and who does not (see the tables
                below); adds the guidance to the fee schedule and payment
                website.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Dec 23, 2025
              </td>
              <td className="border border-slate-200 px-3 py-2">
                D.C. court upholds the fee — Chamber of Commerce v. DHS,
                No. 1:25-cv-03675, Judge Beryl Howell
              </td>
              <td className="border border-slate-200 px-3 py-2">
                First ruling goes the government&apos;s way: the
                proclamation falls within § 212(f) authority. Appealed
                December 29, 2025; argued before the D.C. Circuit in March
                2026; still undecided.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Jun 8, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Massachusetts court vacates the policy — 20-state case,
                No. 1:25-cv-13829, Judge Leo T. Sorokin
              </td>
              <td className="border border-slate-200 px-3 py-2">
                The payment is, in substance, a tax Congress never
                authorized, and the rollout violated the Administrative
                Procedure Act. The implementing policies are vacated in
                their entirety, nationwide, with immediate effect.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Jun–Jul 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Brief administrative stay
              </td>
              <td className="border border-slate-200 px-3 py-2">
                The district court briefly pauses its own order so the
                government can seek emergency relief; USCIS collects the
                fee again in that short window.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Jul 24, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                First Circuit denies a stay — No. 26-1699
              </td>
              <td className="border border-slate-200 px-3 py-2">
                A three-judge panel finds the government has not shown a
                strong likelihood of winning. The June 8 vacatur is back in
                force. The merits appeal continues.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Aug 25, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                DHS proposes a separate $103,265 fee
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Notice of proposed rulemaking in the Federal Register
                (Docket USCIS-2026-0298) for cap-subject petitions only.
                Comments closed September 24, 2026. Not in effect.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Sep 18, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Proclamation 11069 extends the restriction
              </td>
              <td className="border border-slate-200 px-3 py-2">
                The 2025 restriction is extended through September 21,
                2027, on unchanged terms. The proclamation notes the
                payment had been made for over 700 petitions.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Sep 30, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                California court blocks enforcement — Global Nurse Force
                v. Trump, No. 4:25-cv-08454, Judge Haywood S. Gilliam Jr.
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Preliminary injunction: agencies may not enforce the fee
                policies under either proclamation until they complete
                notice-and-comment rulemaking. The proclamations
                themselves are left standing.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Oct 9, 2026
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Government appeals to the Ninth Circuit and seeks a stay
              </td>
              <td className="border border-slate-200 px-3 py-2">
                The appeal alone lifts nothing — only a granted stay
                would. No stay had been reported as of October 25, 2026. The fee is now before three appeals courts at
                once.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Who would pay if the blocks were lifted</h2>
      <p>
        The tables below are the scope USCIS itself set on October 20,
        2025. They describe what <strong>would</strong> apply if a court
        lifts the blocks — they are <strong>not</strong> in force today,
        because the Massachusetts court vacated the USCIS memo and FAQ and
        the California court enjoined the agency policies. If collection
        ever resumes, expect USCIS to reissue guidance before anyone is
        asked to pay.
      </p>
      <h3>Would have to pay (when the fee was in force)</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                New H-1B petitions filed on or after September 21, 2025 for
                beneficiaries outside the United States who do not hold a
                valid H-1B visa.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Petitions requesting consular notification, port-of-entry
                notification, or pre-flight inspection — even if the
                beneficiary was inside the United States when filed.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Change-of-status, amendment, or extension petitions where
                USCIS denies the requested benefit and instead approves
                the case for consular processing.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Would not have to pay</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Any H-1B petition filed before September 21, 2025.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Approved change of status, amendment, extension, or change
                of employer for someone inside the United States —
                including the usual F-1 (OPT) to H-1B change of status.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Holders of valid H-1B visas traveling in and out of the
                United States.
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2">
                Nobody was exempted <em>because</em> of cap-exempt status:
                the payment never turned on whether the employer was
                cap-exempt or cap-subject. See our{" "}
                <Link href="/tools/cap-exempt-employers" className="underline text-blue-600">
                  Cap-Exempt Employers Finder
                </Link>{" "}
                for how cap-exempt sponsorship actually works.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        When the fee was in force, the employer had to pay through the
        Treasury&apos;s Pay.gov portal <em>before</em> filing and include
        proof of payment with the petition — a petition without it was
        denied. National-interest exceptions existed on paper but were
        described by USCIS as extraordinarily rare.
      </p>

      <h2>Two fees — do not mix them up</h2>
      <p>
        The single biggest source of confusion in this story is that two
        different six-figure H-1B fees now exist in public discussion. They
        are separate, with different legal bases, different targets, and
        different fates.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                &nbsp;
              </th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                $100,000 proclamation payment
              </th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">
                $103,265 DHS proposal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                Origin
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Presidential Proclamation 10973 (Sep 19, 2025), extended by
                Proclamation 11069 (Sep 18, 2026)
              </td>
              <td className="border border-slate-200 px-3 py-2">
                DHS notice of proposed rulemaking, Federal Register, Aug
                25, 2026 (Docket USCIS-2026-0298)
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                Legal basis claimed
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Presidential power to restrict entry, INA §§ 212(f) and
                215(a)
              </td>
              <td className="border border-slate-200 px-3 py-2">
                DHS statutory fee-setting and cost-recovery authority
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                Applies to
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Certain new H-1B petitions, mainly for workers abroad
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Cap-subject H-1B petitions only (the 65,000 regular cap
                plus the 20,000 U.S. master&apos;s exemption)
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                Cap-exempt employers
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Never the deciding factor
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Explicitly excluded — universities and nonprofit research
                organizations would pay nothing under it
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                Status today
              </td>
              <td className="border border-slate-200 px-3 py-2">
                On paper through Sep 21, 2027, but enforcement blocked by
                two court orders
              </td>
              <td className="border border-slate-200 px-3 py-2">
                Proposal only; comment period closed Sep 24, 2026; no
                final rule, no effective date
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 font-semibold">
                What would activate it
              </td>
              <td className="border border-slate-200 px-3 py-2">
                A court stay or a merits win lifting the blocks
              </td>
              <td className="border border-slate-200 px-3 py-2">
                A final rule — which would then face its own legal
                challenges
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        DHS itself acknowledges in the proposed rule that $103,265 is close
        to the $100,000 proclamation payment, but distinguishes it on legal
        grounds: the proposal rests on fee-setting authority, not
        proclamation power. That distinction is the whole point of the
        rulemaking — it is designed to survive the procedural objections
        that blocked the proclamation in two of the three court cases. And
        note: the proposal is <em>in addition to</em> existing filing fees,
        not a replacement for them. If both fees ever applied at once, they
        would stack.
      </p>

      <h2>Why three courts gave three different answers</h2>
      <p>
        <strong>Washington, D.C. — upheld (December 2025).</strong> Judge
        Beryl Howell, in a case brought by the U.S. Chamber of Commerce
        and the Association of American Universities, held the proclamation
        fell within the President&apos;s § 212(f) authority to restrict
        entry. That decision is on appeal; the D.C. Circuit heard argument
        in March 2026 and has not decided.
      </p>
      <p>
        <strong>Massachusetts — vacated (June 2026).</strong> Judge Sorokin,
        in the 20-state case, went to the substance: whatever it is called,
        a $100,000 payment that functions as a tax needs Congress, and
        Congress never authorized it. He also found the rollout violated
        the Administrative Procedure Act. His order vacated the
        implementing policies entirely and applies nationwide.
      </p>
      <p>
        <strong>California — enjoined (September 2026).</strong> Judge
        Gilliam did not decide whether the President had authority at all.
        His ground was procedure: the agencies turned the proclamation
        into working rules through memos, FAQs, and a payment website
        without the notice-and-comment rulemaking the APA requires. His
        preliminary injunction therefore blocks the agency policies — under
        both proclamations — while leaving the proclamations themselves
        standing.
      </p>
      <p>
        The practical result is a split that only higher courts can
        resolve: one district court upheld the fee, two blocked its
        enforcement on different grounds, and three appeals courts are now
        involved at once. The government&apos;s own stay request says the
        dispute will likely reach the Supreme Court. Until a stay or a
        merits decision changes something, the two blocking orders control
        — which is why the status box at the top of this page says
        BLOCKED, not “cancelled.” The fee is blocked, not repealed.
      </p>

      <h2>What to watch next</h2>
      <ul>
        <li>
          <strong>Ninth Circuit stay decision</strong> on the September
          30 California order — requested October 9, 2026, with no stay
          reported as of October 25, 2026. A granted stay is the
          fastest way collection resumes, faster than any final ruling.
        </li>
        <li>
          <strong>First Circuit merits appeal</strong> of the June 8
          Massachusetts vacatur — merits briefing concluded October 16,
          2026, according to law-firm reporting; a decision is pending.
        </li>
        <li>
          <strong>D.C. Circuit appeal</strong> of the December 2025 ruling
          upholding the fee — argued March 2026, undecided. A government
          win there deepens the split.
        </li>
        <li>
          <strong>Northern District of California case management
          conference</strong> on October 27, 2026 — procedural; unlikely to
          change the status by itself, but it sets the schedule for the
          underlying case.
        </li>
        <li>
          <strong>$103,265 final rule</strong> — comments closed
          September 24, 2026; no final rule and no effective date have been
          announced.
        </li>
      </ul>
      <p>
        This page is re-checked daily against court dockets and USCIS
        guidance. The status box at the top changes the day any of the
        above moves — not at the next news cycle.
      </p>

      <h2>What employers should do now</h2>
      <ol>
        <li>
          <strong>Do not pay the $100,000 today.</strong> It is not being
          collected. Ordinary USCIS filing fees still apply in full.
        </li>
        <li>
          <strong>Do not budget it as zero forever.</strong> Treat it as a
          contingent cost: USCIS has said DHS still intends to collect the
          payment if the blocking orders are lifted.
        </li>
        <li>
          <strong>Confirm with immigration counsel</strong> before filing
          any petition that would have been covered — especially workers
          abroad and consular-processing cases.
        </li>
        <li>
          <strong>Watch stay motions, not just final rulings.</strong> A
          stay can restore collection in days, while a merits appeal takes
          months.
        </li>
        <li>
          <strong>Keep the $103,265 proposal in a separate budget
          line.</strong> It is a different fee, on a different legal track,
          with a different fate — and it would stack on top of existing
          fees if finalized.
        </li>
        <li>
          <strong>If you already paid:</strong> over 700 petitions did
          while the fee was in force. No refund process for those payments
          has appeared in the sources we checked — ask counsel before
          assuming anything about recovery.
        </li>
      </ol>

      <h2>Frequently asked questions</h2>

      <h3>Is the $100,000 H-1B fee active now?</h3>
      <p>
        No. As of October 25, 2026, two federal court orders block its
        enforcement — the June 8, 2026 Massachusetts vacatur and the
        September 30, 2026 California injunction — and USCIS is not
        collecting the payment. The government&apos;s October 9, 2026
        appeal to the Ninth Circuit does not change that, because an
        appeal alone does not lift an injunction.
      </p>

      <h3>Who would have to pay the $100,000 fee if it came back?</h3>
      <p>
        Under the USCIS guidance of October 20, 2025: employers filing new
        H-1B petitions for beneficiaries outside the United States without
        a valid H-1B visa; petitions requesting consular, port-of-entry,
        or pre-flight notification; and change-of-status, amendment, or
        extension petitions where USCIS denies the requested benefit and
        approves the case for consular processing instead.
      </p>

      <h3>Does the fee apply to renewals, extensions, or F-1 to H-1B change of status?</h3>
      <p>
        No — not under the USCIS guidance. Approved change of status,
        amendment, extension, or change of employer for someone inside the
        United States was outside the fee&apos;s scope, and that includes
        the usual F-1 (OPT) to H-1B change of status. The fee only attached
        if the requested benefit was denied and the case went to consular
        processing.
      </p>

      <h3>What is the $103,265 H-1B fee? Is it the same thing?</h3>
      <p>
        No. It is a separate DHS proposal published in the Federal
        Register on August 25, 2026 (Docket USCIS-2026-0298) that would
        charge $103,265 on every cap-subject H-1B petition, on top of
        existing fees. It is not in effect, its comment period closed
        September 24, 2026, and no final rule has been issued. It also
        explicitly excludes cap-exempt employers, which the proclamation
        payment never did.
      </p>

      <h3>Can the $100,000 fee come back?</h3>
      <p>
        Yes. If an appeals court grants a stay of either blocking order,
        or if the government wins on the merits, collection can resume —
        and USCIS has said DHS still intends to collect the payment if the
        orders are lifted. That is why this page says BLOCKED rather than
        cancelled, and why employers should keep it as a contingent cost.
      </p>

      <h3>Did the September 2026 extension bring the fee back?</h3>
      <p>
        No. Proclamation 11069 (September 18, 2026) extended the
        restriction on paper through September 21, 2027, but the September
        30, 2026 California order expressly covers implementation under
        both the original proclamation and the extension. The extension
        changed the paper expiry date, not the enforcement reality.
      </p>

      <h3>How many employers actually paid the $100,000?</h3>
      <p>
        Over 700 petitions, according to Proclamation 11069 itself, which
        states the payment had been made for over 700 petitions since the
        original proclamation took effect on September 21, 2025. The
        proclamation also cites its own impact figures — including a fall
        in large IT outsourcing firms&apos; combined H-1B registrations
        from 24,946 to 2,055 — as the administration&apos;s
        characterization of the policy&apos;s effect, not as independently
        verified data.
      </p>

      <h3>What should employers do right now?</h3>
      <p>
        Do not pay the $100,000 today, but do not treat it as gone either:
        keep it as a contingent cost, confirm any covered filing with
        immigration counsel, watch stay decisions (the fastest way it
        returns), and keep the separate $103,265 proposal in its own
        budget line.
      </p>

      <h2>Methodology &amp; Sources</h2>
      <p>
        Every date in this article comes from a primary document or a
        court record: Presidential Proclamation 10973 (90 FR 46027) and
        Proclamation 11069 (91 FR 60497); the DHS notice of proposed
        rulemaking published August 25, 2026; USCIS guidance of October
        20, 2025 and its compliance statement of July 28, 2026; and the
        dockets in the District of Massachusetts (No. 1:25-cv-13829), the
        Northern District of California (No. 4:25-cv-08454), the District
        of Columbia (No. 1:25-cv-03675), the First Circuit (No. 26-1699),
        and the Ninth Circuit (appeal filed October 9, 2026). Court
        reporting was cross-checked across multiple law-firm and news
        sources before any date was used. Administration impact figures
        are attributed to the proclamation that states them, not presented
        as independent verification. This article reports the status; it
        does not predict how any court will rule.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          Presidential Proclamation 10973, “Restriction on Entry of
          Certain Nonimmigrant Workers,” 90 FR 46027 (September 24, 2025)
          — the original $100,000 payment, effective September 21, 2025
        </li>
        <li>
          <a href="https://www.govinfo.gov/content/pkg/FR-2026-09-23/pdf/2026-19554.pdf" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            Presidential Proclamation 11069, 91 FR 60497 (September 23,
            2026)
          </a>{" "}
          — extension through September 21, 2027; states the payment had
          been made for over 700 petitions (govinfo.gov)
        </li>
        <li>
          <a href="https://www.govinfo.gov/content/pkg/FR-2026-08-25/html/2026-17324.htm" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            DHS / USCIS notice of proposed rulemaking, Federal Register,
            August 25, 2026
          </a>{" "}
          — the separate $103,265 fee on cap-subject petitions, Docket
          USCIS-2026-0298 (govinfo.gov)
        </li>
        <li>
          <a href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            USCIS — H-1B Specialty Occupations
          </a>{" "}
          — current agency position, including the July 28, 2026
          statement that DHS will comply with the court orders but still
          intends to collect the payment if they are lifted (uscis.gov)
        </li>
        <li>
          Court records: State of California v. Mullin, No.
          1:25-cv-13829 (D. Mass., June 8, 2026 — vacatur); Global Nurse
          Force v. Trump, No. 4:25-cv-08454 (N.D. Cal., September 30, 2026
          — preliminary injunction); Chamber of Commerce v. DHS, No.
          1:25-cv-03675 (D.D.C., December 23, 2025 — fee upheld, on
          appeal); First Circuit No. 26-1699 (stay denied July 24, 2026);
          Ninth Circuit appeal filed October 9, 2026 (stay requested, none
          reported as of October 25, 2026)
        </li>
        <li>
          <Link href="/tools/cap-exempt-employers" className="underline text-blue-600">
            VisaTalentUSA — Cap-Exempt Employers Finder
          </Link>{" "}
          — the cap-exempt / cap-subject distinction and the fee FAQ
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: October 25, 2026. Status last checked: October 25,
          2026. This page is re-checked daily and updated the same day the
          status changes. Not legal advice — consult a qualified
          immigration attorney for your specific situation.
        </em>
      </p>
    </>
  );
}
