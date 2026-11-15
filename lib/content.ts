// ---------------------------------------------------------------------------
// Every sentence on the site, in English and Serbian. Every fact comes from
// Bane's CV and his certificates — keep the two languages in step when you
// edit one. `sr` must have the same shape as `en` (TypeScript checks this).
//
// {total} and {new} in a string are replaced with certificate counts.
// ---------------------------------------------------------------------------

import type { CertCategory } from "@/lib/site-config";
import type { Lang } from "@/lib/lang";

export type Release = {
  version: string;
  role: string;
  org: string;
  period: string;
  current?: boolean;
  /** Shows the "graduated" marker above this entry. */
  afterGraduation?: boolean;
  summary: string;
  link?: { href: string; label: string };
};

type Stat = { prefix: string; value: number; suffix: string; label: string; detail: string };
type Step = { step: string; body: string };

const en = {
  meta: {
    role: "Product Owner",
    roleDetail: "AI products for financial services",
    location: "Belgrade, Serbia",
    description:
      "Product Owner building AI-powered software for banks. I own Selecta, an AI-powered CRM used by 4+ banks and 500+ active bank users.",
    pages: {
      work: {
        title: "Work",
        description: "Two case studies from AI products for banks, and how I run a product day to day.",
      },
      career: {
        title: "Career",
        description: "From teaching web development, to sales, to SAP programmes, to AI products for banks.",
      },
      certificates: {
        title: "Certificates",
        description:
          "Certificates in AI, product management, agile delivery and leadership — and what I'm learning next.",
      },
    },
  },

  nav: {
    home: "Home",
    work: "Work",
    career: "Career",
    certificates: "Certificates",
    contact: "Contact",
    pages: "Pages",
    menu: "Menu",
    palette: "Open quick navigation",
    theme: "Toggle light and dark theme",
    language: "Language",
  },

  hero: {
    eyebrow: "Product Owner · Intellya",
    headlineStart: "I build AI products that banks",
    headlineAccent: "actually use.",
    intro:
      "I'm Bane. I own Selecta, an AI-powered CRM used by 4+ banks and 500+ active bank users — from the first demo to life after go-live.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    stamp: "PRODUCT OWNER ✦ AI FOR BANKS ✦ SAP ✦ BELGRADE ✦ ",
  },

  card: {
    illustration: "Illustration",
    title: "SME credit workflow",
    metric: "Days to approval",
    was: "was 60",
    steps: [
      "Application received",
      "OCR reads statements & ledgers",
      "Data packed into Excel",
      "Analyst review",
      "Credit decision",
    ],
    chip: "~50% less analyst time",
    replay: "↻ Replay",
  },

  ticker: [
    "Product Owner",
    "AI for banks",
    "4+ banks live",
    "500+ active users",
    "SQL every day",
    "Claude Code",
    "SAP PaPM",
    "Scrum & Kanban",
    "Presales to go-live",
    "A release every 2 weeks",
  ],

  impact: {
    eyebrow: "In numbers",
    title: "Results I can",
    accent: "put a number on.",
    items: [
      {
        prefix: "−",
        value: 67,
        suffix: "%",
        label: "SME loan approval time",
        detail: "From 60 days to 20, by automating the manual steps in the credit workflow.",
      },
      {
        prefix: "~",
        value: 50,
        suffix: "%",
        label: "less analyst time",
        detail: "Per credit assessment, once OCR started reading the statements and ledgers.",
      },
      {
        prefix: "",
        value: 500,
        suffix: "+",
        label: "active bank users",
        detail: "Across 4+ banks running Selecta, the AI-powered CRM I own.",
      },
      {
        prefix: "",
        value: 14,
        suffix: "",
        label: "days between releases",
        detail: "With 10+ engineers and 3 Product Specialists whose priorities I set.",
      },
    ] as Stat[],
  },

  whatIDo: {
    eyebrow: "What I do",
    items: [
      { key: "demo", verb: "Demo it.", body: "I lead presales demos and take new banks all the way to go-live." },
      { key: "build", verb: "Build it.", body: "SQL, Bold BI and Claude Code — I prototype before engineers build." },
      { key: "ship", verb: "Ship it.", body: "I coach 3 Product Specialists and set priorities for 10+ engineers." },
      {
        key: "fix",
        verb: "Fix it.",
        body: "Escalations and usage data shape the roadmap, so problems get fixed at the root.",
      },
    ],
  },

  fresh: {
    eyebrow: "Fresh off the press",
    title: "Still",
    accent: "shipping myself.",
    body: "{new} new certificates in 2026: Claude Academy on the AI side, the IBM and SkillUp Product Management courses on Coursera on the product side. {total} in total.",
    cta: "See all certificates",
    newLabel: "new in 2026",
    totalLabel: "certificates in total",
  },

  explore: [
    { href: "/work/", title: "Work", body: "Two case studies, and the loops I run every day." },
    { href: "/career/", title: "Career", body: "Seven releases, from teaching to AI for banks." },
    { href: "/certificates/", title: "Certificates", body: "{total} finished, and what's next." },
  ],

  work: {
    header: {
      eyebrow: "Work",
      title: "Outcomes, not",
      accent: "output.",
      intro: "Two things I shipped for banks — flip each one between before and after.",
    },
    labels: {
      tabs: "Case studies",
      problem: "Problem",
      did: "What I did",
      before: "Before",
      after: "After",
      compare: "Compare before and after",
    },
    lending: {
      tab: "Faster SME lending",
      problem: "Approving a loan for a small or medium business took 60 days.",
      approach:
        "With the banks' risk and credit teams, I prioritised automating the manual steps in the credit workflow.",
      before: 60,
      after: 20,
      metric: "Days to approve an SME loan",
      legend: "1 square = 1 day",
    },
    analysis: {
      tab: "AI credit analysis",
      problem:
        "Analysts copied figures from financial statements and ledgers into Excel by hand for every credit assessment.",
      approach:
        "I defined an AI feature where OCR reads the statements and buyer–seller ledgers and packs the data into Excel for the analyst, who reviews it. Analyst time per assessment dropped by about 50%.",
      title: "One credit assessment",
      manual: "Manual",
      time: "Analyst time per assessment",
      steps: [
        { label: "Statements & ledgers", detail: "Uploaded with the application" },
        { label: "OCR reads & extracts", detail: "Document intelligence" },
        { label: "Data packed into Excel", detail: "Ready for the analyst" },
        { label: "Analyst reviews", detail: "Judgement stays with people" },
      ],
      /** What steps 2 and 3 looked like before the feature. */
      manualSteps: ["Analyst reads statements & ledgers", "Analyst types the figures into Excel"],
    },
    how: {
      title: "How I work: two loops, running all the time.",
      tabsLabel: "How I work",
      lifecycleTab: "Client lifecycle",
      sprintTab: "Two-week sprint",
      every: "Every",
      twoWeeks: "2 weeks",
      oneRelease: "one release",
      stepOf: "Step {n} of {count}",
      hintRunning: "Playing automatically — click any step to explore",
      hintPaused: "Click any step to explore",
      lifecycle: [
        { step: "Demo", body: "I lead presales demos for prospective banks." },
        {
          step: "Onboard",
          body: "Once a bank signs, I run onboarding, configure the product and write the functional and technical documentation.",
        },
        { step: "UAT", body: "I run UAT with the bank's users before go-live." },
        { step: "Go-live", body: "Contract to go-live in 1–3 months." },
        {
          step: "After",
          body: "I own escalations, and turn them — with usage data — into roadmap priorities.",
        },
      ] as Step[],
      sprint: [
        { step: "Plan", body: "Sprint planning: what ships this release, and why." },
        {
          step: "Refine",
          body: "User stories and acceptance criteria, grounded in my own SQL analysis of production data.",
        },
        { step: "Prototype", body: "I prototype with Claude Code before committing engineering time." },
        { step: "Test", body: "I write the specs, then test what the engineers build." },
        { step: "Release", body: "A new release every two weeks." },
        { step: "Retro", body: "What to keep, what to change — then the loop starts again." },
      ] as Step[],
    },
  },

  career: {
    header: {
      eyebrow: "Career",
      title: "Release notes",
      accent: "of a career.",
      intro: "Teaching, sales, SAP consulting, then AI for banks — every version added something.",
    },
    toolkit: "Toolkit",
    latest: "Latest",
    graduated: "Graduated",
    education: {
      degree: "BEng, Information Technology",
      school: "University of Belgrade (FON)",
      year: "2022",
    },
    releases: [
      {
        version: "v7.0",
        role: "Product Owner — Selecta",
        org: "Intellya",
        period: "2026 — now",
        current: true,
        summary:
          "I own the roadmap, backlog and success metrics of an AI-powered CRM used by 4+ banks and 500+ active users. I lead 3 Product Specialists, set priorities for 10+ engineers shipping every two weeks, build parts of the product myself, and work closely with the Director of Product on direction and trade-offs.",
      },
      {
        version: "v6.0",
        role: "Product Specialist",
        org: "Intellya",
        period: "2024 — 2026",
        summary:
          "Shipped the AI credit workflow for SME lending: approval time down from 60 days to 20, analyst time per assessment down by about half. Took new banks from contract to go-live in 1–3 months.",
        link: { href: "/work/", label: "Read the case study" },
      },
      {
        version: "v5.0",
        role: "Product Owner — SAP PaPM",
        org: "msg global solutions",
        period: "2023 — 2024",
        summary:
          "Product Owner on 2 client implementations of the SAP Sustainability Control Tower (SCT) starter pack. Presented product direction and progress to project superiors and drove PaPM adoption across 100+ enterprise stakeholders.",
      },
      {
        version: "v4.0",
        role: "PaPM Consultant",
        org: "msg global solutions",
        period: "2022 — 2023",
        summary:
          "Onboarding phase at msg: worked as a PaPM consultant on SAP implementations. Promoted to Product Owner within six months.",
      },
      {
        version: "v3.0",
        role: "Product Specialist",
        org: "Sistem:i",
        period: "2021 — 2022",
        afterGraduation: true,
        summary:
          "Product Specialist for software sold to cafés, used to record tables and orders and to track stock levels. Worked closely with designers.",
      },
      {
        version: "v2.0",
        role: "Sales Manager",
        org: "Sistem:i (Apple Solution Expert)",
        period: "2020 — 2021",
        summary: "Closed €200K+ in software sales to institutional clients — where the product sense started.",
      },
      {
        version: "v1.0",
        role: "Teaching Associate",
        org: "University of Belgrade (FON)",
        period: "2019 — 2021",
        summary: "Taught e-business and web development; ran Node.js and 3D-modelling workshops.",
      },
    ] as Release[],
    skills: [
      {
        category: "Product",
        items: [
          "Product strategy",
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
          "Document intelligence",
          "Claude Code",
          "Multi-step AI workflows with Claude",
          "MCP fundamentals",
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
      { category: "Tools", items: ["Jira", "Confluence", "Figma", "SAP PaPM", "MS Office"] },
      { category: "Languages", items: ["Serbian — Native", "English — Full professional"] },
    ],
  },

  certs: {
    header: {
      eyebrow: "Certificates",
      title: "Always in",
      accent: "the next sprint.",
      intro: "What I've finished, what I'm on now, and what's next. Click a certificate to open it.",
    },
    roadmap: [
      { stage: "Now", title: "Product Management courses", provider: "IBM & SkillUp · Coursera · 3 courses done" },
      { stage: "Next", title: "AI Product Management", provider: "Duke University · Coursera" },
      { stage: "Later", title: "Analytics & Experimentation", provider: "Amplitude Academy" },
    ],
    all: "All",
    categories: {
      ai: "AI & Claude",
      product: "Product management",
      delivery: "Agile & delivery",
      soft: "Leadership & soft skills",
      web: "Web development",
    } as Record<CertCategory, string>,
    filter: "Filter certificates",
    isNew: "New",
    view: "View certificate",
    viewAria: "View certificate: {title}",
    alt: "Certificate: {title}",
    verify: "Verify",
    close: "Close",
    prev: "Previous certificate",
    next: "Next certificate",
    hint: "Use ← → to browse, Esc to close",
  },

  contact: {
    title: "Let's talk",
    accent: "product.",
    body: "Product, AI in banking, or a role on your team.",
    copy: "Copy",
    copied: "Copied",
  },

  footer: {
    jump: "to jump anywhere",
  },

  palette: {
    label: "Quick navigation",
    placeholder: "Search sections and actions…",
    empty: "Nothing matches “{query}”.",
    jump: "Jump to",
    actions: "Actions",
    work: "Work — case studies & how I work",
    career: "Career & skills",
    copyEmail: "Copy email address",
    emailCopied: "Email copied",
    sendEmail: "Send an email",
    linkedin: "Open LinkedIn",
    theme: "Toggle light / dark theme",
    language: "Prebaci na srpski",
  },
};

export type Content = typeof en;

const sr: Content = {
  meta: {
    role: "Product Owner",
    roleDetail: "AI proizvodi za finansijske usluge",
    location: "Beograd, Srbija",
    description:
      "Product Owner koji gradi AI softver za banke. Vodim Selectu, AI CRM koji koristi 4+ banke i 500+ aktivnih korisnika.",
    pages: {
      work: {
        title: "Rad",
        description: "Dve studije slučaja iz AI proizvoda za banke i kako svakodnevno vodim proizvod.",
      },
      career: {
        title: "Karijera",
        description: "Od nastave web razvoja, preko prodaje i SAP programa, do AI proizvoda za banke.",
      },
      certificates: {
        title: "Sertifikati",
        description:
          "Sertifikati iz AI-ja, upravljanja proizvodom, agilne isporuke i liderstva — i šta učim sledeće.",
      },
    },
  },

  nav: {
    home: "Početna",
    work: "Rad",
    career: "Karijera",
    certificates: "Sertifikati",
    contact: "Kontakt",
    pages: "Stranice",
    menu: "Meni",
    palette: "Otvori brzu navigaciju",
    theme: "Promeni svetlu i tamnu temu",
    language: "Jezik",
  },

  hero: {
    eyebrow: "Product Owner · Intellya",
    headlineStart: "Pravim AI proizvode koje banke",
    headlineAccent: "zaista koriste.",
    intro:
      "Ja sam Bane. Vodim Selectu, AI CRM koji koristi 4+ banke i 500+ aktivnih korisnika — od prvog demoa do života posle go-live-a.",
    ctaWork: "Pogledaj moj rad",
    ctaContact: "Javi se",
    stamp: "PRODUCT OWNER ✦ AI ZA BANKE ✦ SAP ✦ BEOGRAD ✦ ",
  },

  card: {
    illustration: "Ilustracija",
    title: "SME kreditni proces",
    metric: "Dana do odobrenja",
    was: "bilo je 60",
    steps: [
      "Zahtev primljen",
      "OCR čita izveštaje i kartice",
      "Podaci spakovani u Excel",
      "Pregled analitičara",
      "Kreditna odluka",
    ],
    chip: "~50% manje vremena analitičara",
    replay: "↻ Ponovi",
  },

  ticker: [
    "Product Owner",
    "AI za banke",
    "4+ banke u produkciji",
    "500+ aktivnih korisnika",
    "SQL svakog dana",
    "Claude Code",
    "SAP PaPM",
    "Scrum i Kanban",
    "Od presalesa do go-live-a",
    "Izdanje na svake 2 nedelje",
  ],

  impact: {
    eyebrow: "U brojkama",
    title: "Rezultati koji se",
    accent: "mogu izmeriti.",
    items: [
      {
        prefix: "−",
        value: 67,
        suffix: "%",
        label: "vremena za odobrenje SME kredita",
        detail: "Sa 60 na 20 dana, automatizacijom ručnih koraka u kreditnom procesu.",
      },
      {
        prefix: "~",
        value: 50,
        suffix: "%",
        label: "manje vremena analitičara",
        detail: "Po kreditnoj analizi, otkad OCR čita finansijske izveštaje i kartice.",
      },
      {
        prefix: "",
        value: 500,
        suffix: "+",
        label: "aktivnih korisnika u bankama",
        detail: "U 4+ banke koje koriste Selectu, AI CRM koji vodim.",
      },
      {
        prefix: "",
        value: 14,
        suffix: "",
        label: "dana između izdanja",
        detail: "Uz 10+ inženjera i 3 Product Specialista kojima određujem prioritete.",
      },
    ],
  },

  whatIDo: {
    eyebrow: "Šta radim",
    items: [
      {
        key: "demo",
        verb: "Prezentujem.",
        body: "Vodim presales demo prezentacije i nove banke dovodim do go-live-a.",
      },
      {
        key: "build",
        verb: "Gradim.",
        body: "SQL, Bold BI i Claude Code — pravim prototip pre nego što inženjeri krenu.",
      },
      {
        key: "ship",
        verb: "Isporučujem.",
        body: "Mentorišem 3 Product Specialista i određujem prioritete za 10+ inženjera.",
      },
      {
        key: "fix",
        verb: "Popravljam.",
        body: "Eskalacije i podaci o korišćenju oblikuju roadmap, pa se problemi rešavaju u korenu.",
      },
    ],
  },

  fresh: {
    eyebrow: "Sveže iz štampe",
    title: "I sebe",
    accent: "stalno unapređujem.",
    body: "{new} novih sertifikata u 2026: Claude Academy za AI, a IBM i SkillUp kursevi iz Product Managementa na Courseri za proizvod. Ukupno {total}.",
    cta: "Svi sertifikati",
    newLabel: "novih u 2026.",
    totalLabel: "ukupno sertifikata",
  },

  explore: [
    { href: "/work/", title: "Rad", body: "Dve studije slučaja i ciklusi koje vodim svakog dana." },
    { href: "/career/", title: "Karijera", body: "Sedam izdanja, od nastave do AI-ja za banke." },
    { href: "/certificates/", title: "Sertifikati", body: "{total} završenih, i šta sledi." },
  ],

  work: {
    header: {
      eyebrow: "Rad",
      title: "Rezultati, a ne",
      accent: "puka isporuka.",
      intro: "Dve stvari koje sam isporučio bankama — prebaci svaku između „pre“ i „posle“.",
    },
    labels: {
      tabs: "Studije slučaja",
      problem: "Problem",
      did: "Šta sam uradio",
      before: "Pre",
      after: "Posle",
      compare: "Uporedi pre i posle",
    },
    lending: {
      tab: "Brže SME kreditiranje",
      problem: "Odobravanje kredita malom ili srednjem preduzeću trajalo je 60 dana.",
      approach:
        "Sa timovima banaka za rizik i kredite dao sam prioritet automatizaciji ručnih koraka u kreditnom procesu.",
      before: 60,
      after: 20,
      metric: "Dana do odobrenja SME kredita",
      legend: "1 kvadrat = 1 dan",
    },
    analysis: {
      tab: "AI kreditna analiza",
      problem:
        "Analitičari su za svaku kreditnu analizu ručno prepisivali brojke iz finansijskih izveštaja i kartica u Excel.",
      approach:
        "Definisao sam AI funkcionalnost u kojoj OCR čita izveštaje i kartice kupaca i dobavljača i pakuje podatke u Excel za analitičara, koji ih pregleda. Vreme analitičara po analizi palo je za oko 50%.",
      title: "Jedna kreditna analiza",
      manual: "Ručno",
      time: "Vreme analitičara po analizi",
      steps: [
        { label: "Izveštaji i kartice", detail: "Priloženi uz zahtev" },
        { label: "OCR čita i izdvaja", detail: "Document intelligence" },
        { label: "Podaci spakovani u Excel", detail: "Spremno za analitičara" },
        { label: "Analitičar pregleda", detail: "Procena ostaje na ljudima" },
      ],
      manualSteps: ["Analitičar čita izveštaje i kartice", "Analitičar kuca brojke u Excel"],
    },
    how: {
      title: "Kako radim: dva ciklusa koja se stalno vrte.",
      tabsLabel: "Kako radim",
      lifecycleTab: "Životni ciklus klijenta",
      sprintTab: "Dvonedeljni sprint",
      every: "Svake",
      twoWeeks: "2 nedelje",
      oneRelease: "jedno izdanje",
      stepOf: "Korak {n} od {count}",
      hintRunning: "Vrti se automatski — klikni na bilo koji korak",
      hintPaused: "Klikni na bilo koji korak",
      lifecycle: [
        { step: "Demo", body: "Vodim presales demo prezentacije za banke koje razmatraju proizvod." },
        {
          step: "Onboarding",
          body: "Kada banka potpiše, vodim onboarding, konfigurišem proizvod i pišem funkcionalnu i tehničku dokumentaciju.",
        },
        { step: "UAT", body: "Sprovodim UAT sa korisnicima banke pre go-live-a." },
        { step: "Go-live", body: "Od ugovora do go-live-a za 1–3 meseca." },
        {
          step: "Posle",
          body: "Odgovoran sam za eskalacije i, uz podatke o korišćenju, pretvaram ih u prioritete na roadmapu.",
        },
      ],
      sprint: [
        { step: "Plan", body: "Planiranje sprinta: šta ide u ovo izdanje i zašto." },
        {
          step: "Razrada",
          body: "User stories i kriterijumi prihvatanja, utemeljeni na mojoj SQL analizi produkcionih podataka.",
        },
        { step: "Prototip", body: "Prototip pravim u Claude Code-u pre nego što potrošimo vreme inženjera." },
        { step: "Test", body: "Pišem specifikacije, a zatim testiram ono što inženjeri naprave." },
        { step: "Izdanje", body: "Novo izdanje svake dve nedelje." },
        { step: "Retro", body: "Šta zadržati, šta promeniti — i krug kreće ponovo." },
      ],
    },
  },

  career: {
    header: {
      eyebrow: "Karijera",
      title: "Release notes",
      accent: "jedne karijere.",
      intro: "Nastava, prodaja, SAP konsalting, pa AI za banke — svaka verzija je donela nešto novo.",
    },
    toolkit: "Alati i veštine",
    latest: "Aktuelno",
    graduated: "Diplomirao",
    education: {
      degree: "osnovne studije, Informacione tehnologije",
      school: "Univerzitet u Beogradu (FON)",
      year: "2022",
    },
    releases: [
      {
        version: "v7.0",
        role: "Product Owner — Selecta",
        org: "Intellya",
        period: "2026 — danas",
        current: true,
        summary:
          "Odgovoran sam za roadmap, backlog i metrike uspeha AI CRM-a koji koristi 4+ banke i 500+ aktivnih korisnika. Vodim 3 Product Specialista, određujem prioritete za 10+ inženjera koji isporučuju na svake dve nedelje, deo proizvoda pravim sam i blisko sarađujem sa direktorom proizvoda oko pravca i kompromisa.",
      },
      {
        version: "v6.0",
        role: "Product Specialist",
        org: "Intellya",
        period: "2024 — 2026",
        summary:
          "Isporučio AI kreditni proces za SME kreditiranje: odobravanje skraćeno sa 60 na 20 dana, a vreme analitičara po analizi otprilike prepolovljeno. Nove banke vodio od ugovora do go-live-a za 1–3 meseca.",
        link: { href: "/work/", label: "Pročitaj studiju slučaja" },
      },
      {
        version: "v5.0",
        role: "Product Owner — SAP PaPM",
        org: "msg global solutions",
        period: "2023 — 2024",
        summary:
          "Product Owner na 2 klijentske implementacije SAP Sustainability Control Tower (SCT) starter paketa. Predstavljao pravac i napredak proizvoda rukovodstvu projekta i vodio usvajanje PaPM-a među 100+ enterprise stejkholdera.",
      },
      {
        version: "v4.0",
        role: "PaPM konsultant",
        org: "msg global solutions",
        period: "2022 — 2023",
        summary:
          "Uvodna faza u msg-u: radio kao PaPM konsultant na SAP implementacijama. Unapređen u Product Ownera za šest meseci.",
      },
      {
        version: "v3.0",
        role: "Product Specialist",
        org: "Sistem:i",
        period: "2021 — 2022",
        afterGraduation: true,
        summary:
          "Product Specialist za softver za kafiće, za evidenciju stolova i porudžbina i praćenje zaliha. Blisko sarađivao sa dizajnerima.",
      },
      {
        version: "v2.0",
        role: "Menadžer prodaje",
        org: "Sistem:i (Apple Solution Expert)",
        period: "2020 — 2021",
        summary:
          "Zaključio preko 200.000 € prodaje softvera institucionalnim klijentima — tu je počeo osećaj za proizvod.",
      },
      {
        version: "v1.0",
        role: "Saradnik u nastavi",
        org: "Univerzitet u Beogradu (FON)",
        period: "2019 — 2021",
        summary: "Predavao elektronsko poslovanje i web razvoj; vodio Node.js i radionice 3D modelovanja.",
      },
    ],
    skills: [
      {
        category: "Proizvod",
        items: [
          "Strategija proizvoda",
          "Vođenje roadmapa",
          "Prioritizacija",
          "Discovery",
          "User stories i kriterijumi prihvatanja",
          "Planiranje izdanja",
          "Definisanje KPI-jeva",
        ],
      },
      {
        category: "Životni ciklus klijenta",
        items: [
          "Presales demo prezentacije",
          "Onboarding",
          "UAT",
          "Funkcionalna i tehnička dokumentacija",
          "Eskalacije klijenata",
          "Usvajanje proizvoda",
        ],
      },
      {
        category: "Podaci i AI",
        items: [
          "SQL (napredno)",
          "Bold BI",
          "Analiza produkcionih podataka",
          "Konfiguracija proizvoda",
          "Document intelligence",
          "Claude Code",
          "Višekoračni AI tokovi sa Claude-om",
          "Osnove MCP-a",
        ],
      },
      {
        category: "Agile",
        items: [
          "Scrum",
          "Kanban",
          "Planiranje sprinta",
          "Refinement backloga",
          "Retrospektive",
          "Zavisnosti između timova",
        ],
      },
      { category: "Alati", items: ["Jira", "Confluence", "Figma", "SAP PaPM", "MS Office"] },
      { category: "Jezici", items: ["Srpski — maternji", "Engleski — puno profesionalno znanje"] },
    ],
  },

  certs: {
    header: {
      eyebrow: "Sertifikati",
      title: "Uvek u",
      accent: "sledećem sprintu.",
      intro: "Šta sam završio, na čemu sam sada i šta sledi. Klikni na sertifikat da ga otvoriš.",
    },
    roadmap: [
      { stage: "Sada", title: "Kursevi iz Product Managementa", provider: "IBM i SkillUp · Coursera · 3 kursa završena" },
      { stage: "Sledeće", title: "AI Product Management", provider: "Duke University · Coursera" },
      { stage: "Kasnije", title: "Analytics & Experimentation", provider: "Amplitude Academy" },
    ],
    all: "Svi",
    categories: {
      ai: "AI i Claude",
      product: "Upravljanje proizvodom",
      delivery: "Agile i isporuka",
      soft: "Liderstvo i meke veštine",
      web: "Web razvoj",
    },
    filter: "Filtriraj sertifikate",
    isNew: "Novo",
    view: "Pogledaj sertifikat",
    viewAria: "Pogledaj sertifikat: {title}",
    alt: "Sertifikat: {title}",
    verify: "Proveri",
    close: "Zatvori",
    prev: "Prethodni sertifikat",
    next: "Sledeći sertifikat",
    hint: "← → za listanje, Esc za zatvaranje",
  },

  contact: {
    title: "Hajde da pričamo o",
    accent: "proizvodu.",
    body: "Proizvod, AI u bankarstvu ili pozicija u tvom timu.",
    copy: "Kopiraj",
    copied: "Kopirano",
  },

  footer: {
    jump: "za brzu navigaciju",
  },

  palette: {
    label: "Brza navigacija",
    placeholder: "Pretraži sekcije i akcije…",
    empty: "Ništa ne odgovara upitu „{query}“.",
    jump: "Idi na",
    actions: "Akcije",
    work: "Rad — studije slučaja i kako radim",
    career: "Karijera i veštine",
    copyEmail: "Kopiraj email adresu",
    emailCopied: "Email kopiran",
    sendEmail: "Pošalji email",
    linkedin: "Otvori LinkedIn",
    theme: "Promeni svetlu / tamnu temu",
    language: "Switch to English",
  },
};

export const content: Record<Lang, Content> = { en, sr };

/** Replaces {name} placeholders: fill("{n} new", { n: 10 }) → "10 new". */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}
