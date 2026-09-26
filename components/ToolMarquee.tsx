const ITEMS = [
  "SQL",
  "Bold BI",
  "n8n",
  "Claude Code",
  "Jira",
  "Confluence",
  "Figma",
  "SAP PaPM",
  "Scrum",
  "Kanban",
  "LLM feature specs",
  "Document intelligence",
  "UAT",
  "Presales demos",
];

export default function ToolMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-line bg-surface/50 py-5"
      aria-label={`Tools and practices: ${ITEMS.join(", ")}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bg to-transparent"
      />
      <ul aria-hidden className="marquee-track flex w-max items-center gap-10">
        {row.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-10 font-display text-lg font-medium whitespace-nowrap text-muted transition-colors hover:text-ink"
          >
            {item}
            <span className="text-accent/60">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
