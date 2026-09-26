// ---------------------------------------------------------------------------
// All site content lives in this one file. Every fact below comes from
// Bane's CV (public/Bane-Avramovic-CV.pdf) and his certificates — edit here
// and the whole site updates.
// ---------------------------------------------------------------------------

export const BASE_PATH = "/cv";
export const SITE_URL = "https://avramovicbane.github.io/cv";

export const site = {
  name: "Bane Avramović",
  firstName: "Bane",
  initials: "BA",
  role: "Product Owner",
  roleDetail: "AI products for financial services",
  location: "Belgrade, Serbia",
  email: "bane.avramovic@gmail.com",
  phone: "+381 60 577 8797",
  cvFile: `${BASE_PATH}/Bane-Avramovic-CV.pdf`,
  cvDownloadName: "Bane-Avramovic-CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/baneavramovic",
    github: "https://github.com/avramovicbane",
  },
  description:
    "Product Owner building AI-powered software for banks. I own Selecta, an AI-powered CRM used by 4+ banks and 500+ active bank users — from the first presales demo to go-live and beyond.",
};

export const hero = {
  eyebrow: "Product Owner · AI products for banks",
  headlineStart: "I build AI products that banks",
  headlineAccent: "actually use.",
  intro:
    "I own Selecta — an AI-powered CRM used by 4+ banks, including tier-1 Serbian banks, and 500+ active bank users. I take it from the first presales demo, through contract, onboarding and UAT, to escalations after go-live.",
};

export const metrics: { value: string; label: string }[] = [
  { value: "67%", label: "faster SME loan approval" },
  { value: "~50%", label: "less analyst time per credit assessment" },
  { value: "500+", label: "active bank users on the product I own" },
  { value: "4+", label: "banks running Selecta" },
  { value: "10+", label: "engineers I set priorities for" },
  { value: "3", label: "Product Specialists led and coached" },
];

export const pillars: {
  key: string;
  title: string;
  kicker: string;
  body: string;
}[] = [
  {
    key: "win",
    kicker: "Win",
    title: "From first demo to signed bank",
    body: "I lead presales demos for prospective banks, then take signed clients through onboarding, UAT and documentation to go-live — usually in 1–3 months.",
  },
  {
    key: "build",
    kicker: "Build",
    title: "Hands-on, not just specs",
    body: "SQL, Bold BI dashboards, product configuration, and n8n and Claude Code workflows that became production features. Then I write the specs and test what engineers build.",
  },
  {
    key: "lead",
    kicker: "Lead",
    title: "A team that ships every two weeks",
    body: "I coach a team of 3 Product Specialists day to day and set priorities for 10+ engineers, running sprint planning, refinement and retrospectives.",
  },
  {
    key: "fix",
    kicker: "Fix",
    title: "Solve it once, at the root",
    body: "Client escalations and production usage data go straight into roadmap priorities — so recurring problems get fixed at the root, not one ticket at a time.",
  },
];

export const caseStudies = {
  lending: {
    tab: "Faster SME lending",
    title: "SME loan approval: from 60 days to 20",
    problem: "Approving a loan for a small or medium business took 60 days.",
    approach:
      "Working with the banks' risk and credit teams, I prioritised automating the manual steps in the credit workflow.",
    outcome: "Approval now takes 20 days — 67% faster.",
    before: 60,
    after: 20,
  },
  analysis: {
    tab: "AI credit analysis",
    title: "An AI that drafts the credit analysis",
    problem:
      "Reading financial statements and writing up the financial analysis was a manual step in every credit assessment.",
    approach:
      "I defined an AI feature that reads financial statements and buyer–seller ledgers, and drafts the financial analysis for the analyst to review.",
    outcome:
      "~50% less analyst time per credit assessment — analysts review a draft instead of starting from a blank page.",
    steps: [
      { label: "Financial statements & ledgers", detail: "Uploaded with the application" },
      { label: "AI reads & extracts", detail: "Document intelligence" },
      { label: "Draft analysis", detail: "Financial analysis & commentary" },
      { label: "Analyst reviews", detail: "Judgement stays with people" },
    ],
  },
};

export const lifecycle: { step: string; title: string; body: string }[] = [
  {
    step: "Presales",
    title: "Presales demo",
    body: "I lead presales demos for prospective banks — the first time a bank sees Selecta, I'm the one showing it.",
  },
  {
    step: "Contract",
    title: "Contract signed",
    body: "Once a bank signs, I take them through everything that follows — onboarding, UAT and documentation, all the way to go-live.",
  },
  {
    step: "Onboarding",
    title: "Onboarding",
    body: "I run onboarding and handle the product configuration for the new bank.",
  },
  {
    step: "UAT",
    title: "User acceptance testing",
    body: "I run UAT with the bank's users and write the functional and technical documentation they rely on.",
  },
  {
    step: "Go-live",
    title: "Go-live",
    body: "New bank clients go from contract to live in 1–3 months.",
  },
  {
    step: "After",
    title: "Escalations & growth",
    body: "I own client escalations after launch — and turn them, with production usage data, into roadmap priorities.",
  },
];

