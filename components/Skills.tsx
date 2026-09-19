import { skills } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

const CATEGORY_ACCENTS: Record<string, string> = {
  Product:
    "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25",
  Agile:
    "bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200 dark:bg-fuchsia-500/15 dark:text-fuchsia-300 dark:hover:bg-fuchsia-500/25",
  "Data & AI":
    "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:hover:bg-cyan-500/25",
  Tools:
    "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:hover:bg-amber-500/25",
  Languages:
    "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25",
};

const DEFAULT_ACCENT =
  "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-10">
      <Reveal>
        <h2 className="mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          Skills
        </h2>
      </Reveal>
      <div className="flex flex-col gap-5">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
                      CATEGORY_ACCENTS[group.category] ?? DEFAULT_ACCENT
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
