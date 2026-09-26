"use client";

import { useState } from "react";
import { education, releases } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ChevronDown } from "@/components/Icons";

export default function Journey() {
  const [open, setOpen] = useState<Set<string>>(
    () => new Set([releases[0].version, releases[1].version]),
  );

  const toggle = (v: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(v)) next.delete(v);
      else next.add(v);
      return next;
    });

  const allOpen = open.size === releases.length;

  return (
    <div>
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() =>
            setOpen(allOpen ? new Set() : new Set(releases.map((r) => r.version)))
          }
          className="text-sm font-medium text-accent-ink hover:underline"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <ol className="relative">
        <span aria-hidden className="absolute top-2 bottom-2 left-[11px] w-px bg-linear-to-b from-accent via-line to-line sm:left-[170px]" />
        {releases.map((r, i) => {
          const isOpen = open.has(r.version);
          return (
            <li key={r.version}>
              {/* Education milestone sits between the internship and the sales role */}
              {r.version === "v2.0" && (
                <Reveal>
                  <div className="relative mb-8 grid gap-2 pl-10 sm:grid-cols-[150px_1fr] sm:gap-10 sm:pl-0">
                    <p className="font-mono text-xs text-muted sm:pt-1 sm:text-right">{education.year}</p>
                    <span aria-hidden className="absolute top-1 left-[5px] h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-amber-500 bg-bg sm:left-[163px]" />
                    <p className="text-sm text-ink-2 sm:pl-2">
                      <span className="font-medium text-ink">Graduated</span> — {education.degree},{" "}
                      {education.school}
                    </p>
                  </div>
                </Reveal>
              )}

              <Reveal delay={i * 60}>
                <div className="relative mb-8 grid gap-3 pl-10 sm:grid-cols-[150px_1fr] sm:gap-10 sm:pl-0">
                  <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1 sm:pt-4">
                    <span className="font-mono text-sm font-semibold text-ink">{r.version}</span>
                    <span className="text-xs text-muted sm:text-right">{r.period}</span>
                  </div>

                  <span
                    aria-hidden
                    className={`absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-bg sm:top-5 sm:left-[158px] ${
                      r.current ? "border-accent" : "border-line"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full ${r.current ? "pulse-dot relative bg-accent text-accent" : "bg-muted/50"}`} />
                  </span>

                  <div
                    className={`rounded-2xl border bg-surface transition-all duration-300 sm:ml-2 ${
                      isOpen ? "border-line shadow-card" : "border-line hover:border-accent/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(r.version)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{r.role}</h3>
                          {r.current && (
                            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
                              Latest release
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted">
                          {r.org}
                          {r.orgNote && <span className="hidden sm:inline"> · {r.orgNote}</span>}
                        </p>
                        <p className="mt-3 text-ink-2">{r.summary}</p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-2.5 border-t border-line px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                          {r.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
