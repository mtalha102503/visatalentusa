import Link from "next/link";

export default function GreenCardRenewalContent() {
  return (
    <>
      <p className="lead">
        How do you renew a green card? You file Form I-90, Application to
        Replace Permanent Resident Card. In 2026 the filing fee is{" "}
        <strong>$415 online or $465 on paper</strong>, biometrics included
        — there is no separate biometrics fee. File within six months of
        the expiration date printed on your card. Once USCIS accepts your
        filing, the renewal receipt notice (Form I-797C) automatically
        extends your expired card for <strong>36 months</strong> when shown
        together with the card — so you can keep working and travelling
        while the new card is on its way. Your permanent resident status
        itself never expires when the card does; only the proof expires.
        This guide covers the fee, the filing window, the step-by-step
        process, the current processing times, and how to prove your
        status while you wait — every figure checked against USCIS
        sources on November 16, 2026.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — green card renewal at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Fee:</strong> $415 online / $465 paper (Form I-90).
            Biometrics are included. Three cases pay $0: a card that was
            never received, a card with incorrect information caused by
            a DHS error, and a child who turned 14 whose card expires
            after their 16th birthday — if the application is filed
            within 30 days of the 14th birthday.
          </li>
          <li>
            <strong>When to file:</strong> within six months of the
            expiration date on your card. An already-expired card can
            still be renewed at any time — there is no deadline and no
            late penalty for the filing itself. Filing more than six
            months early under the expiry reason may be denied, and the
            fee is not refunded.
          </li>
          <li>
            <strong>Receipt extension:</strong> a properly filed I-90
            renewal receipt notice (Form I-797C) extends the card 36
            months from the printed expiry date, effective September 10,
            2024. It was 24 months before that.
          </li>
          <li>
            <strong>Processing time:</strong> USCIS&apos;s
            processing-times tool currently shows 80% of 10-year
            renewals completed within 10.5 months, and 80% of
            replacement or initial issuances within 6 months. A limited
            tracked sample (85 cases) shows a median of about 7.1
            months. There is no premium processing for Form I-90.
          </li>
          <li>
            <strong>Conditional residents do NOT use I-90 to
            renew:</strong> a 2-year marriage-based card&apos;s
            conditions are removed with Form I-751, and a 2-year EB-5
            card&apos;s with Form I-829. A joint I-751 filing must be
            made in the 90 days before expiry. A waiver of the joint
            filing requirement may be filed before, during, or after the
            90-day window, at any time until a final order of removal is
            issued. If the petitioning spouse or stepparent died, the
            filing is an individual filing request, not a waiver. An
            I-90 filed in the 90-day joint-filing window is denied.
          </li>
          <li>
            <strong>Proof while you wait:</strong> your expired card
            together with the I-797C receipt notice is evidence of your
            status and work authorization for 36 months. If you no
            longer have the card, or the 36 months run out while your
            case is still pending, request an ADIT (I-551) stamp
            through the USCIS Contact Center at 800-375-5283.
          </li>
          <li>
            <strong>Figures source:</strong> USCIS Form G-1055, Fee
            Schedule, edition 10/26/26; the USCIS Form I-90 page and
            Replace Your Green Card page; and the USCIS processing-times
            tool — all checked November 16, 2026.
          </li>
        </ul>
      </div>

      <h2>Green card renewal: the short answer</h2>
      <p>
        A green card — the Permanent Resident Card, Form I-551 — is valid
        for ten years for most lawful permanent residents. The card
        expires; the status does not. Renewing the card means filing one
        form, Form I-90, Application to Replace Permanent Resident Card,
        with USCIS. You do not go through the green card application
        process again, you do not need a sponsor, and there is no
        interview in most renewal cases.
      </p>
      <p>
        The whole process has five parts: confirm you need Form I-90
        (and not Form I-751 or I-829), file online or by paper, pay the
        fee, attend a biometrics appointment if USCIS schedules one, and
        wait for the new card in the mail. The receipt notice you get
        after filing is the document that keeps you covered in the
        meantime, so you can work and travel while USCIS processes the
        renewal.
      </p>
      <p>
        This guide is written for holders of a 10-year card. If you hold
        a 2-year conditional card, the next section tells you which form
        you actually need, because filing the wrong one is the most
        common — and most expensive — mistake in this process.
      </p>

      <h2>Which form do I file? I-90 vs I-751 vs I-829</h2>
      <p>
        The form depends on the card you hold and why you need a new
        one. Getting this wrong costs you the filing fee and months of
        waiting, because USCIS denies an I-90 filed for the wrong
        reason instead of converting it.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Which form to file by card type and situation
          </caption>
          <thead>
            <tr>
              <th scope="col">Your situation</th>
              <th scope="col">Form</th>
              <th scope="col">When</th>
              <th scope="col">Fee (2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10-year card expiring within 6 months, or already expired</td>
              <td>Form I-90</td>
              <td>Within 6 months before expiry, or any time after</td>
              <td>$415 online / $465 paper</td>
            </tr>
            <tr>
              <td>10-year card lost, stolen, damaged, or destroyed</td>
              <td>Form I-90</td>
              <td>As soon as practical</td>
              <td>$415 online / $465 paper</td>
            </tr>
            <tr>
              <td>Card has wrong information, or your legal name changed</td>
              <td>Form I-90</td>
              <td>As soon as practical</td>
              <td>$415 online / $465 paper ($0 if the error was DHS&apos;s)</td>
            </tr>
            <tr>
              <td>Card was issued but never received</td>
              <td>Form I-90</td>
              <td>As soon as practical</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>2-year conditional card, marriage-based, expiring</td>
              <td>Form I-751, Petition to Remove Conditions on Residence</td>
              <td>Joint filing: in the 90 days before the 2nd anniversary</td>
              <td>$750 paper / $700 online</td>
            </tr>
            <tr>
              <td>2-year conditional card, EB-5 investor, expiring</td>
              <td>Form I-829, Petition by Investor to Remove Conditions</td>
              <td>In the 90 days before the 2nd anniversary</td>
              <td>$3,750 ($5,000 for filings postmarked on or after November 30, 2026)</td>
            </tr>
            <tr>
              <td>Conditional resident needing a replacement (lost, stolen, damaged, wrong info) and the card is NOT expiring within 90 days</td>
              <td>Form I-90 (replacement only — the new card keeps the same 2-year expiry)</td>
              <td>As soon as practical</td>
              <td>$415 online / $465 paper</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The trap is the I-751 90-day window — and within I-751, it
        applies only to joint filings. (Form I-829 has its own 90-day
        window — see the table above.) If you are a conditional resident
        and your 2-year card expires within the next 90 days, do not file
        Form I-90 — USCIS denies it. File Form I-751 (marriage-based)
        or Form I-829 (EB-5) instead. The receipt notices for those
        petitions extend a conditional card for 48 months, longer than
        the 36-month extension on an I-90 renewal receipt. A waiver of
        the joint filing requirement — for example after divorce or
        annulment, abuse, or extreme hardship — is different: it may be
        filed before, during, or after the 90-day window, at any time
        until a final order of removal is issued. The filing goes to
        USCIS even if removal proceedings have started; an immigration
        judge reviews a USCIS denial, but the filing itself is made with
        USCIS. And if the petitioning spouse or stepparent died, the
        conditional resident files Form I-751 individually — that is an
        individual filing request, not a waiver. See the{" "}
        <a
          href="https://www.uscis.gov/i-751"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          USCIS Form I-751 page
        </a>{" "}
        for the separate filing rules.
      </p>
      <p>
        A naturalization applicant is a separate case again: filing Form
        N-400 does not renew a green card, but an N-400 receipt notice
        extends the card for 24 months. If your card is expiring and you
        are eligible to naturalize, filing N-400 can cover the gap — but
        it is not a substitute for an I-90 if you are not applying for
        citizenship.
      </p>

      <h2>How much does green card renewal cost in 2026?</h2>
      <p>
        The fee is <strong>$415 if you file online</strong> and{" "}
        <strong>$465 if you file on paper</strong>. The $50 difference is
        an online-filing discount written into the fee regulation (8 CFR
        106.1(g)) — it is not a separate charge. Biometrics are included
        in both amounts; there is no separate biometrics fee. These
        figures come from{" "}
        <a
          href="https://www.uscis.gov/g-1055"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          USCIS Form G-1055, Fee Schedule
        </a>
        , edition 10/26/26, checked November 16, 2026.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Form I-90 fees by filing situation, 2026
          </caption>
          <thead>
            <tr>
              <th scope="col">Filing situation</th>
              <th scope="col">Online</th>
              <th scope="col">Paper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General filing (renewal, replacement, name change)</td>
              <td>$415</td>
              <td>$465</td>
            </tr>
            <tr>
              <td>Turning 14, card expires before 16th birthday</td>
              <td>$415</td>
              <td>$465</td>
            </tr>
            <tr>
              <td>Turning 14, card expires after 16th birthday, filed within 30 days of the 14th birthday</td>
              <td>$0</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Card never received, or returned as undeliverable</td>
              <td>$0</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Incorrect information caused by a DHS error</td>
              <td>$0</td>
              <td>$0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The fee has not changed since April 1, 2024, when the DHS fee
        rule (89 FR 6194) took effect. Before that date the structure
        was different — $455 plus an $85 biometrics fee, $540 in total.
        There is no premium processing for Form I-90:
        no payment buys faster service. USCIS may expedite a case at its
        own discretion in emergencies or cases of severe financial loss,
        but the bar is high for a routine renewal.
      </p>
      <h3>Can you get the fee waived?</h3>
      <p>
        Yes — Form I-90 is eligible for a general fee waiver on Form
        I-912, Request for Fee Waiver, which itself costs nothing to
        file. You qualify if you meet any one of three tests: you
        receive a means-tested benefit, your household income is at or
        below 150% of the Federal Poverty Guidelines, or you can show
        financial hardship. The safe route is paper: file the paper
        I-90 together with the paper I-912 and your supporting evidence,
        mailed to the I-90 lockbox. USCIS&apos;s Tips for Filing Forms
        Online states that you cannot file online if you are requesting
        a fee waiver, and the fee schedule frames that restriction as
        applying to most forms rather than every form — so paper is the
        rule, not a universal ban.
      </p>
      <p>
        One wrinkle to know about: the{" "}
        <a
          href="https://www.uscis.gov/i-912"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Form I-912 page
        </a>{" "}
        lists two options — mail a paper I-912 with the form for all
        eligible forms, or upload a completed I-912 PDF with certain
        eligible forms, including I-90, through a USCIS online account.
        Check the current I-912 instructions to confirm your filing
        qualifies for the upload option. Paper filing remains the
        straightforward route if you want no ambiguity. If you send both
        the fee and a fee-waiver request, USCIS deposits the fee and
        does not adjudicate the waiver.
      </p>
      <h3>How to pay</h3>
      <p>
        Online filings pay through Pay.gov. For paper filings, USCIS
        stopped accepting personal checks, business checks, money orders
        and cashier&apos;s checks on October 28, 2025. Pay by credit,
        debit or prepaid card with Form G-1450, or by ACH bank debit
        with Form G-1650; a narrow paper-payment exemption requires Form
        G-1651.
      </p>

      <h2>When to file: the 6-month window</h2>
      <p>
        File Form I-90 when your card <strong>has expired or will expire
        within the next six months</strong> — USCIS states the rule as
        &ldquo;within six months,&rdquo; not as a fixed number of days,
        because calendar months are not all the same length (8 CFR
        264.5(b)(2)). USCIS states the rule the same way on its{" "}
        <a
          href="https://www.uscis.gov/green-card/after-we-grant-your-green-card/replace-your-green-card"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Replace Your Green Card page
        </a>
        .
      </p>
      <p>
        Filing too early is the mistake to avoid. If your card will not
        expire within six months and you file under the expiry reason
        anyway, the Form I-90 instructions say the application may be
        denied — and the fee is not refunded. Note the word is denied,
        not rejected: a rejection means the filing was never accepted
        (unsigned form, wrong edition, wrong fee), and the fee comes
        back. A denial means the application was accepted and then
        refused, and the fee is kept.
      </p>
      <p>
        If your card has already expired, you can still file at any
        time. There is no deadline, no late penalty and no fine for the
        filing itself — but delay has practical costs: until the receipt
        notice arrives, arranging acceptable documentation takes more
        effort, and travel and administrative tasks (licence renewal,
        accounts, benefits) can become difficult. That is a filing rule,
        not the whole legal picture: the separate duty to carry valid
        proof of registration is discussed in the &ldquo;What happens if
        you never renew&rdquo; section below. If you are outside the
        United States when the window opens, USCIS says to file Form
        I-90 as soon as you return, provided you return within one year
        of your departure and before the card expires.
      </p>

      <h2>How to renew your green card: step by step</h2>
      <h3>Step 1: Confirm you need Form I-90</h3>
      <p>
        Check the expiration date on the front of your card and the
        &ldquo;Category&rdquo; code. A 10-year card expiring within six
        months (or already expired) means Form I-90. A 2-year card
        expiring soon means Form I-751 or I-829 — see the table above.
        If your 10-year card is lost, stolen or damaged, or your name
        changed, Form I-90 is the right form whatever the expiry date.
        Conditional residents face the 90-day restriction instead — see
        the table above.
      </p>
      <h3>Step 2: Gather your documents</h3>
      <p>
        Submit copies, not originals, unless USCIS specifically asks for
        an original. A document in another language needs a certified
        English translation. What you need depends on the reason you are
        filing:
      </p>
      <ul>
        <li>
          <strong>Renewal (expired or expiring card):</strong> a copy
          of your current card, front and back.
        </li>
        <li>
          <strong>Lost, stolen or destroyed card:</strong> a copy of a
          government-issued photo ID, such as a passport or
          driver&apos;s licence. USCIS does not require a police report
          for a lost or stolen card.
        </li>
        <li>
          <strong>Name or biographic change:</strong> legal proof — a
          marriage certificate, divorce decree, adoption decree or court
          order. If the card is wrong because of a DHS error, return the
          original incorrect card with proof of the correct information.
        </li>
        <li>
          <strong>Card never received:</strong> evidence of your
          approval as a permanent resident, such as your I-797 approval
          notice.
        </li>
      </ul>
      <p>
        You will also need your A-Number (7 to 9 digits, printed on the
        card), the date you became a permanent resident, and your class
        of admission — all of these are on the card itself.
      </p>
      <h3>Step 3: File online or by paper</h3>
      <p>
        <strong>Online:</strong> create a USCIS online account,
        complete Form I-90, upload your evidence, and pay $415 through
        Pay.gov. Filing online lets you check your case status, receive
        notifications, and respond to a request for evidence through the
        same account. The form edition is 01/20/25 — only that edition
        is accepted.
      </p>
      <p>
        <strong>By paper:</strong> mail the completed, signed form to
        the single Phoenix lockbox — there is no state-specific lockbox
        for I-90. By USPS: USCIS, Attn: I-90, P.O. Box 21262, Phoenix,
        AZ 85036-1262. By FedEx, UPS or DHL: USCIS, Attn: I-90 (Box
        21262), 2108 E. Elliot Rd., Tempe, AZ 85284-1806. Note the
        courier address is in Tempe, not Phoenix. Clip Form G-1145 to
        the first page if you want an email or text notice when USCIS
        accepts the filing, and sign the form — an unsigned form is
        rejected. Pay with Form G-1450 (card) or G-1650 (ACH); do not
        send a check or money order.
      </p>
      <h3>Step 4: Keep your receipt notice</h3>
      <p>
        After USCIS accepts your filing, it mails Form I-797C, Notice of
        Action — the receipt notice. It carries a 13-character receipt
        number (3 letters followed by 10 digits) that you use to check
        your case status online; USCIS asks you to wait 72 hours after
        filing before checking. For a renewal filing, this receipt notice
        is the document that extends your expired card for 36 months, so
        keep it with the card itself. If you filed on paper, USCIS also
        creates an online account for you and mails an Account Acceptance
        Notice.
      </p>
      <h3>Step 5: Wait for the new card</h3>
      <p>
        After approval, USCIS mails the new card to the U.S. mailing
        address on file. Permanent Resident Cards cannot be mailed
        outside the United States, so update your address through your
        USCIS online account or Form AR-11 if you move while the case is
        pending.
      </p>

      <h2>Biometrics appointment</h2>
      <p>
        After a properly filed application, USCIS mails a biometrics
        appointment notice (a separate Form I-797C) with the date, time
        and location of the Application Support Center serving your
        address. Bring the appointment notice and a valid photo ID —
        your passport, driver&apos;s licence, or the expiring card.
        At the appointment USCIS takes your fingerprints, photograph and
        digital signature. The receipt notice is not the biometrics
        notice: it does not tell you when or where to appear.
      </p>
      <p>
        USCIS sometimes reuses biometrics it already collected and skips
        the appointment — but it publishes no reuse rule for Form I-90,
        so do not count on it. Interviews for I-90 renewals are rare,
        though USCIS may refer you to a field office or issue a request
        for evidence.
      </p>
      <p>
        Do not miss the appointment. If you fail to appear, USCIS treats
        the application as abandoned and it may be denied — unless USCIS
        received a change-of-address or rescheduling request before the
        scheduled appointment. Biometrics must be completed within 90
        days of the appointment date in the initial notice, or the
        application may be denied for abandonment. Reschedule through
        your USCIS online account, or as the notice instructs, with a
        good reason — and do it before the appointment, not after.
      </p>

      <h2>How long does green card renewal take?</h2>
      <p>
        USCIS&apos;s{" "}
        <a
          href="https://egov.uscis.gov/processing-times"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          processing-times tool
        </a>{" "}
        currently shows that <strong>80% of 10-year renewals are
        completed within 10.5 months</strong>, and <strong>80% of
        initial issuances and replacements within 6 months</strong> —
        checked November 16, 2026, at the Service Center Operations
        office, the only office that publishes I-90 times. USCIS states
        its goal is to process all I-90s within 120 days, but the
        published 80% figures are longer than that goal, and the tool
        republishes its data regularly — check it on the day you file
        rather than relying on any guide&apos;s snapshot.
      </p>
      <p>
        A limited tracked sample tells a different story, but it is not
        comparable to the figures above: Casetracker.io, reporting on 85
        I-90 cases decided in the last 12 months, shows a median of
        about 7.1 months, with the middle half of cases finishing
        between 4.9 and 9.8 months. That is a median — the 50th
        percentile — across a small, self-selected sample, while the
        USCIS figures are 80th-percentile figures across all cases, so
        the two numbers do not show that tracked cases run faster. Treat
        the tracked median as a limited sample observation, not a
        promise. There is no premium processing for Form I-90, so no
        payment shortens the wait.
      </p>
      <p>
        You can check your own case with the 13-character receipt number
        from your I-797C. If your receipt date is older than the case
        inquiry date USCIS publishes for I-90, you can submit a case
        inquiry through the same processing-times tool — it will ask for
        your receipt date and tell you whether you can contact USCIS
        about the case.
      </p>

      <h2>How to prove your status while you wait</h2>
      <p>
        This is how it works.
        Your expired card <strong>together with</strong> your I-797C
        renewal receipt notice is evidence of your lawful permanent
        resident status, your employment authorization, and your
        authorization to return to the United States after temporary
        foreign travel — for 36 months from the expiration date printed
        on the card. Neither document alone does this in most
        situations: the expired card alone is not accepted as proof of
        status, and the receipt notice alone is not proof without the
        card. (One narrow exception: an expired 10-year card may still
        get you boarded after less than a year abroad — see the travel
        section below.)
      </p>
      <h3>The 36-month extension — and why some guides still say 24</h3>
      <p>
        The extension has grown twice. It was 12 months from January
        2021, then 24 months from September 26, 2022 — and{" "}
        <strong>36 months from September 10, 2024</strong>, when USCIS
        announced the change (September 18, 2024) and began printing
        amended receipt notices for people with a pending Form I-90 to
        renew an expiring or expired card. The current extension for an
        I-90 renewal is 36 months. See the{" "}
        <a
          href="https://www.uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-extension-to-36-months-for-green-card-renewals"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          USCIS announcement of the 36-month extension
        </a>
        .
      </p>
      <p>
        Do not confuse the I-90 extension with the others. A pending
        Form I-751 or I-829 extends a conditional card for 48 months.
        A pending Form N-400 extends a card for 24 months. Those are
        different forms, different extensions.
      </p>
      <h3>Employment verification (Form I-9)</h3>
      <p>
        For a new job, your expired Permanent Resident Card presented
        with the I-90 renewal receipt notice is an acceptable List A
        document — identity and employment authorization in one — for
        the 36-month extension period. But the green card is not the only
        option: a lawful permanent resident may instead present a List B
        identity document (such as a state-issued driver&apos;s licence)
        together with a List C document (such as an unrestricted Social
        Security card). The employee chooses which acceptable documents
        to present; an employer may not demand a specific one. And if
        you are already employed and presented a valid green card when
        you were hired, your employer generally should not reverify you
        when that card expires — reverification is never required when a
        Permanent Resident Card expires. See the{" "}
        <a
          href="https://www.uscis.gov/i-9-central/form-i-9-resources/handbook-for-employers-m-274/70-evidence-of-employment-authorization-for-certain-categories/71-lawful-permanent-residents-lpr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          USCIS Handbook for Employers (M-274), section 7.1
        </a>
        . If an employer is unsure how to record the card-plus-receipt
        combination, USCIS&apos;s employer line for I-9 questions is
        888-897-7781.
      </p>
      <h3>The ADIT (I-551) stamp</h3>
      <p>
        If you no longer have your card — it was lost, stolen or
        destroyed — or your I-90 is still pending and both the card and
        the 36-month extension have expired, the receipt notice cannot
        help you. What you need is an ADIT stamp: a temporary I-551
        stamp placed only on Form I-94 or in an unexpired passport,
        serving as temporary evidence of your status and employment
        authorization.
      </p>
      <p>
        To get one, call the USCIS Contact Center at{" "}
        <strong>800-375-5283</strong> (TTY 800-767-1833) and ask for
        temporary evidence of status, or for a field-office appointment.
        Do not look for InfoPass — the self-scheduling system no longer
        exists. Since March 2023 there is also a
        mail-delivery option: when you call, an officer verifies your
        identity and mailing address, and if no in-person appointment is
        needed, the field office mails you a Form I-94 with the ADIT
        stamp. You still need to appear in person for urgent needs, if
        your photo is unusable, or if your identity or address cannot be
        confirmed. USCIS decides the validity period case by case, based
        on your situation — normally not more than one year, unless a
        regulation or policy provides otherwise — so not every stamp
        lasts a full year, and the period is set by USCIS, not by you.
        See the{" "}
        <a
          href="https://www.uscis.gov/archive/uscis-announces-additional-mail-delivery-process-for-receiving-adit-stamp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          USCIS announcement on ADIT stamps
        </a>
        . Bring your passport, your I-797C receipt, any old card, and a
        government ID to the appointment.
      </p>
      <p>
        One honest limitation: a driver&apos;s licence or state ID is a
        state matter, not a federal one. The expired card plus receipt
        notice is evidence of status, but each state&apos;s DMV and
        REAL ID rules differ on what it accepts and for how long, and
        some DMV staff are unfamiliar with the extension notice. This
        guide cannot promise that every DMV will accept the combination
        — and neither can any other guide, because no federal source
        says so. If a licence renewal is urgent, an ADIT stamp is the
        safer document to carry.
      </p>

      <h2>Can you travel or work while your renewal is pending?</h2>
      <p>
        Yes to both — with the right documents. You remain authorized
        to work, and your expired card together with the I-797C receipt
        notice is accepted for re-entry after temporary travel abroad.
        Carry the original receipt notice, not only a phone photo of it,
        and confirm your airline&apos;s boarding policy in advance.
      </p>
      <p>
        The situation changes if the card itself is gone. If your card
        was lost, stolen or destroyed while you were temporarily abroad
        for less than one year, file Form I-131A, Application for Travel
        Document (Carrier Documentation), in person at a U.S. Embassy or
        Consulate — the fee is $575 — to get carrier documentation back
        to the United States.
      </p>
      <p>
        If your card is merely expired (a 10-year card) and you have
        been outside the United States for less than one year, you may
        not need Form I-131A at all: CBP policy allows a carrier to
        board a permanent resident with an expired 10-year card in that
        situation. Check with the airline first, because carriers may
        still refuse. If you have been abroad for more than a year
        without a re-entry permit, the question is no longer the card —
        it is whether you have abandoned your status. You may qualify
        for an{" "}
        <a
          href="https://travel.state.gov/content/travel/en/us-visas/immigrate/returning-resident.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          SB-1 Returning Resident visa
        </a>
        , but it is not guaranteed: you must show the consular officer
        that you left intending to return and that your prolonged stay
        was caused by reasons beyond your control — and Form I-90 alone
        does not resolve an abandonment question.
      </p>
      <p>
        If you must travel while your I-90 is pending and you have no
        card at all, get an ADIT stamp before you depart.
      </p>

      <h2>What happens if you never renew your green card?</h2>
      <p>
        Your lawful permanent resident status does <strong>not</strong>{" "}
        expire when the card does. USCIS says so plainly: status ends
        only on naturalization, rescission, termination in removal
        proceedings, or abandonment — not on the card&apos;s expiration
        date. You can still file Form I-90 years after the card expired.
      </p>
      <p>
        The consequences of never renewing are practical, not legal
        loss of status. Without a valid card — or the receipt notice that
        extends it — you lose the card-plus-receipt combination for Form
        I-9 and for re-entry, and you will struggle to renew a
        driver&apos;s licence, open accounts, or prove status for
        benefits. (Form I-9 itself has alternatives — a List B identity
        document plus an unrestricted Social Security card also works,
        and an existing employer generally should not reverify you — see
        the proof-of-status section above.) The law also requires every
        noncitizen aged 18 or older to carry valid proof of registration
        at all times (INA 264(e)). That duty is the legal basis for the
        &ldquo;carry valid proof&rdquo; rule — and it is one more reason
        not to let the card lapse.
      </p>
      <p>
        The sharp exception is conditional residents. Missing the I-751
        joint-filing window or the I-829 filing window can lead to
        termination of status and removal proceedings. If you hold a
        2-year card, the 90-day joint-filing window is a real deadline
        in a way the 10-year renewal window is not — do not treat them
        the same. (A waiver of the joint filing requirement follows
        different timing — see the I-751 section above.)
      </p>

      <h2>Why green card renewals get denied — and what to do</h2>
      <p>
        First, the distinction that matters. A <strong>rejection</strong>{" "}
        means USCIS never accepted the filing — an unsigned form, pages
        from different form editions, a wrong fee, or a filing sent to
        the wrong place — and the fee is returned. A{" "}
        <strong>denial</strong> means the application was accepted and
        then refused, and the fee is kept. The most common reasons are:
      </p>
      <ul>
        <li>
          <strong>Filing too early</strong> under the expiry reason —
          the card was not within six months of expiry. The instructions
          say the application may be denied, and the fee is not refunded.
        </li>
        <li>
          <strong>Wrong form for a conditional resident</strong> — an
          I-90 filed to remove conditions, or an I-90 filed in the 90
          days before the 2nd anniversary. Denied.
        </li>
        <li>
          <strong>Biometrics not completed</strong> — failure to appear,
          or biometrics not completed within 90 days of the initial
          appointment. Treated as abandoned and may be denied.
        </li>
        <li>
          <strong>Missing or inconsistent evidence</strong> — no
          name-change proof, no copy of the card, or biographic data
          that does not match, with an unanswered request for evidence.
        </li>
        <li>
          <strong>Underlying status problems</strong> — abandonment or
          a removable criminal history. These go to status, not to the
          card, and need legal advice.
        </li>
      </ul>
      <p>
        You cannot appeal an I-90 denial — the regulation itself says
        no appeal lies from the decision (8 CFR 264.5(f)). What you can
        do is file a motion on{" "}
        <a
          href="https://www.uscis.gov/i-290b/eligibility"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Form I-290B
        </a>
        : a{" "}
        <strong>motion to reopen</strong>, if you have new facts and
        evidence, or a <strong>motion to reconsider</strong>, if USCIS
        applied the law or policy incorrectly on the evidence in the
        file. The deadline is <strong>30 days</strong> from the decision
        date (<strong>33 days if the decision was mailed</strong>), and
        the I-290B fee is $800. A late motion to reopen may be excused
        if the delay was reasonable and beyond your control; there is no
        such excuse for a late motion to reconsider. Re-filing a new
        I-90 is also allowed if you can establish eligibility — a denial
        does not bar a new filing, but a new fee is due. Always follow
        the options and deadline stated in your denial notice itself,
        because it controls.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How much does it cost to renew a green card in 2026?</h3>
      <p>
        $415 if you file online, $465 if you file on paper — biometrics
        included, with no separate biometrics fee. Three cases pay $0: a
        card that was never received, a card with incorrect information
        caused by a DHS error, and a child who turned 14 whose card
        expires after their 16th birthday, if the application is filed
        within 30 days of the 14th birthday. The fee has not changed
        since April 1, 2024. A fee waiver is available on Form I-912 for
        those who qualify — paper filing is the safe route, and USCIS
        recently listed a PDF-upload option for I-912, so confirm the
        accepted method on the day you file.
      </p>

      <h3>When should I file Form I-90?</h3>
      <p>
        Within six months of the expiration date printed on your card.
        If your card has already expired, you can still file at any
        time — there is no deadline and no late penalty for the filing
        itself. Do not file more than six months early under the expiry
        reason: the application may be denied and the fee is not
        refunded.
      </p>

      <h3>How long does green card renewal take?</h3>
      <p>
        USCIS&apos;s processing-times tool currently shows 80% of
        10-year renewals completed within 10.5 months, and 80% of
        initial issuances and replacements within 6 months. A limited
        tracked sample (85 cases on Casetracker.io) shows a median of
        about 7.1 months — a median across a small sample, not
        comparable to the USCIS 80th-percentile figures. There is no
        premium processing for Form I-90, and USCIS republishes its
        figures regularly, so check the tool on the day you file.
      </p>

      <h3>Does the I-797C receipt extend my green card?</h3>
      <p>
        Yes — for a renewal filing. A properly filed I-90 receipt notice
        for renewing an expiring or expired card automatically extends
        your card for 36 months from the expiration date printed on it,
        when shown together with the expired card. The extension applies
        to a renewal filing, not to every I-90 replacement receipt. The
        extension took effect September 10, 2024 — before that it was 24
        months. If the 36 months run out while your case is still
        pending, request an ADIT stamp through the USCIS Contact Center.
      </p>

      <h3>Can I work and travel while my renewal is pending?</h3>
      <p>
        Yes, with the expired card together with the I-797C receipt
        notice. The combination is an acceptable List A document for
        Form I-9 employment verification and is accepted for re-entry
        after temporary travel abroad, for the 36-month extension
        period. Carry the original receipt notice when you travel, and
        confirm your airline&apos;s boarding policy in advance.
      </p>

      <h3>I have a 2-year conditional green card — do I file I-90?</h3>
      <p>
        No, not to renew it. A marriage-based conditional card&apos;s
        conditions are removed with Form I-751, and an EB-5 conditional
        card&apos;s with Form I-829. A joint I-751 filing must be made in
        the 90 days before the card&apos;s 2nd anniversary; a waiver of
        the joint filing requirement may be filed before, during, or
        after the 90-day window, at any time until a final order of
        removal is issued. If the petitioning spouse or stepparent died,
        the conditional resident files individually — an individual
        filing request, not a waiver. An I-90 filed in that 90-day
        joint-filing window is denied. Form I-90 is for conditional
        residents only as a replacement for a lost, stolen, damaged or
        incorrect card that is not expiring within 90 days.
      </p>

      <h3>What if my green card is lost or stolen while I&apos;m abroad?</h3>
      <p>
        If you were temporarily abroad for less than one year, file Form
        I-131A, Application for Travel Document (Carrier Documentation),
        in person at a U.S. Embassy or Consulate — the fee is $575 — to
        get carrier documentation back to the United States. If your
        card is merely expired (a 10-year card) and you have been abroad
        less than one year, you may not need Form I-131A at all, but
        check with the airline first.
      </p>

      <h3>What happens if my I-90 is denied?</h3>
      <p>
        You cannot appeal an I-90 denial. You can file a motion to
        reopen (new facts) or a motion to reconsider (USCIS applied the
        law incorrectly) on Form I-290B within 30 days of the decision
        (33 days if it was mailed); the fee is $800. Or you can file a
        new I-90 if you can establish eligibility, with a new fee.
        Follow the options and deadline in your denial notice itself.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.uscis.gov/i-90"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-90, Application to Replace Permanent Resident Card
          </a>{" "}
          — form edition 01/20/25, Phoenix lockbox addresses, and the
          online filing option. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/green-card/after-we-grant-your-green-card/replace-your-green-card"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Replace Your Green Card
          </a>{" "}
          — the six-month filing window, the 36-month receipt extension,
          and the USCIS Contact Center number (800-375-5283). Checked
          November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-extension-to-36-months-for-green-card-renewals"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — USCIS Extends Green Card Validity Extension to 36 Months for Green Card Renewals
          </a>{" "}
          — effective September 10, 2024 (announced September 18, 2024);
          previously 24 months. Checked November 16, 2026.
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
          — edition 10/26/26: I-90 $415 online / $465 paper (and the $0
          cases), I-131A $575, I-290B $800. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-106"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            8 CFR Part 106 — USCIS Fee Schedule
          </a>{" "}
          — 8 CFR 106.2(a)(1) (I-90 $465), 106.2(a)(8) (I-131A $575),
          106.2(a)(16) (I-290B $800), and 106.1(g) (the $50 online
          filing discount). Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-264/section-264.5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            8 CFR 264.5 — Application for a replacement Permanent Resident Card
          </a>{" "}
          — the six-month rule, the reasons to file, the conditional
          resident 90-day rule, and &ldquo;no appeal shall lie from
          this decision.&rdquo; Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-9-central/form-i-9-resources/handbook-for-employers-m-274/70-evidence-of-employment-authorization-for-certain-categories/71-lawful-permanent-residents-lpr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS Handbook for Employers (M-274), section 7.1 — Lawful Permanent Residents
          </a>{" "}
          — a new-hire LPR may present a List A document or a List B and
          C combination, and reverification is never required when a
          Permanent Resident Card expires. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-751"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-751, Petition to Remove Conditions on Residence
          </a>{" "}
          — joint filing in the 90 days before conditional residence
          expires; waiver requests before, during, or after the 90-day
          window, until a final order of removal is issued; death of the
          petitioning spouse or stepparent is an individual filing
          request, not a waiver. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/policy-manual/volume-6-part-i-chapter-5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS Policy Manual, Volume 6, Part I, Chapter 5 — Waiver of Joint Filing Requirement
          </a>{" "}
          — waiver requests may be filed before, during, or after the
          90-day period, until a final order of removal is issued; death
          of the petitioning spouse is an individual filing request, not
          a waiver (Chapter 4). Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-912"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-912, Request for Fee Waiver
          </a>{" "}
          — the three waiver tests (means-tested benefit, income at or
          below 150% of the Federal Poverty Guidelines, financial
          hardship) and the newly listed PDF-upload option.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/file-online/tips-for-filing-forms-online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Tips for Filing Forms Online
          </a>{" "}
          — &ldquo;you cannot file online if you are requesting a fee
          waiver.&rdquo;
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-131a"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-131A, Application for Travel Document (Carrier Documentation)
          </a>{" "}
          — lost card abroad, and the expired 10-year card boarding
          rule.
        </li>
        <li>
          <a
            href="https://travel.state.gov/content/travel/en/us-visas/immigrate/returning-resident.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            U.S. Department of State — Returning Resident Visas
          </a>{" "}
          — SB-1 eligibility: LPR status at departure, intent to return
          not abandoned, and a prolonged stay caused by reasons beyond
          your control. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/i-290b/eligibility"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Form I-290B eligibility
          </a>{" "}
          — I-90: appeal no, motion yes.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/policy-manual/volume-11-part-b-chapter-2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS Policy Manual, Volume 11, Part B, Chapter 2 — Replacement of a Permanent Resident Card
          </a>{" "}
          — ADIT stamps, the 90-day biometrics completion rule, and
          denial procedures.
        </li>
        <li>
          <a
            href="https://egov.uscis.gov/processing-times"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Case Processing Times
          </a>{" "}
          — Form I-90 at Service Center Operations: 80% of 10-year
          renewals within 10.5 months; 80% of initial issuances and
          replacements within 6 months. Checked November 16, 2026.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/citizenship/learn-about-citizenship/commonly-asked-questions-about-the-naturalization-process"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Commonly Asked Questions About the Naturalization Process
          </a>{" "}
          — lawful permanent resident status does not expire, and the
          24-month N-400 receipt extension.
        </li>
        <li>
          <a
            href="https://www.uscis.gov/archive/uscis-announces-additional-mail-delivery-process-for-receiving-adit-stamp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Additional Mail Delivery Process for Receiving ADIT Stamp
          </a>{" "}
          — the March 2023 mail-delivery option for ADIT stamps, and the
          validity rule: decided case by case, normally not more than
          one year unless a regulation or policy provides otherwise.
        </li>
        <li>
          Secondary source, labelled as such:{" "}
          <a
            href="https://casetracker.io/processing-times/i-90"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Casetracker.io — Form I-90 processing times
          </a>{" "}
          — tracked real-world median of about 7.1 months across 85
          cases decided in the last 12 months. Tracked data, not an
          official figure.
        </li>
      </ul>

      <h2>Related guides</h2>
      <ul>
        <li>
          <Link
            href="/blog/h1b-to-green-card"
            className="underline text-blue-600"
          >
            VisaTalentUSA — H-1B to Green Card: The Complete 2026 Guide
          </Link>{" "}
          — the path from H-1B status to permanent residence (PERM,
          I-140, I-485), for readers who do not yet hold a green card.
        </li>
        <li>
          <Link
            href="/blog/i140-processing-time"
            className="underline text-blue-600"
          >
            VisaTalentUSA — I-140 Processing Time
          </Link>{" "}
          — how long the immigrant petition behind most employment-based
          green cards takes.
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: November 16, 2026. Status last checked: November 16,
          2026. Fees, filing addresses, and processing times change —
          confirm them on the linked USCIS pages before filing. Not legal
          advice — consult an immigration attorney for your case.
        </em>
      </p>
    </>
  );
}
