import Link from "next/link";

export default function H1BGracePeriodContent() {
  return (
    <>
      <p className="lead">
        If your H-1B job ends — layoff, termination, or resignation — you do
        not lose lawful status the next morning. Under{" "}
        <strong>8 CFR 214.1(l)(2)</strong>, you get a discretionary period of
        up to <strong>60 consecutive calendar days</strong>, or until your
        authorized validity period (your I-94) ends, <strong>whichever is
        shorter</strong>, once per authorized validity period. During it you
        keep your status, but you <strong>cannot work</strong> — unless a
        separate authorization applies, such as H-1B portability when a new
        employer files a nonfrivolous I-129. And one urgent warning: DHS has{" "}
        <em>proposed</em> eliminating this grace period entirely (comments due
        November 10, 2026). That proposal is <strong>not law yet</strong> — the
        current rule still applies. This guide gives you the rule exactly as
        written, a day-by-day plan, and what to do about the proposal.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">Key facts (last checked October 30, 2026)</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li><strong>Rule:</strong> 8 CFR 214.1(l)(2) — up to 60 consecutive calendar days or until I-94 expiry, whichever is shorter, once per authorized validity period</li>
          <li><strong>Discretionary, not guaranteed:</strong> DHS may shorten or eliminate it case by case; there is no form to apply for it — USCIS decides when adjudicating your later filing</li>
          <li><strong>No work during the grace period</strong> unless a separate authorization applies — H-1B portability begins when USCIS <em>receives</em> a new nonfrivolous I-129, not on approval</li>
          <li><strong>Clock start:</strong> the day after termination, typically the last day for which a salary or wage is paid — severance paid after your last working day does not automatically move it</li>
          <li><strong>Who it covers:</strong> E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, and TN workers and their dependents</li>
          <li><strong>2026 proposal (NOT law):</strong> DHS proposes deleting 214.1(l)(2) — 91 FR 57807, September 11, 2026, docket USCIS-2026-0364, comments due November 10, 2026</li>
          <li><strong>H-4 spouses:</strong> an H-4 EAD remains valid <em>during</em> the grace period, per USCIS — but not after it ends without a new basis</li>
        </ul>
      </div>

      <h2>The Rule, Quoted and Explained</h2>
      <p>
        The regulation itself is short, and it is worth reading verbatim,
        because most of the confusion about the grace period comes from
        paraphrases that drop one of its limits:
      </p>
      <p>
        <em>
          "An alien admitted or otherwise provided status in E-1, E-2, E-3,
          H-1B, H-1B1, L-1, O-1 or TN classification and his or her dependents
          shall not be considered to have failed to maintain nonimmigrant
          status solely on the basis of a cessation of the employment on
          which the alien's classification was based, for up to 60 consecutive
          days or until the end of the authorized validity period, whichever
          is shorter, once during each authorized validity period. DHS may
          eliminate or shorten this 60-day period as a matter of discretion.
          Unless otherwise authorized under 8 CFR 274a.12, the alien may not
          work during such a period."
        </em>{" "}
        — 8 CFR 214.1(l)(2)
      </p>
      <p>
        In plain English, every clause of that paragraph is doing work:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>What it means for you</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Who is covered</td><td>Workers in E-1, E-2, E-3, H-1B, H-1B1, L-1, O-1, and TN status — and their dependents. It does not cover F-1/OPT, which has its own separate unemployment limits.</td></tr>
            <tr><td>How long</td><td>Up to 60 <em>consecutive calendar</em> days. Weekends and holidays count.</td></tr>
            <tr><td>The hard cap</td><td>Your I-94 / authorized validity end cuts the period short. If your I-94 has 20 days left, your window is 20 days, not 60.</td></tr>
            <tr><td>How often</td><td>Once per authorized validity period. A new employer and a new validity period can give rise to a fresh grace period later; returning to the same employer on the same petition does not reset it.</td></tr>
            <tr><td>Discretionary</td><td>DHS may shorten or eliminate it case by case. In practice most workers who maintained status receive it, but it is only confirmed when USCIS adjudicates your later filing — so ask for a favorable exercise of discretion in that filing's cover letter.</td></tr>
            <tr><td>No work</td><td>Status during the grace period is not work authorization. Freelance, remote, or unpaid work in a normally paid role can count as unauthorized employment.</td></tr>
            <tr><td>No form</td><td>There is no application for the grace period itself. It is determined when USCIS adjudicates your next petition or application.</td></tr>
            <tr><td>Voluntary or involuntary</td><td>Both count. USCIS confirms the grace period may apply to voluntary and involuntary cessation alike — resignation counts the same way a layoff does.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The rule dates to the January 2017 high-skilled workers regulation (81
        FR 82398, effective January 17, 2017). Before 2016 there was no such
        grace period at all — which is exactly what the 2026 proposal would
        return to.
      </p>

      <h2>60-Day vs. 10-Day vs. 180-Day: Do Not Mix These Up</h2>
      <p>
        Three different numbers circulate for H-1B grace periods, and only two
        of them are real. Mixing them up is one of the most common — and most
        expensive — mistakes in this area.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>60-day period — 8 CFR 214.1(l)(2)</th>
              <th>10-day period — 8 CFR 214.1(l)(1) / 214.2(h)(13)(i)(A)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Trigger</td><td>Employment ends <em>before</em> the validity period ends (layoff, resignation, termination)</td><td>Validity period runs its full course (job completed, petition expires, no extension filed)</td></tr>
            <tr><td>Length</td><td>Up to 60 consecutive days, capped by validity / I-94 end</td><td>Up to 10 days before validity begins and up to 10 days after it ends</td></tr>
            <tr><td>Work?</td><td>No, except under a separate authorization</td><td>No, except during the validity period itself</td></tr>
            <tr><td>Can you stack them?</td><td colSpan={2}>No. The 10-day period may not be added to the 60-day period. If you are laid off mid-petition, the 60-day rule is the relevant one — not the 10-day rule.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        And the <strong>90-day, 120-day, and 180-day grace periods do not
        exist</strong>. Those figures come from old confusion and from an
        advisory-panel recommendation that was never implemented. The current
        regulation says 60. Anyone promising you 90 or 180 days is selling you
        a deadline that will not hold.
      </p>
      <p>
        One more distinction that decides real cases: your <strong>visa
        stamp</strong> expiry is not your deadline — your <strong>I-94</strong>{" "}
        is. The stamp is permission to seek entry; the I-94 records how long
        you are authorized to stay. Check your I-94 on the CBP I-94 website,
        not the stamp in your passport.
      </p>

      <h2>When Does the Clock Actually Start?</h2>
      <p>
        USCIS applies a simple test: the clock starts <strong>the day after
        termination of employment, typically determined by the last day for
        which a salary or wage is paid</strong>. The hard part is that "last
        day" is not always the day you cleaned out your desk. Use this table —
        and get the deciding date in writing from your employer:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>What happens to the clock</th>
              <th>Document that proves it</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Immediate termination, no severance</td><td>Clock starts the day after your last working day.</td><td>Termination letter with the last working day stated.</td></tr>
            <tr><td>Lump-sum severance or PTO payout after your last working day</td><td>Does <em>not</em> automatically move the clock. Severance is generally compensation for job loss, not payment for services rendered.</td><td>Severance agreement showing the payment is post-employment compensation, plus your final pay stub.</td></tr>
            <tr><td>Garden leave / formal notice period, still an active paid W-2 employee</td><td>Fact-dependent: if you remain an active, paid employee with the petition and LCA intact, cessation may be later — but this is scrutinized in 2026 adjudication. Do not assume it; get it confirmed.</td><td>Written confirmation that you remain employed, paid, and in the same role, with petition and LCA unwithdrawn.</td></tr>
            <tr><td>Salary continuation on payroll</td><td>Same principle as garden leave: what matters is whether you are still an active, paid employee — not what the payment is called.</td><td>Payroll records and a written statement of your employment status during the continuation period.</td></tr>
            <tr><td>WARN notice / notice of future termination</td><td>The notice paper alone does not decide it. What matters is when employment actually ceases under the test above.</td><td>The notice plus the actual last day of paid employment.</td></tr>
            <tr><td>Resignation</td><td>Clock starts the day after your last day of employment, same as a layoff. Voluntary cessation counts.</td><td>Resignation acceptance stating your last working day.</td></tr>
            <tr><td>Termination for cause</td><td>Same clock rules. The reason for termination does not change the start-date test (though fraud, unauthorized employment, or criminal issues can be grounds for USCIS to shorten or deny the period).</td><td>Termination letter with the last working day stated.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Do not let two dates get blurred: the date your employment ceased
        (your clock trigger) and the date your employer <em>withdraws</em> the
        petition (an employer compliance step, covered below). The withdrawal
        letter is not your clock trigger.
      </p>

      <h2>How to Calculate Your Real Deadline</h2>
      <p>
        Your deadline is the <strong>shorter</strong> of two dates: 60 days
        after your last day of paid employment, or your I-94 expiry date. Work
        it out on Day 0 — not Day 59:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Last day of paid employment</th>
              <th>I-94 expiry</th>
              <th>Your real deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>March 15</td><td>After May 14</td><td><strong>May 14</strong> (grace begins March 16, 60 consecutive days end May 14)</td></tr>
            <tr><td>March 15</td><td>20 days later</td><td><strong>20 days, not 60</strong> — the I-94 cap cuts the period short</td></tr>
            <tr><td>March 15</td><td>25 days later</td><td><strong>25 days, not 60</strong> — same cap, same result</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Practical rule used by every careful practitioner: <strong>file by
        Day 59, not Day 60</strong>. A filing on Day 60 itself carries a
        specific reported risk — USCIS may approve the petition but deny the
        extension of status, leaving you to consular-process from abroad. Do
        not let a deadline you control turn into a departure you did not
        plan.
      </p>

      <h2>Day-by-Day Action Plan</h2>
      <h3>Day 0 — the day employment ends</h3>
      <ul>
        <li>Confirm your last day of paid employment <strong>in
        writing</strong> — termination letter, not a verbal assurance.</li>
        <li>Download your most recent I-94 from the CBP I-94 website and save
        every I-797 approval notice and recent pay stub.</li>
        <li>Write down your two candidate deadlines (60 days out, and your
        I-94 date) and circle the shorter one. That is your real deadline.</li>
      </ul>
      <h3>Days 1–2 — get advice and start the search</h3>
      <ul>
        <li>Consult an immigration attorney, even for one session — the
        discretionary nature of the grace period means your later filing
        should ask for a favorable exercise of discretion in its cover
        letter.</li>
        <li>Ask your former employer, in writing: will you withdraw the
        petition with USCIS and the LCA with DOL, and when? Ask about return
        transportation (covered below).</li>
        <li>Start sponsor outreach immediately. Use our{" "}
        <Link href="/tools/sponsor-match" className="text-blue-700 underline underline-offset-2">
          sponsor match tool
        </Link>{" "}
        to find employers actually filing H-1B petitions in your role, and
        check any employer on our{" "}
        <Link href="/sponsors" className="text-blue-700 underline underline-offset-2">
          top sponsors list
        </Link>
        .</li>
      </ul>
      <h3>Week 1 — understand the new employer's clock</h3>
      <ul>
        <li>Any new employer must first get a certified Labor Condition
        Application (LCA) from DOL — USCIS notes this generally takes about 7
        working days — <em>before</em> it can file your I-129. That lead time
        comes out of your 60 days, which is why Week 1 matters more than
        Week 8.</li>
        <li>Decide your ranked paths (below) with your attorney. Do not wait
        for one path to fail before starting the next.</li>
      </ul>
      <h3>Days 14, 30, and 45 — decision gates</h3>
      <ul>
        <li><strong>Day 14:</strong> you should have at least one employer in
        active LCA or interview stages, or a filed I-539 path started.</li>
        <li><strong>Day 30:</strong> if no employer petition is in motion,
        file the change-of-status safety net (B-2 or dependent status) rather
        than betting everything on a late hire.</li>
        <li><strong>Day 45:</strong> final decision point. If no petition is
        filed, your realistic options are a pending I-539 or an orderly
        departure plan.</li>
      </ul>
      <h3>Days 50–59 — file, do not wait</h3>
      <ul>
        <li>Every filing that must beat the deadline should be <em>received</em>{" "}
        by USCIS in this window. "Mailed on Day 59" is not "received on Day
        59."</li>
      </ul>
      <h3>Day 60 — last filing and departure day</h3>
      <ul>
        <li>If a qualifying filing is received today, you have done what the
        rule requires. If nothing is filed, today is the day to depart.</li>
      </ul>
      <h3>Day 61 — three branches (see the Day 61 section below)</h3>
      <ul>
        <li>Timely filing pending → you remain in a period of authorized
        stay.</li>
        <li>No filing → you are out of status and accruing risk.</li>
        <li>Filing denied → unlawful presence accrues from the day after
        denial.</li>
      </ul>

      <h2>Path 1 — New Employer Petition (H-1B Portability)</h2>
      <p>
        This is the path that keeps you employed, and it is the one most
        guides get wrong on a single decisive point. Your new employer files{" "}
        <strong>Form I-129</strong> (Petition for a Nonimmigrant Worker) with
        a certified LCA, requesting an amendment or extension of your status.
        If you are eligible for portability, you may begin work{" "}
        <strong>immediately after USCIS receives the nonfrivolous
        petition</strong>. That is USCIS's trigger — receipt by USCIS, not
        approval, and not the I-797C receipt notice. Several well-known guides
        say you must wait for approval or for the receipt notice; that is
        stricter than the rule. (Many attorneys still advise waiting for the
        receipt notice as a safety practice, because the notice is your proof
        of receipt — that is practical advice, not the legal trigger.)
      </p>
      <p>
        Portability has conditions: you must have been lawfully admitted, the
        petition must be nonfrivolous and filed before your authorized stay
        expires, and you must not have worked without authorization since your
        last admission. If the petition is denied, portability work
        authorization ends. Premium processing is available on Form I-907
        (15 business days for I-129 petitions) — check the current USCIS fee
        schedule before filing, as fees change.
      </p>
      <p>
        Two more points practitioners flag: if your former employer has not
        withdrawn its petition and it is still valid for the same position, a
        rehire can mean resuming work with no further filing — but if the
        employer notified USCIS to revoke the petition, a new petition is
        required. And cap-exempt employers (universities, nonprofit or
        government research organizations, and their affiliates) can hire
        outside the annual cap at any time, which can matter when the clock
        is short. Our{" "}
        <Link href="/tools/h1b-transfer" className="text-blue-700 underline underline-offset-2">
          H-1B transfer guide
        </Link>{" "}
        walks through fees, timeline, and eligibility in detail.
      </p>

      <h2>Path 2 — Change to B-2 Visitor Status (the Bridge)</h2>
      <p>
        File <strong>Form I-539</strong> (Application to Extend/Change
        Nonimmigrant Status) before your grace period ends, requesting a
        change to B-2 visitor status. Understand exactly what this buys: a
        timely, nonfrivolous I-539 gives you a <em>period of authorized
        stay</em> while it is pending — it does <strong>not</strong> itself
        grant B-2 status. USCIS must approve it, and B-2 admission is
        typically up to 6 months.
      </p>
      <p>
        B-2 does not permit work — B-2 visitors are barred from skilled and
        unskilled labor — but job search and interviews are permissible
        visitor activities. Expect scrutiny in 2026: a B-2 request whose only
        visible purpose is open-ended job hunting draws more questions than
        one showing temporary intent, funds, and a departure plan. If a new
        employer later files an I-129, USCIS generally processes the pending
        I-539 together with it. Do not file B-2 as a stalling tactic with no
        plan behind it.
      </p>

      <h2>Path 3 — Change to Dependent Status (H-4, L-2, and Others)</h2>
      <p>
        If your spouse holds qualifying status, file <strong>Form
        I-539</strong> to change to dependent status (H-4, L-2, or another
        applicable classification) before the grace period ends. The same
        authorized-stay mechanics apply as with B-2: pending means authorized
        stay; approval means the status itself.
      </p>
      <p>
        Work follows different rules by classification. Spouses in E and L
        status may be work-authorized incident to status. An H-4 spouse
        cannot work until H-4 status is approved <em>and</em>, where
        required, a separate H-4 EAD is approved on Form I-765. H-4 EAD
        eligibility itself generally requires an approved I-140 (or an AC21
        H-1B extension) for the principal worker. See our{" "}
        <Link href="/blog/h4-ead-guide" className="text-blue-700 underline underline-offset-2">
          H-4 EAD guide
        </Link>{" "}
        for who qualifies, how to apply, and the current renewal rules.
      </p>

      <h2>Path 4 — Departure, Done Right</h2>
      <p>
        Depart <strong>on or before</strong> Day 60 or your I-94 expiry,
        whichever is shorter. Departure preserves a clean record and avoids
        unlawful-presence accrual — but understand what it costs:{" "}
        <strong>departure ends the grace period immediately</strong>, and it
        cannot be recaptured on re-entry. Returning later requires a new
        status basis (a new approved petition plus a visa, or another
        classification) and discretionary admission by CBP.
      </p>
      <p>
        One claim you should make if it applies to you: on involuntary
        cessation, an H-1B employer must pay the reasonable costs of return
        transportation to your last place of foreign residence (8 CFR
        214.2(h)(4)(iii)(E)). Ask for it in writing; do not assume it will
        be offered.
      </p>

      <h2>Beyond the Four Paths</h2>
      <p>
        USCIS's own guidance lists further options that do not fit the
        four-path frame, and one of them may fit you better:
      </p>
      <ul>
        <li><strong>Adjustment of status (Form I-485)</strong> — if you are
        eligible and a visa number is available. A pending adjustment case
        has its own portability rules (INA 204(j) and Supplement J) — get
        attorney advice before assuming a job change is safe.</li>
        <li><strong>Compelling circumstances EAD</strong> — for workers with
        an approved I-140, no visa number available, and compelling
        circumstances, via Form I-765 for up to 1 year. Understand the
        trade-off before choosing it: it gives a period of authorized stay,
        not nonimmigrant status, and from it you generally cannot change
        status or adjust status from inside the U.S. — consular processing
        would be required.</li>
        <li><strong>Change to F-1 or another work classification</strong> —
        via I-539 (F-1, with a Form I-20) or a new employer's I-129 for
        another classification. Each has its own eligibility rules and
        timelines.</li>
      </ul>

      <h2>H-4 Spouse and Children During the Grace Period</h2>
      <p>
        Dependents get the same grace period as the principal worker — the
        regulation covers "his or her dependents" in the same sentence. And
        USCIS answers the most-asked dependent question directly:{" "}
        <strong>if your spouse has an EAD or employment authorization
        incident to status, that authorization remains valid during the
        maximum 60-day grace period.</strong> Several secondary guides hedge
        this point; USCIS does not.
      </p>
      <p>
        But the second half matters just as much, and some guides overstate
        it: when the grace period ends without a new basis, derivative H-4
        status ends with it, and the H-4 EAD becomes invalid for work{" "}
        <em>even if the card's printed expiry date is later</em>. Working
        after that point is unauthorized employment. This is the standard
        reading of derivative status — USCIS states the during-grace part
        directly; the post-grace consequence follows from how derivative
        status works.
      </p>
      <p>
        The reverse move is also available: the worker can switch{" "}
        <em>to</em> H-4 status on Form I-539 if the spouse holds qualifying
        H-1B status — but cannot work until H-4 is approved and, where
        required, a separate H-4 EAD is approved. H-4 children must be under
        21 and unmarried, and H-4 itself carries no work authorization.
      </p>
      <p>
        Do not confuse this with a different, already-final change: the{" "}
        <em>automatic extension</em> of H-4 EADs while a renewal is pending
        has ended under a separate final rule. That is about renewals, not
        about validity during the grace period. Our{" "}
        <Link href="/blog/h1b-extension-process-2026-changes" className="text-blue-700 underline underline-offset-2">
          H-1B extension guide
        </Link>{" "}
        covers that final rule in detail — read it alongside this guide, not
        instead of it.
      </p>

      <h2>Your Employer: Withdrawal, Wages, and the Return Ticket</h2>
      <p>
        Your former employer has its own paperwork, and it runs through two
        different agencies: it must notify USCIS to withdraw the petition,
        and separately withdraw the LCA with the Department of Labor (through
        the FLAG system). Ask for written confirmation of both.
      </p>
      <p>
        A "bona fide termination" also stops the employer's wage obligation —
        until USCIS is notified, DOL may treat employment as active and hold
        the employer liable for back wages. That is the employer's liability,
        not yours, but it is why prompt written notice matters to both sides.
        And remember the separation that protects you: <strong>your clock
        runs from cessation of employment, not from the withdrawal
        letter</strong>. Several guides blur these two dates; do not let
        yours blur.
      </p>

      <h2>Green-Card Protection While the Clock Runs</h2>
      <p>
        A layoff does not automatically destroy a green-card case, but two
        rules decide what survives:
      </p>
      <ul>
        <li><strong>I-140 priority date:</strong> your priority date is
        generally retained even if the employer later withdraws the I-140.
        But the <em>beyond-six-year H-1B extension benefit</em> is lost if
        the I-140 is withdrawn within 180 days of its approval. That 180-day
        line is the single most valuable date in this section — know where
        you stand against it.</li>
        <li><strong>Pending I-485:</strong> portability under INA 204(j)
        (with Supplement J) can let you change employers on a pending
        adjustment case, under conditions your attorney must confirm. Do not
        assume a pending I-485 makes a job change safe.</li>
      </ul>
      <p>
        Track both against your own dates with our{" "}
        <Link href="/tools/priority-date-tracker" className="text-blue-700 underline underline-offset-2">
          priority date tracker
        </Link>
        , and read our{" "}
        <Link href="/blog/i140-processing-time" className="text-blue-700 underline underline-offset-2">
          I-140 processing time guide
        </Link>{" "}
        for how long each stage actually takes. Processing times for any new
        filing can be checked on our{" "}
        <Link href="/tools/processing-time" className="text-blue-700 underline underline-offset-2">
          processing time tracker
        </Link>
        .
      </p>

      <h2>Money, Benefits, and Life Logistics</h2>
      <p>
        The immigration clock is not the only clock. Two benefits items
        deserve a line each: COBRA continuation coverage generally gives you
        60 days to elect coverage, for up to 18 months — check your election
        notice immediately, because the election window runs alongside your
        grace period, not after it. And review your 401(k) and HSA options,
        your lease terms, and any non-compete clause in your severance
        agreement before you sign it — a non-compete can quietly close off
        the new-employer path.
      </p>
      <p>
        <strong>Unemployment benefits are unsettled — do not assume an
        answer.</strong> Secondary sources conflict on this: some suggest
        H-1B workers are generally eligible for state unemployment insurance,
        while a DOL-based reading says benefits are generally unavailable
        during the grace period because it is not work authorization.
        Eligibility is state-specific and fact-specific. Check your state's
        rules and get advice before filing or assuming either answer. This
        guide deliberately does not state a national rule on this point.
      </p>

      <h2>The 2026 Proposal to Eliminate the Grace Period — What It Is, and Is Not</h2>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">Proposal citation box (proposal only — not law)</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li><strong>Title:</strong> "Eliminating the Discretionary 60-Day Grace Period"</li>
          <li><strong>Citation:</strong> 91 FR 57807, Federal Register Vol. 91, No. 175, Friday, September 11, 2026 (FR Doc. 2026-18631)</li>
          <li><strong>Docket:</strong> USCIS-2026-0364; RIN 1615-AD22; 8 CFR Parts 204 and 214</li>
          <li><strong>Comments due:</strong> November 10, 2026, before midnight Eastern Time, via the Federal eRulemaking Portal (regulations.gov) only — mailed and hand-delivered comments are not accepted at this time</li>
          <li><strong>What it would delete:</strong> 8 CFR 214.1(l)(2) — the up-to-60-day discretionary grace period — restoring the pre-2017 policy of no grace period</li>
          <li><strong>Status as of October 30, 2026:</strong> proposal only. No final rule, no effective date. The current rule remains in effect.</li>
        </ul>
      </div>
      <p>
        If finalized as written, an affected worker whose employment ends
        would generally be expected to depart immediately upon failure to
        maintain the employment or activity that formed the basis of status,
        unless otherwise authorized to remain. The separate 10-day periods at
        the edges of a validity period are not what this proposal deletes —
        but they do not help a mid-petition job loss in any case, so they are
        not a substitute.
      </p>
      <p>
        <strong>What to do now, while it is still only a proposal:</strong>
      </p>
      <ul>
        <li>Do not change a sound plan based on a rule that does not yet
        exist — but do not assume a future cushion either. If a job loss is
        possible, get the safety-net filing (I-539) ready <em>before</em> you
        need it.</li>
        <li>If you can quantify business impact, consider commenting on
        docket USCIS-2026-0364 before November 10, 2026. DHS must review
        comments before deciding to finalize, modify, or abandon the
        proposal.</li>
        <li>Track the docket on regulations.gov and watch for a final rule —
        a final rule would set its own effective date, and controversial
        rules routinely take many months and face litigation.</li>
        <li>Re-check this guide after November 10, 2026. Anything written
        before the comment deadline is, by definition, written before the
        story ends.</li>
      </ul>
      <p>
        Never write or repeat this as "the grace period has been eliminated."
        Until a final rule publishes, that sentence is false.
      </p>

      <h2>Misconceptions Corrected</h2>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Myth</th>
              <th>Correction</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Severance / PTO extends my 60 days.</td><td>No — not automatically. The USCIS test is the last day salary or wage is paid. Severance after your last working day is generally compensation for job loss, not payment for services. The exception is narrow: remaining an active, paid employee (garden leave / notice period) is fact-dependent.</td></tr>
            <tr><td>The 60 days are automatic / guaranteed.</td><td>No — discretionary. DHS may shorten or eliminate it case by case, and USCIS confirms it only on adjudication of your later filing.</td></tr>
            <tr><td>I can work during the grace period.</td><td>No. Status is not work authorization. The only work routes are separate authorizations — portability on a properly filed I-129, a valid dependent EAD, a compelling circumstances EAD, and the like.</td></tr>
            <tr><td>My I-94 date doesn't matter; I always get 60 days.</td><td>Wrong. The I-94 / validity end is a hard cap: whichever is shorter. And the visa stamp is not the deadline — the I-94 is.</td></tr>
            <tr><td>There's a 90-day / 120-day / 180-day grace period.</td><td>No. Those figures come from old confusion and an unimplemented recommendation. The regulation says 60.</td></tr>
            <tr><td>The 10-day period covers my layoff.</td><td>No. The 10-day period attaches to the edges of a completed validity period, not to a mid-petition termination — and it cannot be stacked onto the 60 days.</td></tr>
            <tr><td>I can travel and come back on my grace period.</td><td>No. Departure ends the grace period immediately; it cannot be recaptured. Re-entry needs a new status basis and CBP admission.</td></tr>
            <tr><td>The grace period has already been eliminated (2026 proposal).</td><td>No. Proposal only, comments due November 10, 2026, no final rule. The current rule still applies.</td></tr>
            <tr><td>Filing I-539 gives me the new status.</td><td>No. A timely, nonfrivolous filing gives a period of authorized stay while pending; the status itself requires approval.</td></tr>
            <tr><td>If I miss Day 60 by one day I'm automatically barred for 3 years.</td><td>No. Bars attach on departure after unlawful presence accrues (more than 180 days → 3-year bar; one year or more → 10-year bar). A timely filing pending past Day 60 means authorized stay, not unlawful presence.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Day 61: Three Branches, Three Very Different Outcomes</h2>
      <p>
        <strong>Branch 1 — a timely, nonfrivolous filing is pending.</strong>{" "}
        You remain in a period of authorized stay even past Day 60, and
        unlawful presence is tolled while the filing is pending (provided
        there was no unauthorized work before or while it was pending). If
        that filing is denied, unlawful presence accrues from the day after
        denial — and an appeal or motion (Form I-290B) does not stop that
        accrual.
      </p>
      <p>
        <strong>Branch 2 — no qualifying filing, still in the U.S.</strong>{" "}
        You are no longer maintaining status. USCIS's own framing is that
        the worker and dependents "may then need to depart" by the deadline
        — not after it. Every additional day is out-of-status time, and it
        is the accrual of unlawful presence, followed by departure, that
        triggers the 3-year and 10-year bars — not Day 61 itself.
      </p>
      <p>
        <strong>Branch 3 — filing denied.</strong> Portability work
        authorization (if any) ends, and unlawful presence starts accruing
        the day after denial. This is the branch where an attorney's advice
        matters most, immediately — not next week.
      </p>
      <p>
        One related rule worth knowing: if you were terminated while abroad
        and received no notice, or the notice period ended before your
        return, the grace period does not apply in the way it would for a
        worker terminated inside the U.S. Talk to an attorney before
        attempting re-entry on an old status.
      </p>

      <h2>Documents Checklist and Filing Checklist</h2>
      <p>
        Keep these together from Day 0 — USCIS adjudicates your later filing
        on paper, and the paper you saved on Day 0 is the paper that decides
        it:
      </p>
      <ul>
        <li>Termination letter stating your last working day, and your
        severance agreement (read the non-compete before signing).</li>
        <li>Most recent I-94 (from the CBP I-94 website) and every I-797
        approval notice.</li>
        <li>Recent pay stubs and final pay statement — these prove your last
        day of paid employment.</li>
        <li>Your employer's written confirmation of petition and LCA
        withdrawal (or non-withdrawal).</li>
        <li>Prior I-140 approval notice and priority date, if any.</li>
        <li>Dependent documents: spouse's status evidence, H-4 EAD card, and
        children's status records.</li>
      </ul>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Form</th>
              <th>Who files it</th>
              <th>What it is for</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>I-129</td><td>New employer</td><td>H-1B petition — change of employer / portability, with a certified LCA</td></tr>
            <tr><td>I-539</td><td>You (or your spouse, for dependent status)</td><td>Change to B-2, H-4, L-2, F-1, or another nonimmigrant status</td></tr>
            <tr><td>I-765</td><td>You / your spouse</td><td>Employment authorization — H-4 EAD or compelling circumstances EAD</td></tr>
            <tr><td>I-485</td><td>You</td><td>Adjustment of status, if eligible and a visa number is available</td></tr>
            <tr><td>I-907</td><td>Employer (or you, where applicable)</td><td>Premium processing request — 15 business days for I-129 petitions</td></tr>
          </tbody>
        </table>
      </div>

      <h2>H-1B Grace Period: Frequently Asked Questions</h2>

      <h3>How long is the H-1B grace period after a layoff?</h3>
      <p>
        Up to 60 consecutive calendar days, or until your authorized validity
        period (I-94) ends, whichever is shorter — under 8 CFR 214.1(l)(2).
        It is discretionary, applies once per authorized validity period, and
        does not itself authorize work.
      </p>

      <h3>When does the 60-day grace period start?</h3>
      <p>
        The day after termination of employment, typically determined by the
        last day for which a salary or wage is paid. Severance paid after
        your last working day does not automatically move the clock; if you
        remain an active, paid employee on garden leave or a notice period,
        the date is fact-dependent.
      </p>

      <h3>Does severance pay extend the H-1B grace period?</h3>
      <p>
        Not automatically. USCIS applies the "last day salary or wage is
        paid" test, and severance is generally compensation for job loss,
        not payment for services rendered. Lump-sum severance or PTO paid
        after your last working day does not by itself push the start date
        later.
      </p>

      <h3>Can I work during the 60-day grace period?</h3>
      <p>
        No — the grace period preserves status, not work authorization. The
        exception is a separate authorization: an eligible H-1B worker may
        begin work for a new employer immediately after USCIS receives a
        nonfrivolous I-129 petition (portability). A valid dependent EAD or
        a compelling circumstances EAD are other separate bases.
      </p>

      <h3>Can I change employers during the grace period, and when can I start work?</h3>
      <p>
        Yes. Your new employer files Form I-129 with a certified LCA before
        your grace period ends. If you are eligible for portability, you may
        begin work immediately after USCIS receives the nonfrivolous
        petition — the legal trigger is receipt by USCIS, not approval and
        not the receipt notice (though many attorneys advise waiting for the
        notice as a safety practice). If the petition is denied, portability
        work authorization ends.
      </p>

      <h3>What happens if I don't find a job within 60 days?</h3>
      <p>
        It depends on whether you filed something in time. A timely,
        nonfrivolous filing pending past Day 60 keeps you in a period of
        authorized stay. With no qualifying filing, you are out of status
        after the grace period ends and should depart by the deadline to
        avoid unlawful-presence accrual.
      </p>

      <h3>What happens on day 61?</h3>
      <p>
        Day 61 is not an automatic 3-year bar. With a timely filing pending,
        you remain in authorized stay; unlawful presence is tolled while it
        is pending and restarts the day after a denial. With no filing, you
        are out of status and accruing risk; the 3-year and 10-year bars
        attach on departure after more than 180 days or one year or more of
        unlawful presence, respectively.
      </p>

      <h3>Can I travel outside the US during the grace period?</h3>
      <p>
        You can depart, but departure ends the grace period immediately and
        it cannot be recaptured on re-entry. Re-entry requires a new status
        basis and CBP admission, which is discretionary. Do not travel on the
        assumption that your old status will still be waiting when you
        return.
      </p>

      <h3>Can my H-4 spouse keep working on H-4 EAD during the grace period?</h3>
      <p>
        Yes — USCIS states directly that an H-4 spouse's EAD or employment
        authorization incident to status remains valid during the maximum
        60-day grace period. But when the grace period ends without a new
        basis, derivative H-4 status ends with it, and the EAD becomes
        invalid for work even if the card's printed expiry date is later.
      </p>

      <h3>Can I change to B-2, H-4, or F-1 status during the grace period?</h3>
      <p>
        Yes, by filing Form I-539 before the grace period ends. A timely,
        nonfrivolous filing gives you a period of authorized stay while it
        is pending, but the new status itself requires approval. B-2 does not
        permit work; H-4 work requires a separate approved H-4 EAD.
      </p>

      <h3>Is the grace period automatic, or can USCIS deny or shorten it?</h3>
      <p>
        It is discretionary — the regulation says DHS may eliminate or
        shorten it as a matter of discretion, and USCIS decides when
        adjudicating your later filing. There is no form to apply for it.
        Ask for a favorable exercise of discretion in your later filing's
        cover letter.
      </p>

      <h3>Can I use the grace period more than once?</h3>
      <p>
        Once per authorized validity period. A new employer and a new
        validity period can give rise to a fresh grace period on a later
        termination. Returning to the same employer on the same petition does
        not reset it.
      </p>

      <h3>Does the grace period apply if I quit instead of being laid off?</h3>
      <p>
        Yes. USCIS confirms the grace period may apply to both voluntary and
        involuntary cessation of employment. Resignation counts the same way
        a layoff does — the clock still runs from the day after employment
        ends.
      </p>

      <h3>What is the difference between the 60-day and 10-day grace periods?</h3>
      <p>
        The 60-day period (8 CFR 214.1(l)(2)) applies when employment ends
        before the validity period ends — a layoff, resignation, or
        termination. The 10-day period (8 CFR 214.1(l)(1)) attaches to the
        edges of a completed validity period: up to 10 days before it begins
        and 10 days after it ends. The 10-day period does not cover a
        mid-petition layoff, and it cannot be stacked onto the 60 days.
      </p>

      <h3>Has the 60-day grace period been eliminated in 2026?</h3>
      <p>
        No. DHS has only proposed eliminating it (91 FR 57807, September 11,
        2026, docket USCIS-2026-0364, comments due November 10, 2026). The
        current rule in 8 CFR 214.1(l)(2) remains in effect until a final
        rule is published with its own effective date.
      </p>

      <h2>Sources</h2>
      <ul>
        <li><a href="https://www.uscis.gov/archive/options-for-nonimmigrant-workers-following-termination-of-employment-0" className="text-blue-700 underline underline-offset-2">U.S. Citizenship and Immigration Services — Options for Nonimmigrant Workers Following Termination of Employment (archived page, as cited in research)</a></li>
        <li><a href="https://www.law.cornell.edu/cfr/text/8/214.1" className="text-blue-700 underline underline-offset-2">Cornell Legal Information Institute — 8 CFR 214.1 (regulation text, including (l)(1) and (l)(2))</a></li>
        <li><a href="https://regulations.justia.com/regulations/fedreg/2026/09/11/2026-18631.html" className="text-blue-700 underline underline-offset-2">Federal Register via Justia — "Eliminating the Discretionary 60-Day Grace Period," 91 FR 57807, September 11, 2026 (FR Doc. 2026-18631)</a></li>
        <li><a href="https://www.regulations.gov/docket/USCIS-2026-0364" className="text-blue-700 underline underline-offset-2">Federal eRulemaking Portal (regulations.gov) — Docket USCIS-2026-0364 (comments due November 10, 2026)</a></li>
        <li><a href="https://i94.cbp.dhs.gov" className="text-blue-700 underline underline-offset-2">U.S. Customs and Border Protection — I-94 website (retrieve your most recent I-94 record)</a></li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Last checked: October 30, 2026. This guide will need re-checking
          after November 10, 2026 (comment deadline for the elimination
          proposal) and again if a final rule publishes. This is general
          information, not legal advice — consult a qualified immigration
          attorney for your specific situation.
        </em>
      </p>
    </>
  );
}
