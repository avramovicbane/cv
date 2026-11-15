"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

/** Counts from 0 to `value` once the number scrolls into view. */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(value * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{shown}</span>;
}

const TILT = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[1.5deg]"];

export default function Impact() {
  const { t } = useT();
  const { impact } = t;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">{impact.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl">
            {impact.title} <span className="marker font-serif font-normal italic">{impact.accent}</span>
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impact.items.map((item, i) => (
            <li key={item.label}>
              <Reveal delay={i * 90} className="h-full">
                <div
                  className={`pop-card pop-hover flex h-full flex-col rounded-2xl p-6 hover:rotate-0 ${TILT[i % TILT.length]}`}
                >
                  <p className="font-display text-6xl leading-none font-semibold tracking-tight text-ink tabular-nums">
                    <span className="text-accent">{item.prefix}</span>
                    <CountUp value={item.value} />
                    <span className="text-accent">{item.suffix}</span>
                  </p>
                  <p className="mt-4 font-medium text-ink">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{item.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
