import Link from "next/link";

export default function H1BLCAContent() {
  return (
    <>
      <p className="lead">
        Before any H-1B petition reaches USCIS, the employer must first get
        a Labor Condition Application (LCA) certified by the U.S.
        Department of Labor. The LCA is not the visa, and it is not the
        petition — it is the employer&apos;s sworn filing that the job
        pays the required wage, that working conditions will not be
        undercut, that no strike or lockout is underway, and that the
        existing workforce has been told about the filing. This guide is
        the employer playbook for that filing, end to end: choosing the
        occupation and wage, completing ETA Form 9035/9035E in the DOL
        FLAG system, handling every worksite case, running the posting
        notice correctly, surviving a denial, and keeping the file the
        law requires afterward. For what the wage levels mean and how to
        read LCA salary data, see the{" "}
        <Link href="/blog/h1b-salary-database" className="underline text-blue-600">
          H-1B Salary Database Guide
        </Link>{" "}
        — this guide covers the filing itself, not the salary tables.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the H-1B LCA at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Form:</strong> ETA Form 9035/9035E, filed
            electronically through the DOL Foreign Labor Application
            Gateway (FLAG) system.
          </li>
          <li>
            <strong>Review:</strong> DOL reviews within seven working
            days — for completeness and obvious errors only, not for the
            merits of the job or the worker.
          </li>
          <li>
            <strong>Timing:</strong> an LCA must not be submitted more
            than six months before the employment start date.
          </li>
          <li>
            <strong>Validity:</strong> a certified H-1B LCA is valid for
            up to three years — the end date on the LCA controls.
          </li>
          <li>
            <strong>Notice:</strong> workers must be told on or within
            30 days before the LCA is filed, and the notice stays up for
            10 days.
          </li>
          <li>
            <strong>Certified does not mean approved:</strong> a
            certified LCA only lets the employer file the petition with
            USCIS. USCIS decides the petition separately.
          </li>
        </ul>
      </div>

      <h2>What an LCA is, and why it comes first</h2>
      <p>
        A Labor Condition Application is the employer&apos;s application
        to the Department of Labor&apos;s Office of Foreign Labor
        Certification, filed before any H-1B petition. It covers
        specialty-occupation workers and fashion models of distinguished
        merit and ability, and the same form serves the H-1B, H-1B1, and
        E-3 programs. The H-1B process has two doors, in order: first
        DOL certifies the LCA, then USCIS adjudicates Form I-129, the
        petition. USCIS requires evidence of a certified LCA with the
        petition — a petition filed without one cannot proceed.
      </p>
      <p>
        The LCA is an attestation-based filing. That is the single most
        important thing to understand about it. DOL does not approve the
        job, the worker, or the company&apos;s hiring decision. It checks
        that the form is complete and that nothing on it is obviously
        inaccurate, and the employer attests that everything on it is
        true. The burden of proving the truth of the filing sits with the
        employer — which is exactly why a sloppy LCA comes back later as
        a petition problem or a DOL investigation, even though DOL
        certified it in a week.
      </p>

      <h2>The four attestations</h2>
      <p>
        Every LCA carries four sworn promises. They are not boilerplate;
        each one creates a continuing obligation that outlasts the
        filing itself.
      </p>
      <table>
        <thead>
          <tr>
            <th>Attestation</th>
            <th>What the employer promises</th>
            <th>Where it bites later</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wages</td>
            <td>
              Pay at least the required wage: the higher of the actual
              wage paid to similarly employed workers, or the prevailing
              wage for the occupation in the area of employment.
            </td>
            <td>
              Payroll must match the LCA wage from day one; underpayment
              is a wage violation, not a paperwork slip.
            </td>
          </tr>
          <tr>
            <td>Working conditions</td>
            <td>
              Employing the H-1B worker will not adversely affect the
              working conditions of similarly employed U.S. workers.
            </td>
            <td>
              Hours, shifts, and benefits cannot be quietly worse for
              the H-1B worker or for the workers around them.
            </td>
          </tr>
          <tr>
            <td>No strike or lockout</td>
            <td>
              No strike, lockout, or work stoppage is underway in the
              occupational classification at the worksite when the LCA
              is filed.
            </td>
            <td>
              The employer cannot place an H-1B worker at a worksite
              where such a dispute later arises in the same
              classification.
            </td>
          </tr>
          <tr>
            <td>Notice</td>
            <td>
              The existing workforce has been told about the filing,
              through the union or by posting, as the regulation
              requires.
            </td>
            <td>
              A defective or missing notice is one of the easiest
              violations for DOL to find — and the hardest to fix after
              the fact.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Step 1: get the wage right before you touch the form</h2>
      <p>
        The wage decision comes before the filing, and it is where most
        LCA trouble starts. Two inputs decide it: the occupation and the
        place of work.
      </p>
      <p>
        First, classify the job honestly. The Standard Occupational
        Classification (SOC) code must match the work the employee will
        actually do, not the internal job title and not the most
        convenient code. A software role described as analyst work, or an
        analyst role dressed up as engineering, will produce the wrong
        prevailing wage — and a wage that does not match the real job is
        the classic reason an LCA draws scrutiny later, even if DOL
        certified it.
      </p>
      <p>
        Second, set the required wage. It is the higher of two figures:
        the actual wage the employer pays other workers with similar
        experience and qualifications doing the same job, or the
        prevailing wage for that occupation in the area of intended
        employment — roughly, the metropolitan area or normal commuting
        distance around the worksite. DOL encourages employers to obtain
        a prevailing wage from the National Prevailing Wage Center, but
        it does not require it; employers may also use the OFLC wage
        data for the occupation and area. The wage level (I–IV) that
        comes out of this step is covered in full, with worked examples,
        in the{" "}
        <Link href="/blog/h1b-salary-database" className="underline text-blue-600">
          H-1B Salary Database Guide
        </Link>
        . What matters for the filing is this: the wage on the LCA must
        be at least the required wage, for the right occupation, in the
        right area. Get any of those three wrong and the rest of the
        filing is built on sand.
      </p>
      <p>
        One timing rule belongs here, not later: an LCA must not be
        submitted more than six months before the employment start date.
        Filing early does not buy a head start — it buys a rejection.
      </p>

      <h2>Step 2: file in FLAG, field by field</h2>
      <p>
        LCAs are filed electronically through the FLAG system. The only
        exceptions are employers with physical disabilities or without
        internet access, who must first get special permission from the
        OFLC Administrator to file the paper Form 9035 by mail. For
        everyone else, the workflow is the same six steps, and the order
        matters — the notice step cannot be skipped or done out of
        sequence.
      </p>
      <figure>
        <svg
          role="img"
          viewBox="0 0 720 400"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            The six-step H-1B LCA filing workflow: wage check, FLAG
            filing, posting notice, certification, petition, and Public
            Access File
          </title>
          <rect x="20" y="30" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="60" cy="70" r="20" fill="#1d4ed8" />
          <text x="60" y="77" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">1</text>
          <text x="90" y="66" fontSize="16" fontWeight="700" fill="#0f172a">Wage check</text>
          <text x="90" y="90" fontSize="13" fill="#334155">SOC code +</text>
          <text x="90" y="108" fontSize="13" fill="#334155">prevailing wage</text>
          <rect x="260" y="30" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="300" cy="70" r="20" fill="#1d4ed8" />
          <text x="300" y="77" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">2</text>
          <text x="330" y="66" fontSize="16" fontWeight="700" fill="#0f172a">FLAG filing</text>
          <text x="330" y="90" fontSize="13" fill="#334155">ETA-9035 /</text>
          <text x="330" y="108" fontSize="13" fill="#334155">9035E submitted</text>
          <rect x="500" y="30" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="540" cy="70" r="20" fill="#1d4ed8" />
          <text x="540" y="77" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">3</text>
          <text x="570" y="66" fontSize="16" fontWeight="700" fill="#0f172a">Posting notice</text>
          <text x="570" y="90" fontSize="13" fill="#334155">30-day window,</text>
          <text x="570" y="108" fontSize="13" fill="#334155">10 days posted</text>
          <rect x="500" y="220" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="540" cy="260" r="20" fill="#1d4ed8" />
          <text x="540" y="267" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">4</text>
          <text x="570" y="256" fontSize="16" fontWeight="700" fill="#0f172a">Certification</text>
          <text x="570" y="280" fontSize="13" fill="#334155">7 working days,</text>
          <text x="570" y="298" fontSize="13" fill="#334155">DOL review</text>
          <rect x="260" y="220" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="300" cy="260" r="20" fill="#1d4ed8" />
          <text x="300" y="267" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">5</text>
          <text x="330" y="256" fontSize="16" fontWeight="700" fill="#0f172a">Petition</text>
          <text x="330" y="280" fontSize="13" fill="#334155">Form I-129</text>
          <text x="330" y="298" fontSize="13" fill="#334155">to USCIS</text>
          <rect x="20" y="220" width="200" height="130" rx="12" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2" />
          <circle cx="60" cy="260" r="20" fill="#1d4ed8" />
          <text x="60" y="267" textAnchor="middle" fontSize="18" fontWeight="700" fill="#ffffff">6</text>
          <text x="90" y="256" fontSize="16" fontWeight="700" fill="#0f172a">Public Access</text>
          <text x="90" y="276" fontSize="16" fontWeight="700" fill="#0f172a">File</text>
          <text x="90" y="298" fontSize="13" fill="#334155">Keep + make available</text>
          <path d="M 224 95 H 252" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M 252 95 l -10 -5 v 10 z" fill="#1d4ed8" />
          <path d="M 464 95 H 492" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M 492 95 l -10 -5 v 10 z" fill="#1d4ed8" />
          <path d="M 600 164 V 212" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M 600 212 l -5 -10 h 10 z" fill="#1d4ed8" />
          <path d="M 492 285 H 464" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M 464 285 l 10 -5 v 10 z" fill="#1d4ed8" />
          <path d="M 252 285 H 224" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M 224 285 l 10 -5 v 10 z" fill="#1d4ed8" />
        </svg>
        <figcaption>
          The six-step H-1B LCA workflow: wage check, FLAG filing,
          posting notice, certification, petition, and Public Access
          File. The notice step runs before or alongside the filing —
          never after certification.
        </figcaption>
      </figure>

      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>Employer information.</strong> The legal employer
          name and address as registered — the petitioner, not the
          client, files the LCA, even for third-party placements.
        </li>
        <li>
          <strong>Occupation and SOC code.</strong> The job title and
          the SOC code that matches the actual duties, plus the
          full-time or part-time basis and the hours or hours range.
        </li>
        <li>
          <strong>Wage.</strong> The offered wage (at least the
          required wage from Step 1), the prevailing wage, and its
          source. A wage below the required wage is a defective filing
          on its face.
        </li>
        <li>
          <strong>Employment period.</strong> The start and end dates
          of intended employment. The LCA cannot be filed more than six
          months before the start date, and the employment period
          cannot run past the LCA&apos;s validity.
        </li>
        <li>
          <strong>Worksites.</strong> Every physical location where
          the work will actually be performed — city, state, and
          county or postal area as the form requires. This is the
          field employers most often under-fill, and it is the subject
          of the next section.
        </li>
        <li>
          <strong>Attestations and submission.</strong> The four
          attestations, the notice confirmation, and the employer&apos;s
          signature. Once submitted, the employer can track status and
          retrieve the certified LCA in FLAG at any time.
        </li>
      </ol>
      <p>
        DOL reviews within seven working days for completeness and
        obvious errors or inaccuracies. Read that sentence twice: the
        review is deliberately narrow. DOL does not verify that the job
        is a specialty occupation, that the worker is qualified, or
        that the wage is genuinely the market rate. A certified LCA is
        proof that the form passed a completeness check — not that the
        underlying case is strong. USCIS makes the substantive decision
        later, and it reads the LCA closely when it does.
      </p>

      <h2>Every worksite case, decided</h2>
      <p>
        The worksite section is where good filings separate from
        expensive ones. The rule underneath all of these cases is one
        sentence: the LCA must cover the area of intended employment
        where the work is actually performed, and the wage must match
        that area.
      </p>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>What to file</th>
            <th>Notice still required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single worksite</td>
            <td>One LCA listing that worksite and its wage.</td>
            <td>Yes — at that worksite, before filing.</td>
          </tr>
          <tr>
            <td>Multiple worksites</td>
            <td>
              List every worksite on the LCA, each with its own
              prevailing wage where areas differ.
            </td>
            <td>Yes — at each worksite.</td>
          </tr>
          <tr>
            <td>Remote or home worksite</td>
            <td>
              The home address is a worksite and must be listed, with
              the wage for that area.
            </td>
            <td>
              Yes — electronic notice to employees in the same
              classification satisfies it; a home office does not
              excuse notice.
            </td>
          </tr>
          <tr>
            <td>Third-party client site</td>
            <td>
              List the client site as the worksite. The employer
              files, not the client, and stays responsible for wage
              and conditions.
            </td>
            <td>Yes — at the client site, or electronically to the
            affected classification.</td>
          </tr>
          <tr>
            <td>Move within the same area</td>
            <td>
              No new LCA, if the new site is within the same area of
              intended employment and the job terms are unchanged.
            </td>
            <td>
              Yes — post the existing LCA notice at the new site.
            </td>
          </tr>
          <tr>
            <td>Move outside the area</td>
            <td>
              New LCA for the new area, plus an amended petition
              before the move (see the amendment section).
            </td>
            <td>Yes — full notice for the new filing.</td>
          </tr>
          <tr>
            <td>Short-term placement</td>
            <td>
              No new LCA, within strict day limits (see below) — and
              only for H-1B, not H-1B1 or E-3.
            </td>
            <td>
              Yes — notice at the short-term site as described below.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Short-term placement deserves its own paragraph because it is
        the most misused exception in the program. Under the regulation,
        an employer may place an H-1B worker at a worksite outside the
        LCA&apos;s listed area without a new LCA for up to 30 workdays
        in a one-year period. The limit stretches to 60 workdays only
        where the worker keeps a dedicated workstation at the permanent
        site, spends substantial time there during the year, and lives
        near the permanent site rather than the short-term one. During
        any short-term placement the employer must keep paying at least
        the required wage from the permanent worksite&apos;s LCA and
        must cover the worker&apos;s actual lodging, travel, and meal
        costs for every day of the placement — workdays and non-workdays
        alike — without deducting them from pay. The one-year period is
        the calendar year or the employer&apos;s fiscal year, whichever
        the employer chooses, and a workday is any day the worker
        performs any work in the short-term area. Past the limit, there
        is no grace: a new LCA and an amended petition are required
        before work continues there. And the exception cannot be used
        in an area where the employer already holds a certified LCA for
        the occupation.
      </p>

      <h2>Posting notice, in full</h2>
      <p>
        The notice requirement is the fourth attestation, and it is
        also the one employers most often treat as an afterthought.
        Treat it as a filing of its own, with its own deadline, content
        rules, and evidence file.
      </p>
      <h3>Which route applies</h3>
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>How it works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Union (bargaining representative exists)</td>
            <td>
              Give notice to the bargaining representative for the
              occupational classification in the area of employment,
              with the number of workers sought, the classification,
              the wages offered, the employment period, and the
              locations.
            </td>
          </tr>
          <tr>
            <td>Hard-copy posting (no union)</td>
            <td>
              Post the notice in at least two conspicuous locations at
              each place of employment where any H-1B worker will be
              employed — whether the employer or someone else owns or
              operates the site. It must be large and visible enough
              for workers in the classification to easily see and read
              it.
            </td>
          </tr>
          <tr>
            <td>Electronic notice (no union)</td>
            <td>
              Use a means ordinarily used to tell employees about job
              vacancies or promotions: an intranet or electronic
              bulletin board, a newsletter, or email. Individual
              direct notice, such as a single email to each affected
              employee, counts once and does not need a 10-day run.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>What the notice must say</h3>
      <p>
        Whether union, hard-copy, or electronic, the notice must state
        that H-1B workers are sought, how many, in which occupational
        classification, at what wages offered, for what employment
        period, and at which locations — plus that the LCA is available
        for public inspection at the employer&apos;s principal place of
        business in the U.S. or at the worksite, and the complaint
        statement: that complaints alleging misrepresentation of
        material facts in the LCA, or failure to comply with its terms,
        may be filed with any office of the Wage and Hour Division of
        the Department of Labor.
      </p>
      <figure>
        <svg
          role="img"
          viewBox="0 0 720 280"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>
            Posting-notice timeline: notice window opens up to 30 days
            before filing, notice stays up 10 days, then certification
            and the petition follow
          </title>
          <line x1="60" y1="120" x2="660" y2="120" stroke="#94a3b8" strokeWidth="2" />
          <line x1="60" y1="120" x2="300" y2="120" stroke="#1d4ed8" strokeWidth="6" />
          <line x1="300" y1="120" x2="480" y2="120" stroke="#0ea5e9" strokeWidth="6" />
          <circle cx="60" cy="120" r="10" fill="#1d4ed8" />
          <circle cx="300" cy="120" r="10" fill="#0f172a" />
          <circle cx="480" cy="120" r="10" fill="#1d4ed8" />
          <circle cx="640" cy="120" r="10" fill="#0f172a" />
          <text x="60" y="70" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">Window opens</text>
          <text x="60" y="90" textAnchor="middle" fontSize="13" fill="#334155">Up to 30 days</text>
          <text x="60" y="108" textAnchor="middle" fontSize="13" fill="#334155">before filing</text>
          <text x="300" y="70" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">File LCA</text>
          <text x="300" y="90" textAnchor="middle" fontSize="13" fill="#334155">ETA-9035 /</text>
          <text x="300" y="108" textAnchor="middle" fontSize="13" fill="#334155">9035E in FLAG</text>
          <text x="480" y="70" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">Notice: 10 days</text>
          <text x="480" y="90" textAnchor="middle" fontSize="13" fill="#334155">Posted or sent,</text>
          <text x="480" y="108" textAnchor="middle" fontSize="13" fill="#334155">proof kept</text>
          <text x="640" y="70" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">Certified</text>
          <text x="640" y="90" textAnchor="middle" fontSize="13" fill="#334155">Then Form I-129</text>
          <text x="640" y="108" textAnchor="middle" fontSize="13" fill="#334155">to USCIS</text>
          <text x="360" y="180" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">New worksite not on the LCA?</text>
          <text x="360" y="202" textAnchor="middle" fontSize="13" fill="#334155">Give notice at the new site on or before the worker&apos;s first day there.</text>
          <text x="360" y="224" textAnchor="middle" fontSize="13" fill="#334155">Direct email notice counts once; posted or bulletin-board notice runs 10 days.</text>
        </svg>
        <figcaption>
          Posting-notice timeline: the notice window opens up to 30 days
          before filing, the notice stays up for 10 days, and only then
          does certification support the petition. A worksite added
          later gets its own notice before work starts there.
        </figcaption>
      </figure>
      <h3>Timing, proof, and what goes wrong</h3>
      <p>
        The notice must be given on or within 30 days before the LCA is
        filed. A notice posted after filing is late, and a notice posted
        two months early is stale — both fail the attestation. The
        posted or bulletin-board notice runs for 10 days. Keep proof as
        if DOL will ask for it, because DOL does: the dates the notice
        ran, the locations or addresses it was sent to, a copy of the
        notice itself, and — for a union route — evidence the
        representative received it. That proof goes in the Public Access
        File.
      </p>
      <p>
        Two failure modes deserve emphasis. First, a notice at the
        wrong site: notice must go to workers in the occupational
        classification at the place of employment, not to a general
        company bulletin nobody in that classification reads. Second, a
        new worksite added after filing: if a worker is later placed at
        a site the LCA never contemplated, notice must be given to
        workers at the new site on or before the day the worker starts
        there. Employers that move workers first and post later have
        already broken the sequence.
      </p>

      <h2>Certification, denial, and correction</h2>
      <p>
        Three outcomes are possible, and only one lets the case move
        forward.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Certified.</strong> DOL found the form complete with
          no obvious inaccuracies. The employer can now file Form I-129
          with USCIS, with the certified LCA as evidence. Certification
          is not an approval of the job or the worker.
        </li>
        <li>
          <strong>Denied or returned for errors.</strong> The form was
          incomplete or contained an obvious inaccuracy. There is no
          appeal that fixes a bad form — the remedy is a corrected
          filing, which restarts the seven-working-day review clock.
          Budget for that restart in any start-date planning.
        </li>
        <li>
          <strong>Certified, then challenged.</strong> A certified LCA
          can still draw a complaint or an investigation if the
          attestations were false — a wage below the required wage, a
          worksite never listed, a notice never given. Certification
          never cures a false attestation.
        </li>
      </ul>
      <p>
        The denial causes practitioners see most often are
        unglamorous, which is good news — they are all preventable:
        a wage below the required wage for the area; a SOC code that
        does not match the actual duties; a worksite county that does
        not match the wage area; a worksite missing from the form
        entirely; an employment period that starts within the
        six-month window problem (filed too early) or runs past what
        the LCA can cover; and a notice step skipped or documented
        nowhere. A denied LCA blocks the petition outright: without a
        certified LCA, there is no I-129 to file.
      </p>

      <h2>Validity and amendment triggers</h2>
      <p>
        A certified H-1B LCA is valid for up to three years — but the
        end date written on the LCA controls, and the employment period
        in the petition cannot run past it. When the job changes, the
        question is always the same: does this change need a new LCA,
        an amended petition, both, or neither?
      </p>
      <table>
        <thead>
          <tr>
            <th>Change</th>
            <th>What is required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Worksite move outside the area of intended employment</td>
            <td>
              New LCA for the new area, plus an amended or new petition
              filed before the move. This is a material change, and the
              worker can generally begin at the new location once the
              amended petition is filed, without waiting for approval.
            </td>
          </tr>
          <tr>
            <td>Worksite move within the same area</td>
            <td>
              No new LCA and no amendment, if the job terms are
              unchanged — but post the existing LCA notice at the new
              site.
            </td>
          </tr>
          <tr>
            <td>Substantial change in duties or occupation</td>
            <td>
              Amended petition, and a new LCA if the occupation or wage
              basis changes. A title change alone, with the same actual
              work, usually is not material — the test is the real
              duties, not the label.
            </td>
          </tr>
          <tr>
            <td>Full-time to part-time, or the reverse</td>
            <td>
              Generally an amended petition, because hours change the
              wage obligation and the terms USCIS approved.
            </td>
          </tr>
          <tr>
            <td>Short-term placement (30/60 workdays)</td>
            <td>
              Neither a new LCA nor an amendment, within the day limits
              and conditions above — but notice at the short-term site
              still applies.
            </td>
          </tr>
          <tr>
            <td>Pay raise within the same job and area</td>
            <td>
              No new LCA is needed to pay more than the LCA wage; the
              LCA sets a floor, not a ceiling.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The governing rule is that an amended or new petition must be
        filed before a material change takes effect, with a new
        certified LCA where the change requires one. Filing after the
        worker has already moved or already changed roles is the
        failure mode that turns an ordinary update into a compliance
        case. Note the sequence carefully: the new LCA must be certified
        before the amended petition can be filed — the amendment
        depends on the LCA, just as the original petition did.
      </p>

      <h2>LCA vs petition: two decisions, not one</h2>
      <p>
        Confusing the LCA with the petition is the root of most
        misunderstandings about this process. They are decided by
        different agencies, on different questions.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>LCA (DOL)</th>
            <th>Petition (USCIS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Question asked</td>
            <td>
              Is the form complete, and are the wage, conditions, and
              notice attestations in order?
            </td>
            <td>
              Is this a specialty occupation, is the worker qualified,
              and is the employment real and as described?
            </td>
          </tr>
          <tr>
            <td>Review depth</td>
            <td>
              Completeness and obvious errors, within seven working
              days.
            </td>
            <td>
              Full adjudication, including evidence and, where needed,
              a request for evidence (RFE).
            </td>
          </tr>
          <tr>
            <td>What it grants</td>
            <td>
              Nothing by itself — no status, no work authorization.
            </td>
            <td>
              If approved, the classification that lets the worker
              work and seek status.
            </td>
          </tr>
          <tr>
            <td>How LCA errors surface</td>
            <td>
              As a complaint or investigation into the attestations.
            </td>
            <td>
              As an RFE or denial when the petition does not match the
              LCA — wage, worksite, or duties that drifted from the
              certified filing.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        The practical consequence: never treat a fast LCA certification
        as a signal that the petition is safe. The fastest LCAs are
        often the ones nobody read carefully — and USCIS reads them
        carefully later.
      </p>

      <h2>After certification: what the employer still owes</h2>
      <p>
        Certification is the middle of the employer&apos;s obligations,
        not the end. Three duties run for the life of the employment.
      </p>
      <h3>Keep the Public Access File</h3>
      <p>
        The employer must maintain a Public Access File containing the
        certified LCA, the worker&apos;s rate of pay, a description of
        the actual wage system, the prevailing wage rate and its
        source, documentation of the notice given to workers, and
        evidence that the H-1B worker received a copy of the LCA. The
        file is kept at the employer&apos;s principal place of business
        in the U.S. or at the worksite, and it must be made available
        to any interested party who asks. A file assembled after a
        complaint arrives is not a file — build it as the case
        proceeds, and keep it for the full retention period the
        regulation sets.
      </p>
      <h3>Give the worker a copy</h3>
      <p>
        The employer must give a copy of the LCA to each H-1B worker no
        later than the date the worker reports to work. This is a
        small step with an outsized audit footprint: it is one of the
        first things DOL checks, and its absence is easy to prove.
      </p>
      <h3>Live by the attestations</h3>
      <p>
        Pay at least the required wage for every pay period, at every
        worksite on the LCA. Do not place the worker at a worksite
        where a strike or lockout is underway in the same occupational
        classification. Do not let duties, hours, or worksites drift
        from the certified filing without going through the amendment
        analysis above. And remember the complaint route printed on
        every notice: any interested party can bring an LCA complaint
        to the Wage and Hour Division, and a willful violation can
        bring back wages, civil penalties, and debarment from the
        program.
      </p>

      <h2>Common mistakes, fixed</h2>
      <table>
        <thead>
          <tr>
            <th>Mistake</th>
            <th>Why it hurts</th>
            <th>Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wrong SOC code</td>
            <td>Wrong prevailing wage; petition mismatch on duties.</td>
            <td>
              Classify from actual duties, not the internal title;
              re-check the code before every filing.
            </td>
          </tr>
          <tr>
            <td>Wage below the required wage</td>
            <td>Defective on its face; wage liability from day one.</td>
            <td>
              Take the higher of actual wage and prevailing wage for
              the correct area, every time.
            </td>
          </tr>
          <tr>
            <td>Worksite county vs wage area mismatch</td>
            <td>
              The wage belongs to a different area than the work.
            </td>
            <td>
              Match each worksite to its own area and wage before
              submitting.
            </td>
          </tr>
          <tr>
            <td>Missing worksite</td>
            <td>
              Work at an unlisted site is uncovered work.
            </td>
            <td>
              List every physical site, including home offices and
              client sites; use the amendment or short-term rules for
              later moves.
            </td>
          </tr>
          <tr>
            <td>Notice posted late, or nowhere provable</td>
            <td>Failed attestation; complaint-ready evidence gap.</td>
            <td>
              Run notice inside the 30-day window, keep dates,
              locations, and copies in the Public Access File.
            </td>
          </tr>
          <tr>
            <td>Filed more than six months early</td>
            <td>Rejected timing, lost weeks.</td>
            <td>Count back six months from the start date and file
            inside it.</td>
          </tr>
          <tr>
            <td>Public Access File built late or thin</td>
            <td>
              The first thing an investigation asks for is the thing
              you do not have.
            </td>
            <td>
              Open the file when the LCA is filed; add each document
              as it is created.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Frequently asked questions</h2>

      <h3>How long does LCA certification take?</h3>
      <p>
        DOL reviews LCAs within seven working days for completeness and
        obvious errors or inaccuracies. That is a review deadline, not
        a merits decision — and a filing returned for errors restarts
        the clock when the corrected version is submitted.
      </p>

      <h3>How long is a certified LCA valid?</h3>
      <p>
        A certified H-1B LCA is valid for up to three years, but the
        end date written on the LCA controls, and the employment period
        in the petition cannot run past it. A new period of employment
        needs a new LCA.
      </p>

      <h3>What is the difference between the LCA and the H-1B petition?</h3>
      <p>
        The LCA is the employer&apos;s attestation filing with the
        Department of Labor, covering wages, working conditions, no
        strike or lockout, and notice. The petition is Form I-129 filed
        with USCIS, which decides whether the job is a specialty
        occupation and the worker is qualified. The certified LCA must
        come first; the petition cannot be filed without it.
      </p>

      <h3>Does a certified LCA guarantee USCIS approval?</h3>
      <p>
        No. Certification means only that DOL found the form complete
        with no obvious inaccuracies. USCIS adjudicates the petition
        separately and can issue a request for evidence or deny it —
        including where the petition does not match the certified LCA
        on wage, worksite, or duties.
      </p>

      <h3>What must the posting notice say, and how long must it stay up?</h3>
      <p>
        The notice must state that H-1B workers are sought, how many,
        in which classification, at what wages, for what period, and at
        which locations, plus that the LCA is available for public
        inspection and the Wage and Hour Division complaint statement.
        It must be given on or within 30 days before filing. A posted
        or bulletin-board notice runs for 10 days; individual direct
        notice, such as a single email to each affected employee,
        counts once. Union workplaces give notice to the bargaining
        representative instead.
      </p>

      <h3>Do I need a new LCA if the worker moves to a new worksite?</h3>
      <p>
        It depends on the move. Within the same area of intended
        employment, with unchanged job terms, no new LCA is needed —
        but post the existing LCA notice at the new site. Outside the
        area, a new LCA plus an amended petition filed before the move
        are required. Short-term placements outside the area need
        neither, but only up to 30 workdays in a year (60 where the
        worker keeps a workstation and ties at the permanent site), with
        the required wage and travel and lodging costs covered.
      </p>

      <h3>What goes in the Public Access File?</h3>
      <p>
        The certified LCA, the worker&apos;s rate of pay, a description
        of the actual wage system, the prevailing wage rate and its
        source, documentation of the notice given to workers, and
        evidence that the H-1B worker received a copy of the LCA. Keep
        it at the principal U.S. office or the worksite, make it
        available to any interested party who asks, and retain it for
        the full period the regulation sets.
      </p>

      <h3>What happens if the LCA is denied?</h3>
      <p>
        The petition cannot proceed without a certified LCA, so a
        denial stops the case at DOL. The fix is a corrected filing
        addressing the error — wage, occupation, worksite, or notice —
        which restarts the seven-working-day review. Common causes are
        a wage below the required wage, a SOC code that does not match
        the duties, and a worksite missing or mismatched to its wage
        area.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://flag.dol.gov/node/4051"
            className="underline text-blue-600"
          >
            U.S. Department of Labor, Foreign Labor Application Gateway
            — Labor Condition Application (LCA) Specialty Occupations
            with the H-1B, H-1B1 and E-3 Programs
          </a>
        </li>
        <li>
          <a
            href="https://www.dol.gov/agencies/eta/foreign-labor/programs/h-1b"
            className="underline text-blue-600"
          >
            U.S. Department of Labor, Employment and Training
            Administration — H-1B, H-1B1 and E-3 Specialty (Professional)
            Workers
          </a>
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            className="underline text-blue-600"
          >
            USCIS — H-1B Specialty Occupations (petition process: LCA
            certification precedes Form I-129)
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-20/chapter-V/part-655/subpart-H/section-655.734"
            className="underline text-blue-600"
          >
            20 CFR Part 655, Subpart H — Labor Condition Applications
            (eCFR), including § 655.734 (notice) and § 655.735
            (short-term placement)
          </a>
        </li>
        <li>
          <a
            href="https://webarchive.library.unt.edu/web/20170118211533mp_/https://www.dol.gov/whd/regs/compliance/FactSheet62/whdfs62M.pdf"
            className="underline text-blue-600"
          >
            U.S. Department of Labor, Fact Sheet #62M — What are an
            H-1B employer&apos;s notification requirements? (August
            2009, archived)
          </a>
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        Published November 2, 2026. Regulatory statements checked
        against the official sources above on November 2, 2026. This
        guide is for informational purposes only and is not legal
        advice; consult a qualified immigration attorney for advice
        about a specific case.
      </p>
    </>
  );
}
