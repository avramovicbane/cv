"use client";

import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { Presentation, Target, Users, Wrench } from "@/components/Icons";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  demo: Presentation,
  build: Wrench,
  ship: Users,
  fix: Target,
};

export default function WhatIDo() {
  const { t } = useT();

  return (
    <section className="border-y border-line bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 font-mono text-xs tracking-widest text-accent-ink uppercase">{t.whatIDo.eyebrow}</p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {t.whatIDo.items.map((item, i) => {
            const Icon = ICONS[item.key];
            return (
              <Reveal key={item.key} delay={i * 90}>
                <div className="group">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border-[1.5px] border-ink bg-bg text-ink transition-all duration-300 group-hover:-rotate-6 group-hover:bg-pop group-hover:text-on-pop">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.verb}
                  </h2>
                  <p className="mt-2 leading-relaxed text-ink-2">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
