// ---------------------------------------------------------------------------
// All the actual CV content lives here. Edit this one file to update the
// site — nothing else needs to change.
// ---------------------------------------------------------------------------

export const BASE_PATH = "/cv";

export const site = {
  name: "Bane Avramović",
  role: "Senior Product Owner",
  roleDetail: "AI Products for Financial Services",
  tagline:
    "Product Owner with nearly 6 years across enterprise SAP and AI fintech, directing cross-functional teams and shipping AI features that cut SME loan approval time by two-thirds.",
  location: "Belgrade, Serbia",
  email: "bane.avramovic@gmail.com",
  phone: "+381 60 577 8797",
  // Put your real CV PDF at public/resume.pdf. The BASE_PATH prefix is
  // required because plain <a href> links (unlike next/link) don't get
  // basePath applied automatically.
  resumeFile: `${BASE_PATH}/resume.pdf`,
  social: {
    github: "https://github.com/avramovicbane",
    linkedin: "https://www.linkedin.com/in/baneavramovic",
  },
};

export const about = `Product Owner with nearly 6 years of professional experience across
enterprise SAP and AI fintech, 3+ years of it in product roles. Owns roadmap,
release planning, and stakeholder alignment for Selecta, an AI-driven CRM
whose client base is roughly 90% banking — directing a 10+ engineer team and
leading 3 Product Specialists. Defined and shipped the AI features that cut
SME loan approval from 60 days to 20. Previously one of three Product Owners
on a 50-person SAP Germany engagement.`;

export const highlights: { value: string; label: string }[] = [
  { value: "67%", label: "faster SME loan approval (60 → 20 days)" },
  { value: "3", label: "Product Specialists led" },
  { value: "10+", label: "engineers in cross-functional team" },
  { value: "100+", label: "enterprise stakeholders served" },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Product Owner",
    company: "Intellya d.o.o.",
    period: "03/2026 — Present",
    location: "Belgrade, Serbia",
    bullets: [
      "Owns roadmap, release planning and stakeholder alignment for Selecta, an AI-powered CRM pairing a 360° customer view with predictive analytics; ~90% of its client base is banking, including tier-1 Serbian banks.",
      "Directs a cross-functional team of 10+ engineers, running sprint planning, backlog refinement and retrospectives; assigns and reviews the work of 3 Product Specialists.",
      "Writes user stories and acceptance criteria grounded in first-hand SQL analysis across production databases and Bold BI dashboards; prototypes in n8n and Claude Code before committing engineering capacity.",
    ],
  },
  {
    role: "Product Specialist",
    company: "Intellya d.o.o.",
    period: "10/2024 — 03/2026",
    location: "Belgrade, Serbia",
    bullets: [
      "Owned end-to-end delivery of AI-driven features in SME lending, from discovery and prioritisation through go-to-market.",
      "Cut SME loan approval turnaround by 67% — 60 days to 20 — by prioritising automation of manual steps in the credit workflow.",
      "Led product definition for an AI capability that ingests financial statements and buyer–seller ledgers and generates draft financial analysis and commentary.",
      "Authored technical and functional documentation and ran customer onboarding to accelerate adoption.",
    ],
  },
  {
    role: "Product Owner — SAP PaPM",
    company: "msg global solutions",
    period: "05/2023 — 10/2024",
    location: "Serbia",
    bullets: [
      "One of three Product Owners on a 50-person team delivering SAP Profitability and Performance Management (PaPM) on a flagship SAP Germany engagement.",
      "Owned the corporate direct tax module and co-led delivery of the SAP SCT starter pack.",
      "Managed backlog and release plans and wrote user stories and acceptance criteria for globally distributed teams; ran ceremonies and cross-workstream dependencies.",
      "Drove PaPM adoption across 100+ enterprise stakeholders.",
    ],
  },
  {
    role: "IT Consulting Intern",
    company: "msg global solutions",
    period: "12/2022 — 05/2023",
    location: "Serbia",
    bullets: [
      "Supported senior consultants on SAP implementation engagements; promoted to Product Owner after six months.",
    ],
  },
  {
    role: "Sales Manager",
    company: "Sistem:i d.o.o. (Apple Solution Expert)",
    period: "10/2020 — 12/2022",
    location: "Belgrade, Serbia",
    bullets: [
      "Generated €200K+ in software sales, owning the full cycle from solution demo to close for institutional clients.",
      "Two customer-facing years that built the product sense — user needs, market dynamics, competitor positioning — later applied to product ownership.",
    ],
  },
  {
    role: "Teaching Associate, Dept. of E-Business",
    company: "University of Belgrade (FON)",
    period: "10/2019 — 05/2021",
    bullets: [
      "Taught e-business and web development technologies; ran Node.js and 3D modelling workshops.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "BEng, Information Technology",
    school: "University of Belgrade — Faculty of Organizational Sciences (FON)",
    period: "2022",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Product",
    items: [
      "Backlog management",
      "User stories & acceptance criteria",
      "Roadmap ownership",
      "Release planning",
      "Prioritisation",
      "Product discovery",
      "KPI definition",
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
      "Cross-team dependency management",
    ],
  },
  {
    category: "Data & AI",
    items: [
      "SQL (proficient)",
      "Bold BI",
      "Production database analysis",
      "LLM feature specification",
      "Document intelligence",
      "n8n",
      "Claude / Claude Code",
    ],
  },
  {
    category: "Tools",
    items: ["Jira", "Confluence", "Figma", "SAP PaPM", "MS Office"],
  },
  {
    category: "Languages",
    items: ["Serbian (Native)", "English (Full Professional)"],
  },
];

export type AchievementItem = {
  title: string;
  description: string;
};

export const achievements: AchievementItem[] = [
  {
    title: "Cut SME loan approval turnaround by 67%",
    description:
      "From 60 days to 20, by prioritising automation of the manual steps in the credit workflow — shifting analyst time from mechanical processing to judgement work.",
  },
  {
    title: "Shipped an AI document-intelligence capability",
    description:
      "Reads financial statements and buyer–seller ledgers and drafts financial analysis and commentary, replacing a manual step in credit assessment.",
  },
  {
    title: "Promoted twice in four years",
    description:
      "Intern to Product Owner at msg global, then Product Specialist to Product Owner at Intellya, now leading 3 Product Specialists.",
  },
];
