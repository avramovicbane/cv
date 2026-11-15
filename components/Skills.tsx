"use client";

import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

const DOTS = ["bg-accent", "bg-pop", "bg-ink", "bg-good", "bg-accent", "bg-pop"];

export default function Skills() {
  const { t } = useT();

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border-[1.5px] border-ink bg-surface">
      {t.career.skills.map((group, i) => (
        <Reveal key={group.category} delay={i * 50}>
          <div className="grid gap-3 p-5 sm:grid-cols-[190px_1fr] sm:items-baseline sm:gap-6 sm:px-6">
            <h3 className="flex items-center gap-2.5 font-medium text-ink">
              <span className={`h-2.5 w-2.5 rounded-full border border-ink ${DOTS[i % DOTS.length]}`} />
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-bg px-2.5 py-1 text-sm text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:-rotate-1 hover:border-ink hover:bg-pop hover:text-on-pop"
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
