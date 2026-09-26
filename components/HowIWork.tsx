"use client";

import { useEffect, useRef, useState } from "react";
import { lifecycle, sprint } from "@/lib/site-config";

const AUTO_MS = 3800;

/** Auto-advances through `count` steps while visible, until the user takes over. */
function useAutoStep(count: number) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % count),
      AUTO_MS,
    );
    return () => window.clearInterval(id);
  }, [inView, paused, count]);

  const select = (i: number) => {
    setPaused(true);
    setActive(i);
  };

  return { ref, active, select, paused, running: inView && !paused };
}

function Lifecycle() {
  const { ref, active, select, running } = useAutoStep(lifecycle.length);
  const pct = (active / (lifecycle.length - 1)) * 100;

  return (
    <div ref={ref}>
      <div className="relative pb-2">
        <div className="relative sm:px-2">
          <div
            aria-hidden
            className="absolute top-4 h-0.5 rounded-full bg-line sm:top-5"
            style={{ left: `${50 / lifecycle.length}%`, right: `${50 / lifecycle.length}%` }}
          >
            <div
              className="h-0.5 rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 transition-[width] duration-700 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${lifecycle.length}, 1fr)` }}>
            {lifecycle.map((s, i) => (
              <li key={s.step} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-current={i === active ? "step" : undefined}
                  aria-label={s.step}
                  className="group flex flex-col items-center gap-3"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-500 sm:h-10 sm:w-10 sm:text-sm ${
                      i === active
                        ? "scale-110 border-accent bg-accent text-white shadow-lg shadow-accent/30"
                        : i < active
                          ? "border-accent bg-surface text-accent-ink"
                          : "border-line bg-surface text-muted group-hover:border-accent/50"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`hidden text-sm font-medium transition-colors sm:block ${
                      i === active ? "text-ink" : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {s.step}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div
        key={active}
        className="animate-slide-up mt-8 grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-8"
        aria-live="polite"
      >
        <span className="font-display text-6xl leading-none font-semibold text-accent/25 sm:text-7xl">
          0{active + 1}
        </span>
        <div>
          <h4 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            {lifecycle[active].step}
          </h4>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">
            {lifecycle[active].body}
          </p>
        </div>
      </div>
      <AutoHint running={running} />
    </div>
  );
}

function Sprint() {
  const { ref, active, select, running } = useAutoStep(sprint.length);
  const size = 330;
  const r = 128;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;
  const segment = circumference / sprint.length;
  // Progress arc from the top of the ring to the active step.
  const progress = segment * active;

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
      <div className="relative mx-auto" style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90" aria-hidden>
          <circle cx={c} cy={c} r={r} fill="none" stroke="var(--line)" strokeWidth={2} />
          <circle
            cx={c}
            cy={c}
            r={r}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - progress}
            className="transition-[stroke-dashoffset] duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[11px] tracking-widest text-muted uppercase">Every</span>
          <span className="font-display text-4xl font-semibold text-ink">2 weeks</span>
          <span className="mt-1 text-sm text-muted">one release</span>
        </div>
        {sprint.map((s, i) => {
          const angle = (i / sprint.length) * 2 * Math.PI - Math.PI / 2;
          const x = c + r * Math.cos(angle);
          const y = c + r * Math.sin(angle);
          return (
            <button
              key={s.step}
              type="button"
              onClick={() => select(i)}
              aria-current={i === active ? "step" : undefined}
              className={`absolute flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-[11px] font-semibold transition-all duration-500 ${
                i === active
                  ? "scale-115 border-accent bg-accent text-white shadow-lg shadow-accent/30"
                  : "border-line bg-surface text-ink-2 hover:border-accent/50"
              }`}
              style={{ left: x, top: y }}
            >
              {s.step}
            </button>
          );
        })}
      </div>

      <div>
        <div key={active} className="animate-slide-up" aria-live="polite">
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">
            Step {active + 1} of {sprint.length}
          </p>
          <h4 className="mt-2 font-display text-3xl font-semibold text-ink">{sprint[active].step}</h4>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-ink-2">{sprint[active].body}</p>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {sprint.map((s, i) => (
            <li key={s.step}>
              <button
                type="button"
                onClick={() => select(i)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  i === active ? "border-accent bg-accent-soft text-accent-ink" : "border-line text-muted hover:text-ink"
                }`}
              >
                {s.step}
              </button>
            </li>
          ))}
        </ul>
        <AutoHint running={running} />
      </div>
    </div>
  );
}

function AutoHint({ running }: { running: boolean }) {
  return (
    <p className="mt-4 flex items-center gap-2 text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${running ? "bg-good" : "bg-muted/50"}`} />
      {running ? "Playing automatically — click any step to explore" : "Click any step to explore"}
    </p>
  );
}

export default function HowIWork() {
  const [tab, setTab] = useState<"lifecycle" | "sprint">("lifecycle");
  const tabs = [
    { key: "lifecycle", label: "Client lifecycle" },
    { key: "sprint", label: "Two-week sprint" },
  ] as const;

  return (
    <div>
      <div role="tablist" aria-label="How I work" className="mb-8 inline-flex rounded-full border border-line bg-surface p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              tab === t.key ? "bg-ink text-bg" : "text-muted hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={tab} className="animate-fade-in">
        {tab === "lifecycle" ? <Lifecycle /> : <Sprint />}
      </div>
    </div>
  );
}
