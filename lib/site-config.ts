// ---------------------------------------------------------------------------
// All the actual CV content lives here. Edit this one file to update the
// site — nothing else needs to change.
//
// NOTE: this is placeholder content. Swap it out for the real details from
// your CV/resume before you consider the site finished.
// ---------------------------------------------------------------------------

export const BASE_PATH = "/cv";

export const site = {
  name: "Bane Avramović",
  role: "Software Engineer",
  tagline:
    "I build reliable, well-tested software and enjoy turning ambiguous problems into clean, working systems.",
  location: "Belgrade, Serbia",
  email: "bane.avramovic@gmail.com",
  // Put your real CV PDF at public/resume.pdf. The BASE_PATH prefix is
  // required because plain <a href> links (unlike next/link) don't get
  // basePath applied automatically.
  resumeFile: `${BASE_PATH}/resume.pdf`,
  social: {
    github: "https://github.com/avramovicbane",
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
  },
};

export const about = `Replace this paragraph with a short summary of who you are
professionally — your background, what you specialize in, and what kind of
work you're looking for. Two to four sentences is usually enough.`;

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2023 — Present",
    location: "Belgrade, Serbia",
    bullets: [
      "Describe a concrete responsibility or achievement in this role.",
      "Use numbers where you can (e.g. reduced load time by 40%).",
      "Keep each bullet to one line where possible.",
    ],
  },
  {
    role: "Previous Job Title",
    company: "Previous Company",
    period: "2021 — 2023",
    location: "Belgrade, Serbia",
    bullets: [
      "Another concrete responsibility or achievement.",
      "What tools, languages, or systems did you work with?",
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
    degree: "Degree, Field of Study",
    school: "University Name",
    period: "2017 — 2021",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD"] },
];

export type ProjectItem = {
  name: string;
  description: string;
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Project Name",
    description:
      "One or two sentences describing what this project does and your role in it.",
    link: "https://github.com/avramovicbane",
  },
];
