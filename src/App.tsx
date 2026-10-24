type Highlight = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

type Experience = {
  period: string;
  role: string;
  company: string;
  detail: string;
};

type Initiative = {
  title: string;
  client: string;
  duration: string;
  responsibilities: string[];
};

type SkillCategory = {
  title: string;
  items: string;
};

const highlights: Highlight[] = [
  {
    number: "01",
    title: "Retail Banker Enablement Platform · Westpac",
    description:
      "Engineered a banker-facing platform that surfaces pipeline status, appointment schedules, and complaint workflows in a single experience, improving service responsiveness. Delivered as part of a critical uplift program migrating legacy banker journeys to Westpac's strategic modern technology stack.",
    tags: ["React", "Node.js", "Retail Banking", "Legacy Modernization"],
    href: "https://au.linkedin.com/in/ronit-rajesh-kapoor",
  },
  {
    number: "02",
    title: "Strategic Payment Gateway Migration · EY",
    description:
      "Led migration from heritage to strategic gateways, onboarded multiple brands, and drove architecture and delivery for dual BFF systems (REST + GraphQL) and payment orchestration.",
    tags: ["Payments", "NestJS", "GraphQL", "Microfrontends"],
    href: "https://au.linkedin.com/in/ronit-rajesh-kapoor",
  },
  {
    number: "03",
    title: "AI Requirements-to-Testing POC · EY",
    description:
      "Created an AI workflow using n8n and Confluence to generate acceptance criteria and Playwright test cases, reducing manual effort and improving traceability.",
    tags: ["n8n", "Playwright", "Confluence", "AI Delivery"],
    href: "https://au.linkedin.com/in/ronit-rajesh-kapoor",
  },
];

const experience: Experience[] = [
  {
    period: "Mar 2026 — Present",
    role: "Software Engineer",
    company: "Westpac Australia · Retail Banking",
    detail:
      "Full-stack engineering for digital transformation in retail banking, including integration of Westpac-hosted AI models, solution design, and productivity tooling with AMP Code, GitHub Copilot, and MCP integrations.",
  },
  {
    period: "Dec 2021 — Feb 2026",
    role: "Senior Consultant",
    company: "EY Australia · Emerging Digital Engineering Technology",
    detail:
      "Delivered cloud-native and payments solutions for financial services, government, and marketing clients using NestJS, Node.js, TypeScript, GraphQL, React, LaunchDarkly, and AWS.",
  },
  {
    period: "Sep 2021 — Dec 2021",
    role: "Cloud Solution Engineer",
    company: "Hostopia Australia",
    detail:
      "Designed AWS high-level solutions, built Terraform infrastructure, supported proposals, and produced technical runbooks and service documentation.",
  },
  {
    period: "Mar 2017 — Jul 2018",
    role: "Assistant Manager",
    company: "Reliance Jio Infocomm Ltd",
    detail:
      "Worked on SAP convergent charging applications, CRM-billing integrations, mediation systems, and automation testing in telecom platforms.",
  },
];

const initiatives: Initiative[] = [
  {
    title: "Senior Consultant",
    client: "Largest Australian Insurer",
    duration: "September 2023 — February 2026",
    responsibilities: [
      "Worked as a senior engineer migrating a heritage payment gateway to the new strategic payment platform.",
      "Oversaw onboarding of multiple brands to the new payment gateway solution.",
      "Served as development lead for offshore and onshore developers.",
      "Created technical documents, detailed designs, and release documentation.",
      "Partnered with teams to explore Generative AI technical solutions for client value.",
    ],
  },
  {
    title: "Senior Engineer / Development Lead",
    client: "SEEK",
    duration: "August 2022 — July 2023",
    responsibilities: [
      "Built a data tag library for production data load testing supporting the unification program.",
      "Developed regional data migration solutions from Asia to Australia.",
      "Collaborated with twelve client teams to deliver a phased release across three milestones.",
      "Implemented using AWS Lambda, DynamoDB, Node.js, Koa, TypeScript, and GraphQL.",
    ],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Engineering & Delivery",
    items:
      "Agile delivery, SDLC, stakeholder management, planning, estimation, risk and quality management, technical documentation",
  },
  {
    title: "Languages & Frameworks",
    items: "TypeScript, Node.js, React, GraphQL, REST APIs, SQL",
  },
  {
    title: "Cloud & DevOps",
    items:
      "AWS (EC2, S3, IAM, CloudFormation, CloudWatch, CloudTrail), Terraform, Kubernetes, Docker, Git, Bamboo, Bitbucket, Rancher",
  },
  {
    title: "AI & Productivity",
    items: "GitHub Copilot, Azure AI, AMP Code, MCP workflows",
  },
];

