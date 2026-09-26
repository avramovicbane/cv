"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a value like "67%", "~50%", "500+" or "€200K+" up from 0 once it
 * scrolls into view. The prefix/suffix around the number stay fixed.
 */
export default function Counter({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : null;
  const suffix = match?.[3] ?? "";

  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) {
          setDisplay(target);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  if (target === null) return <span>{value}</span>;

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden>
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
