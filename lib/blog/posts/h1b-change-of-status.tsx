import Link from "next/link";

export default function H1BChangeOfStatusContent() {
  return (
    <>
      <p className="lead">
        Change of status is how a person already in the United States in
        one nonimmigrant status — most often an F-1 student on OPT —
        becomes an H-1B worker without leaving the country. The
        worker&apos;s employer files Form I-129 asking USCIS to change
        the worker&apos;s status, and if USCIS approves it, the new
        status takes effect on the start date printed on the approval
        notice. No consulate visit, no visa stamp, no flight home.
        This guide covers the whole process: who can change status to
        H-1B and who cannot, the F-1 to H-1B journey step by step,
        the cap-gap rule that bridges OPT to October 1, every fee for
        2026, processing times, the travel rule that can destroy a
        pending request, what happens if the request is denied, and
        the 2026 changes that are in effect, blocked, or only proposed.
        This guide links to relevant government rules and guidance.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — H-1B change of status at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Who files:</strong> the employer, on Form I-129.
            The worker cannot file a change of status to H-1B alone.
            Dependents file separately on Form I-539.
          </li>
          <li>
            <strong>Cap-gap now runs to April 1</strong> of the fiscal
            year requested — not October 1 — since the January 17,
            2025 modernization rule. OPT valid at filing means status
            and work authorization are both extended; in the 60-day
            grace period at filing, status only.
          </li>
          <li>
            <strong>Regular employer, new cap petition (online):</strong>{" "}
            $3,545 in USCIS fees — $6,510 with premium processing.
            Small employer: $2,225. Registration is $215 and is never
            refunded.
          </li>
          <li>
            <strong>Travel while the request is pending abandons
            it.</strong> The petition can still be approved, but only
            for consular notification — the worker must then leave,
            get a visa stamp, and re-enter.
          </li>
          <li>
            <strong>The $100,000 payment does not apply</strong> to a
            change of status USCIS grants for a worker inside the US.
            It does apply if USCIS finds the worker ineligible for
            change of status, or if the worker departs before
            adjudication. It is not currently being collected at all,
            because of court orders.
          </li>
          <li>
            <strong>There is no appeal</strong> from a denied change
            of status request. A denied request with an approved
            petition means consular processing.
          </li>
          <li>
            <strong>Figures source:</strong> USCIS Form G-1055, Fee
            Schedule, edition 10/26/26; 8 CFR Part 248; 8 CFR
            214.2(f)(5)(vi); 89 FR 103054; 90 FR 60864. All totals
            below are computed from those figures, with the arithmetic
            shown.
          </li>
        </ul>
      </div>

      <h2>What change of status means — and what it does not</h2>
      <p>
        Change of status is a change of nonimmigrant classification
        for a person who is already lawfully in the United States,
        without leaving the country. It is governed by section 248
        of the Immigration and Nationality Act (8 U.S.C. 1258) and
        by 8 CFR Part 248. The worker must have been lawfully
        admitted as a nonimmigrant and must still be maintaining
        that status when the request is filed. Change of status is
        discretionary with USCIS: meeting the eligibility rules does
        not guarantee approval.
      </p>
      <p>
        For H-1B, the request is part of the employer&apos;s petition.
        Under 8 CFR 248.3(a), the petitioner — the employer —
        submits the request for a change of status to H-1B on Form
        I-129, Petition for a Nonimmigrant Worker, together with
        the DOL-certified Labor Condition Application. The worker
        does not file it, cannot file it alone, and cannot
        self-petition for an H-1B. Dependents change status on their
        own Form I-539, covered in the dependents section below.
      </p>
      <p>
        Three things change of status is not. It is not a visa: a
        worker whose status changes inside the US holds H-1B status
        but has no H-1B visa stamp in the passport, and needs one
        before traveling abroad and re-entering. It is not a green
        card: H-1B status is temporary — generally limited to six
        years, with qualifying exceptions — and a separate PERM and
        I-140 process leads to permanent residence. And it is not a way to fix a broken
        status: a worker who has already fallen out of status, or
        whose status expired before filing, cannot be saved by a
        change of status request except in the narrow case where
        USCIS excuses a late filing because the failure was due to
        extraordinary circumstances beyond the worker&apos;s control,
        the delay was proportionate, the worker has not otherwise
        violated status, the worker remains a bona fide
        nonimmigrant, and the worker is not in removal proceedings
        (8 CFR 248.1(b)).
      </p>

      <h2>Who can change status to H-1B — and who cannot</h2>
      <p>
        The starting rule is simple: any nonimmigrant who was
        lawfully admitted and is still maintaining status may ask
        to change classification, except for the categories Congress
        and the regulation specifically bar. The barred categories
        are listed in 8 CFR 248.2(a), and they matter because a
        worker in one of them has no change-of-status path at all —
        the only route is to leave and apply at a consulate.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Who is barred from change of status under 8 CFR 248.2</caption>
          <thead>
            <tr>
              <th scope="col">Current status</th>
              <th scope="col">Can the worker change status to H-1B inside the US?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>F-1 student (including OPT and STEM OPT)</td>
              <td>Yes — the most common change of status to H-1B</td>
            </tr>
            <tr>
              <td>H-4, L-2, O-3 and other dependents in valid status</td>
              <td>Yes, if the worker qualifies for H-1B and maintains status</td>
            </tr>
            <tr>
              <td>B-1/B-2 visitor</td>
              <td>Not barred by the regulation, but risky — see below</td>
            </tr>
            <tr>
              <td>J-1 exchange visitor subject to the two-year home-residence requirement (INA 212(e))</td>
              <td>No, unless the requirement is waived or fulfilled (Conrad-30 waiver recipients in physician shortage service are an exception)</td>
            </tr>
            <tr>
              <td>J-1 in graduate medical education or training</td>
              <td>No, whether or not the 212(e) requirement applies, except Conrad-30</td>
            </tr>
            <tr>
              <td>Visa Waiver Program entrant</td>
              <td>No</td>
            </tr>
            <tr>
              <td>C (transit), D (crewmember), K (fiancé(e) or spouse of a US citizen), S (witness or informant)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Transit without a visa</td>
              <td>No</td>
            </tr>
            <tr>
              <td>M-1 student whose training qualifies them for the H job</td>
              <td>No — USCIS must deny a change from M-1 to H where the M-1 education enables the worker to meet the H qualifications (8 CFR 248.1(d))</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The B-1/B-2 case deserves a closer look, because it is the
        one people get wrong most often. A visitor is not barred
        from change of status by 8 CFR 248.2. But a visitor who
        acts inconsistently with visitor status shortly after
        entering faces the preconceived-intent problem: the State
        Department&apos;s Foreign Affairs Manual (9 FAM
        302.9-4(B)(3)(g)) says conduct inconsistent with visitor
        status within 90 days of entry can support a presumption
        of willful misrepresentation. That is Department of State
        guidance for consular officers, not a USCIS rule, and USCIS
        treats the 90-day period as an analytical tool rather than
        a binding bar. Filing the change-of-status application
        alone is not enough to trigger the presumption — what
        matters is conduct inconsistent with visitor status, such
        as unauthorized employment, and what the person actually
        told officers at entry.
        A B-1/B-2 visitor admitted on or after April 12, 2002 also
        may not study until a change of status to F-1 or M-1 is
        approved, and enrolling before filing or while the request
        is pending is itself grounds to deny that request (8 CFR
        248.1(c)(3)).
      </p>
      <p>
        Two more conditions apply to everyone. First, the worker
        must be maintaining status at filing: valid I-94, no
        unauthorized employment, no status violation. Second, the
        job itself must qualify as a specialty occupation and the
        worker must hold the required degree or its equivalent —
        the same test as any H-1B petition. Change of status adds a
        status test on top of the petition test; it does not replace
        it.
      </p>

      <h2>F-1 to H-1B: the full journey, step by step</h2>
      <p>
        Most changes of status to H-1B start from F-1. The worker
        studied in the US, is working on Optional Practical Training
        (OPT), and an employer wants to keep them on as an H-1B
        worker. The journey has five steps, and the calendar is
        fixed: it runs on the federal fiscal year, not on the
        worker&apos;s schedule.
      </p>
      <p>
        <strong>Step 1 — OPT.</strong> An F-1 student gets 12
        months of OPT per higher educational level. Post-completion
        OPT is applied for in the window from 90 days before to 60
        days after the program end date, on Form I-765, after the
        school&apos;s designated school official (DSO) recommends it.
        A qualifying STEM degree adds a 24-month STEM OPT extension.
        On post-completion OPT the worker may be unemployed for no
        more than 90 days in total (150 days including STEM OPT).
        After OPT ends, a 60-day grace period follows. These are
        the rules in the USCIS Policy Manual, Volume 2, Part F,
        Chapter 5.
      </p>
      <p>
        <strong>Step 2 — Lottery registration.</strong> For a
        cap-subject petition, the employer registers the worker in
        the annual H-1B lottery. In the FY2027 season, registration
        ran from March 4 to March 19, 2026. The registration fee is
        $215 per beneficiary and is never refunded — not if the
        worker is not selected. The annual cap is 65,000 regular
        visas plus 20,000 for holders of a US master&apos;s degree
        or higher. Since the FY2025 season, selection is
        beneficiary-centric: USCIS selects unique people by passport
        or travel document, not registrations, so multiple employers
        registering the same person does not multiply their chances.
      </p>
      <p>
        <strong>Step 3 — Weighted selection.</strong> Starting with
        the FY2027 season, the lottery is no longer a pure random
        draw. The weighted-selection final rule (90 FR 60864,
        published December 29, 2025, effective February 27, 2026)
        gives each registration entries according to the OEWS wage
        level of the offered job: Level IV gets 4 entries, Level
        III gets 3, Level II gets 2, and Level I gets 1. The
        employer must select the highest wage level the offered wage
        equals or exceeds for the occupation and work area. The
        order of selection is unchanged — regular cap first, then
        the master&apos;s cap — and each person still counts once
        toward the cap. The Department of Homeland Security&apos;s
        own projections in the rule put selection chances at roughly
        61% for Level IV, 46% for Level III, 31% for Level II and
        15% for Level I. Those are regulatory-impact projections,
        not FY2027 results — USCIS had not published FY2027
        selection counts as of late September 2026.
      </p>
      <p>
        Our own data shows why the weighting matters. In our FY2026
        LCA dataset (through Q3), only 16.6% of LCA records with a
        reported wage level were Level I — the group that gets a
        single lottery entry — while 83.4% were Level II or higher.
        The figures come from 207,777 LCA records with a reported
        wage level across 1,063 sponsors in our{" "}
        <Link
          href="/blog/h1b-salary-database"
          className="underline text-blue-600"
        >
          H-1B salary database
        </Link>
        . These figures describe our LCA dataset, not the FY2027
        lottery applicant pool or actual selection outcomes.
      </p>
      <p>
        <strong>Step 4 — The petition.</strong> USCIS sent
        selection notices by March 31, 2026. Only a selected
        registration could file a petition, and the filing window
        opened April 1, 2026 and ran for at least 90 days (to June
        30, 2026). The employer first obtains a certified Labor
        Condition Application from the Department of Labor, then
        files Form I-129 with the certified LCA, requesting a
        change of status. A cap petition may not be filed more than
        six months before the requested start date, which is why
        the window opened on April 1.
      </p>
      <p>
        <strong>Step 5 — October 1.</strong> The earliest
        employment start date was October 1, 2026, the first day of
        fiscal year 2027. Even if USCIS approved the petition in
        April or May, the worker could not start H-1B work before
        October 1. The gap between OPT expiry and October 1 is
        exactly what cap-gap exists to bridge — the next section.
      </p>
      <svg
        role="img"
        aria-labelledby="cos-timeline-title"
        viewBox="0 0 720 372"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="cos-timeline-title">
          F-1 to H-1B timeline: OPT, registration March 4 to 19,
          2026, selection notices by March 31, 2026, I-129 petition
          April 1 to June 30, 2026, H-1B start October 1, 2026, with
          cap-gap bridging OPT expiry to October 1
        </title>
        <text x="20" y="24" fontSize="15" fontWeight="700" fill="#0f172a">
          F-1 to H-1B: OPT to October 1 — and the cap-gap bridge
        </text>
        <line x1="28" y1="56" x2="28" y2="248" stroke="#2f6df6" strokeWidth="3" />
        <circle cx="28" cy="56" r="9" fill="#0f172a" />
        <text x="56" y="52" fontSize="14" fontWeight="700" fill="#0f172a">
          OPT — F-1 status
        </text>
        <text x="56" y="72" fontSize="13" fill="#475569">
          Student working on OPT, or in the 60-day grace period
        </text>
        <circle cx="28" cy="104" r="9" fill="#1d4ed8" />
        <text x="56" y="100" fontSize="14" fontWeight="700" fill="#0f172a">
          Mar 4–19, 2026 — Registration
        </text>
        <text x="56" y="120" fontSize="13" fill="#475569">
          Employer registers the student; $215 fee
        </text>
        <circle cx="28" cy="152" r="9" fill="#1d4ed8" />
        <text x="56" y="148" fontSize="14" fontWeight="700" fill="#0f172a">
          By Mar 31, 2026 — Selection notices
        </text>
        <text x="56" y="168" fontSize="13" fill="#475569">
          USCIS notifies selected registrations; only selected cases may file
        </text>
        <circle cx="28" cy="200" r="9" fill="#2f6df6" />
        <text x="56" y="196" fontSize="14" fontWeight="700" fill="#0f172a">
          Apr 1–Jun 30, 2026 — I-129 petition
        </text>
        <text x="56" y="216" fontSize="13" fill="#475569">
          Employer files Form I-129 with certified LCA, requesting change of status
        </text>
        <circle cx="28" cy="248" r="9" fill="#f59e0b" />
        <text x="56" y="244" fontSize="14" fontWeight="700" fill="#0f172a">
          Oct 1, 2026 — H-1B start
        </text>
        <text x="56" y="264" fontSize="13" fill="#475569">
          Earliest employment start date; no H-1B work before this day
        </text>
        <rect x="56" y="284" width="644" height="78" rx="8" fill="#fef3c7" stroke="#f59e0b" />
        <text x="72" y="302" fontSize="13" fontWeight="700" fill="#92400e">
          Cap-gap bridges the gap — but not the same for everyone:
        </text>
        <text x="72" y="320" fontSize="13" fill="#78350f">
          OPT valid at filing: status + work authorization extend.
        </text>
        <text x="72" y="338" fontSize="13" fill="#78350f">
          Grace period at filing: status only — no work authorization.
        </text>
        <text x="72" y="356" fontSize="13" fill="#78350f">
          Ends at the approved start date or April 1, 2027, whichever is earlier.
        </text>
      </svg>
      <p className="mt-2 text-sm text-slate-500">
        Figure: the F-1 to H-1B journey for the FY2027 season — the
        dates are the FY2027 calendar; the cap-gap bridge is what
        carries a student from OPT expiry to the October 1 start
        date.
      </p>

      <h2>Cap-gap: the bridge from OPT to October 1</h2>
      <p>
        Cap-gap is the automatic extension of an F-1 student&apos;s
        status — and, in the usual case, work authorization — while
        a cap-subject H-1B petition is pending, so the student does
        not fall out of status between OPT expiry and October 1.
        The rule changed on January 17, 2025, and most older guides
        still describe the old version. This section follows the
        current regulation.
      </p>
      <p>
        Before January 17, 2025, cap-gap ended on October 1. The
        H-1B modernization final rule (89 FR 103054, effective
        January 17, 2025) extended it: under 8 CFR
        214.2(f)(5)(vi)(A), the duration of status and any
        employment authorization of an F-1 student who is the
        beneficiary of a timely filed, nonfrivolous cap-subject
        H-1B petition requesting a change of status is
        automatically extended <strong>until April 1 of the fiscal
        year for which H-1B status is requested, or until the
        validity start date of the approved petition, whichever is
        earlier</strong>. For an FY2027 petition, that means April
        1, 2027 at the latest — six months further than the old
        October 1 end date. One warning: the USCIS Policy Manual
        chapter on practical training still states the old October
        1 end date in its cap-gap section. That text is stale. The
        regulation, the USCIS Handbook for Employers (M-274), and
        the USCIS cap-gap page all say April 1, and the regulation
        is what controls.
      </p>
      <p>
        Whether work authorization extends depends on the
        student&apos;s situation when the petition was filed:
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">What cap-gap extends, by the student's situation at filing</caption>
          <thead>
            <tr>
              <th scope="col">Situation when the H-1B petition was filed</th>
              <th scope="col">Status extended?</th>
              <th scope="col">Work authorization extended?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OPT (including STEM OPT) still valid</td>
              <td>Yes</td>
              <td>Yes — OPT employment authorization continues</td>
            </tr>
            <tr>
              <td>Already in the 60-day grace period (OPT expired)</td>
              <td>Yes</td>
              <td>No — the student was not employment-authorized at filing, so there is nothing to extend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Three conditions attach. First, cap-gap requires a
        cap-subject petition requesting a change of status — a
        consular-notification petition does not qualify, and neither
        does a cap-exempt petition. Second, the student must not
        have violated the terms of their status. Third, the
        unemployment clock keeps running during cap-gap: days
        unemployed count toward the 90-day OPT limit (150 days
        including STEM OPT).
      </p>
      <p>
        Cap-gap ends automatically, and immediately, if the H-1B
        petition is rejected, denied, revoked or withdrawn, or if
        the change-of-status request is denied or withdrawn — even
        if the petition itself is approved for consular processing
        (8 CFR 214.2(f)(5)(vi)(B)). When cap-gap ends that way, the
        student gets the standard 60-day grace period from the date
        of the rejection, denial, withdrawal or revocation notice,
        or from the program or OPT end date, whichever is later, to
        prepare and depart. There is one hard exception: if USCIS
        denies the change of status because of a status violation,
        misrepresentation or fraud, the student gets no cap-gap
        extension and no 60-day grace period, and must leave
        immediately. The same applies if a petition is revoked on
        such a finding after approval. F-2 dependents get the same
        duration-of-status extension as the student (8 CFR
        214.2(f)(5)(vi)(D)).
      </p>
      <p>
        Practical point: the student should get an updated cap-gap
        I-20 from the DSO, and for I-9 employment verification the
        combination is the expired EAD plus the I-797C receipt
        notice for the pending H-1B petition. Employers verify
        cap-gap employment authorization through March 31 of the
        fiscal year on the I-9, following the M-274 instructions.
      </p>

      <h2>How to file: step by step</h2>
      <p>
        The employer files, not the worker. The sequence matters,
        because each step depends on the one before it:
      </p>
      <p>
        <strong>1. Confirm the job and the worker qualify.</strong>{" "}
        The position must be a specialty occupation — a role that
        requires the theoretical and practical application of highly
        specialized knowledge and at least a bachelor&apos;s degree
        in a specific specialty — and the worker must hold that
        degree or its equivalent. The employer also confirms the
        worker is in valid status and not in a barred category.
      </p>
      <p>
        <strong>2. Determine cap treatment.</strong> Is this a
        cap-subject petition (lottery registration and selection
        required) or a cap-exempt one (a qualifying university,
        affiliated nonprofit, or nonprofit or government research
        organization, which may file any time of year)? A worker
        previously counted against the cap is generally not counted
        again. Our{" "}
        <Link
          href="/tools/cap-exempt-employers"
          className="underline text-blue-600"
        >
          cap-exempt employer finder
        </Link>{" "}
        lists qualifying employers.
      </p>
      <p>
        <strong>3. Register in the lottery (cap-subject
        only).</strong> The employer creates a USCIS organizational
        account, registers the beneficiary, and pays the $215
        registration fee in the March window. If selected, the
        selection notice states the filing window.
      </p>
      <p>
        <strong>4. Obtain the certified LCA.</strong> The employer
        files Form ETA-9035/9035E with the Department of Labor,
        attesting it will pay at least the required wage — the
        higher of the actual wage paid to similarly qualified
        employees or the prevailing wage for the occupation and work
        area — that working conditions will not be adversely
        affected, that there is no strike or lockout, and that
        required notice was given to workers. The LCA is not an
        approval of the petition; it is a required step before the
        petition goes to USCIS.
      </p>
      <p>
        <strong>5. File Form I-129 requesting a change of
        status.</strong> The employer files the petition with the
        certified LCA, marking Part 2 to change the status of a
        beneficiary now in the United States. The petition must use
        the current form edition — USCIS accepted only the
        02/27/26 edition of Form I-129 from April 1, 2026 for
        FY2027 cap petitions — and every fee must be exactly right.
        Since September 9, 2026, the current edition is 09/09/26.
        Use an edition currently accepted by USCIS — check the
        Form I-129 page for the edition date and any transition
        deadline before filing. A wrong fee or wrong edition means
        the whole package is rejected and returned, and the filing
        date is lost.
      </p>
      <p>
        <strong>6. File dependents&apos; I-539s at the same
        time.</strong> A spouse or children changing to H-4 should
        file Form I-539 packaged together with the I-129, at the
        same time and location, so USCIS adjudicates them together.
        Dependents are not covered by the worker&apos;s I-129 alone.
      </p>
      <p>
        <strong>7. Respond to any RFE, then wait for the
        decision.</strong> If USCIS needs more evidence it issues a
        Request for Evidence. The response deadline is set in the
        RFE itself. If approved, USCIS issues Form I-797A with a
        new I-94 attached — that I-94 is what actually changes the
        worker&apos;s status, effective on the validity start date
        printed on it (October 1 for cap cases).
      </p>

      <h2>Documents checklist</h2>
      <p>
        The exact evidence depends on the case, but a complete
        F-1 to H-1B change-of-status filing normally contains:
      </p>
      <ul>
        <li>
          Form I-129 with the change-of-status request, plus the
          H-1B Data Collection and Filing Fee Exemption Supplement
        </li>
        <li>
          DOL-certified Labor Condition Application (Form
          ETA-9035/9035E)
        </li>
        <li>
          Selection notice (cap-subject cases) and proof of the $215
          registration
        </li>
        <li>
          The worker&apos;s degree, transcripts, and foreign
          credential evaluation if the degree is from outside the US
        </li>
        <li>
          Evidence the job is a specialty occupation: detailed job
          description, organizational chart, evidence of the
          degree&apos;s link to the duties
        </li>
        <li>
          Proof the employer can pay the offered wage: tax returns,
          audited financials, or other business records
        </li>
        <li>
          The worker&apos;s status evidence: passport, visa, I-94,
          all prior I-20s, OPT and STEM OPT EADs, pay records
          proving maintenance of status
        </li>
        <li>
          Form I-539 and I-539A for each dependent changing to H-4,
          with their passports, I-94s and proof of relationship
        </li>
        <li>
          Form I-907 if premium processing is requested, with its
          separate payment
        </li>
      </ul>
      <p>
        Status evidence is an important part of the filing. Gaps in
        I-94, pay-stub or tax records,
        unauthorized employment, or OPT used inconsistently with
        full-time study are the maintenance-of-status problems that
        draw RFEs and denials. Assemble the full status history
        before filing, not after an RFE arrives.
      </p>

      <h2>Fees: what a change of status costs in 2026</h2>
      <p>
        A change-of-status petition costs exactly the same as any
        other H-1B petition. There is no separate change-of-status
        fee and no discount for filing inside the US rather than
        abroad. The figures below are from USCIS Form G-1055, Fee
        Schedule, edition 10/26/26, with the arithmetic shown. Our{" "}
        <Link
          href="/blog/h1b-visa-cost"
          className="underline text-blue-600"
        >
          H-1B visa cost guide
        </Link>{" "}
        breaks down every fee, every employer type, and every
        petition type in full.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">USCIS fees for a cap-subject H-1B change-of-status petition, 2026</caption>
          <thead>
            <tr>
              <th scope="col">Fee</th>
              <th scope="col">Amount</th>
              <th scope="col">Who pays</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>H-1B electronic registration</td>
              <td>$215 per beneficiary, non-refundable</td>
              <td>Employer</td>
            </tr>
            <tr>
              <td>Form I-129 base fee</td>
              <td>$780 paper / $730 online; $460 for a small employer (25 or fewer full-time employees) or a nonprofit</td>
              <td>Employer</td>
            </tr>
            <tr>
              <td>Asylum Program Fee</td>
              <td>$600 regular / $300 small employer / $0 nonprofit</td>
              <td>Employer</td>
            </tr>
            <tr>
              <td>Fraud Prevention and Detection Fee</td>
              <td>$500 — initial petitions and changes of employer, including a change of status into H-1B</td>
              <td>Employer — never the worker</td>
            </tr>
            <tr>
              <td>ACWIA training fee</td>
              <td>$1,500 (more than 25 full-time employees) / $750 (25 or fewer); some universities, research organizations and nonprofits are exempt</td>
              <td>Employer — never the worker</td>
            </tr>
            <tr>
              <td>Premium processing (Form I-907, optional)</td>
              <td>$2,965 since March 1, 2026</td>
              <td>Employer if for a business need; worker only if purely for personal benefit</td>
            </tr>
            <tr>
              <td>9-11 Response and Biometric Entry-Exit Fee</td>
              <td>$4,000 per petition — only employers with 50 or more US employees where more than half are in H-1B or L-1 status</td>
              <td>Employer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The totals work out as follows, for a new cap-subject
        petition filed online. A regular employer pays $215
        registration + $730 base fee + $600 Asylum Program Fee +
        $1,500 ACWIA + $500 fraud fee = <strong>$3,545</strong>
        ($3,595 on paper). With premium processing that becomes{" "}
        <strong>$6,510</strong>. A small for-profit employer pays
        $215 + $460 + $300 + $750 + $500 ={" "}
        <strong>$2,225</strong> ($5,190 with premium processing).
        A covered employer under the 9-11 fee adds $4,000 to
        either total.
      </p>
      <p>
        Who pays is a matter of law, not negotiation. The employer
        must pay all petition filing fees, and may not require the
        worker to pay or reimburse them if doing so would drop pay
        below the required wage. The ACWIA fee and the $500 fraud
        fee can never be paid by the worker in any form — not
        directly, not by deduction, not by reimbursement, not by
        side agreement. Premium processing is the one exception:
        the employer pays when it serves a business need, and the
        worker may pay only when the request is purely for the
        worker&apos;s personal benefit, with voluntary written
        authorization, and without dropping wages below the required
        wage. Dependents&apos; own filings (I-539, I-765) are paid
        by the family, not the employer. At a consulate abroad, the
        applicant pays the $205 visa application (MRV) fee.
      </p>
      <p>
        Two fees that are not in these totals. The $100,000
        proclamation payment does not apply to a change of status
        USCIS grants for a worker inside the US, and it is not
        currently being collected at all — see the 2026 updates
        section. The proposed $103,265 fee would apply to
        cap-subject change-of-status petitions if it is finalized,
        but it is only a proposal and nothing is owed.
      </p>

      <h2>Processing times: regular vs premium</h2>
      <p>
        <strong>Premium processing</strong> is the only way to get
        a guaranteed timeline. Form I-907 costs $2,965 for most
        I-129 classifications including H-1B, effective for
        requests postmarked on or after March 1, 2026. USCIS must
        take an adjudicative action — approval, denial, RFE or
        NOID — within 15 business days (business days exclude
        weekends and federal holidays), under 8 CFR 106.4. The
        clock starts when USCIS receives the properly filed I-907
        at the correct location. An RFE or NOID stops the clock,
        and a new full 15-business-day period begins when USCIS
        receives the response. If USCIS misses the window it refunds
        the premium fee but keeps processing the case on an
        expedited basis — except if it opens a fraud or
        misrepresentation investigation, in which case it may retain
        the fee. Premium processing guarantees speed, not approval,
        and it does not move the October 1 start date for
        cap-subject cases.
      </p>
      <p>
        <strong>Regular processing</strong> has no fixed official
        timeline. USCIS publishes, in its Case Processing Times
        tool, the time within which it completed 80% of adjudicated
        cases over the prior six months. That is a look-back
        estimate, not a guarantee, and it varies by I-129 subtype
        and office. As of November 6, 2026, the tool showed{" "}
        <strong>10 months</strong> for Form I-129, H-1B change of
        status in the US, at Service Center Operations (SCOPS) —
        80% of cases completed within 10 months. The practical
        consequence for F-1 students is that cap-gap, not regular
        processing speed, is what carries them to October 1 — which
        is why the cap-gap section matters more than the processing
        time for most readers of this guide.
      </p>
      <p>
        For the calendar as a whole: a cap-subject F-1 to H-1B
        case runs about seven months from March registration to the
        October 1 start date, and the start date cannot be moved
        earlier even if USCIS approves the petition in April or
        May. Premium processing shortens the adjudication wait, not
        the calendar.
      </p>

      <h2>The travel rule: leaving the US can destroy the request</h2>
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Do not travel while the change of status is pending
        </p>
        <p className="mt-2 text-sm text-amber-900">
          This is the single most expensive mistake in change of
          status. If the worker leaves the United States while the
          change-of-status request is still pending, the change of
          status portion of the petition is deemed abandoned. That is
          the rule in the USCIS Policy Manual, in the cap-gap chapter
          (Vol. 2, Part F, Ch. 5, §D.3): departure before
          adjudication abandons the change-of-status request itself.
        </p>
      </div>
      <p>
        Abandonment does not necessarily kill the petition itself.
        If USCIS approves the I-129 after the worker has departed,
        it approves it for consular notification — Form I-797B,
        with no I-94 attached and no status conferred. The worker
        must then apply for an H-1B visa at a US consulate (DS-160,
        $205 visa application fee, in-person interview), and seek
        admission in H-1B status for the dates on the approved
        petition. The worker cannot start H-1B work from inside the
        US on a consular-notification approval.
      </p>
      <p>
        There is one more consequence since September 2025. If a
        petition requesting a change of status is filed on or after
        September 21, 2025 and USCIS determines the worker is
        ineligible for change of status — for example because the
        worker departed the United States before adjudication of
        the change-of-status request — the $100,000 proclamation
        payment applies. Departure during a pending change of
        status can therefore turn a case that owed nothing into a
        case that owes $100,000, on top of losing the
        change-of-status path itself — if the payment is ever
        collected. As of November 2026 it is not being collected at
        all, because court orders block it.
      </p>
      <p>
        Travel after approval is different. If the petition and the
        change of status were both approved, the student may
        generally travel abroad and seek readmission in F-1 status
        during a cap-gap period, provided readmission is sought
        before H-1B employment begins (normally October 1) and the
        student is otherwise admissible. Re-entry in F-1 needs a
        valid F-1 visa stamp and an endorsed I-20. After October 1,
        re-entry must be in H-1B status, which requires an H-1B
        visa stamp. And no one may work in H-1B status before the
        validity start date on the I-797A.
      </p>

      <h2>Change of status vs consular processing</h2>
      <p>
        Every H-1B worker reaches status by one of two routes:
        change of status inside the US, or consular processing
        abroad. The petition is the same Form I-129 either way;
        what differs is where the worker is and what happens after
        approval. The employer chooses the route on the petition
        itself, in Part 2.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">Change of status compared with consular processing</caption>
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Change of status</th>
              <th scope="col">Consular processing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Where the worker is</td>
              <td>Inside the US in valid nonimmigrant status at filing</td>
              <td>Outside the US, or inside but will depart</td>
            </tr>
            <tr>
              <td>Must leave the US?</td>
              <td>No — status changes on the approval&apos;s validity start date (I-797A with a new I-94 attached) without departure</td>
              <td>Yes — must depart or remain abroad, get a visa stamp, and be admitted in H-1B status (I-797B, no I-94)</td>
            </tr>
            <tr>
              <td>Visa interview and stamp</td>
              <td>None needed to obtain status; a stamp is needed only if the worker later travels abroad and needs to re-enter</td>
              <td>Required: DS-160, $205 visa application fee, in-person interview at a US embassy or consulate; possible 221(g) administrative processing</td>
            </tr>
            <tr>
              <td>Cap-gap</td>
              <td>Yes — automatic extension of F-1 status (and OPT work authorization if OPT was valid at filing) to April 1</td>
              <td>No — a consular-notification petition does not extend F-1 status; if OPT or status expires before October 1, the student must leave and return in H-1B status</td>
            </tr>
            <tr>
              <td>Timing</td>
              <td>Status effective on the I-797A validity start date (October 1 for cap cases); adjudication can run past October 1 under cap-gap</td>
              <td>Adds consulate appointment wait, interview, and passport return after USCIS approval; entry in H-1B no earlier than 10 days before the petition start date</td>
            </tr>
            <tr>
              <td>Main risks</td>
              <td>Travel while pending abandons the request; denial of the request despite petition approval; must maintain valid status until the start date</td>
              <td>Visa refusal or 221(g) delay abroad; appointment backlogs; no work until admitted in H-1B</td>
            </tr>
            <tr>
              <td>$100,000 proclamation payment</td>
              <td>Does not apply if the change of status is granted</td>
              <td>Applies to petitions for beneficiaries outside the US without a valid H-1B visa; currently not collected because of court orders</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Which route is better depends on the worker&apos;s situation.
        A student on OPT with months left has every reason to choose
        change of status: cap-gap carries them to October 1 without
        a flight or an interview. A worker already abroad, or one
        whose status is about to expire with no cap-gap cover, has
        no change-of-status path and must go the consular route.
        The choice is made at filing, on the I-129 — it cannot be
        switched mid-case without consequences, and departing while
        a change of status is pending switches it by accident, in
        the worst possible way.
      </p>

      <h2>H-4 dependents: spouse and children</h2>
      <p>
        A spouse and unmarried children under 21 of an H-1B worker
        hold H-4 status. They change or extend status inside the US
        on Form I-539, Application to Extend/Change Nonimmigrant
        Status, filed by the dependent — not by the worker&apos;s
        employer, and not covered by the worker&apos;s I-129 alone.
        The fee is $470 on paper or $420 online. One paper I-539
        covers a whole family on Form I-539A forms; filing online
        costs $420 per person, because online I-539 accepts a single
        applicant only — a family of three pays $1,260 online
        against $470 on paper.
      </p>
      <p>
        File the I-539s packaged together with the worker&apos;s
        I-129, at the same time and in the same location. USCIS
        adjudicates a dependent&apos;s I-539 together with the
        principal&apos;s I-129 when it is packaged that way —
        the officer reviews the I-539 after the I-129 and takes
        adjudicative action on it. Premium processing is not
        available for H-4 I-539s.
      </p>
      <p>
        H-4 status alone does not authorize employment. Only the
        spouse — not children — may apply for work authorization,
        on Form I-765, category (c)(26), and only if the H-1B
        spouse is the principal beneficiary of an approved Form
        I-140, or has been granted H-1B status beyond the six-year
        limit under AC21 sections 106(a) and (b). The spouse must
        receive the Employment Authorization Document before
        working, and the I-765 is not decided until the I-539 and
        the principal&apos;s I-129 are adjudicated. The fee is $520
        on paper, and category (c)(26) cannot be filed online. Our{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="underline text-blue-600"
        >
          H-4 EAD guide
        </Link>{" "}
        covers the full eligibility rules, and our{" "}
        <Link
          href="/blog/h4-visa-guide"
          className="underline text-blue-600"
        >
          H-4 visa guide
        </Link>{" "}
        covers H-4 status itself. One change to note: the
        up-to-540-day automatic extension of employment
        authorization no longer applies to (c)(26) renewals filed
        on or after October 30, 2025, so H-4 spouses should file
        renewals early — no more than 180 days before expiry.
      </p>

      <h2>If the change of status is denied</h2>
      <p>
        There are two different denials, and they lead to very
        different places.
      </p>
      <p>
        <strong>Change of status denied, petition approved.</strong>{" "}
        The petition is approved for consular notification — Form
        I-797B, with no I-94 attached. The worker does not obtain
        H-1B status from that approval. The worker keeps whatever
        prior status they still hold; if cap-gap applied, it
        terminates on the denial and the 60-day grace period runs
        from the termination date. The exception, again, is a
        denial for a status violation, misrepresentation or fraud:
        then there is no grace period and the student must depart
        immediately. What the worker must do: depart the US, apply
        for an H-1B visa at a consulate (DS-160, $205 visa
        application fee, interview), and seek admission in H-1B
        status for the dates on the approved petition. They cannot
        start H-1B work from inside the US on a
        consular-notification approval.
      </p>
      <p>
        <strong>Both the petition and the change of status
        denied.</strong> There is no H-1B status and no H-1B
        petition to use abroad. The options depend on what status
        remains: stay in a prior status that is still valid (for
        example, F-1 OPT or STEM OPT); use the 60-day grace period
        from the denial date or program end date, whichever is
        later, to depart or file another application; file Form
        I-539 in time to change to another status (B-2, F-1, H-4)
        before status or grace expires; have a new employer file a
        new petition; or depart. An H-1B worker whose employment
        ends may also be given up to 60 consecutive days to find a
        new employer, change status, or depart — see our{" "}
        <Link
          href="/blog/h1b-grace-period"
          className="underline text-blue-600"
        >
          H-1B grace period guide
        </Link>
        . There is no appeal from a denied change of status
        request (8 CFR 248.3(g)); a denied I-129 may be challenged
        by motion or appeal as the denial notice states.
      </p>
      <p>
        One proposal to watch: the Department of Homeland Security
        proposed a rule, &ldquo;Eliminating the Discretionary
        60-Day Grace Period&rdquo; (91 FR 57807, September 11,
        2026, Docket USCIS-2026-0364), with comments due November
        10, 2026. It is a proposal only, not in force. The 60-day
        grace period still applies as of the date of this guide.
      </p>

      <h2>2026 updates: in effect, blocked, or only proposed</h2>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <p className="font-semibold text-slate-900">
          2026 at a glance
        </p>
        <p className="mt-2 text-sm text-slate-700">
          Four 2026 developments touch change of status directly.
          They are not equal: one is in effect, one is blocked by
          courts, and two are only proposals.
        </p>
      </div>
      <p>
        <strong>In effect — the wage-weighted lottery.</strong>{" "}
        The weighted-selection final rule (90 FR 60864, published
        December 29, 2025, effective February 27, 2026) governed
        the FY2027 season: Level IV wage offers get 4 lottery
        entries, Level III gets 3, Level II gets 2, Level I gets 1.
        The cap is unchanged at 65,000 plus 20,000. For a student
        on OPT, the practical effect is that the wage level on the
        job offer now shapes lottery odds — a Level I offer at a
        consulting firm and a Level IV offer at a product company
        no longer enter the same draw on equal terms.
      </p>
      <p>
        <strong>Blocked — the $100,000 payment.</strong>{" "}
        Proclamation 10973 (September 19, 2025, 90 FR 46027)
        imposed a $100,000 payment on certain new H-1B petitions
        for beneficiaries outside the United States, effective
        September 21, 2025. Proclamation 11069 (September 18,
        2026) extended it for another 12 months, to September 21,
        2027. The payment does not apply to a petition requesting
        an amendment, change of status, or extension of stay for a
        worker inside the United States where USCIS grants it — so
        a granted F-1 to H-1B change of status owes nothing. It
        does apply if USCIS finds the worker ineligible for change
        of status, or if the worker departs before adjudication.
        And in practice it is not being collected at all: a
        Massachusetts court vacated the implementing guidance on
        June 8, 2026 (California v. Mullin), the First Circuit
        denied the government&apos;s motion to stay on July 24,
        2026, and a California court enjoined enforcement under
        both proclamations on September 30, 2026 (Global Nurse
        Force v. Trump), with the government&apos;s appeal pending.
        A Washington, D.C. court upheld the proclamation on
        December 23, 2025 (Chamber of Commerce v. DHS), so the
        courts are split and the status can change on appeal or
        after rulemaking. The full timeline is on our{" "}
        <Link
          href="/blog/h1b-100k-fee-status"
          className="underline text-blue-600"
        >
          H-1B $100K fee status page
        </Link>
        .
      </p>
      <p>
        <strong>Proposed only — the $103,265 fee.</strong> A
        separate Department of Homeland Security proposal (91 FR
        54817, August 25, 2026, Docket USCIS-2026-0298) would
        impose a $103,265 fee at filing on all cap-subject H-1B
        petitions, including change-of-status petitions for workers
        already in the US. Comments closed September 24, 2026, and
        no final rule has been published. Nothing is owed. If it is
        finalized as proposed, it would apply to change of status
        too — unlike the $100,000 proclamation payment, which
        exempts a granted change of status.
      </p>
      <p>
        <strong>Proposed only — the OPT fee.</strong> US
        Immigration and Customs Enforcement, which runs the Student
        and Exchange Visitor Program, proposed fees of $70,000 for
        initial OPT and $30,000 for any subsequent OPT (91 FR
        64566, October 8, 2026, Docket ICEB-2026-0100). The fee
        would be paid by the SEVP-certified school, before the
        designated school official recommends the student for OPT
        in SEVIS — not by the student directly — and USCIS would
        not approve work authorization if the school had not paid.
        Comments are due November 9, 2026. The proposal is not in
        effect, nothing is charged, and if finalized it would take
        effect 60 days after publication of the final rule. It
        covers pre-completion, post-completion and STEM OPT, but
        not CPT.
      </p>

      <h2>What triggers a Request for Evidence — and the mistakes to avoid</h2>
      <p>
        USCIS publishes no official list of what triggers a Request
        for Evidence in change-of-status cases, so everything in
        this section is what immigration practitioners report seeing
        most often — not a USCIS publication. Treat it as a
        checklist of weak spots, not as a rulebook.
      </p>
      <ul>
        <li>
          <strong>Specialty occupation not established</strong> — a
          generic job description, or a degree in a general field
          (for example, &ldquo;business&rdquo;) not shown to be
          directly related to the duties.
        </li>
        <li>
          <strong>Wage-level mismatch</strong> — a Level I
          (entry-level) wage for a role described as highly complex,
          an SOC code that does not match the duties, or an LCA job
          title, wage or worksite that does not match the I-129.
        </li>
        <li>
          <strong>Bona fide specialty-occupation position</strong> —
          since the January 17, 2025 modernization rule, USCIS no
          longer applies the old &ldquo;right to control&rdquo;
          employer-employee test, and the itinerary requirement is
          gone. What matters is whether the petitioner has a bona
          fide specialty-occupation position for the worker as of
          the requested start date — shown by contracts, statements
          of work, work orders or similar evidence, not by an
          itinerary.
        </li>
        <li>
          <strong>Beneficiary qualifications</strong> — a degree not
          in the required specific specialty, a foreign-degree
          equivalency not documented, or experience-based
          equivalency not established.
        </li>
        <li>
          <strong>Maintenance of status</strong> — gaps in I-94,
          pay-stub or tax evidence, unauthorized employment, or OPT
          or CPT used inconsistently with full-time study.
        </li>
        <li>
          <strong>LCA problems</strong> — a missing or uncertified
          LCA, an LCA wage below the prevailing wage, or worksite
          location errors including home and remote-work addresses.
        </li>
        <li>
          <strong>Availability of work</strong> — no evidence of a
          bona fide specialty-occupation position as of the
          requested start date. The petitioner is not required to
          prove specific day-to-day assignments for the whole
          validity period.
        </li>
        <li>
          <strong>Employer viability</strong> — inconsistencies in
          business records, address, restructuring or tax records.
        </li>
      </ul>
      <p>
        The mistakes practitioners see most often are simpler than
        the triggers: traveling abroad while the request is
        pending; filing after status has expired, or assuming a
        pending petition alone authorizes work; working before
        October 1, or after OPT expiry without cap-gap cover; using
        the wrong I-129 edition or the wrong fee; LCA and I-129
        mismatches; not filing I-539s for H-4 dependents; assuming
        premium processing guarantees approval or an earlier start
        date; assuming a granted change of status removes the need
        for a visa stamp for future travel; and not getting an
        updated cap-gap I-20 from the DSO. The RFE response deadline
        is set in the RFE itself — commonly up to 84 days plus
        mailing time — and a late or missing response means denial.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is H-1B change of status?</h3>
      <p>
        Change of status is a change of nonimmigrant classification
        for a person already lawfully in the United States, without
        leaving the country. For H-1B, the worker&apos;s employer
        files Form I-129 asking USCIS to change the worker&apos;s
        status, and if USCIS approves it, the new status takes
        effect on the start date on the approval notice. It is
        governed by section 248 of the Immigration and Nationality
        Act and 8 CFR Part 248.
      </p>

      <h3>Can I change status from F-1 to H-1B without leaving the US?</h3>
      <p>
        Yes — it is the most common change of status to H-1B. Your
        employer registers you in the March lottery, and if you are
        selected, files Form I-129 with a certified LCA requesting
        a change of status. If approved, your status changes to
        H-1B on the validity start date printed on the approval
        notice — October 1 is the earliest start date for
        cap-subject cases, not an automatic effective date for
        every approval. Work authorization begins when the change
        of status takes effect, as shown on the notice, not merely
        because the petition was approved. Cap-gap extends your
        F-1 status — and your OPT work authorization, if OPT was
        valid when the petition was filed — until April 1 of the
        fiscal year requested, or the approved petition&apos;s
        validity start date, whichever is earlier.
      </p>

      <h3>What is cap-gap, and how long does it last?</h3>
      <p>
        Cap-gap is the automatic extension of an F-1 student&apos;s
        status while a cap-subject H-1B petition is pending, so the
        student does not fall out of status between OPT expiry and
        October 1. Since January 17, 2025 it runs until April 1 of
        the fiscal year requested, or the approved petition&apos;s
        start date, whichever is earlier. If OPT was valid when the
        petition was filed, work authorization extends too; if the
        student was already in the 60-day grace period, status
        extends but work authorization does not.
      </p>

      <h3>Does the H-1B fee apply to change of status?</h3>
      <p>
        Yes. The regular USCIS fees apply in full to a
        change-of-status petition — it is the same I-129 petition,
        filed by the employer, with the same $215 registration,
        I-129 base fee, Asylum Program Fee, fraud fee and ACWIA fee.
        There is no separate change-of-status fee and no discount.
        The $100,000 proclamation payment does not apply to a
        change of status USCIS grants for a worker inside the US,
        and it is not currently being collected at all. The proposed
        $103,265 fee, if finalized, would apply to cap-subject
        change-of-status petitions.
      </p>

      <h3>How long does H-1B change of status take?</h3>
      <p>
        The calendar for a cap-subject F-1 to H-1B case is about
        seven months from March registration to the October 1 start
        date, and the start date cannot be moved earlier even if
        USCIS approves the petition in April or May. USCIS
        adjudication of the I-129 itself has no fixed timeline;
        premium processing guarantees an action within 15 business
        days for $2,965. As of November 6, 2026, the USCIS Case
        Processing Times tool showed 10 months for Form I-129,
        H-1B change of status in the US, at Service Center
        Operations (SCOPS) — 80% of cases completed within 10
        months.
      </p>

      <h3>Can I travel while my change of status is pending?</h3>
      <p>
        No — do not travel. Leaving the United States while the
        change-of-status request is pending abandons the request.
        The petition can still be approved, but only for consular
        notification, which means leaving, getting a visa stamp,
        and re-entering. Departure before adjudication can also
        make the $100,000 proclamation payment apply. After the
        petition and the change of status are both approved, travel
        and readmission in F-1 status before October 1 is generally
        allowed.
      </p>

      <h3>What happens if my change of status is denied?</h3>
      <p>
        If the change of status is denied but the petition is
        approved, the petition is approved for consular
        notification only — you do not get H-1B status from it, and
        you must depart, get an H-1B visa, and re-enter. You keep
        any prior status you still hold, and if cap-gap applied, a
        60-day grace period runs from the denial — unless the
        denial was for a status violation, misrepresentation or
        fraud, in which case there is no grace period. There is no
        appeal from a denied change of status request. If both the
        petition and the request are denied, your options are a
        still-valid prior status, the 60-day grace period, a timely
        Form I-539 to another status, a new petition, or departure.
      </p>

      <h3>Do my dependents need separate applications?</h3>
      <p>
        Yes. A spouse and unmarried children under 21 change to
        H-4 status on their own Form I-539 — they are not covered
        by the worker&apos;s I-129 alone. The fee is $470 on paper
        for the whole family, or $420 per person online. File the
        I-539s packaged together with the I-129 so USCIS adjudicates
        them together. Only the spouse may apply for H-4 work
        authorization, and only with an approved I-140 or AC21
        beyond-six-year H-1B status.
      </p>

      <h3>What is the H-1B registration fee, and is it refunded if I am not selected?</h3>
      <p>
        The registration fee is $215 per beneficiary, paid by the
        employer in the March registration window for cap-subject
        petitions. It is never refunded — not if the beneficiary is
        not selected, and not if duplicate registrations are
        invalidated. It is charged only once, at registration; a
        selected beneficiary&apos;s petition does not carry a second
        registration fee.
      </p>

      <h3>Does the $100,000 fee apply to change of status?</h3>
      <p>
        No, not to a change of status USCIS grants for a worker
        inside the United States. It does apply if USCIS finds the
        worker ineligible for change of status, or if the worker
        departs before adjudication. And in practice it is not
        being collected at all as of November 2026, because a
        Massachusetts court vacated the implementing guidance and a
        California court enjoined enforcement under both
        proclamations, while the government appeals. The
        proclamations run to September 21, 2027, so the status can
        change.
      </p>

      <h3>Can a B-1/B-2 visitor change status to H-1B?</h3>
      <p>
        The regulation does not bar it — B-1/B-2 is not in the
        barred categories of 8 CFR 248.2. But a visitor who acts
        inconsistently with visitor status shortly after entering
        faces the preconceived-intent problem: State Department
        guidance says conduct inconsistent with visitor status
        within 90 days of entry can support a presumption of
        willful misrepresentation. It is guidance for consular
        officers, not a USCIS rule. Filing the change-of-status
        application alone is not enough to trigger the presumption
        — what matters is conduct inconsistent with visitor status
        and what the person actually told officers at entry.
      </p>

      <h3>What is the difference between change of status and consular processing?</h3>
      <p>
        Change of status happens inside the US: the employer files
        Form I-129, USCIS approves it with a new I-94 attached, and
        status changes on the start date without travel — and
        cap-gap covers the wait for F-1 students. Consular
        processing happens abroad: the petition is approved for
        consular notification, the worker gets a visa stamp at a US
        embassy or consulate, and is admitted in H-1B status. There
        is no cap-gap on the consular route, and the worker cannot
        work until admitted.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-248"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            eCFR — 8 CFR Part 248, Change of Status
          </a>{" "}
          — eligibility (248.1), ineligible classes (248.2), petition
          and application (248.3), including the employer-files rule,
          the four-part late-filing excuse, and no appeal from a
          denial (248.3(g)).
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — H-1B Specialty Occupations
          </a>{" "}
          — the H-1B petition steps, the LCA requirement, the
          $100,000 payment scope (does not apply to a granted
          in-US change of status; does apply if the worker is
          ineligible or departs before adjudication), and the
          cap-subject registration rule.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/policy-manual/volume-2-part-f-chapter-5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS Policy Manual, Volume 2, Part F, Chapter 5 —
            Practical Training
          </a>{" "}
          — OPT rules, the 60-day grace period, and cap-gap (note:
          the chapter as published still states the pre-2025
          October 1 cap-gap end date; this guide follows the
          current regulation, April 1).
        </li>
        <li>
          <a
            href="https://www.uscis.gov/book/export/html/59502"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS Handbook for Employers (M-274), Cap-Gap
          </a>{" "}
          — cap-gap extension to April 1, status-only extension
          for students in the grace period, and I-9 instructions.
        </li>
        <li>
          <a
            href="https://www.nafsa.org/regulatory-information/8cfr2142f"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            NAFSA — 8 CFR 214.2(f) as amended by 89 FR 103054
          </a>{" "}
          — the current cap-gap text, 8 CFR 214.2(f)(5)(vi)(A)–(D).
          NAFSA states this is not an official edition; the eCFR
          is authoritative.
        </li>
        <li>
          <a
            href="https://public-inspection.federalregister.gov/2024-29354.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Federal Register — Modernizing H-1B Requirements final
            rule (89 FR 103054, December 18, 2024, effective
            January 17, 2025)
          </a>{" "}
          — the cap-gap extension from October 1 to April 1, and
          the beneficiary-owner rules.
        </li>
        <li>
          <a
            href="https://www.federalregister.gov/documents/2025/12/29/2025-23853/weighted-selection-process-for-registrants-and-petitioners-seeking-to-file-cap-subject-h-1b"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Federal Register — Weighted Selection Process final rule
            (90 FR 60864, December 29, 2025, effective February 27,
            2026)
          </a>{" "}
          — Level IV 4 entries, Level III 3, Level II 2, Level I 1.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/g-1055"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form G-1055, Fee Schedule
          </a>{" "}
          (edition 10/26/26) — registration, I-129 base and
          small/nonprofit rates, Asylum Program Fee, ACWIA and fraud
          fees, premium processing, and I-539 amounts. Every figure
          verified live on the G-1055 page on November 6, 2026. The
          primary source for every fee figure in this guide.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/file-online/forms-available-to-file-online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Forms Available to File Online
          </a>{" "}
          — the I-765 categories that may be filed online are
          (a)(12), (c)(3)(A), (c)(3)(B), (c)(3)(C), (c)(8), (c)(11),
          (c)(19) and (c)(33) (plus (c)(9) by PDF upload). Category
          (c)(26) is in neither list, so an H-4 EAD must be filed on
          paper — the $520 paper fee, not the $470 online rate.
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
          — the I-129 form editions and the bundled I-539
          adjudication practice.
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
          — the dependent filing fee schedule and the paper-single-fee
          vs online-per-application family rule.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/employment-authorization-for-certain-h-4-dependent-spouses"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Employment Authorization for Certain H-4
            Dependent Spouses
          </a>{" "}
          — category (c)(26) eligibility: approved I-140 or AC21
          106(a)/(b) status, spouse only.
        </li>
        <li>
          <a
            href="https://www.govinfo.gov/content/pkg/FR-2026-10-08/html/2026-20660.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Federal Register — Optional Practical Training Fees,
            proposed rule (91 FR 64566, October 8, 2026, Docket
            ICEB-2026-0100)
          </a>{" "}
          — the proposed $70,000 initial and $30,000 subsequent OPT
          fees, paid by the school, comments due November 9, 2026.
        </li>
        <li>
          Federal Register — Fee for Certain H-1B Petitions, notice
          of proposed rulemaking (91 FR 54817, Docket
          USCIS-2026-0298, August 25, 2026; comments closed
          September 24, 2026) — the $103,265 proposal. No final
          rule has been published.
        </li>
        <li>
          Federal Register — Eliminating the Discretionary 60-Day
          Grace Period, proposed rule (91 FR 57807, September 11,
          2026, Docket USCIS-2026-0364; comments due November 10,
          2026) — a proposal only, not in force.
        </li>
        <li>
          Proclamation 10973 (September 19, 2025, 90 FR 46027) and
          Proclamation 11069 (September 18, 2026) — the $100,000
          payment and its extension to September 21, 2027. Full
          court timeline on our{" "}
          <Link
            href="/blog/h1b-100k-fee-status"
            className="underline text-blue-600"
          >
            H-1B $100K fee status page
          </Link>
          .
        </li>
        <li>
          <a
            href="https://www.uscis.gov/newsroom/alerts/fy-2027-h-1b-cap-initial-registration-period-opens-on-march-4"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — FY 2027 H-1B Cap Initial Registration Period
            Opens on March 4
          </a>{" "}
          — registration March 4–19, 2026, $215 fee, selection
          notices by March 31, 2026.
        </li>
        <li>
          US Department of Labor — Fact Sheet 62H (prohibited and
          authorized wage deductions) — the rule that the ACWIA and
          fraud fees can never be charged to the worker, and that
          petition costs cannot be shifted to the worker if they
          would push pay below the required wage.
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: November 6, 2026. Status last checked: November
          6, 2026. Fees, filing addresses, and processing times
          change — confirm them on the linked USCIS pages before
          filing. Not legal advice — consult an immigration attorney
          for your case.
        </em>
      </p>
    </>
  );
}