const credentials = [
  "SAFe Certified Scrum Master",
  "Azure AI-900 Certified",
  "GitHub Copilot Certification",
  "EY Badges: AI Bronze, Cloud Bronze, BCM Bronze",
];

const education = [
  "Macquarie University · Master's in Networking & Telecommunication (2018 — 2020)",
  "Mumbai University · Bachelor's in Electronics & Telecommunication (2013 — 2016)",
  "Shreeram Polytechnic · Diploma in Electronics & Telecommunication (2010 — 2013)",
];

const linkedinUrl = "https://www.linkedin.com/in/ronit-kapoor-a21516113";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0d0c] text-[#f1efe7]">
      <div className="page-grid pointer-events-none fixed inset-0 z-0" />

      <header className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a
          className="font-display text-xl tracking-[-0.04em]"
          href="#top"
          aria-label="Go to top"
        >
          RRK<span className="text-[#ff5b35]">.</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm text-[#aaa89f] sm:flex"
          aria-label="Primary navigation"
        >
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#experience">
            Experience
          </a>
          <a className="nav-link" href="#ambition">
            Ambition
          </a>
        </nav>

        <a
          className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:border-[#ff5b35] hover:text-[#ff5b35]"
          href="mailto:ronitkapoor878@gmail.com"
        >
          Contact
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-[1440px] items-end gap-12 px-5 pb-12 pt-20 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-12 lg:pb-16"
      >
        <div>
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#aaa89f]">
            <span className="size-2 rounded-full bg-[#7bea9f] shadow-[0_0_0_5px_rgba(123,234,159,0.08)]" />
            Software engineer · Sydney, Australia
          </div>

          <h1 className="font-display max-w-5xl text-[clamp(4.25rem,11vw,10.5rem)] leading-[0.82] tracking-[-0.075em]">
            I build secure
            <br />
            digital <span className="text-[#ff5b35]">platforms.</span>
            <br />
            And make them perform at scale.
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-[#aaa89f] sm:text-xl">
              I&apos;m Ronit Rajesh Kapoor, a results-oriented software engineer
              with end-to-end experience across retail banking, cloud
              engineering, payments, and AI-driven delivery.
            </p>
            <a
              className="group flex shrink-0 items-center gap-3 text-sm font-medium"
              href="#experience"
            >
              View my experience
              <span className="grid size-10 place-items-center rounded-full bg-[#f1efe7] text-[#0d0d0c] transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="profile-card relative hidden aspect-[4/5] overflow-hidden rounded-[2rem] border-2 border-[#0d0d0c] bg-[#c7ff5e] text-[#0d0d0c] shadow-[10px_10px_0_#ff5b35] lg:block">
          <div className="absolute -right-8 -top-8 size-32 rounded-full border-[22px] border-[#7257ff]" />
          <div className="font-display absolute inset-0 grid place-items-center text-8xl tracking-[-0.08em]">
            RRK
          </div>
          <div className="absolute left-5 top-6 -rotate-6 rounded-full bg-[#0d0d0c] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f1efe7]">
            React · Node.js · AWS
          </div>
          <div className="absolute bottom-6 left-6 text-xs font-semibold uppercase leading-relaxed tracking-[0.16em]">
            Engineer by title
            <br />
            Curious by default
          </div>
          <div className="absolute bottom-6 right-6 grid size-14 rotate-6 place-items-center rounded-xl bg-[#ff5b35] font-mono text-lg">
            {"</>"}
          </div>
        </div>
      </section>

      <div className="relative z-10 rotate-[-1deg] border-y-2 border-[#0d0d0c] bg-[#7257ff] py-4 text-[#f1efe7]">
        <div className="ticker-track font-mono text-xs font-medium uppercase tracking-[0.18em]">
          <span>
            React · TypeScript · Node.js · GraphQL · NestJS · AWS · Payments ·
            Retail Banking · MCP · AI · Terraform · React · TypeScript ·
            Node.js · GraphQL · NestJS · AWS · Payments · Retail Banking · MCP
            · AI · Terraform ·
          </span>
          <span aria-hidden="true">
            React · TypeScript · Node.js · GraphQL · NestJS · AWS · Payments ·
            Retail Banking · MCP · AI · Terraform · React · TypeScript ·
            Node.js · GraphQL · NestJS · AWS · Payments · Retail Banking · MCP
            · AI · Terraform ·
          </span>
        </div>
      </div>

      <section
        id="work"
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <div className="mb-14 flex items-end justify-between border-b border-white/15 pb-6">
          <div>
            <p className="eyebrow">Recent highlights</p>
            <h2 className="font-display mt-3 text-5xl tracking-[-0.05em] sm:text-7xl">
              Selected impact.
            </h2>
          </div>
          <span className="hidden text-sm text-[#77766f] sm:block">
            2022—2026
          </span>
        </div>

        <div>
          {highlights.map((project) => (
            <a
              key={project.title}
              className="project-row group grid gap-6 border-b border-white/15 py-9 sm:grid-cols-[56px_1fr_auto] sm:items-start lg:py-12"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-mono text-xs text-[#77766f]">
                /{project.number}
              </span>
              <div>
                <h3 className="font-display text-4xl tracking-[-0.04em] transition-colors group-hover:text-[#ff5b35] sm:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-[#aaa89f]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#aaa89f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="grid size-12 place-items-center rounded-full border border-white/15 transition-all group-hover:rotate-45 group-hover:border-[#ff5b35] group-hover:bg-[#ff5b35] group-hover:text-[#0d0d0c]">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="relative z-10 border-y border-white/15 bg-[#141412]"
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-16 px-5 py-28 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-40">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="font-display mt-4 max-w-md text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Delivery focused. Engineering driven.
            </h2>
            <p className="mt-7 max-w-sm leading-relaxed text-[#aaa89f]">
              Building scalable software and platform capabilities across
              banking, financial services, telecom, and client delivery.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-t border-white/15">
            {experience.map((item) => (
              <article
                className="grid gap-4 py-8 sm:grid-cols-[130px_1fr]"
                key={item.period}
              >
                <p className="font-mono text-xs text-[#77766f]">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-xl font-medium">{item.role}</h3>
                  <p className="mt-1 text-sm text-[#ff5b35]">{item.company}</p>
                  <p className="mt-4 max-w-xl leading-relaxed text-[#aaa89f]">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
        <div className="mb-14 border-b border-white/15 pb-6">
          <p className="eyebrow">Client engagements</p>
          <h2 className="font-display mt-3 text-5xl tracking-[-0.05em] sm:text-7xl">
            Delivery at scale.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {initiatives.map((initiative) => (
            <article
              className="rounded-3xl border border-white/15 bg-[#141412] p-7"
              key={`${initiative.client}-${initiative.title}`}
            >
              <h3 className="text-2xl font-semibold text-[#f1efe7]">
                {initiative.client}
              </h3>
              <p className="mt-1 text-sm text-[#ff5b35]">{initiative.title}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-[#77766f]">
                {initiative.duration}
              </p>
              <ul className="mt-4 space-y-2 leading-relaxed text-[#aaa89f]">
                {initiative.responsibilities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#f1efe7] text-[#0d0d0c]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">
            <div>
              <p className="eyebrow !text-[#55534d]">Credentials & education</p>
              <h2 className="font-display mt-4 text-5xl leading-none tracking-[-0.05em] sm:text-7xl">
                Always in beta.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#55534d]">
                Strong formal grounding in networking and telecommunications,
                paired with continuous upskilling in AI-enabled software
                engineering and cloud delivery.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#55534d]">
                {education.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((credential, index) => (
                <article
                  className={`credential-card min-h-44 rounded-3xl border-2 border-[#0d0d0c] p-6 ${
                    index === 0
                      ? "bg-[#c7ff5e]"
                      : index === 1
                        ? "bg-[#ff886e]"
                        : index === 2
                          ? "bg-[#ffd55e]"
                          : "bg-[#9f8cff]"
                  }`}
                  key={credential}
                >
                  <span className="font-mono text-xs">0{index + 1}</span>
                  <h3 className="mt-10 max-w-xs text-xl font-semibold leading-tight">
                    {credential}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="ambition"
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
      >
        <p className="eyebrow">Skills snapshot</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              className="rounded-3xl border border-white/15 bg-[#141412] p-7"
              key={category.title}
            >
              <h3 className="text-xl font-semibold text-[#f1efe7]">
                {category.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#aaa89f]">
                {category.items}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="relative z-10 bg-[#ff5b35] text-[#0d0d0c]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Thanks for stopping by.
          </p>
          <a
            className="font-display group mt-5 flex items-end justify-between border-b-2 border-[#0d0d0c] pb-5 text-[clamp(3.2rem,9vw,8rem)] leading-none tracking-[-0.065em]"
            href="mailto:ronitkapoor878@gmail.com"
          >
            Let&apos;s stay connected.
            <span className="mb-2 hidden transition-transform group-hover:translate-x-2 sm:block">
              ↗
            </span>
          </a>
          <div className="mt-10 flex flex-col gap-5 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
            <p>
              Built by Ronit — shipping features and fixing “quick bugs” since
              day one.
            </p>
            <div className="flex gap-6">
              <a
                className="underline-offset-4 hover:underline"
                href="tel:+61449010803"
                target="_blank"
                rel="noreferrer"
              >
                +61 449 010 803
              </a>
              <a
                className="underline-offset-4 hover:underline"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="underline-offset-4 hover:underline" href="#top">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
