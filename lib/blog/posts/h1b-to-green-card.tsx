import Link from "next/link";

export default function H1BToGreenCardContent() {
  return (
    <>
      <p className="lead">
        An H-1B visa does not turn into a green card on its own. It can
        lead to one — but only through a separate, employer-driven process
        that usually takes years: a prevailing wage determination, a PERM
        labor certification, an I-140 immigrant petition, and then a wait for your priority date to become current in the Visa Bulletin before you can file Form I-485. When the date is already current, the I-485 can instead be filed together with the I-140, or while the I-140 is still pending. This guide walks through every
        stage in order, with the real 2026 fees from the USCIS fee
        schedule, the real processing times from the Department of Labor,
        the November 2026 Visa Bulletin dates, and the AC21 rules that
        let you stay and work in the United States while you wait.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          The single most important fact in this guide: for workers born
          in India, the employment-based queue is measured in years, not
          months. In the November 2026 Visa Bulletin, the EB-2 final
          action date for India is November 1, 2013, and EB-3 is January
          22, 2014. Everything in this guide — the stages, the fees, the
          AC21 extensions — exists because of that wait.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
        <p className="font-semibold text-slate-900">In this guide</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          <li>
            <a
              href="#does-h1b-lead-to-green-card"
              className="underline text-blue-600"
            >
              Does H-1B lead to a green card?
            </a>
          </li>
          <li>
            <a href="#pathway" className="underline text-blue-600">
              The full pathway, step by step
            </a>
          </li>
          <li>
            <a href="#how-long" className="underline text-blue-600">
              How long does it take?
            </a>
          </li>
          <li>
            <a href="#cost" className="underline text-blue-600">
              What does it cost?
            </a>
          </li>
          <li>
            <a href="#categories" className="underline text-blue-600">
              EB-2 vs EB-3 vs EB-1 vs NIW — which category?
            </a>
          </li>
          <li>
            <a href="#visa-bulletin" className="underline text-blue-600">
              The Visa Bulletin and your priority date
            </a>
          </li>
          <li>
            <a href="#ac21" className="underline text-blue-600">
              AC21: staying in the U.S. while you wait
            </a>
          </li>
          <li>
            <a
              href="#i485-vs-consular"
              className="underline text-blue-600"
            >
              Filing I-485 vs consular processing
            </a>
          </li>
          <li>
            <a href="#work-travel" className="underline text-blue-600">
              Working and traveling while I-485 is pending
            </a>
          </li>
          <li>
            <a
              href="#what-can-go-wrong"
              className="underline text-blue-600"
            >
              What can go wrong
            </a>
          </li>
          <li>
            <a href="#2026-changes" className="underline text-blue-600">
              Do the 2026 changes affect your green card?
            </a>
          </li>
          <li>
            <a href="#checklist" className="underline text-blue-600">
              Your checklist
            </a>
          </li>
          <li>
            <a href="#faqs" className="underline text-blue-600">
              Frequently Asked Questions
            </a>
          </li>
          <li>
            <a href="#sources" className="underline text-blue-600">
              Sources
            </a>
          </li>
        </ul>
      </div>

      <h2 id="does-h1b-lead-to-green-card">
        Does H-1B lead to a green card?
      </h2>
      <p>
        Yes — but the H-1B itself never converts. Holding H-1B status
        does not block you from seeking permanent residence, and it does
        not start the clock either. A green card comes from a separate
        immigrant petition, and in the usual employer-sponsored route
        there are two different petitions from two different agencies:
        the employer first proves to the Department of Labor that no
        qualified U.S. worker is available for the job (the PERM labor
        certification), and then files Form I-140 with USCIS to classify
        you in an employment-based category. When your priority date becomes current, you can file for the green card itself — and if it is already current, the I-485 can be filed together with the I-140, or while the I-140 is still pending (concurrent filing, explained below).
      </p>
      <p>
        There are two exceptions to the employer-driven route. Workers
        with extraordinary ability (EB-1A) and workers whose work is in
        the national interest (EB-2 National Interest Waiver) can
        self-petition — no employer, no job offer, and no PERM. They
        still wait in the Visa Bulletin queue like everyone else. The
        categories are compared in{" "}
        <a href="#categories" className="underline text-blue-600">
          EB-2 vs EB-3 vs EB-1 vs NIW
        </a>{" "}
        below.
      </p>
      <p>
        This guide covers the employment-based route only — the path an
        H-1B worker actually takes. It does not cover family-based green
        cards, asylum, or the diversity visa lottery.
      </p>

      <h2 id="pathway">The full pathway, step by step</h2>
      <p>
        The employer-sponsored route (EB-2 or EB-3) has six stages. Each
        stage has a different filer, a different agency, and a different
        purpose. A failure at any stage before the I-140 is approved means starting over. The priority date is established when the Department of Labor accepts the PERM application for processing — and it is retained for a later petition only once an I-140 is approved, subject to the exceptions in 8 CFR 204.5(e).
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            The six stages of the H-1B to green card pathway
          </caption>
          <thead>
            <tr>
              <th scope="col">Stage</th>
              <th scope="col">What happens</th>
              <th scope="col">Who files</th>
              <th scope="col">Government fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Prevailing Wage Determination (PWD)</td>
              <td>
                DOL sets the minimum wage for the occupation in the area
                of employment (Form ETA-9141)
              </td>
              <td>Employer, to DOL</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>2. Recruitment</td>
              <td>
                Employer tests the U.S. labor market — job order,
                newspaper ads, and additional steps
              </td>
              <td>Employer</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>3. PERM labor certification</td>
              <td>
                DOL certifies no qualified U.S. workers are available
                (Form ETA-9089)
              </td>
              <td>Employer, to DOL</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>4. Form I-140</td>
              <td>
                Immigrant petition; an approved I-140 retains the priority date for later petitions
              </td>
              <td>Employer (or worker, for EB-1A / NIW)</td>
              <td>$715 paper / $665 online, plus Asylum Program Fee</td>
            </tr>
            <tr>
              <td>5. Visa Bulletin wait</td>
              <td>
                Wait for the priority date to become current; the wait
                is years long for India and China
              </td>
              <td>—</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>6. Green card</td>
              <td>
                Form I-485 adjustment of status in the U.S., or consular
                processing abroad
              </td>
              <td>Worker (and derivatives)</td>
              <td>$1,440 paper / $1,390 online (I-485)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/h1b-to-green-card-pathway.svg"
          alt="The six stages from H-1B to green card: prevailing wage determination, recruitment, PERM labor certification, I-140 petition, Visa Bulletin wait, and I-485 adjustment of status"
          className="h-auto w-full"
          width={1200}
          height={630}
        />
      </div>

      <h3>Stage 1 — Prevailing Wage Determination (PWD)</h3>
      <p>
        The employer files Form ETA-9141 with the Department of
        Labor&rsquo;s National Prevailing Wage Center through the FLAG
        system. DOL sets the prevailing wage for the occupation in the
        area of employment, usually from the Occupational Employment and
        Wage Statistics (OEWS) survey, under 20 CFR 656.40. The wage
        offered in recruitment and on the PERM application must be at
        least the prevailing wage. A PWD is valid for at least 90 days
        and no more than one year. There is no government fee for a PWD.
      </p>

      <h3>Stage 2 — Recruitment</h3>
      <p>
        The employer must test the U.S. labor market under 20 CFR
        656.17. For a professional occupation, that means a 30-day job
        order with the state workforce agency, two Sunday newspaper
        advertisements, and three additional recruitment steps chosen
        from the regulation&rsquo;s list. The core steps must take place
        at least 30 days and no more than 180 days before the PERM is
        filed. The point is to establish that there are no able, willing,
        qualified, and available U.S. workers for the job. The employer
        pays the recruitment and attorney costs — 20 CFR 656.12(b) bars
        passing PERM costs to the worker.
      </p>

      <h3>Stage 3 — PERM labor certification</h3>
      <p>
        The employer files Form ETA-9089 through DOL&rsquo;s FLAG system. Electronic filing began June 1, 2023, and DOL&rsquo;s instructions also permit submission by mail (postmarked June 1, 2023 or later). The Department of
        Labor certifies two things under INA 212(a)(5)(A): that no
        qualified U.S. workers are available, and that hiring the foreign
        worker will not adversely affect the wages and working conditions
        of similarly employed U.S. workers. DOL can certify, deny, or
        audit the case — an audit means DOL demands the full recruitment
        file, and it adds many months. There is no government fee for a
        PERM. A certified PERM is valid for 180 days: the I-140 must be
        filed within 180 days of certification, or the PERM expires.
      </p>

      <h3>Stage 4 — Form I-140</h3>
      <p>
        The employer files Form I-140, Immigrant Petition for Alien
        Workers, with USCIS. This is the step that makes the priority date retainable: for PERM-based cases, the priority date was already established when DOL accepted the ETA-9089 for processing (8 CFR 204.5(d)); for cases without a PERM, it is the date USCIS properly receives the I-140. The priority date is your place in the Visa Bulletin queue, and it never moves forward by itself — the queue moves toward it. Once the I-140 is approved, the date can be retained for a later petition under 8 CFR 204.5(e), subject to the exceptions explained in the AC21 section below. Premium
        processing is available and is covered in{" "}
        <a href="#how-long" className="underline text-blue-600">
          How long does it take?
        </a>
        .
      </p>

      <h3>Stage 5 — The Visa Bulletin wait</h3>
      <p>
        Once the I-140 is filed, the priority date is already in the queue — it was set when DOL accepted the PERM. If the date is current under the chart USCIS designates, the I-485 can be filed together with the I-140 or while it is still pending; if it is not current, the wait begins. The State Department publishes the Visa
        Bulletin every month with two charts — Final Action Dates and
        Dates for Filing — and your date must be earlier than the listed
        cutoff. For workers born in India or China, this is the longest
        stage by far: the November 2026 bulletin shows EB-2 India at
        November 1, 2013. The bulletin is explained in full in{" "}
        <a href="#visa-bulletin" className="underline text-blue-600">
          The Visa Bulletin and your priority date
        </a>
        .
      </p>

      <h3>Stage 6 — Form I-485 or consular processing</h3>
      <p>
        Once the priority date is current, the worker applies for the
        green card itself — Form I-485 (adjustment of status) from inside
        the United States, or consular processing through the National
        Visa Center and a U.S. consulate from abroad. While an I-485 is
        pending, the worker can apply for an Employment Authorization
        Document and Advance Parole. The two routes are compared in{" "}
        <a href="#i485-vs-consular" className="underline text-blue-600">
          Filing I-485 vs consular processing
        </a>
        .
      </p>

      <h2 id="how-long">How long does it take?</h2>
      <p>
        There is no single official answer to &ldquo;how long from H-1B
        to green card,&rdquo; because the stages are measured by
        different agencies and the bulletin wait depends on your country
        of birth. What can be stated precisely is how long each stage
        takes right now, from the agencies&rsquo; own figures. The
        table below is current as of October 31, 2026.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Current processing times by stage, as of October 31, 2026
          </caption>
          <thead>
            <tr>
              <th scope="col">Stage</th>
              <th scope="col">Current figure</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prevailing Wage Determination</td>
              <td>
                DOL was processing PERM PWD requests received in August
                2026 (OEWS survey) and July 2026 (non-OEWS)
              </td>
              <td>DOL FLAG, Oct 31, 2026</td>
            </tr>
            <tr>
              <td>PERM analyst review (ETA-9089)</td>
              <td>
                300 calendar days (cases decided in the last 30 days);
                315 days (last 90 days); 360 days (last 180 days)
              </td>
              <td>DOL FLAG, Oct 31, 2026</td>
            </tr>
            <tr>
              <td>Recruitment</td>
              <td>
                30-day state job order plus ads; core steps must fall
                30 to 180 days before the PERM is filed
              </td>
              <td>20 CFR 656.17</td>
            </tr>
            <tr>
              <td>I-140, premium processing</td>
              <td>
                15 business days (EB-1A, EB-1B, PERM-based EB-2 and
                EB-3); 45 business days (EB-1C and NIW)
              </td>
              <td>8 CFR 106.4; 91 FR 1059</td>
            </tr>
            <tr>
              <td>I-140, regular processing</td>
              <td>
                No single figure — times vary by category and service
                center and change monthly
              </td>
              <td>USCIS Case Processing Times tool</td>
            </tr>
            <tr>
              <td>I-485 / EAD / Advance Parole</td>
              <td>
                No fixed official figure — check the USCIS processing
                times tool at filing time
              </td>
              <td>USCIS Case Processing Times tool</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Putting the official stage figures together gives a realistic
        sense of the pre-bulletin stretch: roughly three months in the
        PWD queue, one to three months of recruitment, about ten to
        twelve months of PERM analyst review, and fifteen business days
        for a premium-processed I-140 — around a year and a half of processing before the green card itself can be filed. But that is not a separate wait followed by another wait: the priority-date queue runs from PERM acceptance, so the processing time and the bulletin wait overlap — while the PERM and I-140 are being processed, the queue is already moving. That is arithmetic from the
        agencies&rsquo; own stage figures, not an official total, and a
        PERM audit can add many months on top of it. DOL publishes no
        separate average for audit cases.
      </p>
      <p>
        Two things about premium processing are often misunderstood.
        First, the 15-business-day clock guarantees an{" "}
        <em>action</em> — an approval, a denial, a Request for Evidence,
        or a Notice of Intent to Deny — not an approval. Second, an RFE
        or NOID stops the clock, and a new full period starts when USCIS
        receives the response. Premium processing buys speed, not a
        result. For the bulletin wait itself, no processing time applies
        at all — the wait is set by the Visa Bulletin, covered in{" "}
        <a href="#visa-bulletin" className="underline text-blue-600">
          The Visa Bulletin and your priority date
        </a>
        .
      </p>

      <h2 id="cost">What does it cost?</h2>
      <p>
        Every fee below is from the USCIS Fee Schedule (Form G-1055,
        last updated October 28, 2026) and the regulation behind it, 8
        CFR 106.2. Paper fees are verified in the eCFR; online fees were
        verified directly on the USCIS fee schedule. PWD and PERM have
        no government fee at all — the employer&rsquo;s cost there is
        recruitment and attorney fees, which the law bars passing to the
        worker.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            USCIS and government fees for each green card stage
          </caption>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Paper filing</th>
              <th scope="col">Online filing</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prevailing Wage Determination (ETA-9141)</td>
              <td>$0</td>
              <td>$0</td>
              <td>No government fee</td>
            </tr>
            <tr>
              <td>PERM labor certification (ETA-9089)</td>
              <td>$0</td>
              <td>$0</td>
              <td>No government fee</td>
            </tr>
            <tr>
              <td>Form I-140</td>
              <td>$715</td>
              <td>$665</td>
              <td>Plus Asylum Program Fee below</td>
            </tr>
            <tr>
              <td>Asylum Program Fee (with every I-140)</td>
              <td>$600 / $0 / $300</td>
              <td>$600 / $0 / $300</td>
              <td>
                $600 regular petitioner; $0 nonprofit; $300 small
                employer (25 or fewer employees) or self-petitioner
              </td>
            </tr>
            <tr>
              <td>Form I-485, age 14 and over</td>
              <td>$1,440</td>
              <td>$1,390</td>
              <td>No separate biometrics fee</td>
            </tr>
            <tr>
              <td>Form I-485, child under 14 filing with a parent</td>
              <td>$950</td>
              <td>$900</td>
              <td>Concurrent filing with a parent&rsquo;s I-485</td>
            </tr>
            <tr>
              <td>
                Form I-765 (EAD) with a pending I-485
              </td>
              <td>$260</td>
              <td>$260</td>
              <td>
                Standalone I-765 is $520; $0 only if the I-485 was filed
                July 30, 2007 to April 1, 2024 with the fee paid
              </td>
            </tr>
            <tr>
              <td>
                Form I-131 (Advance Parole) with a pending I-485
              </td>
              <td>$630</td>
              <td>$580</td>
              <td>Part 1, Item 5.A. on Form I-131</td>
            </tr>
            <tr>
              <td>Form I-485 Supplement J (job portability)</td>
              <td>$0</td>
              <td>$0</td>
              <td>No fee, 8 CFR 106.2(a)(23)</td>
            </tr>
            <tr>
              <td>Premium processing (Form I-907, I-140)</td>
              <td>$2,965</td>
              <td>$2,965</td>
              <td>
                Paid separately, in addition to all other fees;
                effective March 1, 2026 (91 FR 1059)
              </td>
            </tr>
            <tr>
              <td>USCIS Immigrant Fee (consular route)</td>
              <td>$235</td>
              <td>$235</td>
              <td>Paid to USCIS after the immigrant visa is issued</td>
            </tr>
            <tr>
              <td>Immigrant visa fee (consular route)</td>
              <td>$345 per person</td>
              <td>—</td>
              <td>
                State Department fee (22 CFR 22.1); not a USCIS fee
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Worked examples — one adult, employer-sponsored</h3>
      <p>
        <strong>Paper filing:</strong> I-140 $715 + Asylum Program Fee
        $600 = $1,315; then I-485 $1,440 + I-765 $260 + I-131 $630 =
        $2,330. Total government fees: <strong>$3,645</strong>. With
        premium processing ($2,965): <strong>$6,610</strong>.
      </p>
      <p>
        <strong>Online filing:</strong> I-140 $665 + Asylum Program Fee
        $600 = $1,265; then I-485 $1,390 + I-765 $260 + I-131 $580 =
        $2,230. Total government fees: <strong>$3,495</strong>. With
        premium processing: <strong>$6,460</strong>.
      </p>
      <p>
        <strong>Self-petitioner (EB-1A or NIW), paper filing:</strong>{" "}
        I-140 $715 + Asylum Program Fee $300 = $1,015; then $2,330 for
        the I-485 stage. Total: <strong>$3,345</strong> before premium
        processing.
      </p>
      <p>
        Attorney fees are separate from every figure above, and there is
        no official range for them — this guide does not quote one. The
        H-1B petition fees from the earlier stages of your immigration
        journey (the I-129 filing fee, the ACWIA fee, the fraud
        prevention fee) are not green-card fees and are not in this
        table; they are covered in our{" "}
        <Link
          href="/blog/h1b-visa-cost"
          className="underline text-blue-600"
        >
          H-1B visa cost guide
        </Link>
        .
      </p>

      <h2 id="categories">EB-2 vs EB-3 vs EB-1 vs NIW — which category?</h2>
      <p>
        The category decides three things: whether a PERM is needed,
        whether you can self-petition, and which Visa Bulletin queue you
        wait in. Most H-1B workers go through EB-2 or EB-3 with their
        employer. EB-1 and the National Interest Waiver skip the PERM
        entirely, but they have much higher eligibility bars.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Employment-based green card categories compared
          </caption>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Who qualifies</th>
              <th scope="col">Who files the I-140</th>
              <th scope="col">PERM needed?</th>
              <th scope="col">Self-petition?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EB-2 (standard)</td>
              <td>
                Advanced degree (master&rsquo;s or higher, or
                bachelor&rsquo;s plus five years of progressive
                experience) or exceptional ability in the sciences, arts,
                or business (3 of 6 criteria, 8 CFR 204.5(k))
              </td>
              <td>U.S. employer</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td>EB-3</td>
              <td>
                Skilled workers (job needs two or more years of training
                or experience), professionals (bachelor&rsquo;s degree),
                or &ldquo;other workers&rdquo; (unskilled, under two
                years)
              </td>
              <td>U.S. employer</td>
              <td>Generally yes — Schedule A occupations (physical therapists, professional nurses) are pre-certified by DOL and skip the ordinary PERM process</td>
              <td>No</td>
            </tr>
            <tr>
              <td>EB-1A — Extraordinary Ability</td>
              <td>
                Sustained national or international acclaim; a major
                one-time award or 3 of 10 criteria (8 CFR 204.5(h)),
                plus a final merits determination
              </td>
              <td>Worker</td>
              <td>No</td>
              <td>Yes — no job offer, no employer</td>
            </tr>
            <tr>
              <td>EB-1B — Outstanding Professor / Researcher</td>
              <td>
                International recognition; 2 of 6 criteria (8 CFR
                204.5(i)); at least three years of teaching or research
                experience; permanent research or tenure-track offer
              </td>
              <td>
                U.S. employer (university or research institution)
              </td>
              <td>No</td>
              <td>No — job offer required</td>
            </tr>
            <tr>
              <td>EB-1C — Multinational Manager / Executive</td>
              <td>
                Employed abroad at least one year in the last three
                years in a managerial or executive capacity by a
                qualifying related entity; coming to a
                managerial/executive role (8 CFR 204.5(j))
              </td>
              <td>U.S. company in the corporate group</td>
              <td>No</td>
              <td>No — employer-driven</td>
            </tr>
            <tr>
              <td>EB-2 NIW — National Interest Waiver</td>
              <td>
                First qualifies under EB-2, then meets the three{" "}
                <em>Dhanasar</em> prongs: the proposed endeavor has
                substantial merit and national importance; the petitioner
                is well positioned to advance it; and waiving the job
                offer and labor certification benefits the U.S. (
                <em>Matter of Dhanasar</em>, 26 I&amp;N Dec. 884 (AAO
                2016))
              </td>
              <td>Worker</td>
              <td>No — waived</td>
              <td>Yes — no job offer, no employer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The point most often missed: <strong>skipping the PERM does not
        skip the Visa Bulletin queue.</strong> An NIW is still an EB-2
        petition, so an Indian-born NIW beneficiary waits in the same
        EB-2 India line (final action date November 1, 2013). The real
        queue advantage is EB-1: in November 2026, EB-1 India stands at
        February 1, 2023, EB-1 China at August 1, 2023, and EB-1 for the
        rest of the world is current. That is why EB-1A and EB-1C are
        worth understanding even if you start in EB-2 or EB-3 — and why
        they are hard to qualify for.
      </p>

      <h2 id="visa-bulletin">The Visa Bulletin and your priority date</h2>
      <p>
        Your <strong>priority date</strong> is your place in line. For
        PERM-based cases it is the date the Department of Labor accepted
        your ETA-9089 for processing; for cases without a PERM it is the
        date USCIS properly received your I-140. The State Department
        publishes the Visa Bulletin every month, and your priority date
        must be <em>earlier than</em> the date listed for your category
        and country of birth. &ldquo;C&rdquo; means current — no wait.
      </p>
      <p>
        There are two charts, and they do different jobs.{" "}
        <strong>Final Action Dates</strong> decide when a visa number is
        actually available — when a green card can be approved or an
        immigrant visa issued. <strong>Dates for Filing</strong> are an
        earlier cutoff that lets applicants assemble documents and file Form I-485 sooner, when USCIS allows it. For consular processing, Final Action Dates govern when the immigrant visa can actually be issued — but Dates for Filing still matter: they tell the National Visa Center when to start collecting the applicant&rsquo;s documents.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Final Action Dates, Visa Bulletin for November 2026
          </caption>
          <thead>
            <tr>
              <th scope="col">Category — Final Action Dates</th>
              <th scope="col">Rest of World</th>
              <th scope="col">China (mainland-born)</th>
              <th scope="col">India</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EB-1</td>
              <td>Current</td>
              <td>Aug 1, 2023</td>
              <td>Feb 1, 2023</td>
            </tr>
            <tr>
              <td>EB-2</td>
              <td>Apr 1, 2025</td>
              <td>Oct 1, 2021</td>
              <td>Nov 1, 2013</td>
            </tr>
            <tr>
              <td>EB-3</td>
              <td>Jun 15, 2024</td>
              <td>Jan 22, 2022</td>
              <td>Jan 22, 2014</td>
            </tr>
            <tr>
              <td>EB-3 Other Workers</td>
              <td>Jun 1, 2022</td>
              <td>Oct 1, 2019</td>
              <td>Jan 22, 2014</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Dates for Filing, Visa Bulletin for November 2026
          </caption>
          <thead>
            <tr>
              <th scope="col">Category — Dates for Filing</th>
              <th scope="col">Rest of World</th>
              <th scope="col">China (mainland-born)</th>
              <th scope="col">India</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EB-1</td>
              <td>Current</td>
              <td>Jul 1, 2024</td>
              <td>Jul 1, 2024</td>
            </tr>
            <tr>
              <td>EB-2</td>
              <td>Mar 15, 2026</td>
              <td>Jan 1, 2023</td>
              <td>Jan 15, 2015</td>
            </tr>
            <tr>
              <td>EB-3</td>
              <td>Aug 1, 2024</td>
              <td>Apr 1, 2024</td>
              <td>Jan 15, 2015</td>
            </tr>
            <tr>
              <td>EB-3 Other Workers</td>
              <td>Jul 1, 2022</td>
              <td>Oct 1, 2020</td>
              <td>Jan 15, 2015</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Movement in November 2026:</strong> EB-2 India held at
        November 1, 2013. EB-3 India advanced 21 days, from January 1
        to <strong>January 22, 2014</strong> — which means EB-3 India is
        now <em>later</em> than EB-2 India, a detail that matters for
        workers considering an EB-2 to EB-3 downgrade (a second I-140 in
        EB-3 while keeping the earlier priority date). EB-2 for the rest
        of the world advanced three months (January 1 to April 1, 2025);
        EB-3 for the rest of the world advanced one month; EB-3 China
        advanced two weeks. No employment-based category retrogressed in
        November.
      </p>
      <p>
        <strong>Which chart do you use to file I-485 in November
        2026?</strong> USCIS directs applicants in all family-sponsored
        and all employment-based preference categories to use the{" "}
        <strong>Dates for Filing</strong> chart for November 2026. That
        instruction comes from the USCIS Adjustment of Status Filing
        Charts page, as reported in multiple summaries of the page; the
        page itself could not be read directly during our research, so
        confirm the current month&rsquo;s chart on uscis.gov
        /visabulletininfo before filing. The bulletin itself states the
        default is Final Action Dates unless USCIS indicates otherwise.
      </p>
      <p>
        <strong>Why the wait is so long for India and China:</strong>{" "}
        the Immigration and Nationality Act sets the employment-based
        worldwide level at 140,000 visas a year (INA 203(b)) and caps any
        one country at 7% of the family and employment preference limits
        (INA 202). Demand from India and China far exceeds that share,
        so the queue stretches for years. The bulletin moves in small
        steps — weeks and months, not years — and it can move backwards
        (retrogress). A pending I-485 is not denied by retrogression; it
        waits, and it cannot be approved until the date advances past
        your priority date again.
      </p>
      <p>
        Track your own date with our{" "}
        <Link
          href="/tools/priority-date-tracker"
          className="underline text-blue-600"
        >
          Priority Date Tracker
        </Link>{" "}
        and read the month-by-month breakdown in our{" "}
        <Link
          href="/blog/november-2026-visa-bulletin"
          className="underline text-blue-600"
        >
          November 2026 Visa Bulletin guide
        </Link>
        .
      </p>

      <h2 id="ac21">AC21: staying in the U.S. while you wait</h2>
      <p>
        The H-1B visa is capped at six years in total (INA 214(g)(4)).
        Without AC21 — the American Competitiveness in the Twenty-First
        Century Act of 2000 — a worker whose priority date is still
        years away would have to leave. AC21 provides the only
        extensions past the six-year limit, and the only way to change
        employers mid-process without starting over. The employer filing
        the H-1B extension does not have to be the employer that filed
        the PERM or I-140.
      </p>

      <h3>One-year extensions — PERM or I-140 pending 365 days</h3>
      <p>
        Under AC21 §106(a) and 8 CFR 214.2(h)(13)(iii)(D), an H-1B
        worker can extend in increments of up to one year when a PERM
        labor certification application or an employment-based I-140 was
        filed <strong>at least 365 days</strong> before the six-year
        limit would hit, and no final decision (denial) has been made.
        The filing does not need to have been pending for the whole 365
        days. This covers EB-1, EB-2, and EB-3 petitions, including
        self-petitioned EB-1A and NIW I-140s.
      </p>
      <p>
        There is a trap in the same rule, 8 CFR
        214.2(h)(13)(iii)(D)(10): once an immigrant visa has been
        available — that is, once your priority date has been current —
        for one year and you have not filed for adjustment of status or
        an immigrant visa, the post-sixth-year extension is no longer
        available, unless USCIS excuses the delay. Do not let a current
        priority date sit unused for a year.
      </p>

      <h3>Three-year extensions — approved I-140, backlogged date</h3>
      <p>
        Under AC21 §104(c) and 8 CFR 214.2(h)(13)(iii)(E), a worker can
        extend in increments of up to three years when they are the
        beneficiary of an <strong>approved</strong> EB-1, EB-2, or EB-3
        I-140 and are eligible for permanent residence <em>except</em>{" "}
        that an immigrant visa is unavailable because of the per-country
        limits — in other words, the priority date is not current. There
        is no 365-day requirement. The extension is renewable
        indefinitely while the I-140 remains approved and the date stays
        backlogged, and visa unavailability is assessed as of the date
        the H-1B petition is filed. For most Indian-born workers with an
        approved I-140, this is the extension that carries them through
        the wait.
      </p>

      <h3>Changing jobs — portability after 180 days</h3>
      <p>
        Under INA 204(j) and 8 CFR 245.25, once a properly filed I-485
        has been <strong>pending 180 days or more</strong>, the applicant
        may move to a new job — same or different employer, or
        self-employment — in the <strong>same or a similar occupational
        classification</strong>, without a new PERM or I-140. The
        underlying I-140 must be approved, or pending and later approved
        (it must have been approvable when filed and remain so until the
        I-485 hit 180 days). The new job must be a genuine, full-time,
        permanent offer the applicant intends to accept. Portability is
        requested on Form I-485 Supplement J, which has no fee — but a
        Supplement J filed before day 180 will be rejected. EB-1A and
        NIW applicants do not need Supplement J, because no job offer
        underlies their cases. &ldquo;Same or similar&rdquo; is judged
        on duties, skills, education and experience, wage, and SOC code.
        The 180 days are calendar days, counted from the proper filing
        of the I-485 until USCIS receives the portability request.
      </p>

      <h3>Keeping your priority date</h3>
      <p>
        Under 8 CFR 204.5(e), an approved EB-1, EB-2, or EB-3
        petition&rsquo;s priority date can be carried to any later EB-1,
        EB-2, or EB-3 petition, and with multiple approved petitions the
        worker keeps the <strong>earliest</strong> date. Retention
        survives employer withdrawal and business closure. It is lost
        only if the approval is revoked for fraud or willful
        misrepresentation of a material fact, a revoked or invalidated
        labor certification, or a material error in the approval.
      </p>
      <p>
        A related but separate rule, 8 CFR 205.1, governs what happens
        to the petition itself when an employer withdraws it. A
        withdrawal <strong>less than 180 days</strong> after I-140
        approval — and before the I-485 has been pending 180 days —
        automatically revokes the petition. A withdrawal{" "}
        <strong>180 or more days</strong> after approval, or after the
        I-485 has been pending 180 days, does <em>not</em> automatically
        revoke it, so the approved petition still supports AC21 H-1B
        extensions and portability. And losing the petition is not the
        same as losing the priority date: the date is retained even after
        an automatic revocation (except for the fraud, labor
        certification, and material-error exceptions), but a new employer must still file a new PERM and I-140 to use it — unless the worker ports to a same or similar job under INA 204(j) after the I-485 has been pending 180 days, which needs no new PERM or I-140.
      </p>

      <h2 id="i485-vs-consular">Filing I-485 vs consular processing</h2>
      <p>
        Once the priority date is current, there are two ways to get the
        green card. Which one applies depends on where you are — and
        only the I-485 route comes with work and travel documents while
        you wait.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Adjustment of status vs consular processing compared
          </caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Form I-485 (adjustment of status)</th>
              <th scope="col">Consular processing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Where</td>
              <td>Inside the United States</td>
              <td>Abroad, via the National Visa Center and a U.S. consulate</td>
            </tr>
            <tr>
              <td>Government fees</td>
              <td>
                $1,440 paper / $1,390 online (age 14+); $950 / $900
                (child under 14 with a parent)
              </td>
              <td>
                $345 per person immigrant visa fee + $235 per person
                USCIS Immigrant Fee
              </td>
            </tr>
            <tr>
              <td>Work and travel while waiting</td>
              <td>
                EAD (Form I-765, $260) and Advance Parole (Form I-131,
                $630 paper / $580 online)
              </td>
              <td>None — no EAD or Advance Parole</td>
            </tr>
            <tr>
              <td>Concurrent filing with I-140</td>
              <td>
                Only when the priority date is current under the chart
                USCIS designates that month
              </td>
              <td>Not applicable</td>
            </tr>
            <tr>
              <td>If the I-140 is denied</td>
              <td>A concurrently filed I-485 is denied as well</td>
              <td>No immigrant visa can issue</td>
            </tr>
            <tr>
              <td>End of the process</td>
              <td>Green card approved by USCIS in the U.S.</td>
              <td>
                Immigrant visa issued (normally valid up to 6 months);
                green card produced after the $235 fee is paid
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Concurrent filing</strong> — filing the I-140 and the
        I-485 together — is only possible when the priority date is
        current under the chart USCIS designates for that month (for
        November 2026, the Dates for Filing chart). For most Indian- and
        Chinese-born EB-2 and EB-3 workers, the date is not current at
        I-140 time, so concurrent filing is usually unavailable until
        years later. It is routinely available for rest-of-world EB-2 and
        EB-3 cases and for EB-1. If a concurrently filed I-140 is denied,
        the I-485 loses its basis and is denied too.
      </p>

      <h2 id="work-travel">Working and traveling while I-485 is pending</h2>
      <p>
        A pending I-485 supports two documents that change daily life
        immediately: an Employment Authorization Document (EAD) and
        Advance Parole. Both are useful, and both carry a catch that is
        easy to get wrong.
      </p>

      <h3>The EAD — work for any employer, with a catch</h3>
      <p>
        A pending I-485 supports a category (c)(9) EAD (Form I-765,
        $260), which authorizes work for <strong>any</strong> employer —
        unlike the H-1B, which ties you to the petitioning employer and
        job. But the EAD is only as durable as the I-485: if the I-485
        is denied, EAD-based work authorization ends with it, and a
        worker who has left H-1B status has no nonimmigrant status to
        fall back on. Merely <em>holding</em> an unused EAD does not end
        H-1B status; <em>using</em> it to work — for a different
        employer, or after re-entering on Advance Parole — does. That
        hold-versus-use distinction is USCIS guidance, not a regulation
        text. The practical advice given consistently is to keep H-1B
        status as a safety net while the I-485 is pending if possible,
        especially before the 180-day portability mark.
      </p>

      <h3>Advance Parole — travel without abandoning your case</h3>
      <p>
        Departing the United States while an I-485 is pending without
        prior Advance Parole is deemed abandonment of the I-485 (8 CFR
        245.2(a)(4)(ii)(A)). Advance Parole (Form I-131, $630 paper /
        $580 online) authorizes return without abandoning the case.
        There is an exception for H-1B and L-1 holders (8 CFR
        245.2(a)(4)(ii)(C)): an applicant in valid H-1B (or H-4, L-1,
        L-2, K-3, or K-4) status who departs and returns on a valid H or
        L visa to resume the same employment does <em>not</em> abandon
        the I-485 and does not need Advance Parole — but needs a valid
        visa stamp for re-entry. Re-entering on Advance Parole instead
        admits the person as a <strong>parolee</strong>, not in H-1B
        status. They may keep working for the same H-1B employer without
        an EAD, and can regain H-1B status through a later
        extension or transfer petition — but if they then work on the EAD
        or change employers on the EAD, H-1B status is lost.
      </p>
      <p>
        One newer cost to know: the USCIS fee schedule lists an
        additional <strong>$1,050 Immigration Parole Fee</strong> (Pub.
        L. 119-21), collected by U.S. Customs and Border Protection each
        time you seek parole at a port of entry, unless CBP determines
        you qualify for an exception. Budget for it before traveling on
        Advance Parole.
      </p>
      <p>
        A further caution from 2026: on August 13, 2026, the Board of
        Immigration Appeals held in <em>Matter of Delcarmen-Lara</em>,
        29 I&N Dec. 830 (Interim Decision #4233), that a departure on Advance Parole is a &ldquo;departure&rdquo; for purposes of the ten-year unlawful presence bar, INA 212(a)(9)(B)(i)(II) — the bar that applies to people with one year or more of unlawful presence who seek admission within ten years of departure. The decision overrules the prior Arrabally rule, and applies prospectively — the Board applied its holding prospectively under the retroactivity test in Matter of Cordero-Garcia, 27 I&N Dec. 652, 658 (BIA 2019), and declined to decide whether the respondent&rsquo;s own January 2024 trip triggered the bar. It does not address the three-year bar in clause (i)(I), so the two bars should not be merged. Anyone with unlawful presence history should get advice before traveling on Advance Parole. The holding and its prospective application are verified against the official decision (U.S. Department of Justice, EOIR, Interim Decision #4233, Section II.B).
      </p>

      <h2 id="what-can-go-wrong">What can go wrong</h2>
      <p>
        Most green-card cases that fail do so at a predictable point.
        Knowing the failure point in advance is what lets you avoid it.
      </p>

      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table>
          <caption className="sr-only">
            Risks at each stage of the green card process
          </caption>
          <thead>
            <tr>
              <th scope="col">Risk</th>
              <th scope="col">What happens</th>
              <th scope="col">What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PERM audit</td>
              <td>
                DOL demands the full recruitment file; supervised
                recruitment may follow. No separate DOL average is
                published for audit cases; audits add many months. A
                failed audit means denial.
              </td>
              <td>
                Meticulous recruitment documentation; respond fully and
                on time.
              </td>
            </tr>
            <tr>
              <td>PERM denial</td>
              <td>
                No certified labor certification, so no I-140 can be filed on it. The priority date was set when DOL accepted the ETA-9089, but without an approved I-140 it is not retained — so it is lost in practice.
              </td>
              <td>
                Employer may request reconsideration or review, or
                re-file — restarting the clock.
              </td>
            </tr>
            <tr>
              <td>I-140 denial</td>
              <td>
                Without an approved petition, the priority date established by the PERM is not retained, and there is no I-485 basis — a concurrently filed I-485 is denied as well. AC21 extensions are a separate question: a one-year extension may still be available on a qualifying PERM or I-140 filed 365 or more days ago that has not been finally denied (a denial under appeal or reconsideration may not count as final); the three-year extension requires an approved I-140.
              </td>
              <td>
                Premium processing changes only the speed of the first
                action, not the outcome.
              </td>
            </tr>
            <tr>
              <td>Priority-date retrogression</td>
              <td>
                The Final Action Date moves backwards after filing. A
                pending I-485 is not denied — it waits, and cannot be
                approved until the date advances past the priority date
                again. EAD and Advance Parole remain renewable while it
                pends.
              </td>
              <td>
                Filing under Dates for Filing does not protect against
                retrogression of the Final Action Date.
              </td>
            </tr>
            <tr>
              <td>Changing employers / laid off mid-process</td>
              <td>
                If no I-485 has been pending 180 days: a job change does not by itself end the original case — it can continue if the original employer’s permanent job offer and your intent to accept it remain. If the original employer withdraws the permanent job offer and INA 204(j) portability is unavailable, a new employer generally needs a new PERM and I-140 for the standard employer-sponsored route (a date from an approved I-140 would be retained). If the I-485 has been pending 180 days: portability to a same or similar job via Supplement J, even if the I-140 is still pending, provided it is later approved.
              </td>
              <td>
                File the I-485 as soon as the date allows; do not resign
                before day 180 without advice. A layoff on H-1B also
                triggers the 60-day grace period.
              </td>
            </tr>
            <tr>
              <td>Employer withdraws the I-140</td>
              <td>
                Less than 180 days after approval (and I-485 pending less
                than 180 days): automatic revocation. 180 or more days
                after approval, or after the I-485 has been pending 180
                days: the petition remains approved for AC21 and
                portability purposes.
              </td>
              <td>
                The priority date is retained either way (except for
                fraud, labor certification, and material-error
                revocations) — a new employer files a new PERM and I-140
                to use it.
              </td>
            </tr>
            <tr>
              <td>Traveling abroad while I-485 is pending without Advance Parole</td>
              <td>
                Deemed abandonment of the I-485 — unless the H-1B / L-1
                exception applies (valid status, valid visa, return to
                the same employer). Re-entering on Advance Parole makes
                you a parolee, not an H-1B holder.
              </td>
              <td>
                Get Advance Parole before departing. H-1B holders should
                prefer re-entry on the H-1B visa and keep Advance Parole
                as a backup.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="2026-changes">Do the 2026 changes affect your green card?</h2>
      <p>
        Three 2026 developments touch the H-1B world. None of them
        changes a green-card step today — but one of them could make the
        AC21 extensions harder, and one could raise future PERM wages.
      </p>

      <h3>The $100,000 H-1B fee — no effect on the green-card path</h3>
      <p>
        Proclamation 10973 (September 19, 2025) imposed a $100,000
        payment as a condition for certain <strong>new</strong> H-1B
        petitions filed on or after September 21, 2025, principally for
        workers abroad; Proclamation 11069 (September 18, 2026) extended
        it to September 21, 2027. It is <strong>blocked by the courts
        and is not being collected</strong>: the District of
        Massachusetts vacated the implementing guidance on June 8, 2026, the
        First Circuit denied a stay on July 24, 2026, and the Northern
        District of California blocked implementation policies on
        September 30, 2026, with appeals pending. It is not a fee on
        PERM, I-140, I-485, extensions, amendments, or change-of-employer
        petitions for workers already in the United States, and it does
        not change any green-card step. The full status is tracked on our{" "}
        <Link
          href="/blog/h1b-100k-fee-status"
          className="underline text-blue-600"
        >
          $100K fee status page
        </Link>
        . The court and proclamation details in this paragraph are drawn
        from secondary sources citing USCIS, White House, and court
        records.
      </p>

      <h3>The deference proposal — the one to watch</h3>
      <p>
        The Department of Homeland Security&rsquo;s proposal to end
        deference on H-1B extensions (91 FR 65119, October 14, 2026,
        docket USCIS-2026-0529) would delete 8 CFR 214.1(c)(5), the rule
        that currently requires USCIS to defer to its prior eligibility
        determination when adjudicating an I-129 involving the same
        parties and the same underlying facts. Comments closed on
        November 13, 2026. It is a <strong>proposal only</strong>: the
        current deference rule remains in force until a final rule
        publishes and takes effect. If finalized, every H-1B extension —
        including AC21 one-year and three-year extensions past the
        six-year limit — would be re-examined from scratch. DHS estimates
        about 208,429 petitions a year would lose deference and about
        6,044 additional RFEs a year would result. The green-card steps
        themselves (PERM, I-140, I-485) are unaffected. Read the full
        analysis in our{" "}
        <Link
          href="/blog/h1b-extension-process-2026-changes"
          className="underline text-blue-600"
        >
          H-1B extension deference guide
        </Link>
        .
      </p>

      <h3>The prevailing-wage final rule — not in effect</h3>
      <p>
        The Department of Labor&rsquo;s prevailing-wage final rule,
        &ldquo;Improving Wage Protections for the Temporary and Permanent
        Employment of Certain Foreign Nationals in the United
        States&rdquo; (RIN 1205-AC30), was submitted to White House OIRA
        review as a final rule on November 6, 2026. It is{" "}
        <strong>not published, not effective, and its final text is not
        public</strong>. The proposed version (91 FR 15454, March 27,
        2026) would raise wage levels for H-1B, H-1B1, E-3, and PERM:
        Level I from the 17th to the 34th percentile, Level II from the
        34th to the 52nd, Level III from the 50th to the 70th, and Level
        IV from the 67th to the 88th. The final percentiles may differ.
        As proposed, the rule would apply to wage requests pending on the
        effective date and to new requests and LCAs filed on or after it
        — not to previously issued determinations, certified PERMs, or
        filed LCAs. Its effect on the green-card path today is none:
        current PWDs are still issued under 20 CFR 656.40. If finalized
        as proposed, future PERM cases would face higher offered-wage
        requirements. Separately, DOL&rsquo;s PERM labor-market-test
        proposal (RIN 1205-AC29) cleared OIRA review on October 23,
        2026, but is unpublished; the current recruitment rules at 20 CFR
        656.17 still apply. The OIRA status in this paragraph is as
        reported by APLU (November 11, 2026) and Immigration Analytics
        (November 9, 2026), citing reginfo.gov.
      </p>

      <h2 id="checklist">Your checklist</h2>
      <p>
        If you are on H-1B today and want a green card, this is the
        order of operations:
      </p>
      <ul>
        <li>
          <strong>Start the conversation with your employer early.</strong>{" "}
          The PERM stage alone takes over a year from PWD to certified
          labor certification. The 365-day clock for AC21 one-year
          extensions starts when the PERM or I-140 is filed, so every
          month of delay is a month of flexibility lost.
        </li>
        <li>
          <strong>Keep H-1B status as long as possible.</strong> Do not
          resign before your I-485 has been pending 180 days without
          advice, and do not use an EAD to change employers before that
          mark — the safety net is worth more than the flexibility.
        </li>
        <li>
          <strong>File the I-485 as soon as the bulletin allows.</strong>{" "}
          Do not let a current priority date sit unused for a year; the
          AC21 one-year-extension trap in 8 CFR
          214.2(h)(13)(iii)(D)(10) can cost you the extension.
        </li>
        <li>
          <strong>Get Advance Parole before any trip abroad</strong>{" "}
          while an I-485 is pending — unless you will re-enter on a
          valid H-1B visa to the same employer — and prefer re-entry on
          your H-1B visa. Budget for the $1,050 CBP parole fee if you
          travel on Advance Parole.
        </li>
        <li>
          <strong>Keep copies of every filing</strong> — the PERM, the
          I-140 approval notice, and your priority date. The date
          survives employer changes; the paperwork is what proves it.
        </li>
        <li>
          <strong>Check the bulletin every month</strong> with our{" "}
          <Link
            href="/tools/priority-date-tracker"
            className="underline text-blue-600"
          >
            Priority Date Tracker
          </Link>
          , and check the USCIS processing-times tool before quoting any
          timeline to yourself or your employer.
        </li>
        <li>
          <strong>If your employer ends sponsorship</strong>, know your
          options before you act: an H-1B transfer to a new employer, an
          EB-1A or NIW self-petition, or the 60-day grace period — see
          our{" "}
          <Link
            href="/blog/h1b-grace-period"
            className="underline text-blue-600"
          >
            60-day grace period guide
          </Link>
          .
        </li>
        <li>
          <strong>Talk to an immigration attorney</strong> before any
          job change, before traveling with any unlawful-presence
          history, or if your I-140 is withdrawn. This guide is
          information, not legal advice.
        </li>
      </ul>

      <h2 id="faqs">Frequently Asked Questions</h2>

      <h3>Does H-1B lead to a green card?</h3>
      <p>
        Yes, but the H-1B itself never converts. Your employer must
        sponsor you through PERM labor certification and an I-140
        petition, and then you wait for your priority date to become
        current in the Visa Bulletin before filing Form I-485. Workers
        with extraordinary ability (EB-1A) or a national interest waiver
        (EB-2 NIW) can self-petition instead.
      </p>

      <h3>How long does it take from H-1B to green card?</h3>
      <p>
        There is no single official figure. The PWD, recruitment, PERM and I-140 processing — about three months in the PWD queue, one to three months of recruitment, about ten to twelve months of PERM review, and fifteen business days for a premium-processed I-140 — adds up to roughly a year and a half from the agencies&rsquo; own figures. But that is not a separate wait followed by another wait: the priority-date queue runs from PERM acceptance, so the processing and the queue overlap — while the PERM and I-140 are being processed, the queue is already moving. The bulletin wait then dominates: in November 2026, EB-2 India stands at November 1, 2013 and EB-3 India at January 22, 2014.
      </p>

      <h3>How much does a green card cost from H-1B?</h3>
      <p>
        For one adult, employer-sponsored: $3,645 in government fees by
        paper ($3,495 online) — I-140 with the Asylum Program Fee plus
        I-485, I-765, and I-131. Premium processing adds $2,965. A
        self-petitioner (EB-1A or NIW) pays $3,345 by paper. Attorney
        fees are separate and there is no official range for them.
      </p>

      <h3>Can I apply for a green card without my employer?</h3>
      <p>
        For EB-2 and EB-3, no — the employer must file the PERM and the
        I-140. For EB-1A (extraordinary ability) and EB-2 NIW (national
        interest waiver), yes — you can self-petition with no job offer
        and no PERM. An NIW is still an EB-2 petition, so it waits in
        the EB-2 queue.
      </p>

      <h3>Can I change jobs during the green card process?</h3>
      <p>
        Eligible H-1B workers may change employers through a qualifying new petition — an H-1B transfer — subject to the portability conditions. What changes is whether your green-card case survives. If no I-485 is pending yet, a job change does not by itself end the original case — it can continue if the original employer’s permanent job offer and your intent to accept it remain. But if the original employer withdraws the offer and INA 204(j) portability is unavailable, the new employer starts over with a new PERM and I-140 (an approved I-140&rsquo;s priority date is retained for the new petition). If the I-485 has already been pending 180 days, AC21 portability can apply even while the I-140 is still pending — provided the petition is later approved and was approvable when filed — and lets you move to a same or similar job with any employer (or self-employment) via Form I-485 Supplement J, with no new PERM or I-140.
      </p>

      <h3>What happens if I lose my job during the process?</h3>
      <p>
        On H-1B, the 60-day grace period may apply — up to 60 consecutive days, or until the end of your authorized validity period, whichever is shorter, once per authorized validity period, at DHS&rsquo;s discretion — giving you time to find a new sponsor or another status. If your I-140 is already approved, your priority date is retained — a new employer files a new PERM and I-140 to use it, unless you port under INA 204(j) after the I-485 has been pending 180 days. If the I-140 is approved and your date is backlogged,
        AC21 three-year H-1B extensions can keep you in status while a
        new employer starts the process.
      </p>

      <h3>Can I travel while my I-485 is pending?</h3>
      <p>
        Only with Advance Parole ($630 paper / $580 online), or under
        the H-1B exception — valid H-1B status, a valid visa, and a
        return to the same employer. Departing without Advance Parole is deemed abandonment of the I-485, unless an applicable exception applies (for example, the H-1B/L-1 exception above). If you travel on Advance
        Parole, CBP may also collect a $1,050 Immigration Parole Fee at
        the port of entry.
      </p>

      <h3>
        What is the difference between Final Action Dates and Dates for
        Filing?
      </h3>
      <p>
        Final Action Dates decide when a visa number is actually
        available and a green card can be approved. Dates for Filing are
        an earlier cutoff that lets applicants file Form I-485 sooner
        when USCIS allows it. For November 2026, USCIS directs applicants to use the Dates for Filing chart. For consular processing, Final Action Dates govern when the visa can be issued — but Dates for Filing govern when the National Visa Center starts collecting documents.
      </p>

      <h3>Can my spouse and children get green cards too?</h3>
      <p>
        Yes — a spouse and unmarried children under 21 can apply as
        derivatives with the principal applicant, each filing their own
        Form I-485 (a child under 14 filing with a parent pays $950 by
        paper or $900 online). They share the principal&rsquo;s priority
        date and category.
      </p>

      <h3>What if my priority date retrogresses after I file I-485?</h3>
      <p>
        Your pending I-485 is not denied — it waits, and it cannot be
        approved until the Final Action Date advances past your priority
        date again. Your EAD and Advance Parole remain renewable while
        the case pends. Filing under Dates for Filing does not protect
        against retrogression of the Final Action Date.
      </p>

      <h3>Does the $100,000 H-1B fee affect my green card?</h3>
      <p>
        No. The $100,000 payment is blocked by court order and is not
        being collected, and it was never a fee on PERM, I-140, I-485,
        H-1B extensions, or change-of-employer petitions. It does not
        change any green-card step.
      </p>

      <h3>Do I need premium processing for the I-140?</h3>
      <p>
        No — it is optional and costs $2,965. It guarantees an action within 15 business days for most covered I-140 classifications — 45 business days for EB-1C and EB-2 NIW — (approval, denial, RFE, or Notice of Intent to Deny), not an approval. It is useful when you need the I-140 approved quickly, which makes the priority date retainable sooner, or to get AC21 one-year extensions moving, but it does not change the outcome or the bulletin wait.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://travel.state.gov/content/dam/visas/Bulletins/visabulletin_November2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            U.S. Department of State — Visa Bulletin for November 2026
            (Final Action Dates and Dates for Filing, EB-1 / EB-2 / EB-3)
          </a>
        </li>
        <li>
          <a
            href="https://www.uscis.gov/g-1055"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — Fee Schedule (Form G-1055), last updated October 28,
            2026 (I-140, I-485, I-765, I-131, Supplement J, USCIS
            Immigrant Fee)
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-106/section-106.2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            eCFR — 8 CFR 106.2, USCIS fee schedule (paper fees,
            I-765 / I-131 with pending I-485, Supplement J no fee)
          </a>
        </li>
        <li>
          <a
            href="https://flag.dol.gov/processingtimes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            U.S. Department of Labor, FLAG — Processing Times (PERM
            analyst review and PWD queue, as of October 31, 2026)
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            eCFR — 8 CFR 214.2(h)(13)(iii)(D) and (E), AC21 one-year and
            three-year H-1B extensions
          </a>
        </li>
        <li>
          <a
            href="https://www.law.cornell.edu/cfr/text/8/204.5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            LII / eCFR — 8 CFR 204.5(d) and (e), priority dates and
            retention of priority date
          </a>
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            USCIS — H-1B Specialty Occupations (six-year limit, grace
            period, EAD hold-versus-use guidance)
          </a>
        </li>
        <li>
          <a
            href="https://www.justice.gov/eoir/media/1457741/dl?inline=&ref=immprof.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            U.S. Department of Justice, Executive Office for Immigration
            Review — Matter of Delcarmen-Lara, 29 I&amp;N Dec. 830 (BIA
            2026), Interim Decision #4233 (ten-year bar holding and
            prospective application, Section II.B)
          </a>
        </li>
        <li>
          Federal Register — premium processing fee, 91 FR 1059
          (effective March 1, 2026, $2,965).
        </li>
        <li>
          Federal Register — deference proposal, 91 FR 65119 (October
          14, 2026), docket USCIS-2026-0529 (comments closed November 13,
          2026).
        </li>
        <li>
          Federal Register — prevailing-wage proposal, 91 FR 15454
          (March 27, 2026), RIN 1205-AC30 (final rule submitted to OIRA
          November 6, 2026; unpublished, not in effect).
        </li>
        <li>
          eCFR — 20 CFR 656.17 (recruitment), 20 CFR 656.40 (prevailing
          wage), 20 CFR 656.12(b) (employer pays PERM costs); 8 CFR
          245.2(a)(4)(ii) (travel while I-485 pending); 8 CFR 245.25
          (portability); 8 CFR 205.1 (automatic revocation); INA
          203(b) and 202 (140,000 annual limit, 7% per-country cap); INA
          204(j) (portability); INA 212(a)(5)(A) (labor certification).
        </li>
      </ul>
      <p>
        Background referenced in the text: Proclamation 10973 (September
        19, 2025) and Proclamation 11069 (September 18, 2026) on the
        $100,000 H-1B payment; the $100,000 fee&rsquo;s blocked status
        in the District of Massachusetts, the First Circuit, and the
        Northern District of California; the DOL PERM labor-market-test
        proposal (RIN 1205-AC29) clearing OIRA review on October 23,
        2026, unpublished; the November 2026 chart instruction (Dates
        for Filing) from the USCIS Adjustment of Status Filing Charts
        page, as reported in multiple summaries; the immigrant visa fee
        of $345 (22 CFR 22.1, item 32(b)); and <em>Matter of Delcarmen-Lara</em>, 29 I&N Dec. 830 (BIA 2026), Interim Decision #4233, holding and prospective application verified against the official decision, Section II.B.
      </p>

      <h2 id="data-note">Data note</h2>
      <p className="text-sm text-slate-500">
        <em>
          Our dataset is U.S. Department of Labor LCA disclosure data —
          Labor Condition Application records for H-1B workers. An LCA
          record is not a green-card filing, not an I-140, and not a
          worker&rsquo;s place in the Visa Bulletin queue, and no figure
          in this guide claims how many workers received green cards.
          The fees, processing times, and bulletin dates in this guide
          are from USCIS, the Department of Labor, and the State
          Department, as cited above. Fees are from the USCIS Fee
          Schedule (Form G-1055), last updated October 28, 2026, and the
          eCFR; the online amounts were verified directly on the USCIS
          fee schedule.
        </em>
      </p>

      <p className="text-sm text-slate-500">
        <em>
          Published: November 13, 2026. Status last checked: November
          13, 2026. Visa Bulletin dates change every month and fees can
          change by rulemaking — confirm the current bulletin and the
          current fee schedule before filing. Not legal advice — consult
          an immigration attorney for your case.
        </em>
      </p>
    </>
  );
}
