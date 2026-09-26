// ---------------------------------------------------------------------------
// All site content lives in this one file. Every fact comes from Bane's CV
// (public/Bane-Avramovic-CV.pdf) and his certificates.
//
// Each fact has ONE home: the headline numbers live in the hero card and the
// case studies on /work — nowhere else — so the site never repeats itself.
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
  cvFile: `${BASE_PATH}/Bane-Avramovic-CV.pdf`,
  cvDownloadName: "Bane-Avramovic-CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/baneavramovic",
    github: "https://github.com/avramovicbane",
  },
  description:
    "Product Owner building AI-powered software for banks. I own Selecta, an AI-powered CRM used by 4+ banks and 500+ bank users.",
};

export const navLinks = [
  { href: "/work/", label: "Work" },
  { href: "/career/", label: "Career" },
  { href: "/certificates/", label: "Certificates" },
];

// ---------------------------------------------------------------- Home ----

export const hero = {
  eyebrow: "Product Owner at Intellya",
  headlineStart: "I build AI products that banks",
  headlineAccent: "actually use.",
  intro:
    "I'm Bane. I own Selecta, an AI-powered CRM used by 4+ banks and 500+ bank users — from the first demo to life after go-live.",
};

export const whatIDo: { key: string; verb: string; body: string }[] = [
  { key: "demo", verb: "Demo it.", body: "I lead presales demos and take new banks all the way to go-live." },
  { key: "build", verb: "Build it.", body: "SQL, Bold BI, n8n and Claude Code — I prototype before engineers build." },
  { key: "ship", verb: "Ship it.", body: "I coach 3 Product Specialists and set priorities for 10+ engineers." },
  { key: "fix", verb: "Fix it.", body: "Escalations and usage data shape the roadmap, so problems get fixed at the root." },
];

export const explore: { href: string; title: string; body: string }[] = [
  { href: "/work/", title: "Work", body: "Two case studies, and the loops I run every day." },
  { href: "/career/", title: "Career", body: "Six releases, from teaching to AI for banks." },
  { href: "/certificates/", title: "Certificates", body: "What I've learned, and what's next." },
];

// ---------------------------------------------------------------- Work ----

export const caseStudies = {
  lending: {
    tab: "Faster SME lending",
    problem: "Approving a loan for a small or medium business took 60 days.",
    approach:
      "With the banks' risk and credit teams, I prioritised automating the manual steps in the credit workflow.",
    before: 60,
    after: 20,
  },
  analysis: {
    tab: "AI credit analysis",
    problem: "Reading financial statements and writing the analysis was a manual step in every credit assessment.",
    approach:
      "I defined an AI feature that reads statements and buyer–seller ledgers and drafts the analysis for the analyst to review.",
    steps: [
      { label: "Statements & ledgers", detail: "Uploaded with the application" },
      { label: "AI reads & extracts", detail: "Document intelligence" },
      { label: "Draft analysis", detail: "Written by AI" },
      { label: "Analyst reviews", detail: "Judgement stays with people" },
    ],
  },
};

export const lifecycle: { step: string; body: string }[] = [
  { step: "Demo", body: "I lead presales demos for prospective banks." },
  { step: "Onboard", body: "Once a bank signs, I run onboarding and configure the product." },
  { step: "UAT", body: "I run UAT with the bank's users and write the functional and technical documentation." },
  { step: "Go-live", body: "Contract to go-live in 1–3 months." },
  { step: "After", body: "I own escalations, and turn them — with usage data — into roadmap priorities." },
];

export const sprint: { step: string; body: string }[] = [
  { step: "Plan", body: "Sprint planning: what ships this release, and why." },
  { step: "Refine", body: "User stories and acceptance criteria, grounded in my own SQL analysis of production data." },
  { step: "Prototype", body: "I prototype in n8n and Claude Code before committing engineering time." },
  { step: "Test", body: "I write the specs, then test what the engineers build." },
  { step: "Release", body: "A new release every two weeks." },
  { step: "Retro", body: "What to keep, what to change — then the loop starts again." },
];

// -------------------------------------------------------------- Career ----

export type Release = {
  version: string;
  role: string;
  org: string;
  period: string;
  current?: boolean;
  summary: string;
  link?: { href: string; label: string };
};

export const releases: Release[] = [
  {
    version: "v6.0",
    role: "Product Owner — Selecta",
    org: "Intellya",
    period: "2026 — now",
    current: true,
    summary: "Own an AI-powered CRM for banks end to end, and build parts of it myself.",
  },
  {
    version: "v5.0",
    role: "Product Specialist",
    org: "Intellya",
    period: "2024 — 2026",
    summary: "Shipped the AI credit workflow for SME lending.",
    link: { href: "/work/", label: "Read the case study" },
  },
  {
    version: "v4.0",
    role: "Product Owner — SAP PaPM",
    org: "msg global solutions",
    period: "2023 — 2024",
    summary:
      "One of three Product Owners on a 50-person SAP Germany programme. Delivered the corporate direct tax module and co-led a starter pack reused across 3+ client implementations.",
  },
  {
    version: "v3.0",
    role: "IT Consulting Intern",
    org: "msg global solutions",
    period: "2022 — 2023",
    summary: "Promoted to Product Owner within 6 months.",
  },
  {
    version: "v2.0",
    role: "Sales Manager",
    org: "Sistem:i (Apple Solution Expert)",
    period: "2020 — 2022",
    summary: "Closed €200K+ in software sales to institutional clients — where the product sense started.",
  },
  {
    version: "v1.0",
    role: "Teaching Associate",
    org: "University of Belgrade (FON)",
    period: "2019 — 2021",
    summary: "Taught e-business and web development; ran Node.js and 3D-modelling workshops.",
  },
];

export const education = {
  degree: "BEng, Information Technology",
  school: "University of Belgrade (FON)",
  year: "2022",
};

export const languages = ["Serbian — Native", "English — Full professional"];

// -------------------------------------------------------------- Skills ----

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

// -------------------------------------------------------- Certificates ----

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
}[] = [
  { stage: "Now", title: "Professional Scrum Product Owner I (PSPO I)", provider: "Scrum.org" },
  { stage: "Next", title: "AI Product Management", provider: "Duke University · Coursera" },
  { stage: "Later", title: "Analytics & Experimentation", provider: "Amplitude Academy" },
];