export const sprint: { step: string; body: string }[] = [
  { step: "Plan", body: "Sprint planning with 10+ engineers: what ships this release, and why." },
  { step: "Refine", body: "Backlog refinement — user stories and acceptance criteria grounded in my own SQL analysis of production data." },
  { step: "Prototype", body: "I prototype in n8n and Claude Code before committing engineering capacity." },
  { step: "Test", body: "I write the specs, then test what the engineers build." },
  { step: "Release", body: "A new release ships every two weeks." },
  { step: "Retro", body: "Retrospective with the team — then the loop starts again." },
];

export type Release = {
  version: string;
  role: string;
  org: string;
  orgNote?: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export const releases: Release[] = [
  {
    version: "v6.0",
    role: "Product Owner — Selecta",
    org: "Intellya",
    orgNote: "B2B SaaS · AI products for banks and financial institutions",
    period: "Mar 2026 — Present",
    current: true,
    summary: "Owning an AI-powered CRM for banks across the full client lifecycle.",
    highlights: [
      "Own Selecta for 4+ banks and 500+ active users: presales demos, onboarding, UAT and documentation to go-live, and escalations after launch.",
      "Build the product hands-on — SQL, Bold BI dashboards, product configuration, and n8n and Claude Code workflows that became production features.",
      "Lead and coach 3 Product Specialists; set priorities for 10+ engineers shipping a release every two weeks.",
      "Turn client escalations and production usage data into roadmap priorities, fixing recurring problems at the root.",
    ],
  },
  {
    version: "v5.0",
    role: "Product Specialist",
    org: "Intellya",
    period: "Oct 2024 — Mar 2026",
    summary: "Shipped the AI credit workflow for SME lending.",
    highlights: [
      "Cut SME loan approval from 60 to 20 days (−67%) by prioritising automation of manual credit-workflow steps with bank risk and credit teams.",
      "Reduced analyst time per credit assessment by ~50% with an AI feature that reads financial statements and buyer–seller ledgers and drafts the analysis.",
      "Took new bank clients from contract to go-live in 1–3 months, running onboarding and UAT and writing the documentation.",
    ],
  },
  {
    version: "v4.0",
    role: "Product Owner — SAP PaPM",
    org: "msg global solutions",
    orgNote: "SAP consulting · enterprise finance software",
    period: "May 2023 — Oct 2024",
    summary: "One of three Product Owners on a flagship SAP Germany programme.",
    highlights: [
      "Delivered the corporate direct tax module on a 50-person team working with globally distributed teams.",
      "Co-led the SAP SCT starter pack — reused across 3+ client implementations — by standardising calculation logic into a reusable product.",
      "Drove PaPM adoption across 100+ enterprise stakeholders through demos, UAT and cross-workstream coordination.",
    ],
  },
  {
    version: "v3.0",
    role: "IT Consulting Intern",
    org: "msg global solutions",
    period: "Dec 2022 — May 2023",
    summary: "Promoted to Product Owner within 6 months.",
    highlights: ["Supported senior consultants on SAP implementations."],
  },
  {
    version: "v2.0",
    role: "Sales Manager",
    org: "Sistem:i",
    orgNote: "Apple Solution Expert",
    period: "Oct 2020 — Dec 2022",
    summary: "Where the product sense started: in front of customers.",
    highlights: [
      "Closed €200K+ in software sales to institutional clients, owning the full cycle from solution demo to close.",
    ],
  },
  {
    version: "v1.0",
    role: "Teaching Associate, Dept. of E-Business",
    org: "University of Belgrade (FON)",
    period: "Oct 2019 — May 2021",
    summary: "Teaching the web before building products on it.",
    highlights: [
      "Taught e-business and web development; ran Node.js and 3D-modelling workshops.",
    ],
  },
];

export const education = {
  degree: "BEng, Information Technology",
  school: "University of Belgrade — Faculty of Organizational Sciences (FON)",
  year: "2022",
};

export const languages = ["Serbian — Native", "English — Full professional"];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Product",
    items: [
      "Roadmap ownership",
      "Prioritisation",
      "Discovery",
      "User stories & acceptance criteria",
      "Release planning",
      "KPI definition",
    ],
  },
  {
    category: "Client lifecycle",
    items: [
      "Presales demos",
      "Onboarding",
      "UAT",
      "Functional & technical documentation",
      "Client escalations",
      "Adoption",
    ],
  },
  {
    category: "Data & AI",
    items: [
      "SQL (proficient)",
      "Bold BI",
      "Production data analysis",
      "Product configuration",
      "LLM feature specification",
      "Document intelligence",
      "n8n",
      "Claude Code",
    ],
  },
  {
    category: "Agile",
    items: [
      "Scrum",
      "Kanban",
      "Sprint planning",
      "Backlog refinement",
      "Retrospectives",
      "Cross-team dependencies",
    ],
  },
  {
    category: "Tools",
    items: ["Jira", "Confluence", "Figma", "SAP PaPM", "MS Office"],
  },
];

