"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/site-config";
import { Sparkles } from "@/components/Icons";

type Mode = "before" | "after";

function Toggle({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div role="radiogroup" aria-label="Compare before and after" className="inline-flex rounded-full border border-line bg-surface-2 p-1 text-xs font-medium">
      {(["before", "after"] as const).map((m) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={mode === m}
          onClick={() => onChange(m)}
          className={`rounded-full px-3.5 py-1.5 capitalize transition-all duration-300 ${
            mode === m ? "bg-surface text-ink shadow-card" : "text-muted hover:text-ink"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}

/** Flips to "after" once the element scrolls into view (after a beat). */
function useAutoAfter(setMode: (m: Mode) => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timer = window.setTimeout(() => setMode("after"), 900);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [setMode]);
  return ref;
}

function Story({ problem, approach }: { problem: string; approach: string }) {
  return (
    <dl className="space-y-5">
      {[
        { k: "Problem", v: problem },
        { k: "What I did", v: approach },
      ].map((r) => (
        <div key={r.k}>
          <dt className="font-mono text-xs tracking-wider text-muted uppercase">{r.k}</dt>
          <dd className="mt-1.5 text-lg leading-relaxed text-ink-2">{r.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function LendingPanel() {
  const cs = caseStudies.lending;
  const [mode, setMode] = useState<Mode>("before");
  const ref = useAutoAfter(setMode);
  const after = mode === "after";

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Story problem={cs.problem} approach={cs.approach} />

      <div ref={ref} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted">Days to approve an SME loan</p>
            <p className="mt-1 flex items-baseline gap-3">
              <span className="text-5xl font-semibold tracking-tight text-ink">{after ? cs.after : cs.before}</span>
              <span
                className={`rounded-full bg-good-soft px-2.5 py-0.5 text-sm font-medium text-good transition-opacity duration-500 ${
                  after ? "opacity-100" : "opacity-0"
                }`}
              >
                −67%
              </span>
            </p>
          </div>
          <Toggle mode={mode} onChange={setMode} />
        </div>

        <div
          className="mt-6 grid grid-cols-10 gap-1.5"
          role="img"
          aria-label={`Each square is one day: ${cs.before} days before, ${cs.after} days after.`}
        >
          {Array.from({ length: cs.before }, (_, i) => {
            const on = !after || i < cs.after;
            return (
              <span
                key={i}
                className={`aspect-square rounded-[4px] transition-all duration-500 ${
                  on
                    ? after
                      ? "bg-accent"
                      : "bg-muted/35"
                    : "scale-75 border border-dashed border-muted/40 bg-transparent"
                }`}
                style={{ transitionDelay: `${after ? (cs.before - i) * 12 : i * 8}ms` }}
              />
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted">1 square = 1 day</p>
      </div>
    </div>
  );
}

function AnalysisPanel() {
  const cs = caseStudies.analysis;
  const [mode, setMode] = useState<Mode>("before");
  const ref = useAutoAfter(setMode);
  const after = mode === "after";

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <Story problem={cs.problem} approach={cs.approach} />

      <div ref={ref} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">One credit assessment</p>
          <Toggle mode={mode} onChange={setMode} />
        </div>

        <ol className="relative mt-6 space-y-3">
          <span aria-hidden className="absolute top-4 bottom-4 left-[15px] w-px bg-line" />
          {cs.steps.map((s, i) => {
            const isAi = i === 1 || i === 2;
            const lit = after && isAi;
            const label = !after && i === 1 ? "Analyst reads statements & ledgers" : !after && i === 2 ? "Analyst writes the analysis" : s.label;
            return (
              <li key={s.label} className="relative flex items-center gap-4">
                <span
                  className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500 ${
                    lit ? "border-accent bg-accent text-white" : "border-line bg-surface text-muted"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {lit ? <Sparkles className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <div
                  className={`flex-1 rounded-xl border px-4 py-2.5 transition-all duration-500 ${
                    lit ? "border-accent/40 bg-accent-soft" : "border-line"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <p className="text-sm font-medium text-ink">{label}</p>
                  <p className="text-xs text-muted">{isAi && !after ? "Manual" : s.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-6">
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-muted">Analyst time per assessment</span>
            <span className="font-semibold text-ink">{after ? "~50%" : "100%"}</span>
          </div>
          <div
            className="mt-2 h-2.5 rounded-full bg-accent-soft"
            role="img"
            aria-label={`Analyst time: ${after ? "about 50%" : "100%"} of the original`}
          >
            <div
              className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${after ? "bg-accent" : "bg-muted/40"}`}
              style={{ width: after ? "50%" : "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const tabs = [
    { key: "lending", label: caseStudies.lending.tab },
    { key: "analysis", label: caseStudies.analysis.tab },
  ] as const;
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("lending");

  return (
    <div className="rounded-3xl border border-line bg-surface-2/40 p-5 sm:p-8 lg:p-10">
      <div role="tablist" aria-label="Case studies" className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            onClick={() => setTab(t.key)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              tab === t.key
                ? "border-ink bg-ink text-bg"
                : "border-line bg-surface text-ink-2 hover:border-accent/50 hover:text-ink"
            }`}
          >
            <span className="font-mono text-xs opacity-60">0{i + 1}</span>
            {t.label}
          </button>
        ))}
      </div>

      <div key={tab} id={`panel-${tab}`} role="tabpanel" aria-labelledby={`tab-${tab}`} className="animate-slide-up">
        {tab === "lending" ? <LendingPanel /> : <AnalysisPanel />}
      </div>
    </div>
  );
}
