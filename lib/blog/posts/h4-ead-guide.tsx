import Link from "next/link";

export default function H4EADGuideContent() {
  return (
    <>
      <p className="lead">
        An H-4 EAD is the work permit that lets certain spouses of H-1B
        workers work legally in the United States — for any employer, without
        sponsorship. But H-4 status alone does <strong>not</strong> authorize
        work, only spouses (never children) can apply, and one rule changed
        everything about renewals in 2026: the automatic extension is gone.
        This guide covers who qualifies, how to apply step by step with Form
        I-765, the real fee, honest processing times, and how to renew
        without a work gap — with every rule tied to its USCIS source or
        Federal Register document.
      </p>

      <div className="rounded-lg border border-green-300 bg-green-50 p-5">
        <p className="font-semibold text-green-900">
          PROGRAM STATUS — ACTIVE (as of October 27, 2026)
        </p>
        <p className="mt-2 text-sm text-green-900">
          The H-4 EAD program itself is <strong>still in effect</strong>. What
          ended is the automatic extension for renewals: a renewal filed on
          or after October 30, 2025 no longer keeps you working after your
          card expires. If your card expires before USCIS approves the
          renewal, you must stop working until the new card arrives. Do not
          confuse the two — the program survives; the safety net does not.
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the H-4 EAD at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Who:</strong> H-4 spouses only. H-4 children are never
            eligible under this category.
          </li>
          <li>
            <strong>Two paths:</strong> the H-1B spouse is the principal
            beneficiary of an approved Form I-140, <em>or</em> has been
            granted H-1B status beyond six years under AC21 sections 106(a)
            and (b).
          </li>
          <li>
            <strong>Form:</strong> I-765, Application for Employment
            Authorization, eligibility category (c)(26).
          </li>
          <li>
            <strong>Fee:</strong> $520 paper filing. As of October 2026,
            category (c)(26) is not accepted online, so the $470 online
            price does not apply to H-4 EAD.
          </li>
          <li>
            <strong>Renewal window:</strong> file no more than 180 days
            before expiry — and with no safety net left, that window is the
            whole plan.
          </li>
          <li>
            <strong>Premium processing:</strong> not available for
            category (c)(26) at any price.
          </li>
        </ul>
      </div>

      <h2>What is an H-4 EAD, exactly?</h2>
      <p>
        H-4 is the dependent status for spouses and children of H-1B workers.
        It lets you live in the United States — but it does not, by itself,
        let you work. The regulation is explicit: H-4 status &ldquo;does not
        confer eligibility for employment authorization incident to
        status&rdquo; (8 CFR 214.2(h)(9)(iv)). The EAD — the physical card,
        Form I-766 — is the separate document that creates work
        authorization, and only certain H-4 spouses can get one.
      </p>
      <p>
        The program was created by a 2015 rule, effective May 26, 2015, to
        keep highly skilled H-1B families from losing a second income to
        the green-card backlog. Once issued, the EAD is{" "}
        <strong>unrestricted</strong>: you may work for any employer, change
        employers freely, hold more than one job, or run your own business
        — no sponsorship, no cap, no lottery. It also lets you apply for a
        Social Security number.
      </p>
      <p>
        Two limits matter. First, the EAD is tied to your H-4 status: its
        expiration date matches your most recent H-4 I-94, and if the
        underlying H-1B status ends, the H-4 basis ends with it. Second,
        the contrast with other dependents: spouses of L-1 and E workers are
        work-authorized incident to status and need no card at all. H-4
        spouses are not — which is exactly why this card matters so much.
      </p>

      <h2>Who qualifies? The two paths (and who does not)</h2>
      <p>
        There are exactly two doors into H-4 EAD eligibility. You need one
        of them — not both, and not a third option.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Rule</th>
              <th>Evidence USCIS wants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 — Approved I-140</td>
              <td>
                The H-1B spouse is the principal beneficiary of an approved
                Form I-140, Immigrant Petition for Alien Worker
              </td>
              <td>
                Copy of the I-797 approval notice for the I-140 filed for
                the H-1B spouse
              </td>
            </tr>
            <tr>
              <td>2 — AC21 extension beyond six years</td>
              <td>
                The H-1B spouse has been granted H-1B status beyond the
                six-year limit under AC21 sections 106(a) and (b)
              </td>
              <td>
                Current and prior I-797s for Form I-129, passports, prior
                I-94s, plus proof of the basis (see below)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        For Path 2, the basis itself needs proof: either a Permanent Labor
        Certification (PERM) application filed at least 365 days before the
        AC21 period begins, or a Form I-140 filed at least 365 days before
        it begins. If primary evidence is unavailable, USCIS may consider
        secondary evidence, such as the receipt number of the most current
        I-129 extension or the approved I-140 petition — but missing
        evidence about the H-1B spouse is a common cause of delay or
        denial, so file it complete.
      </p>
      <p>
        Three clarifications people get wrong. First, for Path 1,{" "}
        <strong>priority-date currency does not matter</strong>: an
        approved I-140 qualifies the spouse immediately, even if the green
        card wait will run for years. Second, a{" "}
        <strong>pending I-140 alone does not qualify</strong> — but Path 2
        can still open before I-140 approval, because a seventh-year H-1B
        extension itself creates eligibility. Third,{" "}
        <strong>who is never eligible</strong>: H-4 children, spouses still
        inside the initial six-year H-1B period with no approved I-140 and
        no AC21 extension, and anyone whose H-4 status itself is not
        valid. If you are tracking the green-card pipeline, our{" "}
        <Link
          href="/blog/i140-processing-time"
          className="text-blue-700 underline underline-offset-2"
        >
          I-140 processing time guide
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/perm-processing-time"
          className="text-blue-700 underline underline-offset-2"
        >
          PERM processing time guide
        </Link>{" "}
        explain the two stages that create Path 1 and the Path 2 basis.
      </p>

      <h2>How to apply, step by step</h2>
      <p>
        <strong>Step 1 — Confirm your path and gather documents.</strong>{" "}
        USCIS publishes an evidence chart for this category. File
        everything on it the first time; incomplete evidence is the most
        common reason USCIS issues a Request for Evidence, and an RFE costs
        months.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Evidence of…</th>
              <th>Submit…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Your H-4 status</td>
              <td>
                Copy of your current I-797 approval notice for Form I-539,
                or a copy of Form I-94 showing admission as an H-4
                nonimmigrant or your most recent approved extension
              </td>
            </tr>
            <tr>
              <td>Government photo ID</td>
              <td>
                Your last EAD (if any), the biometric page of your
                passport, a birth certificate with photo ID, a
                foreign-consulate visa, or a national identity document
                with photo
              </td>
            </tr>
            <tr>
              <td>Relationship to the H-1B worker</td>
              <td>Copy of your marriage certificate</td>
            </tr>
            <tr>
              <td>Your basis for eligibility</td>
              <td>
                Path 1: the I-797 approval notice for the I-140. Path 2:
                the AC21 extension evidence described above
              </td>
            </tr>
            <tr>
              <td>Photos for card production</td>
              <td>
                Two identical two-by-two-inch passport-style color
                photographs
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Any document in a foreign language needs a full English translation
        certified as complete and accurate by a translator competent in
        both languages. That is a USCIS requirement, not a suggestion.
      </p>
      <p>
        <strong>Step 2 — Complete Form I-765, category (c)(26).</strong>{" "}
        Use the newest version on the USCIS I-765 page; an unaccepted
        edition gets rejected. And watch the category trap: if you are
        filing Form I-765 together with Form I-485 (adjustment of status),
        your category is (c)(9), <em>not</em> (c)(26) — and filing at the
        (c)(26) address with an I-485 gets the I-485 rejected. This guide
        covers standalone (c)(26) filings.
      </p>
      <p>
        <strong>Step 3 — Pay the correct fee and sign.</strong> USCIS
        rejects applications without the proper fee or signature. The fee
        is covered in detail below; the short version is $520 on paper.
        Since October 2025, USCIS generally no longer accepts personal
        checks, cashier&apos;s checks, or money orders for paper filings
        unless you qualify for an exemption — pay by card (Form G-1450)
        or ACH transfer (Form G-1650) exactly as the current I-765
        instructions specify.
      </p>
      <p>
        <strong>Step 4 — File at the right address.</strong> A standalone
        I-765, or one filed together with Form I-539 (H-4 extension or
        change of status), goes to the Lockbox address on USCIS&apos;s
        Direct Filing Addresses for Form I-765 page. Filed together with
        Form I-129 (the spouse&apos;s H-1B petition) plus I-539, it goes
        to the Service Center with jurisdiction over the I-129. Do not
        copy lockbox addresses from old guides: USCIS changed the I-765
        filing-addresses page on October 7, 2026. One more sequencing
        fact: USCIS decides the I-539 (and I-129, if filed){" "}
        <em>before</em> the I-765, so a bundled filing is not decided
        simultaneously — and the settlement that once required
        simultaneous adjudication of bundled H-4 cases expired on January
        18, 2025.
      </p>
      <p>
        <strong>Step 5 — Biometrics, receipt, and tracking.</strong>{" "}
        After filing you receive a receipt notice (Form I-797C) with a
        receipt number. Track it on the USCIS Case Status tool or through
        a USCIS online account, which adds email and text alerts. Long
        silence between &ldquo;Case Was Received&rdquo; and a decision is
        normal — USCIS often shows nothing in between, and that alone does
        not mean something is wrong.
      </p>
      <p>
        <strong>Step 6 — Work only when the card is in hand.</strong> You
        are not authorized to work until USCIS approves the I-765{" "}
        <em>and</em> you hold the physical EAD, and only through the
        expiration date printed on it.
      </p>
      <h2>The fee — and why you will see three different numbers</h2>
      <p>
        Search for the H-4 EAD fee and you will find $410, $520, and $380
        quoted with equal confidence. Only one is right for a standalone
        H-4 EAD filing today, and the confusion has a clear history.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Filing</th>
              <th>Fee</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Form I-765, standalone, paper</td>
              <td>$520</td>
              <td>This is the H-4 EAD fee</td>
            </tr>
            <tr>
              <td>Form I-765, standalone, online</td>
              <td>$470</td>
              <td>
                Does not apply to (c)(26): as of October 2026, this
                category is not accepted online
              </td>
            </tr>
            <tr>
              <td>Form I-765 with a pending I-485 (c)(9)</td>
              <td>$260</td>
              <td>
                Different category, different fee — do not confuse it
                with (c)(26)
              </td>
            </tr>
            <tr>
              <td>Premium processing for (c)(26)</td>
              <td>Not available</td>
              <td>
                At any price — and premium processing on the H-1B
                petition does not cover the EAD
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The $410 figure is the <strong>pre-April-2024 fee</strong>. The
        USCIS fee rule effective April 1, 2024 (89 FR 6194) replaced it
        with the $520 / $470 structure, and folded the old separate $85
        biometric fee into the base fee for most applicants. The $380
        figure is not the I-765 fee at all. Because a wrong fee means
        rejection, verify the amount on the USCIS G-1055 fee schedule on
        the day you file — fees change, and this article cannot change
        with them.
      </p>

      <h2>Processing time — what to really expect</h2>
      <p>
        There is no single honest number for H-4 EAD processing time, and
        any guide giving you one is hiding the variable that matters
        most: whether you filed the I-765 alone or together with an H-4
        extension. USCIS figures reported in October 2026 show how wide
        the gap is:
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Filing type</th>
              <th>USCIS figure (October 2026 snapshot)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Form I-765 (c)(26) filed with Form I-539 H-4 extension</td>
              <td>About 6.5 months</td>
            </tr>
            <tr>
              <td>Form I-765 (c)(26) filed standalone</td>
              <td>About 17.5 months</td>
            </tr>
            <tr>
              <td>
                Median for the I-765 group including H-4 spouses
                (April–June 2026)
              </td>
              <td>3.3 months</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        That spread is also why competing guides disagree with each other
        (3–6 months here, 6–15 months there): they are mixing bundled
        cases, standalone cases, and different service centers into one
        number. Bundled cases wait because USCIS decides the I-539 first;
        standalone cases sit in a longer queue. Your own case lives in
        exactly one of those buckets, so check the USCIS processing-times
        tool for your category and center instead of trusting any
        guide&apos;s average — including this one&apos;s snapshot, which
        will age.
      </p>
      <p>
        If your case passes its posted processing time, the escalation
        ladder is: a service request once you are past your case inquiry
        date (the point where about 93% of similar cases are finished),
        then a congressional inquiry through your House or Senate office,
        and finally, in some cases, a federal lawsuit over unreasonable
        delay. An expedite request is a separate, narrow door: it needs
        USCIS expedite criteria such as severe financial loss, and
        needing to work, by itself, is not enough. And remember — no
        premium processing exists for (c)(26), so there is no paid
        shortcut to buy.
      </p>

      <h2>Renewal under the new rule — the section that matters most</h2>
      <p>
        For years, a timely-filed EAD renewal came with a safety net: if
        USCIS had not decided by the time your card expired, your work
        authorization continued automatically for up to 540 days. That
        safety net is gone, and the dates matter precisely:
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Renewal filed…</th>
              <th>Automatic extension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Before October 30, 2025</td>
              <td>
                Up to 540 days, but never past your H-4 I-94 end date
              </td>
            </tr>
            <tr>
              <td>On or after October 30, 2025</td>
              <td>
                None. Work authorization ends the day after the printed
                expiry
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The timeline: an interim final rule on October 30, 2025 (90 FR
        48799) removed the automatic extension, and a DHS final rule
        published October 14, 2026 (91 FR 65306) adopted that interim
        rule without substantive change, effective immediately. USCIS
        has archived its earlier automatic-extension guidance. For
        renewals in the new period, an expired EAD plus a receipt notice
        is <strong>no longer valid I-9 documentation</strong> — there is
        no bridge to show an employer.
      </p>
      <p>
        The plan this forces is simple and unforgiving:{" "}
        <strong>file on the first day of the 180-day window</strong>.
        USCIS does not accept a renewal EAD application more than 180
        days before expiry, so that window is the earliest you can act —
        and every week of delay inside it is a week of gap risk if
        processing runs long. Tell your employer early and plan for a
        gap as a contingency, not as a surprise. DHS estimated that
        20,000 to 33,000 EADs could lapse in an 18-month window starting
        May 2027 as workers hit gaps between expiry and approval — the
        background to that estimate is in our{" "}
        <Link
          href="/blog/h1b-extension-process-2026-changes"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B extension changes guide
        </Link>
        .
      </p>
      <p>
        One false hope to close: on September 11, 2026, a federal court
        in California ruled for seven H-4 spouses who challenged the
        interim rule. That relief covers those seven named plaintiffs
        only. It is not nationwide and does not restore automatic
        extensions for anyone else. And the groups <em>not</em> affected
        the same way: E and L spouses, who are work-authorized incident
        to status, and F-1 STEM OPT holders, who keep a separate
        180-day mechanism.
      </p>
      <h2>What the EAD lets you do — and what it does not</h2>
      <p>
        <strong>It lets you:</strong> work for any employer; change
        employers without a new petition; hold multiple jobs; start or
        run your own business; and apply for a Social Security number.
        No sponsorship, no labor certification, no cap.
      </p>
      <p>
        <strong>It does not:</strong> extend your H-4 status by itself
        (the card&apos;s validity follows your I-94); survive the end of
        the underlying H-1B status; authorize work before the card
        arrives; or authorize work after the card expires — which, since
        October 2025, includes the renewal gap described above.
      </p>
      <p>
        A separate proposal worth one paragraph, clearly marked as{" "}
        <em>not in effect</em>: on September 11, 2026, DHS proposed
        eliminating the 60-day grace period that currently follows the
        end of H-1B employment (91 FR 57807; comments closed November
        10, 2026). It is a proposal only, and it does not rescind the
        H-4 EAD. If it were finalized, it would change what happens
        after a job loss — not whether H-4 spouses can hold an EAD.
      </p>

      <h2>Is the H-4 EAD program ending?</h2>
      <p>
        No. The rule at 8 CFR 274a.12(c)(26) remains in effect, and no
        rescission rule has been published. The legal challenge is
        closed: in Save Jobs USA v. DHS, the D.C. Circuit upheld the
        rule, and the Supreme Court denied review on October 14, 2025
        (No. 24-923). An earlier rescission proposal from 2019 was
        withdrawn in January 2021. What changed in 2025–2026 is renewal
        mechanics, not the program&apos;s existence. Future rulemaking
        is always possible, which is why this guide dates its status
        checks — but as of October 27, 2026, the program is active and
        the risk is a renewal gap, not abolition.
      </p>

      <h2>Mistakes that get applications rejected or delayed</h2>
      <ul>
        <li>
          <strong>Wrong category:</strong> filing (c)(26) when the
          I-765 accompanies an I-485 — that case needs (c)(9), and the
          wrong filing gets the I-485 rejected.
        </li>
        <li>
          <strong>Wrong fee or missing signature:</strong> a stale $410
          payment or an unsigned form means rejection, not a request
          for the difference.
        </li>
        <li>
          <strong>Missing evidence:</strong> an incomplete filing does
          not get fixed for free — it gets an RFE, and an RFE costs
          months.
        </li>
        <li>
          <strong>Stale filing address:</strong> USCIS changed the
          I-765 filing-addresses page on October 7, 2026. Old guides
          point to old addresses.
        </li>
        <li>
          <strong>Late renewal:</strong> filing inside the 180-day
          window but weeks late, when every week of processing delay
          now maps directly onto a work gap.
        </li>
        <li>
          <strong>Working on a receipt:</strong> assuming a pending
          renewal plus an expired card keeps you employed. For renewals
          filed on or after October 30, 2025, it does not.
        </li>
      </ul>

      <h2>How this fits your green-card journey</h2>
      <p>
        For most H-1B families, the H-4 EAD is the first green-card
        milestone that changes daily life — it arrives at the I-140
        stage, years before the green card itself. If the wait ahead is
        what you are really tracking, these help:
      </p>
      <ul>
        <li>
          <Link
            href="/blog/i140-processing-time"
            className="text-blue-700 underline underline-offset-2"
          >
            I-140 processing time
          </Link>{" "}
          — the petition whose approval creates Path 1
        </li>
        <li>
          <Link
            href="/blog/perm-processing-time"
            className="text-blue-700 underline underline-offset-2"
          >
            PERM processing time
          </Link>{" "}
          — the stage before the I-140, and the basis for many Path 2
          extensions
        </li>
        <li>
          <Link
            href="/blog/h1b-extension-process-2026-changes"
            className="text-blue-700 underline underline-offset-2"
          >
            H-1B extension process and 2026 changes
          </Link>{" "}
          — AC21 extensions beyond six years, and the automatic
          extension background
        </li>
        <li>
          <Link
            href="/tools/priority-date-tracker"
            className="text-blue-700 underline underline-offset-2"
          >
            Priority Date Tracker
          </Link>{" "}
          — where you stand in the green-card line
        </li>
        <li>
          <Link
            href="/tools/i140-approval-rates"
            className="text-blue-700 underline underline-offset-2"
          >
            I-140 Approval Rates
          </Link>{" "}
          — approval odds by employer
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What is an H-4 EAD?</h3>
      <p>
        A work permit — the physical card is Form I-766 — for certain
        H-4 spouses of H-1B workers. H-4 status alone does not authorize
        work, and H-4 children are never eligible. Once issued, it
        allows unrestricted work: any employer, multiple jobs, or
        self-employment, with no sponsorship required.
      </p>

      <h3>Who qualifies for an H-4 EAD?</h3>
      <p>
        H-4 spouses whose H-1B spouse is the principal beneficiary of an
        approved Form I-140, or has been granted H-1B status beyond six
        years under AC21 sections 106(a) and (b). A pending I-140 alone
        does not qualify, and priority-date currency does not matter
        for the approved-I-140 path.
      </p>

      <h3>How much does the H-4 EAD cost?</h3>
      <p>
        $520 for a paper Form I-765 filing. As of October 2026, category
        (c)(26) is not accepted online, so the $470 online price does
        not apply to H-4 EAD. The $410 figure still seen online is the
        pre-April-2024 fee — confirm the current fee on the USCIS
        G-1055 fee schedule before filing.
      </p>

      <h3>How long does H-4 EAD processing take?</h3>
      <p>
        It varies sharply by filing type. USCIS figures reported in
        October 2026 put category (c)(26) at about 6.5 months when filed
        with an H-4 extension and about 17.5 months for a standalone
        I-765. Check the live USCIS processing-times tool for your
        category and service center — no guide&apos;s average replaces
        it.
      </p>

      <h3>Can I keep working while my H-4 EAD renewal is pending?</h3>
      <p>
        Not for renewals filed on or after October 30, 2025. A DHS final
        rule (October 14, 2026, 91 FR 65306) permanently ended the
        automatic extension for those renewals: work authorization ends
        the day after the card expires and resumes only when the new
        card is approved. Renewals filed before October 30, 2025 keep up
        to 540 days.
      </p>

      <h3>Is premium processing available for the H-4 EAD?</h3>
      <p>
        No. USCIS does not offer premium processing for Form I-765 in
        category (c)(26), and premium processing on the H-1B petition
        does not cover the H-4 extension or the EAD.
      </p>

      <h3>Can H-4 children get an EAD?</h3>
      <p>
        No. Only H-4 spouses are eligible under category (c)(26); H-4
        children can never receive work authorization through this
        category.
      </p>

      <h3>Is the H-4 EAD program ending?</h3>
      <p>
        No. The rule at 8 CFR 274a.12(c)(26) remains in effect, and the
        Supreme Court declined review of the challenge to it on October
        14, 2025. What ended is the automatic renewal extension, not the
        program. A separate proposal to eliminate the 60-day grace
        period is pending and does not rescind the H-4 EAD.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          USCIS — Employment Authorization for Certain H-4 Dependent
          Spouses (eligibility paths, evidence chart, filing tips, and
          validity rules). Page title cited; confirm the current
          edition on the USCIS site before filing.
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
          — Form I-765 standalone fee: $520 paper, $470 online.
        </li>
        <li>
          DHS final rule, Removal of Automatic Extensions for Certain
          Employment Authorization Documents, 91 FR 65306 (October 14,
          2026), adopting the October 30, 2025 interim final rule (90 FR
          48799).
        </li>
        <li>
          USCIS — Form I-765 instructions and Direct Filing Addresses
          for Form I-765 (check the current edition and current
          addresses before filing; the addresses page changed October 7,
          2026).
        </li>
        <li>
          <Link
            href="/blog/h1b-extension-process-2026-changes"
            className="underline text-blue-600"
          >
            VisaTalentUSA — H-1B extension process and 2026 changes
          </Link>{" "}
          — automatic-extension background and the DHS lapse estimate.
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: October 27, 2026. Status last checked: October 27,
          2026. Fees, filing addresses, and processing times change —
          confirm them on the linked USCIS pages before filing. Not
          legal advice — consult a qualified immigration attorney for
          your specific situation.
        </em>
      </p>
    </>
  );
}
