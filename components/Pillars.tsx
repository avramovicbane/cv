import { pillars } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { Presentation, Target, Users, Wrench } from "@/components/Icons";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  win: Presentation,
  build: Wrench,
  lead: Users,
  fix: Target,
};

export default function Pillars() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pillars.map((p, i) => {
        const Icon = ICONS[p.key];
        return (
          <Reveal key={p.key} delay={i * 90} className="h-full">
            <SpotlightCard className="h-full p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs tracking-widest text-muted uppercase">
                  {p.kicker}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-2">{p.body}</p>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  );
}
