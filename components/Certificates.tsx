"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CERT_CATEGORIES,
  certificates,
  isNewCert,
  type CertCategory,
  type Certificate,
} from "@/lib/site-config";
import { fill, type Content } from "@/lib/content";
import { formatHours, formatMonth, type Lang } from "@/lib/lang";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from "@/components/Icons";

type Filter = "all" | CertCategory;

/** "Udemy · Dec 2022 · 4 h" */
function certMeta(lang: Lang, c: Certificate): string {
  return [c.issuer, c.date && formatMonth(lang, c.date), c.hours && formatHours(lang, c.hours)]
    .filter(Boolean)
    .join(" · ");
}

function Lightbox({
  items,
  index,
  labels,
  lang,
  onClose,
  onMove,
}: {
  items: Certificate[];
  index: number;
  labels: Content["certs"];
  lang: Lang;
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

  const arrow =
    "absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-ink bg-surface text-ink shadow-[2px_2px_0_var(--ink)] transition-transform hover:scale-110";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="animate-fade-in fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="animate-slide-up relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl border-[1.5px] border-ink bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{cert.title}</p>
            <p className="text-xs text-muted">{certMeta(lang, cert)}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-2 hover:border-ink hover:text-ink sm:inline-flex"
              >
                {labels.verify} <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-ink"
            >
              <Close />
            </button>
          </div>
        </div>
        <div className="relative min-h-0 bg-surface-2">
          <Image
            key={cert.image}
            src={cert.image}
            alt={fill(labels.alt, { title: cert.title })}
            width={cert.size[0]}
            height={cert.size[1]}
            className="animate-fade-in mx-auto h-auto max-h-[70vh] w-auto max-w-full"
          />
          {items.length > 1 && (
            <>
              <button type="button" onClick={() => onMove(-1)} aria-label={labels.prev} className={`${arrow} left-3`}>
                <ChevronLeft />
              </button>
              <button type="button" onClick={() => onMove(1)} aria-label={labels.next} className={`${arrow} right-3`}>
                <ChevronRight />
              </button>
            </>
          )}
        </div>
        <p className="px-5 py-2.5 text-center font-mono text-xs text-muted">
          {index + 1} / {items.length} · {labels.hint}
        </p>
      </div>
    </div>
  );
}

export default function Certificates() {
  const { t, lang } = useT();
  const labels = t.certs;
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const move = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length],
  );

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: labels.all, count: certificates.length },
    ...CERT_CATEGORIES.map((key) => ({
      key,
      label: labels.categories[key],
      count: certificates.filter((c) => c.category === key).length,
    })),
  ];

  return (
    <div>
      {/* Learning roadmap — Now / Next / Later */}
      <ol className="mb-12 grid gap-4 md:grid-cols-3">
        {labels.roadmap.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 80} className="h-full">
              <div
                className={`h-full rounded-2xl p-5 ${
                  i === 0 ? "pop-card" : "border-[1.5px] border-dashed border-line bg-surface/50"
                }`}
              >
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    i === 0 ? "bg-pop text-on-pop" : "bg-surface-2 text-ink-2"
                  }`}
                >
                  {i === 0 && <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-current" />}
                  {item.stage}
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm text-muted">{item.provider}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div role="tablist" aria-label={labels.filter} className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-sm transition-all duration-200 ${
              filter === f.key
                ? "border-ink bg-ink text-bg"
                : "border-line bg-surface text-ink-2 hover:border-ink hover:text-ink"
            }`}
          >
            {f.label} <span className="ml-1 font-mono text-xs opacity-60">{f.count}</span>
          </button>
        ))}
      </div>

      <ul key={filter} className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {visible.map((c, i) => (
          <li key={c.title} className="animate-slide-up" style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
            <div className="pop-card pop-hover group flex h-full flex-col overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="relative block overflow-hidden border-b-[1.5px] border-ink bg-surface-2 text-left"
                aria-label={fill(labels.viewAria, { title: c.title })}
              >
                <Image
                  src={c.image}
                  alt=""
                  width={c.size[0]}
                  height={c.size[1]}
                  loading="lazy"
                  className="aspect-[4/3] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {isNewCert(c) && (
                  <span className="absolute top-2 left-2 -rotate-3 rounded-md border-[1.5px] border-ink bg-pop px-1.5 py-0.5 text-[11px] font-bold text-on-pop">
                    {labels.isNew}
                  </span>
                )}
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                  <span className="rounded-full border-[1.5px] border-ink bg-surface px-3.5 py-1.5 text-xs font-medium text-ink">
                    {labels.view}
                  </span>
                </span>
              </button>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="flex-1 text-sm leading-snug font-medium text-ink sm:text-base">{c.title}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs text-muted">
                  <span>{certMeta(lang, c)}</span>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-ink-2 hover:text-accent-ink"
                    >
                      {labels.verify} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} labels={labels} lang={lang} onClose={close} onMove={move} />
      )}
    </div>
  );
}
