import { languages, skills } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const DOTS = ["bg-indigo-500", "bg-fuchsia-500", "bg-cyan-500", "bg-amber-500", "bg-emerald-500"];

export default function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((group, i) => (
        <Reveal
          key={group.category}
          delay={i * 70}
          className="h-full"
        >
          <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
                <span className={`h-2.5 w-2.5 rounded-full ${DOTS[i % DOTS.length]}`} />
                {group.category}
              </h3>
              <span className="font-mono text-xs text-muted">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface-2/60 px-3 py-1.5 text-sm text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent-soft hover:text-accent-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
      <Reveal delay={skills.length * 70} className="h-full">
        <div className="h-full rounded-2xl border border-dashed border-line p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Languages</h3>
          <ul className="mt-5 space-y-2 text-ink-2">
            {languages.map((l) => (
              <li key={l} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
