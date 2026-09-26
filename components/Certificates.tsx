"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  certificates,
  learningRoadmap,
  type CertCategory,
  type Certificate,
} from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from "@/components/Icons";

const FILTERS: ("All" | CertCategory)[] = [
  "All",
  "Agile & delivery",
  "Leadership & soft skills",
  "Web development",
];

function Lightbox({
  items,
  index,
  onClose,
  onMove,
}: {
  items: Certificate[];
  index: number;
  onClose: () => void;
  onMove: (delta: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const cert = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [onClose, onMove]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="animate-fade-in fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="animate-slide-up relative w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{cert.title}</p>
            <p className="text-xs text-muted">
              {cert.issuer}
              {cert.date && ` · ${cert.date}`}
              {cert.hours && ` · ${cert.hours}`}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-2 hover:border-accent/50 hover:text-ink sm:inline-flex"
              >
                Verify <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-ink"
            >
              <Close />
            </button>
          </div>
        </div>
        <div className="relative bg-surface-2">
          <Image
            key={cert.image}
            src={cert.image}
            alt={`Certificate: ${cert.title}`}
            width={1100}
            height={818}
            className="animate-fade-in h-auto w-full"
          />
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onMove(-1)}
                aria-label="Previous certificate"
                className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-card backdrop-blur hover:scale-105"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => onMove(1)}
                aria-label="Next certificate"
                className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-card backdrop-blur hover:scale-105"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
        <p className="px-5 py-2.5 text-center font-mono text-xs text-muted">
          {index + 1} / {items.length} · Use ← → to browse, Esc to close
        </p>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const move = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  return (
    <div>
      {/* Learning roadmap — Now / Next / Later */}
      <Reveal>
        <div className="mb-12 grid gap-3 md:grid-cols-3">
          {learningRoadmap.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? "gradient-border" : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    i === 0 ? "bg-accent text-white" : "bg-surface-2 text-ink-2"
                  }`}
                >
                  {item.stage}
                </span>
                {i === 0 && (
                  <span className="flex items-center gap-1.5 text-xs text-good">
                    <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-good" />
                    In progress
                  </span>
                )}
              </div>
              <p className="mt-3 font-medium text-ink">{item.title}</p>
              <p className="mt-0.5 text-sm text-muted">{item.provider}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Certificates */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Filter certificates" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f === "All" ? certificates.length : certificates.filter((c) => c.category === f).length;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300 ${
                  filter === f
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface text-ink-2 hover:border-accent/50 hover:text-ink"
                }`}
              >
                {f} <span className="ml-1 font-mono text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <ul key={filter} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {visible.map((c, i) => (
          <li
            key={c.title}
            className="animate-slide-up"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="relative block overflow-hidden bg-surface-2 text-left"
                aria-label={`View certificate: ${c.title}`}
              >
                <Image
                  src={c.image}
                  alt=""
                  width={1100}
                  height={818}
                  loading="lazy"
                  className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                  <span className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-ink shadow-card">
                    View certificate
                  </span>
                </span>
              </button>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="flex-1 text-sm leading-snug font-medium text-ink sm:text-base">{c.title}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs text-muted">
                  <span>
                    {c.issuer}
                    {c.date && ` · ${c.date}`}
                    {c.hours && ` · ${c.hours}`}
                  </span>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-ink-2 hover:text-accent-ink"
                    >
                      Verify <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} onClose={close} onMove={move} />
      )}
    </div>
  );
}
