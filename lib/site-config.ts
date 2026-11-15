// ---------------------------------------------------------------------------
// Language-neutral facts: who, where, links and the certificate list.
// Every sentence a visitor reads lives in lib/content.ts (English + Serbian).
// ---------------------------------------------------------------------------

export const BASE_PATH = "/cv";
export const SITE_URL = "https://avramovicbane.github.io/cv";

export const site = {
  name: "Bane Avramović",
  firstName: "Bane",
  initials: "BA",
  email: "bane.avramovic@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/baneavramovic",
  },
};

// -------------------------------------------------------- Certificates ----

export type CertCategory = "ai" | "product" | "delivery" | "soft" | "web";

export const CERT_CATEGORIES: CertCategory[] = ["ai", "product", "delivery", "soft", "web"];

export type Certificate = {
  /** Course titles stay in the language they were issued in. */
  title: string;
  issuer: string;
  /** [year, month] — month is 1-based. Missing for undated certificates. */
  date?: [number, number];
  hours?: number;
  category: CertCategory;
  image: string;
  /** Pixel size of the image in public/certs. */
  size: [number, number];
  verifyUrl?: string;
};

const certImg = (file: string) => `${BASE_PATH}/certs/${file}.webp`;

const BADGE: [number, number] = [1100, 750];
const COURSERA: [number, number] = [1100, 850];
const CLASSIC: [number, number] = [1100, 818];

const claude = (title: string, file: string, id: string): Certificate => ({
  title,
  issuer: "Claude Academy",
  date: [2026, 11],
  category: "ai",
  image: certImg(file),
  size: BADGE,
  verifyUrl: `https://academy.claude.com/verify/${id}`,
});

// Newest first.
export const certificates: Certificate[] = [
  {
    title: "Product Management: Initial Product Strategy and Plan",
    issuer: "SkillUp · Coursera",
    date: [2026, 11],
    category: "product",
    image: certImg("pm-strategy-plan"),
    size: COURSERA,
    verifyUrl: "https://coursera.org/verify/Z36JIBXRTW47",
  },
  {
    title: "Product Management: Foundations & Stakeholder Collaboration",
    issuer: "SkillUp · Coursera",
    date: [2026, 11],
    category: "product",
    image: certImg("pm-foundations-stakeholders"),
    size: COURSERA,
    verifyUrl: "https://coursera.org/verify/QIRQ4URD06PI",
  },
  {
    title: "Product Management: An Introduction",
    issuer: "IBM · Coursera",
    date: [2026, 11],
    category: "product",
    image: certImg("pm-introduction"),
    size: COURSERA,
    verifyUrl: "https://coursera.org/verify/W0RFA8948TQ5",
  },
  claude("Claude Code in Action", "claude-code-in-action", "37d6969155fd08c46a139284d974cc8c"),
  claude("Introduction to Model Context Protocol", "intro-mcp", "c0ce93dc02e53f20719f78d63323abe7"),
  claude("Claude Platform 101", "claude-platform-101", "ea57ae9fb1540b82294dd4156cd13b2c"),
  claude("Introduction to Claude Tag", "intro-claude-tag", "d68ece1f5b3db4064a16b33fbcf59e78"),
  claude("Claude Code 101", "claude-code-101", "fc065fa53702f4db182f395fa3b785dc"),
  claude("Introduction to Claude Cowork", "intro-claude-cowork", "4d22770912afbc7539b0dad1eca545f0"),
  claude("Claude 101", "claude-101", "88388e629b1c381f362d61edc254df7e"),
  {
    title: "Agile Fundamentals: Including Scrum and Kanban",
    issuer: "Udemy",
    date: [2023, 1],
    hours: 4.5,
    category: "delivery",
    image: certImg("agile-fundamentals"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-931d390c-f81f-4f28-9cff-1170970234a3",
  },
  {
    title: "SAP Project Essentials: Implementing SAP S/4HANA and SAP ERP",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 4,
    category: "delivery",
    image: certImg("sap-project-essentials"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-8900e8a6-1c8b-41b6-975d-786bd6f0a09f",
  },
  {
    title: "Beginning Project Management: Project Management Level One",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 3.5,
    category: "delivery",
    image: certImg("project-management-l1"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-4537fda5-90d4-4af0-bd0a-c0d34cb1032e",
  },
  {
    title: "Consulting Approach to Problem Solving",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 1.5,
    category: "delivery",
    image: certImg("consulting-problem-solving"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-ca5cb5ee-8d17-487d-93bf-78af67e27ced",
  },
  {
    title: "Smart Tips: Communication",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 3,
    category: "soft",
    image: certImg("communication"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-5b35968a-fe74-4d72-833a-abb419a3084d",
  },
  {
    title: "Embracing a Culture of Feedback",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 1,
    category: "soft",
    image: certImg("culture-of-feedback"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-64700565-f77e-4c72-b537-c3c8f17ac1c7",
  },
  {
    title: "Time Management Mastery: Do More, Stress Less",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 2,
    category: "soft",
    image: certImg("time-management"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-b72fd143-e885-4292-9e7a-b8fc1b76f041",
  },
  {
    title: "Stress Management: Avoid Burnout and Prevent Stress",
    issuer: "Udemy",
    date: [2022, 12],
    hours: 2,
    category: "soft",
    image: certImg("stress-management"),
    size: CLASSIC,
    verifyUrl: "https://ude.my/UC-ac7d6f01-9b8b-4f23-bb83-937794bd2ffe",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "SoloLearn",
    category: "web",
    image: certImg("web-dev-fundamentals"),
    size: CLASSIC,
  },
  {
    title: "HTML",
    issuer: "SoloLearn",
    category: "web",
    image: certImg("html"),
    size: CLASSIC,
  },
  {
    title: "CSS",
    issuer: "SoloLearn",
    category: "web",
    image: certImg("css"),
    size: CLASSIC,
  },
];

/** Certificates from this year get a "New" tag and the home-page spotlight. */
export const NEW_SINCE_YEAR = 2026;
export const isNewCert = (c: Certificate) => (c.date?.[0] ?? 0) >= NEW_SINCE_YEAR;
