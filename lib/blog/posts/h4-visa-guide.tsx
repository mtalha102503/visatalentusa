import Link from "next/link";

export default function H4VisaGuideContent() {
  return (
    <>
      <p className="lead">
        The H-4 visa is the visa for the family of an H-1B worker — the
        spouse and the unmarried children under 21. It lets them live in
        the United States for as long as the H-1B worker keeps valid
        status, but it is not a work visa, it is not independent, and it
        ends the day a child turns 21. This guide covers the whole H-4
        journey in one place: who qualifies, how stamping abroad works
        step by step, how to extend or change to H-4 inside the US, what
        H-4 lets you do and what it does not, and the age-21 playbook
        every family should start early — with every rule tied to its
        official source.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the H-4 visa at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Who:</strong> the lawful spouse and unmarried
            children under 21 of an H-category worker (H-1B, H-1B1, H-2A,
            H-2B, H-3). Parents, siblings, partners, and married children
            do not qualify.
          </li>
          <li>
            <strong>Derivative status:</strong> H-4 lasts no longer than
            the principal worker&apos;s status. If the principal loses
            status, the dependents lose theirs too.
          </li>
          <li>
            <strong>No automatic work rights:</strong> H-4 status alone
            does not authorize employment. Only certain spouses can
            apply for a work permit (EAD) — children never can.
          </li>
          <li>
            <strong>Two routes in:</strong> a visa stamp at a US consulate
            abroad (Form DS-160), or a change/extension of status inside
            the US (Form I-539).
          </li>
          <li>
            <strong>Age-out at 21:</strong> a child&apos;s H-4 eligibility
            ends on their 21st birthday. The move to another status must
            be planned months ahead, not weeks.
          </li>
          <li>
            <strong>2025 changes matter:</strong> third-country stamping
            largely closed in September 2025, and in-person interviews
            are now generally required. Do not plan around old shortcuts
            — check your consulate&apos;s current instructions.
          </li>
        </ul>
      </div>

      <h2>What is the H-4 visa? Stamp vs status vs I-94, explained</h2>
      <p>
        Three words get mixed up constantly, and the confusion causes
        real mistakes. Keep them separate and most of H-4 becomes clear.
      </p>
      <p>
        The <strong>visa stamp</strong> is the foil placed in your
        passport at a US consulate abroad. It only lets you travel to a
        US port of entry and ask for admission. It is not permission to
        stay, and it is not permission to work.
      </p>
      <p>
        Your <strong>status</strong> is what you hold once you are
        inside the US — H-4 status, granted when you enter or when
        USCIS approves a change or extension of status. Status is what
        lets you live in the US, and it is what ends when the
        principal&apos;s status ends.
      </p>
      <p>
        The <strong>I-94 record</strong> is the official record of your
        admission, held by Customs and Border Protection. It states how
        long you are actually allowed to stay. When people say
        &ldquo;my visa is valid for three years, so I can stay three
        years,&rdquo; they are usually wrong — the I-94 date governs,
        not the stamp&apos;s expiry date. Check your I-94 at
        i94.cbp.dhs.gov after every entry and keep a copy with your
        immigration papers.
      </p>
      <p>
        H-4 exists only as a dependent category. There is no standalone
        H-4: no principal in valid H status, no H-4. That single fact
        explains the extension rule, the grace-period rule, and the
        age-out rule below.
      </p>

      <p>
        The two routes at a glance — abroad you get a stamp, inside the
        US you get a new I-94. Both end at the same H-4 status.
      </p>
      <div>
        <svg
          role="img"
          viewBox="0 0 720 430"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            Two routes to H-4: abroad, DS-160, fee, interview, stamp and
            I-94 check; inside the US, Form I-539, approval, and a new
            I-94
          </title>
          <rect x="20" y="20" width="680" height="34" rx="8" fill="#1d4ed8" />
          <text x="36" y="42" fontSize="14" fontWeight="700" fill="#ffffff">ROUTE 1 — ABROAD: GET THE STAMP AT A CONSULATE</text>
          <rect x="20" y="70" width="155" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="32" y="100" fontSize="14" fontWeight="700" fill="#0f172a">1. DS-160</text>
          <text x="32" y="122" fontSize="12" fill="#334155">Online form,</text>
          <text x="32" y="140" fontSize="12" fill="#334155">one per person</text>
          <text x="32" y="158" fontSize="12" fill="#334155">incl. each child</text>
          <text x="185" y="130" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1d4ed8">→</text>
          <rect x="195" y="70" width="155" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="207" y="100" fontSize="14" fontWeight="700" fill="#0f172a">2. MRV fee $205</text>
          <text x="207" y="122" fontSize="12" fill="#334155">H-category fee,</text>
          <text x="207" y="140" fontSize="12" fill="#334155">paid before the</text>
          <text x="207" y="158" fontSize="12" fill="#334155">appointment</text>
          <text x="360" y="130" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1d4ed8">→</text>
          <rect x="370" y="70" width="155" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="382" y="100" fontSize="14" fontWeight="700" fill="#0f172a">3. Interview</text>
          <text x="382" y="122" fontSize="12" fill="#334155">Or dropbox if</text>
          <text x="382" y="140" fontSize="12" fill="#334155">eligible for the</text>
          <text x="382" y="158" fontSize="12" fill="#334155">interview waiver</text>
          <text x="535" y="130" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1d4ed8">→</text>
          <rect x="545" y="70" width="155" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="557" y="100" fontSize="14" fontWeight="700" fill="#0f172a">4. Stamp + I-94</text>
          <text x="557" y="122" fontSize="12" fill="#334155">Enter the US,</text>
          <text x="557" y="140" fontSize="12" fill="#334155">then check the</text>
          <text x="557" y="158" fontSize="12" fill="#334155">I-94 date online</text>
          <rect x="20" y="208" width="680" height="34" rx="8" fill="#1d4ed8" />
          <text x="36" y="230" fontSize="14" fontWeight="700" fill="#ffffff">ROUTE 2 — INSIDE THE US: NO CONSULATE VISIT</text>
          <rect x="20" y="258" width="210" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="32" y="288" fontSize="14" fontWeight="700" fill="#0f172a">1. File Form I-539</text>
          <text x="32" y="310" fontSize="12" fill="#334155">Change or extend</text>
          <text x="32" y="328" fontSize="12" fill="#334155">H-4 status, with the</text>
          <text x="32" y="346" fontSize="12" fill="#334155">principal&apos;s papers</text>
          <text x="242" y="318" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1d4ed8">→</text>
          <rect x="255" y="258" width="210" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="267" y="288" fontSize="14" fontWeight="700" fill="#0f172a">2. USCIS approval</text>
          <text x="267" y="310" fontSize="12" fill="#334155">Stay in the US while</text>
          <text x="267" y="328" fontSize="12" fill="#334155">the case is pending,</text>
          <text x="267" y="346" fontSize="12" fill="#334155">do not travel out</text>
          <text x="477" y="318" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1d4ed8">→</text>
          <rect x="490" y="258" width="210" height="110" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="502" y="288" fontSize="14" fontWeight="700" fill="#0f172a">3. New I-94</text>
          <text x="502" y="310" fontSize="12" fill="#334155">No stamp is issued</text>
          <text x="502" y="328" fontSize="12" fill="#334155">inside the US — a</text>
          <text x="502" y="346" fontSize="12" fill="#334155">stamp is for re-entry</text>
          <rect x="20" y="384" width="680" height="32" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
          <text x="36" y="404" fontSize="13" fill="#92400e">Both routes lead to the same status: H-4 tied to the principal&apos;s H status.</text>
        </svg>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Figure: the two routes to H-4 — a consular stamp abroad, or a
        Form I-539 change or extension inside the US.
      </p>
      <h2>Who qualifies — and who does not</h2>
      <p>
        Federal regulations limit H-4 to two groups: the lawful spouse
        and the unmarried children under 21 of an H-category worker.
        That is the whole list.
      </p>
      <p>
        A spouse qualifies on the basis of a legally recognized
        marriage to the principal. The marriage certificate is the
        single most scrutinized H-4 document — carry the original, not
        just a copy. If the marriage is under two years old, carry
        supplementary proof as well: wedding photos, a joint bank
        account, a joint lease. Officers check newer marriages more
        closely.
      </p>
      <p>
        A child qualifies if unmarried and under 21. Both conditions
        must hold. A child who marries before 21 loses eligibility, and
        a child who turns 21 loses it on their birthday — there is no
        grace period built into the age rule itself. The age-out
        playbook later in this guide covers what to do before that day
        arrives.
      </p>
      <p>
        Who does not qualify, no matter how close the relationship: a
        parent, a sibling, an unmarried partner, a fiancé, or a child
        who has already turned 21. None of them can get an H-4 stamp or
        H-4 status through the principal. They need their own visa
        category.
      </p>
      <p>
        H-4 is not limited to dependents of H-1B workers specifically.
        The regulation covers spouses and children of any H-category
        nonimmigrant, including H-1B, H-1B1, H-2A, H-2B, and H-3
        workers. In practice, the overwhelming majority of H-4 holders
        are H-1B families.
      </p>

      <h2>H-4 in numbers</h2>
      <p>
        The American Immigration Council&apos;s H-4 fact sheet,
        published October 2026, gives the clearest public picture of the
        category. These are official-adjacent counts worth knowing
        before you read the process sections — they show how big, and
        how India-centered, this audience is.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              <th>Figure</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>H-4 visas issued, FY2025</td>
              <td>146,158</td>
              <td>Total H-4 visas issued worldwide in the fiscal year.</td>
            </tr>
            <tr>
              <td>Issued in India, FY2025</td>
              <td>113,089 (about 77%)</td>
              <td>More than three in four H-4 visas go to Indian nationals.</td>
            </tr>
            <tr>
              <td>Next largest, FY2025</td>
              <td>Mexico 7,349; China 4,451; Philippines 2,700</td>
              <td>India dominates; no other country is close.</td>
            </tr>
            <tr>
              <td>H-4 EADs approved, FY2025</td>
              <td>25,193 initial; 53,942 renewals</td>
              <td>Work permits are a large but separate track — see the EAD section below.</td>
            </tr>
            <tr>
              <td>Children facing age-out</td>
              <td>About 224,000 &ldquo;Documented Dreamers&rdquo; (2026 estimate)</td>
              <td>Children of legal temporary workers at risk of losing status at 21.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The India number matters for this guide&apos;s audience: most
        H-4 families reading it are Indian families, and most of the
        consular practicalities below — appointment backlogs, document
        scrutiny, marriage proof — bite hardest at Indian consulates.
      </p>

      <h2>What changed for H-4 in 2025 — read this first</h2>
      <p>
        Three policy shifts in 2025 changed H-4 practicalities more than
        anything in the previous five years. Older guides — and older
        advice from friends — still describe a world that no longer
        exists. Here is the current picture.
      </p>
      <p>
        <strong>Third-country stamping largely closed (September 6,
        2025).</strong> The State Department directed most nonimmigrant
        visa applicants to apply at a post in their country of
        nationality or legal residence. The old workaround — an Indian
        H-1B family flying to Toronto or Mexico for a faster appointment
        — is generally no longer available. One nuance survives: people
        legally resident in the US may still be accepted at some
        Canada/Mexico posts if they can prove US residence (for example
        with an I-797 and an employer letter). Do not book travel on
        that nuance without confirming with the specific consulate
        first.
      </p>
      <p>
        <strong>In-person interviews are now generally required
        (October 1, 2025).</strong> The interview-waiver (&ldquo;dropbox&rdquo;)
        path that many H-1B and H-4 renewals relied on has been
        narrowed sharply, and for H-1B holders it is effectively gone.
        Some H-4 renewal guides still describe dropbox under the old
        12-month rule. Treat those passages as outdated until your
        consulate confirms otherwise: plan for an in-person interview,
        and treat any waiver as a bonus, not a plan.
      </p>
      <p>
        <strong>Domestic renewal is not available.</strong> The 2024
        pilot that briefly let some H-1B holders renew their visa stamp
        inside the US has been suspended, with no confirmed restart
        date. All H-4 stamping still happens at a consulate abroad. The
        in-US route is a change or extension of <em>status</em> (Form
        I-539), which is not the same thing as a stamp — see the
        stamp-vs-status explainer above.
      </p>
      <p>
        A fourth change belongs to the work-permit track, not the visa
        track, but families confuse the two constantly: automatic EAD
        extensions ended for renewals filed on or after October 30,
        2025. That is covered in the EAD section below and in full in
        our{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 EAD guide
        </Link>
        .
      </p>

      <h2>Getting the H-4 stamp abroad, step by step</h2>
      <p>
        This is the route for dependents outside the US, or inside the
        US who travel abroad and need a new stamp to return. The
        sequence is the same at every consulate; only wait times and
        local instructions differ.
      </p>
      <p>
        <strong>Step 1 — Complete Form DS-160.</strong> Every applicant
        needs their own DS-160, including children — even infants.
        Fill it online at the State Department&apos;s Consular
        Electronic Application Center, and print the confirmation page.
        Check every answer against the principal&apos;s petition:
        DS-160 inconsistencies are one of the most common triggers for
        extra scrutiny and administrative processing later.
      </p>
      <p>
        <strong>Step 2 — Pay the visa fee.</strong> The H-category
        Machine Readable Visa (MRV) fee is $205. It is non-refundable,
        even if the visa is refused. Confirm the current fee on the
        State Department&apos;s fee page before paying — fees change,
        and a wrong payment can cost you your appointment slot.
      </p>
      <p>
        <strong>Step 3 — Book the appointment.</strong> Create a
        profile on your consulate&apos;s scheduling system and book the
        interview (and biometrics, where the post requires it
        separately). Book in your country of nationality or legal
        residence — see the 2025 changes above. Appointment backlogs
        vary wildly by post; Indian consulates have been among the
        most backlogged, so book as early as your travel allows.
      </p>
      <p>
        <strong>Step 4 — Attend the interview.</strong> Bring every
        document in the checklist below, in original plus one copy
        where noted. Interviews for H-4 are usually short and focused
        on two things: the relationship to the principal, and the
        principal&apos;s current employment. The question bank below
        lists what to expect.
      </p>
      <p>
        <strong>Step 5 — Receive the stamp and check your I-94 on
        entry.</strong> If approved, the passport is returned with the
        visa foil, usually within a few business days. On entry to the
        US, check the I-94 record immediately — the I-94 date, not the
        stamp&apos;s expiry, is how long you may stay. If the I-94
        date is shorter than expected, raise it with CBP at the airport
        before leaving, not weeks later.
      </p>

      <h2>Documents checklist — what to carry to the consulate</h2>
      <p>
        Officers check different documents for H-4 than for H-1B. The
        relationship proof and the principal&apos;s employment evidence
        matter more than anything else. Use this as a packing list.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Document</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Passport, valid 6+ months beyond intended stay</td>
              <td>Old passports too, if they hold prior US visas.</td>
            </tr>
            <tr>
              <td>DS-160 confirmation page (one per applicant)</td>
              <td>Separate DS-160 for every applicant, including minors.</td>
            </tr>
            <tr>
              <td>Visa appointment confirmation letter</td>
              <td>Print it; carry a copy as well.</td>
            </tr>
            <tr>
              <td>Marriage certificate (spouse) — original + copy</td>
              <td>The single most scrutinized H-4 document.</td>
            </tr>
            <tr>
              <td>Extra marriage proof if married under 2 years</td>
              <td>Wedding photos, joint bank account, joint lease.</td>
            </tr>
            <tr>
              <td>Birth certificates (children)</td>
              <td>Proves the parent-child relationship and the child&apos;s age.</td>
            </tr>
            <tr>
              <td>Principal&apos;s I-797 approval notice (copy)</td>
              <td>Proves the principal holds valid H status.</td>
            </tr>
            <tr>
              <td>Principal&apos;s recent pay stubs (last 3)</td>
              <td>Proves the principal is actually employed as petitioned.</td>
            </tr>
            <tr>
              <td>Principal&apos;s employment verification letter</td>
              <td>Job title, salary, and current employment confirmation.</td>
            </tr>
            <tr>
              <td>Copy of the principal&apos;s visa stamp</td>
              <td>Or the approval notice, if traveling together for a first stamping.</td>
            </tr>
            <tr>
              <td>Passport bio page copy (principal)</td>
              <td>Consulates sometimes ask for it alongside the I-797.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bringing too much documentation is rarely a problem. Bringing
        too little — especially a missing marriage certificate or a
        missing I-797 copy — is one of the fastest routes to a
        221(g) document request and a delayed stamp.
      </p>

      <h2>Stamping together, separately, or by dropbox</h2>
      <p>
        Families usually stamp in one of three patterns. Each has its
        own practicalities.
      </p>
      <p>
        <strong>Together with the principal.</strong> The simplest
        pattern: the whole family attends together, and the
        principal&apos;s documents are right there. Officers can verify
        the relationship and the employment in one conversation.
      </p>
      <p>
        <strong>Separately, principal already in the US.</strong> The
        dependent attends alone and carries copies of everything the
        principal would have shown: I-797, pay stubs, employment
        letter, visa stamp. This is the pattern where missing paperwork
        hurts most, because there is no principal in the room to fill
        the gap.
      </p>
      <p>
        <strong>Renewal by interview waiver (&ldquo;dropbox&rdquo;).</strong>
        Under the old rules, H-4 renewals in the same classification,
        with a prior visa expired within 12 months and no prior
        unresolved refusals, could often renew without an interview.
        Since the 2025 narrowing, do not assume this is available for
        your case: many posts now call H-4 renewals for in-person
        interviews too. Check your consulate&apos;s current
        interview-waiver instructions before choosing this route, and
        have an interview plan ready as the fallback.
      </p>

      <h2>The interview — questions to expect</h2>
      <p>
        H-4 interviews are usually shorter than H-1B interviews, and
        the questions cluster around the relationship and the
        principal — not around the dependent&apos;s own qualifications.
        Prepare short, consistent answers to these:
      </p>
      <ul>
        <li>How are you related to the principal, and when did you marry?</li>
        <li>Where does your spouse work, and what do they do?</li>
        <li>What is your spouse&apos;s salary?</li>
        <li>Where will you live in the US?</li>
        <li>Are you traveling together or joining later?</li>
        <li>Have you been to the US before, and on which visa?</li>
        <li>Do you plan to work or study in the US?</li>
        <li>For children: who are your parents, and where do they work?</li>
      </ul>
      <p>
        Two honesty notes. First, &ldquo;do you plan to work&rdquo; is
        not a trick question — the correct answer for an H-4 holder
        without an EAD is no, and claiming otherwise can create a
        record that hurts a later EAD application. Second, your answers
        must match the petition and the DS-160 exactly. A salary figure
        that differs from the LCA, or a work location that differs
        from the petition, is how a routine interview turns into
        administrative processing.
      </p>

      <h2>Changing to or extending H-4 inside the US (Form I-539)</h2>
      <p>
        Dependents already in the US do not need a consulate to get or
        keep H-4 status. They file Form I-539 with USCIS — to change
        from another status to H-4, or to extend H-4 when the
        principal&apos;s H-1B is extended. Each dependent needs their
        own I-539A supplement where applicable, and the filing should
        include proof of the relationship and of the principal&apos;s
        current status.
      </p>
      <p>
        File before the current status expires. A timely filed I-539
        extension lets you remain in an authorized period of stay while
        USCIS decides, even if the old I-94 date passes. It does not
        grant work authorization — that needs a separate EAD
        application, covered below.
      </p>
      <p>
        <strong>Bundling:</strong> when the principal files an H-1B
        extension, the family&apos;s I-539 applications are often filed
        together with it. Bundling keeps the cases aligned, but it does
        not guarantee aligned decisions — the H-4 cases can lag behind
        the principal&apos;s approval. Premium processing on the
        principal&apos;s H-1B petition does not automatically speed up
        the H-4 I-539, so check current USCIS premium-processing
        eligibility for I-539 before assuming anything about timing.
      </p>
      <p>
        <strong>Travel while an application is pending:</strong> this
        is where families get hurt. Leaving the US while a{" "}
        <em>change</em> of status application is pending generally
        abandons it. Leaving while an <em>extension</em> is pending is
        less absolute, but returning requires a valid H-4 visa stamp —
        which means a consulate trip and a new interview. Do not book
        international travel while an I-539 is pending without checking
        the consequences for that specific filing first.
      </p>

      <h2>Staying in status — and the 60-day grace period</h2>
      <p>
        H-4 status follows the principal. If the principal&apos;s
        employment ends, the principal gets a discretionary grace
        period of up to 60 days (or until the I-94 expires, whichever
        is sooner) to find a new sponsor, change status, or depart —
        and the dependents&apos; clock runs with the principal&apos;s.
        The grace period is not work authorization for anyone in the
        family, and it is not an extension of status. It is time to
        act, nothing more. Our{" "}
        <Link
          href="/blog/h1b-grace-period"
          className="text-blue-700 underline underline-offset-2"
        >
          H-1B grace-period guide
        </Link>{" "}
        covers the principal&apos;s side in full; the family side
        follows the same dates.
      </p>
      <p>
        If the principal changes employers (an H-1B transfer), the
        dependents do not automatically move with them. The H-4
        extension should be filed alongside the transfer, or the
        family can fall out of status while the principal&apos;s case
        is approved. If the principal changes to a different visa
        category altogether, the dependents need a matching change —
        H-4 only attaches to H status.
      </p>
      <p>
        Keep a status calendar for the whole family: every I-94 expiry
        date, every petition validity date, and every pending
        filing&apos;s receipt date. Most H-4 status problems are not
        legal puzzles — they are missed dates.
      </p>

      <h2>Work, study, and daily life on H-4</h2>
      <p>
        H-4 is a residence status, not a work status. Within that
        frame, daily life is fairly broad — but the boundaries are
        strict, and crossing them has consequences.
      </p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>On H-4?</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Live in the US</td>
              <td>Yes</td>
              <td>For as long as the principal keeps valid H status.</td>
            </tr>
            <tr>
              <td>Work for any employer</td>
              <td>Only with an EAD</td>
              <td>See the EAD section below. Without an EAD, no employment at all — not even remote work for a foreign employer.</td>
            </tr>
            <tr>
              <td>Study full-time or part-time</td>
              <td>Yes</td>
              <td>No student visa needed. But no CPT or OPT on H-4 — practical training needs F-1 status.</td>
            </tr>
            <tr>
              <td>Open a bank account, get a driving licence</td>
              <td>Yes</td>
              <td>Rules vary by state and bank; carry passport, I-94, and proof of address.</td>
            </tr>
            <tr>
              <td>Social Security Number</td>
              <td>Only with work authorization</td>
              <td>Without an EAD, apply for an ITIN instead for tax filing.</td>
            </tr>
            <tr>
              <td>Travel abroad and return</td>
              <td>With a valid stamp</td>
              <td>Re-entry needs a valid H-4 visa stamp plus the principal in valid status.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In-state tuition is the one item that varies enough to deserve
        its own check: some states grant it to H-4 dependents, others
        do not, and the rules change. Confirm with the specific
        university before budgeting around it.
      </p>

      <h2>Work authorization — the short version</h2>
      <p>
        This section is deliberately short, because the full subject
        already has its own guide. If you need the work-permit process,
        read our{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 EAD guide
        </Link>
        . The summary is:
      </p>
      <ul>
        <li>
          H-4 status alone never authorizes work — not for spouses, not
          for children, not for remote work, not for self-employment.
        </li>
        <li>
          Only certain spouses can apply for an EAD: those whose
          principal has an approved I-140, or whose principal holds
          H-1B status extended beyond six years under AC21.
        </li>
        <li>
          H-4 children cannot get work authorization through this rule
          at any age.
        </li>
        <li>
          Renewals filed on or after October 30, 2025 no longer carry
          an automatic extension: if the card expires before USCIS
          approves the renewal, work must stop until the new card
          arrives.
        </li>
      </ul>
      <p>
        Everything else — the two qualifying paths in detail, the
        I-765 filing steps, the fee, and honest processing times —
        lives in the EAD guide, and this guide links there rather than
        repeating it.
      </p>

      <h2>When a child turns 21 — the age-out playbook</h2>
      <p>
        This is the section families find too late, so read it first if
        you have a teenage child on H-4. The rule is simple and
        unforgiving: H-4 eligibility ends on the 21st birthday. There
        is no extra grace period in the age rule, and the Child Status
        Protection Act (CSPA) — often mentioned in this context — helps
        green-card cases, not H-4 status itself. Do not let anyone tell
        you CSPA &ldquo;freezes&rdquo; H-4 age. It does not.
      </p>
      <p>
        Work backwards from the 21st birthday, not forwards from today:
      </p>

      <div>
        <svg
          role="img"
          viewBox="0 0 720 340"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            H-4 age-out timeline: 12 plus months before 21 choose the
            next status, 6 to 12 months before get the I-20, before 21
            file Form I-539 to F-1, at 21 H-4 ends
          </title>
          <line x1="60" y1="84" x2="660" y2="84" stroke="#cbd5e1" strokeWidth="3" />
          <text x="100" y="34" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">12+ months</text>
          <text x="100" y="52" textAnchor="middle" fontSize="12" fill="#334155">before 21</text>
          <circle cx="100" cy="84" r="18" fill="#1d4ed8" />
          <text x="100" y="90" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">1</text>
          <text x="280" y="34" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">6–12 months</text>
          <text x="280" y="52" textAnchor="middle" fontSize="12" fill="#334155">before 21</text>
          <circle cx="280" cy="84" r="18" fill="#1d4ed8" />
          <text x="280" y="90" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">2</text>
          <text x="460" y="34" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">Before 21</text>
          <text x="460" y="52" textAnchor="middle" fontSize="12" fill="#334155">file on time</text>
          <circle cx="460" cy="84" r="18" fill="#1d4ed8" />
          <text x="460" y="90" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">3</text>
          <text x="640" y="34" textAnchor="middle" fontSize="14" fontWeight="700" fill="#dc2626">21st birthday</text>
          <text x="640" y="52" textAnchor="middle" fontSize="12" fill="#dc2626">H-4 ends</text>
          <circle cx="640" cy="84" r="18" fill="#dc2626" />
          <text x="640" y="90" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">4</text>
          <rect x="23" y="120" width="154" height="140" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="35" y="148" fontSize="13" fontWeight="700" fill="#0f172a">Choose the</text>
          <text x="35" y="166" fontSize="13" fontWeight="700" fill="#0f172a">next status</text>
          <text x="35" y="188" fontSize="12" fill="#334155">Usually F-1 for a</text>
          <text x="35" y="206" fontSize="12" fill="#334155">child in school;</text>
          <text x="35" y="224" fontSize="12" fill="#334155">check F-1 work</text>
          <text x="35" y="242" fontSize="12" fill="#334155">limits early</text>
          <rect x="203" y="120" width="154" height="140" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="215" y="148" fontSize="13" fontWeight="700" fill="#0f172a">Get the I-20</text>
          <text x="215" y="166" fontSize="13" fontWeight="700" fill="#0f172a">and apply</text>
          <text x="215" y="188" fontSize="12" fill="#334155">School issues the</text>
          <text x="215" y="206" fontSize="12" fill="#334155">I-20; confirm the</text>
          <text x="215" y="224" fontSize="12" fill="#334155">school timeline</text>
          <rect x="383" y="120" width="154" height="140" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="395" y="148" fontSize="13" fontWeight="700" fill="#0f172a">File I-539</text>
          <text x="395" y="166" fontSize="13" fontWeight="700" fill="#0f172a">to F-1</text>
          <text x="395" y="188" fontSize="12" fill="#334155">Change of status</text>
          <text x="395" y="206" fontSize="12" fill="#334155">must be filed</text>
          <text x="395" y="224" fontSize="12" fill="#334155">before 21</text>
          <rect x="563" y="120" width="154" height="140" rx="12" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
          <text x="575" y="148" fontSize="13" fontWeight="700" fill="#0f172a">New status</text>
          <text x="575" y="166" fontSize="13" fontWeight="700" fill="#0f172a">must be in place</text>
          <text x="575" y="188" fontSize="12" fill="#334155">No extra grace</text>
          <text x="575" y="206" fontSize="12" fill="#334155">period in the</text>
          <text x="575" y="224" fontSize="12" fill="#334155">age rule itself</text>
          <rect x="20" y="276" width="680" height="44" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
          <text x="36" y="303" fontSize="13" fill="#991b1b">CSPA does NOT freeze H-4 age — it helps green-card cases, not H-4 status.</text>
        </svg>
      </div>
      <p className="mt-2 text-sm text-slate-500">
        Figure: the age-out timeline — plan backwards from the 21st
        birthday, and file the change of status before it.
      </p>

      <ul>
        <li>
          <strong>12+ months before 21:</strong> choose the next
          status. For most children in school, that is F-1 student
          status: get the I-20 from the school, understand the
          F-1 work limits (on-campus work, and CPT/OPT only under F-1
          rules), and confirm the school&apos;s timeline.
        </li>
        <li>
          <strong>6–12 months before 21:</strong> file the change of
          status (Form I-539, from H-4 to F-1) with enough lead time
          for USCIS processing. A change filed too late, or denied
          after 21, leaves no H-4 to fall back on.
        </li>
        <li>
          <strong>Before 21, always:</strong> keep the child&apos;s
          status unbroken. Any gap — an expired I-94, a denied filing
          with no backup — can complicate every later application,
          including the green-card case the family may be pursuing.
        </li>
      </ul>
      <p>
        The human scale of this problem is large: the American
        Immigration Council estimated about 224,000 &ldquo;Documented
        Dreamers&rdquo; — children of legal temporary workers, many of
        them H-1B families — facing the prospect of having to leave
        the US if they cannot secure another status by 21. If your
        family is also in a green-card process, coordinate the
        age-out plan with that case&apos;s priority date and attorney
        — the two timelines interact, and the right move depends on
        both.
      </p>

      <h2>Refusal, 221(g), and delays</h2>
      <p>
        A refused H-4 stamp is not always a denied case, and the most
        common confusion in this whole area has a name: 221(g).
      </p>
      <p>
        Section 221(g) of the Immigration and Nationality Act lets a
        consular officer pause a visa case when more evidence is
        needed — missing documents, or additional administrative
        processing such as background checks. The passport is usually
        returned, and the case stays open. That is a hold, not a final
        denial, and most 221(g) cases resolve once the documents arrive
        or the checks finish — commonly within two to six months,
        though some take longer.
      </p>
      <p>
        The confusion comes from the status screen: since March 2020,
        the State Department&apos;s CEAC tracker shows cases under
        administrative processing as &ldquo;Refused.&rdquo; That label
        alarms families, but in a 221(g) case it usually means the
        review is still open, not that the visa is finally denied. The
        letter handed over at the interview — not the CEAC label —
        tells you which situation applies and what, if anything, you
        must submit.
      </p>
      <p>
        If the letter requests documents, you have one year from the
        refusal date to submit them; within that year the case reopens
        without a new DS-160 or a second fee. After it, both are
        required. Do not book a new interview unless the consulate
        tells you to — it can complicate the record. And keep the
        principal&apos;s petition valid through the delay: a long
        221(g) wait can outlast a petition validity period, in which
        case the petitioner may need to extend or refile.
      </p>
      <p>
        A true refusal is different: a 214(b) refusal (failure to show
        nonimmigrant intent) or a 212(a) ineligibility generally
        requires a new application to overcome. If you receive either,
        get the refusal grounds in writing and take advice before
        reapplying — reapplying unchanged after a 214(b) refusal
        usually produces the same result.
      </p>

      <h2>Fees and forms at a glance</h2>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Figure / form</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DS-160 (consular application)</td>
              <td>Online form, one per applicant</td>
              <td>Required for every H-4 stamp, including children.</td>
            </tr>
            <tr>
              <td>MRV visa fee (H-category)</td>
              <td>$205</td>
              <td>Non-refundable. Confirm on the State Department fee page before paying.</td>
            </tr>
            <tr>
              <td>Form I-539 (in-US change/extension)</td>
              <td>Check the current USCIS fee schedule (Form G-1055)</td>
              <td>Fee depends on filing method and current schedule — confirm before filing.</td>
            </tr>
            <tr>
              <td>Form I-765 (EAD, spouses only)</td>
              <td>See the EAD guide</td>
              <td>Standalone fee $520 paper / $470 online, per the EAD guide&apos;s USCIS fee source.</td>
            </tr>
            <tr>
              <td>Premium processing</td>
              <td>Does not automatically cover I-539</td>
              <td>Premium on the principal&apos;s H-1B petition does not speed up the H-4 case by itself.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Fees and filing addresses change. Confirm every figure on the
        linked official pages in the Sources section before filing —
        a fee paid at the wrong amount is one of the most avoidable
        causes of a rejected filing.
      </p>

      <h2>Mistakes that cause delays or refusals</h2>
      <ul>
        <li>
          <strong>Missing marriage or birth proof.</strong> The
          original marriage certificate (spouse) or birth certificate
          (child) is the foundation of the case. Copies alone, or a
          missing certificate, invite a 221(g) document request.
        </li>
        <li>
          <strong>Answers that do not match the petition.</strong> A
          salary, job title, or work location in the interview or
          DS-160 that differs from the principal&apos;s LCA and
          petition turns a routine case into administrative processing.
        </li>
        <li>
          <strong>Planning around dropbox or third-country
          stamping.</strong> Both shortcuts narrowed sharply in 2025.
          Plan for an in-person interview in your home country, and
          treat anything else as unconfirmed until your consulate says
          otherwise.
        </li>
        <li>
          <strong>Traveling while an I-539 is pending.</strong> A
          change-of-status application is generally abandoned by
          departure. Check before booking, every time.
        </li>
        <li>
          <strong>Starting the age-out plan too late.</strong> A
          change to F-1 needs months of lead time. The 21st birthday
          is a deadline, not a reminder.
        </li>
        <li>
          <strong>Working without an EAD.</strong> H-4 status alone
          authorizes no employment — including remote work and
          self-employment. Unauthorized work can damage later
          immigration benefits for the whole family.
        </li>
        <li>
          <strong>Ignoring the I-94.</strong> The stamp gets you in;
          the I-94 decides how long you may stay. Check it after every
          entry.
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What is an H-4 visa?</h3>
      <p>
        The H-4 is the dependent visa for the spouse and unmarried
        children under 21 of an H-category worker, most commonly an
        H-1B worker. It lets them live in the US for as long as the
        principal keeps valid status. It is not a work visa and it is
        not independent of the principal&apos;s status.
      </p>

      <h3>Who can apply for an H-4 visa?</h3>
      <p>
        A lawful spouse and unmarried children under 21 of an H-1B,
        H-1B1, H-2A, H-2B, or H-3 worker. Parents, siblings, unmarried
        partners, and children who have turned 21 or married cannot
        qualify, regardless of the relationship.
      </p>

      <h3>Can H-4 visa holders work in the US?</h3>
      <p>
        Not on H-4 status alone. Only certain spouses — those whose
        principal has an approved I-140, or holds H-1B status extended
        beyond six years under AC21 — can apply for an Employment
        Authorization Document (EAD). H-4 children cannot work under
        this rule at any age. See our{" "}
        <Link
          href="/blog/h4-ead-guide"
          className="text-blue-700 underline underline-offset-2"
        >
          H-4 EAD guide
        </Link>{" "}
        for the full process.
      </p>

      <h3>How do I apply for an H-4 visa stamp?</h3>
      <p>
        Complete Form DS-160 (one per applicant, including children),
        pay the $205 H-category visa fee, book an interview at a
        consulate in your country of nationality or legal residence,
        attend with the documents in the checklist above, and check
        your I-94 record after entry.
      </p>

      <h3>What documents do I need for H-4 stamping?</h3>
      <p>
        Passport valid 6+ months, DS-160 confirmation, appointment
        letter, the marriage certificate (original + copy) for a
        spouse or birth certificates for children, and the
        principal&apos;s I-797 approval notice, recent pay stubs,
        employment verification letter, and visa stamp copy. Extra
        marriage proof helps if the marriage is under two years old.
        The full checklist is in the documents section above.
      </p>

      <h3>Can I get my H-4 stamp in Canada or Mexico?</h3>
      <p>
        Generally no longer. Since September 6, 2025, the State
        Department directs most nonimmigrant applicants to their
        country of nationality or legal residence. People legally
        resident in the US may still be accepted at some Canada/Mexico
        posts with proof of US residence, but confirm with the
        specific consulate before booking travel.
      </p>

      <h3>Is dropbox available for H-4 renewals?</h3>
      <p>
        Do not count on it. Interview-waiver (&ldquo;dropbox&rdquo;)
        eligibility narrowed sharply through 2025, and most H-1B/H-4
        applicants are now called for in-person interviews. Some
        consulates may still offer it in narrow cases — check your
        consulate&apos;s current instructions and keep an interview
        plan ready.
      </p>

      <h3>How do I extend H-4 status inside the US?</h3>
      <p>
        File Form I-539 with USCIS before the current status expires,
        with proof of the relationship and of the principal&apos;s
        current status. A timely filing lets you remain in an
        authorized period of stay while USCIS decides. It does not
        grant work authorization.
      </p>

      <h3>How long does H-4 processing take?</h3>
      <p>
        Consular stamping usually takes days to a few weeks after the
        interview, but appointment backlogs vary widely by post and
        can add months. In-US I-539 processing is measured in months
        and varies by service center. A 221(g) administrative-processing
        hold commonly resolves within two to six months but has no
        fixed deadline.
      </p>

      <h3>What happens if the H-1B worker loses their job?</h3>
      <p>
        The dependents&apos; clock follows the principal&apos;s. The
        principal gets a discretionary grace period of up to 60 days
        (or until the I-94 expires, whichever is sooner) to find a new
        sponsor, change status, or depart — and the family must act
        within the same window. The grace period is not work
        authorization for anyone.
      </p>

      <h3>What happens when my child turns 21 on H-4?</h3>
      <p>
        H-4 eligibility ends on the 21st birthday. Plan 12+ months
        ahead: for most children in school, the next status is F-1,
        which needs an I-20 and a change-of-status filing with enough
        lead time. The Child Status Protection Act helps green-card
        cases — it does not freeze H-4 age. See the age-out playbook
        above.
      </p>

      <h3>What does 221(g) mean for my H-4 case?</h3>
      <p>
        It means the consular officer paused the case for more
        evidence or additional checks. It is a hold, not a final
        denial. The CEAC tracker showing &ldquo;Refused&rdquo; during
        administrative processing is normal since March 2020 and does
        not mean the case is finally denied. If documents were
        requested, you have one year to submit them.
      </p>

      <h3>Can H-4 dependents study in the US?</h3>
      <p>
        Yes — full-time or part-time, without a student visa. But
        there is no CPT or OPT on H-4: practical training requires
        F-1 status. In-state tuition rules vary by state and
        university, so confirm with the specific school.
      </p>

      <h3>Do H-4 holders get a Social Security Number?</h3>
      <p>
        Only with work authorization — that is, only a spouse holding
        a valid H-4 EAD. Without an EAD, apply for an Individual
        Taxpayer Identification Number (ITIN) instead for tax filing.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — H-1B Specialty Occupations
          </a>{" "}
          — H-4 classification: the spouse and unmarried children
          under 21 of an H-1B worker may seek admission in H-4.
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
          — in-US extension and change of status, filing instructions,
          and current fee schedule (Form G-1055).
        </li>
        <li>
          USCIS — Employment Authorization for Certain H-4 Dependent
          Spouses — the two EAD paths and the (c)(26) category.
          Full process in our{" "}
          <Link
            href="/blog/h4-ead-guide"
            className="underline text-blue-600"
          >
            H-4 EAD guide
          </Link>
          .
        </li>
        <li>
          US Department of State — Adjudicating Nonimmigrant Visa
          Applicants in Their Country of Residence (September 6,
          2025) — the third-country stamping change.
        </li>
        <li>
          US Department of State — visa fees and Form DS-160
          instructions (H-category MRV fee $205; confirm the current
          fee before paying).
        </li>
        <li>
          8 CFR 214.2 — Special Requirements for Admission, Extension,
          and Maintenance of Status (H-4 eligibility: spouse and
          unmarried children under 21).
        </li>
        <li>
          <a
            href="https://www.americanimmigrationcouncil.org/fact-sheet/h-4-visa-classification/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            American Immigration Council — The H-4 Visa Classification
          </a>{" "}
          (October 9, 2026) — FY2025 visa and EAD counts and the
          Documented Dreamers estimate used in the numbers section.
        </li>
        <li>
          <Link
            href="/blog/h1b-visa-stamping"
            className="underline text-blue-600"
          >
            VisaTalentUSA — H-1B visa stamping guide
          </Link>{" "}
          — consular process background for the principal&apos;s
          stamp.
        </li>
        <li>
          <Link
            href="/blog/h1b-grace-period"
            className="underline text-blue-600"
          >
            VisaTalentUSA — H-1B grace-period guide
          </Link>{" "}
          — the 60-day grace period in full.
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: November 3, 2026. Status last checked: November 3, 2026. Fees, filing
          addresses, and processing times change — confirm them on the
          linked USCIS and State Department pages before filing. Not
          legal advice — consult an immigration attorney for your
          case.
        </em>
      </p>
    </>
  );
}
