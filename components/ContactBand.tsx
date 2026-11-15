"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";
import { useT } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Check, Copy, LinkedIn, Mail } from "@/components/Icons";

/** Contact block shown at the bottom of every page. */
export default function ContactBand() {
  const { t } = useT();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section id="contact" className="border-t-[1.5px] border-ink bg-accent py-16 text-on-accent sm:py-20 dark:border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">
            {t.contact.title} <span className="marker font-serif font-normal italic">{t.contact.accent}</span>
          </h2>
          <p className="mt-4 text-lg opacity-90">{t.contact.body}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-3 sm:items-start lg:items-end">
            <div className="flex max-w-full items-center gap-2 rounded-full border-[1.5px] border-ink bg-surface p-1.5 pl-5 shadow-[4px_4px_0_var(--ink)]">
              <a
                href={`mailto:${site.email}`}
                className="flex min-w-0 items-center gap-2 font-medium text-ink hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{site.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  copied ? "bg-pop text-on-pop" : "bg-ink text-bg hover:scale-105"
                }`}
              >
                {copied ? <Check className="animate-pop-in h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-surface px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)]"
            >
              <LinkedIn /> LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
