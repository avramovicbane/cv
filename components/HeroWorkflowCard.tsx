"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import { Check, Sparkles } from "@/components/Icons";

// Which of the five workflow steps (labels in lib/content.ts) the AI does.
const STEPS = [{ ai: false }, { ai: true }, { ai: true }, { ai: false }, { ai: false }];

const STEP_MS = 650;

/**
 * An illustrative (not real-product) credit workflow card for the hero:
 * steps tick off one by one and "days to approval" drops from 60 to 20.
 */
export default function HeroWorkflowCard() {
  const { t } = useT();
  const { card } = t;
  const [done, setDone] = useState(0);
  const [days, setDays] = useState(60);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    setStarted(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(STEPS.length);
      setDays(20);
      return;
    }
    setDone(0);
    setDays(60);
    STEPS.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setDone(i + 1), 500 + i * STEP_MS),
      );
    });
    // Count the days down while the steps complete.
    const start = 500;
    const total = STEPS.length * STEP_MS;
    const frames = 40;
    for (let f = 1; f <= frames; f++) {
      timers.current.push(
        window.setTimeout(
          () => setDays(Math.round(60 - (40 * f) / frames)),
          start + (total * f) / frames,
        ),
      );
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [play]);

  const finished = done === STEPS.length;

  return (
    <div ref={ref} className="relative">
      {/* Floating result chips */}
      <div
        className={`float-y absolute -bottom-5 -left-3 z-10 flex items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-pop px-3 py-1.5 text-xs font-semibold text-on-pop shadow-[2px_2px_0_var(--ink)] transition-all delay-150 duration-500 [animation-delay:-3s] sm:-left-8 ${
          finished ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {card.chip}
      </div>

      <div className="pop-card relative overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
            {card.illustration}
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted">{card.title}</p>
              <p className="mt-1 text-sm text-ink-2">{card.metric}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-6xl leading-none font-semibold tracking-tight text-ink tabular-nums">
                {days}
              </p>
              <p className="mt-1 text-xs text-muted">{card.was}</p>
            </div>
          </div>

          <ol className="mt-6 space-y-2.5">
            {STEPS.map((step, i) => {
              const state =
                i < done ? "done" : i === done && started && !finished ? "active" : "todo";
              return (
                <li
                  key={i}
                  className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-300 ${
                    state === "done"
                      ? "border-line bg-surface-2/60 text-ink"
                      : state === "active"
                        ? "border-accent/40 bg-accent-soft text-ink"
                        : "border-line/60 text-muted"
                  }`}
                >
                  <span
                    className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      state === "done"
                        ? "border-good bg-good text-surface"
                        : state === "active"
                          ? "border-accent text-accent"
                          : "border-line"
                    }`}
                  >
                    {state === "done" && <Check className="animate-pop-in h-3 w-3" />}
                    {state === "active" && (
                      <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </span>
                  <span className="flex-1">{card.steps[i]}</span>
                  {step.ai && (
                    <span className="rounded-md bg-pop px-1.5 py-0.5 font-mono text-[10px] font-bold text-on-pop">
                      AI
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={play}
            className={`mt-5 text-xs font-medium text-accent-ink transition-opacity hover:underline ${
              finished ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {card.replay}
          </button>
        </div>
      </div>
    </div>
  );
}
