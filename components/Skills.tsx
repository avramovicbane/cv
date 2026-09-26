import { languages, skills } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const DOTS = ["bg-indigo-500", "bg-fuchsia-500", "bg-cyan-500", "bg-amber-500", "bg-emerald-500"];

export default function Skills() {
  const rows = [...skills, { category: "Languages", items: languages }];
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {rows.map((group, i) => (
        <Reveal key={group.category} delay={i * 50}>
          <div className="grid gap-3 p-5 sm:grid-cols-[170px_1fr] sm:items-baseline sm:gap-6 sm:px-6">
            <h3 className="flex items-center gap-2.5 font-medium text-ink">
              <span className={`h-2 w-2 rounded-full ${DOTS[i % DOTS.length]}`} />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface-2/60 px-2.5 py-1 text-sm text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-accent-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