export type CertCategory = "Agile & delivery" | "Leadership & soft skills" | "Web development";

export type Certificate = {
  title: string;
  issuer: "Udemy" | "SoloLearn";
  date?: string;
  hours?: string;
  category: CertCategory;
  image: string;
  verifyUrl?: string;
};

const certImg = (file: string) => `${BASE_PATH}/certs/${file}.webp`;

export const certificates: Certificate[] = [
  {
    title: "Agile Fundamentals: Including Scrum and Kanban",
    issuer: "Udemy",
    date: "Jan 2023",
    hours: "4.5 h",
    category: "Agile & delivery",
    image: certImg("agile-fundamentals"),
    verifyUrl: "https://ude.my/UC-931d390c-f81f-4f28-9cff-1170970234a3",
  },
  {
    title: "SAP Project Essentials: Implementing SAP S/4HANA and SAP ERP",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "4 h",
    category: "Agile & delivery",
    image: certImg("sap-project-essentials"),
    verifyUrl: "https://ude.my/UC-8900e8a6-1c8b-41b6-975d-786bd6f0a09f",
  },
  {
    title: "Beginning Project Management: Project Management Level One",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "3.5 h",
    category: "Agile & delivery",
    image: certImg("project-management-l1"),
    verifyUrl: "https://ude.my/UC-4537fda5-90d4-4af0-bd0a-c0d34cb1032e",
  },
  {
    title: "Consulting Approach to Problem Solving",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "1.5 h",
    category: "Agile & delivery",
    image: certImg("consulting-problem-solving"),
    verifyUrl: "https://ude.my/UC-ca5cb5ee-8d17-487d-93bf-78af67e27ced",
  },
  {
    title: "Smart Tips: Communication",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "3 h",
    category: "Leadership & soft skills",
    image: certImg("communication"),
    verifyUrl: "https://ude.my/UC-5b35968a-fe74-4d72-833a-abb419a3084d",
  },
  {
    title: "Embracing a Culture of Feedback",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "1 h",
    category: "Leadership & soft skills",
    image: certImg("culture-of-feedback"),
    verifyUrl: "https://ude.my/UC-64700565-f77e-4c72-b537-c3c8f17ac1c7",
  },
  {
    title: "Time Management Mastery: Do More, Stress Less",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "2 h",
    category: "Leadership & soft skills",
    image: certImg("time-management"),
    verifyUrl: "https://ude.my/UC-b72fd143-e885-4292-9e7a-b8fc1b76f041",
  },
  {
    title: "Stress Management: Avoid Burnout and Prevent Stress",
    issuer: "Udemy",
    date: "Dec 2022",
    hours: "2 h",
    category: "Leadership & soft skills",
    image: certImg("stress-management"),
    verifyUrl: "https://ude.my/UC-ac7d6f01-9b8b-4f23-bb83-937794bd2ffe",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "SoloLearn",
    category: "Web development",
    image: certImg("web-dev-fundamentals"),
  },
  {
    title: "HTML",
    issuer: "SoloLearn",
    category: "Web development",
    image: certImg("html"),
  },
  {
    title: "CSS",
    issuer: "SoloLearn",
    category: "Web development",
    image: certImg("css"),
  },
];

export const learningRoadmap: {
  stage: "Now" | "Next" | "Later";
  title: string;
  provider: string;
  note: string;
}[] = [
  {
    stage: "Now",
    title: "Professional Scrum Product Owner I (PSPO I)",
    provider: "Scrum.org",
    note: "Preparing for the assessment.",
  },
  {
    stage: "Next",
    title: "AI Product Management",
    provider: "Duke University · Coursera",
    note: "A three-course specialization.",
  },
  {
    stage: "Later",
    title: "Analytics & Experimentation foundations",
    provider: "Amplitude Academy",
    note: "Product analytics and experiment design.",
  },
];

export const navLinks = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "How I work" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];
