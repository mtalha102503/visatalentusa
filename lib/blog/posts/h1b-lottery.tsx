import Link from "next/link";

export default function H1BLotteryContent() {
  return (
    <>
      <p className="lead">
        The <strong>H-1B lottery</strong> is the gateway to America's most
        sought-after work visa — and with over 400,000 registrations competing
        for just 85,000 spots each year, understanding how the H-1B visa lottery
        actually works can make the difference between selection and waiting
        another year. This complete guide explains the H-1B lottery process
        step by step: how registration works, when H-1B lottery results are
        announced, what your real odds of selection are, and the strategies
        that genuinely improve your chances — all grounded in official USCIS
        data and our analysis of 1.5M+ real Department of Labor filing records.
      </p>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/h1b-lottery-hero.svg"
          alt="H-1B lottery explained: how the H-1B visa lottery selection process works"
          className="h-auto w-full"
          width={1200}
          height={630}
        />
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">H-1B Lottery: Key Facts</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li><strong>Annual cap:</strong> 85,000 visas (65,000 regular + 20,000 U.S. master's exemption)</li>
          <li><strong>Selection method:</strong> Random lottery from electronic registrations</li>
          <li><strong>Registration fee:</strong> $215 per beneficiary (paid by employer)</li>
          <li><strong>Registration window:</strong> Typically March each year</li>
          <li><strong>Results announced:</strong> By March 31 (selection notifications)</li>
          <li><strong>FY2026 registrations:</strong> ~400,000+ for 85,000 spots</li>
        </ul>
      </div>

      <h2>What Is the H-1B Lottery?</h2>
      <p>
        The H-1B lottery is the random selection process U.S. Citizenship and
        Immigration Services (USCIS) uses to choose which H-1B visa petitions it
        will accept each fiscal year. Because demand for H-1B visas massively
        exceeds the annual congressional cap of 85,000, USCIS cannot process
        every petition — so it holds a lottery.
      </p>
      <p>
        Since the FY2021 cap season, the H-1B lottery for the visa program has
        used an <strong>electronic registration system</strong>. Instead of
        filing a full petition upfront, employers first submit a simple online
        registration for each worker they want to sponsor. USCIS then randomly
        selects registrations up to the cap. Only selected employers go on to
        file the full H-1B petition (Form I-129).
      </p>
      <p>
        This two-step system — register first, petition only if selected — saves
        employers and workers enormous time and money compared to the old
        paper-based lottery, where hundreds of thousands of complete petitions
        were filed and most were returned unprocessed.
      </p>

      <h2>How the H-1B Visa Lottery Works: Step by Step</h2>
      <p>
        Here is exactly how the lottery for H-1B visas runs each year, from
        registration to results:
      </p>

      <h3>Step 1: Employer Registration (March)</h3>
      <p>
        During a registration window of at least 14 days (typically in March),
        U.S. employers log into the USCIS online system and submit an electronic
        registration for each foreign worker they intend to sponsor. Each
        registration requires basic information about the employer and the
        beneficiary, plus the $215 registration fee per person.
      </p>
      <p>
        One critical rule: <strong>each beneficiary may only have one
        registration per employer</strong>, but multiple legitimate employers
        may each register the same person. USCIS uses a beneficiary-centric
        selection system to prevent gaming — duplicate registrations by related
        entities for the same worker can disqualify all of them.
      </p>

      <h3>Step 2: Random Selection</h3>
      <p>
        After registration closes, USCIS runs computerized random selections.
        The lottery happens in two rounds:
      </p>
      <ol>
        <li>
          <strong>Regular cap selection:</strong> USCIS first selects from the
          entire pool (including U.S. master's degree holders) to fill the
          65,000 regular cap.
        </li>
        <li>
          <strong>Master's cap selection:</strong> Unselected U.S. master's (or
          higher) degree holders then get a second chance in the 20,000
          master's exemption lottery.
        </li>
      </ol>
      <p>
        This two-draw structure is why a U.S. master's degree is such an
        advantage — it effectively gives you two lottery tickets instead of one.
      </p>

      <h3>Step 3: Selection Notifications</h3>
      <p>
        USCIS notifies selected registrants through their online accounts —
        usually by March 31. If you are selected, your employer has at least 90
        days to file the full H-1B petition. Being selected in the H-1B lottery
        does <em>not</em> guarantee visa approval; it only means USCIS will
        accept your petition for processing.
      </p>

      <h3>Step 4: Petition Filing</h3>
      <p>
        The employer files Form I-129 with USCIS, along with a certified Labor
        Condition Application (LCA) from the Department of Labor, proof of the
        job offer, the worker's qualifications, and filing fees. USCIS then
        adjudicates the petition on its merits.
      </p>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/h1b-lottery-process.svg"
          alt="H-1B lottery process timeline: registration, selection, notification, petition filing"
          className="h-auto w-full"
          width={1200}
          height={630}
        />
      </div>

      <h2>H-1B Lottery Results: When and How to Check</h2>
      <p>
        H-1B lottery results are released through the USCIS online registration
        system — there is no public list of selected names. Your employer (or
        their attorney) checks the USCIS account where the registration was
        submitted. Each registration shows one of these statuses:
      </p>
      <ul>
        <li><strong>Selected:</strong> Your registration was picked. Your employer may file the H-1B petition.</li>
        <li><strong>Submitted:</strong> Not selected in the initial round, but still eligible if USCIS runs a second selection.</li>
        <li><strong>Denied:</strong> Duplicate registration or ineligible — cannot be selected.</li>
        <li><strong>Invalidated-Failed Payment:</strong> Registration fee payment failed.</li>
      </ul>
      <p>
        For the most recent cycles, H-1B visa lottery results have been
        announced by March 31. In years when the initial selection does not fill
        the cap, USCIS conducts additional selection rounds in summer — so a
        "Submitted" status in April can still turn into a selection later.
      </p>

      <h2>H-1B Lottery Odds: What Are Your Real Chances?</h2>
      <p>
        Your H-1B lottery odds depend on one simple ratio: 85,000 available
        visas divided by the number of eligible registrations. In recent years,
        that math has been sobering:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Fiscal Year</th>
              <th>Eligible Registrations</th>
              <th>Selections</th>
              <th>Overall Selection Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FY2024</td>
              <td>~759,000</td>
              <td>~110,000</td>
              <td>~14.5%</td>
            </tr>
            <tr>
              <td>FY2025</td>
              <td>~479,000</td>
              <td>~135,000</td>
              <td>~28.2%</td>
            </tr>
            <tr>
              <td>FY2026</td>
              <td>~344,000</td>
              <td>~121,000</td>
              <td>~35.3%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <em>Source: USCIS cap-season statistics. FY2025's drop in registrations
        followed USCIS's beneficiary-centric anti-fraud rule, which eliminated
        most duplicate filings.</em>
      </p>
      <p>
        Note these are <strong>overall</strong> rates. Your personal odds are
        better if you hold a U.S. master's degree (two draws instead of one)
        and vary by wage level under the current selection system. Our{" "}
        <Link href="/tools/lottery-odds" className="text-blue-700 underline underline-offset-2">
          H-1B lottery odds calculator
        </Link>{" "}
        lets you estimate your chances by wage level and degree.
      </p>

      <h2>Who Can Enter the H-1B Lottery?</h2>
      <p>To be registered for the H-1B lottery, the worker must:</p>
      <ul>
        <li>Have a U.S. employer willing to sponsor them (no self-petitioning)</li>
        <li>Hold at least a bachelor's degree (or equivalent) in a specific specialty</li>
        <li>Be offered a "specialty occupation" role requiring that degree</li>
        <li>Be paid at least the prevailing wage for the role and location</li>
      </ul>
      <p>
        There is no lottery entry for cap-exempt employers — universities,
        nonprofit research organizations, and government research institutions
        can sponsor H-1B workers year-round without going through the lottery
        at all.
      </p>

      <h2>H-1B Lottery Fees (2026)</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Amount</th>
              <th>When Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registration fee</td>
              <td>$215 per beneficiary</td>
              <td>At registration (March)</td>
            </tr>
            <tr>
              <td>Petition filing (I-129)</td>
              <td>$460–$780</td>
              <td>Only if selected</td>
            </tr>
            <tr>
              <td>ACWIA training fee</td>
              <td>$750–$1,500</td>
              <td>Only if selected</td>
            </tr>
            <tr>
              <td>Fraud prevention fee</td>
              <td>$500</td>
              <td>Only if selected</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        By law, the employer must pay the H-1B fees — passing these costs to
        the worker is prohibited. The $215 registration fee is the only cost at
        the lottery stage, which is why the electronic system is so much
        cheaper than the old file-everything approach.
      </p>

      <h2>Strategies to Improve Your H-1B Lottery Chances</h2>
      <p>
        You cannot rig a random draw — but several legitimate strategies
        genuinely improve your odds:
      </p>
      <ol>
        <li>
          <strong>Earn a U.S. master's degree.</strong> The single biggest
          lever: two selection rounds instead of one.
        </li>
        <li>
          <strong>Target cap-exempt employers.</strong> Universities and
          research nonprofits skip the lottery entirely.
        </li>
        <li>
          <strong>Negotiate a higher wage level.</strong> Under wage-weighted
          selection, higher prevailing-wage levels receive more entries per
          registration.
        </li>
        <li>
          <strong>Multiple legitimate employers.</strong> Each genuine job
          offer from a separate employer is a separate registration — but they
          must be real, bona fide offers.
        </li>
        <li>
          <strong>Choose sponsors with strong filing records.</strong> Our{" "}
          <Link href="/sponsors" className="text-blue-700 underline underline-offset-2">
            sponsor database
          </Link>{" "}
          shows which of the top 1,000 H-1B employers have the highest DOL LCA
          certification rates — a selected registration still needs an
          approvable petition behind it.
        </li>
      </ol>

      <h2>Common H-1B Lottery Myths</h2>
      <ul>
        <li>
          <strong>"Big companies always win."</strong> Selection is random per
          registration. What big companies have is more registrations — not
          better luck per ticket.
        </li>
        <li>
          <strong>"Selection means visa approval."</strong> No — it means USCIS
          will accept your petition. The petition must still be approved on its
          merits.
        </li>
        <li>
          <strong>"You can only try once."</strong> Unselected workers can be
          registered again every year. Many succeed on their second or third
          attempt.
        </li>
        <li>
          <strong>"Day-one CPT protects you."</strong> Risky and heavily
          scrutinized — not a lottery strategy.
        </li>
      </ul>

      <h2>Methodology: How We Analyze H-1B Data</h2>
      <p>
        VisaTalentUSA's lottery analysis is built on the U.S. Department of
        Labor's official Labor Condition Application (LCA) disclosure data —
        1,532,089 H-1B records across FY2024–FY2026 — normalized through an
        open-source pipeline. We track the top 1,000 H-1B employers by filing
        volume, their DOL LCA certification rates, prevailing wage levels, and
        worksite geography. Selection-rate figures cited above come from
        USCIS's published cap-season reports.
      </p>
      <p>
        <Link href="/about" className="text-blue-700 underline underline-offset-2">
          Learn about our methodology
        </Link>{" "}
        and explore{" "}
        <Link href="/sponsors" className="text-blue-700 underline underline-offset-2">
          all 1,000 top H-1B sponsors
        </Link>
        .
      </p>

      <h2>Sources</h2>
      <ul>
        <li>U.S. Citizenship and Immigration Services — H-1B Electronic Registration Process</li>
        <li>U.S. Citizenship and Immigration Services — FY2026 H-1B Cap Season Statistics</li>
        <li>U.S. Department of Labor — LCA Disclosure Data (FY2024–FY2026)</li>
        <li>Federal Register — H-1B Registration Requirement</li>
      </ul>
    </>
  );
}
