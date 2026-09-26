"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Check, Copy, LinkedIn, Mail } from "@/components/Icons";

/** Compact contact block shown at the bottom of every page. */
export default function ContactBand() {
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
    <section id="contact" className="relative overflow-hidden border-t border-line py-16 sm:py-20">
      <div aria-hidden className="blob -bottom-20 left-1/3 h-72 w-72 bg-indigo-400/20 dark:bg-indigo-600/15" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s talk <span className="gradient-text font-serif font-normal italic">product.</span>
          </h2>
          <p className="mt-3 text-ink-2">Product, AI in banking, or a role on your team.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-3 sm:items-start lg:items-end">
            <div className="flex max-w-full items-center gap-2 rounded-full border border-line bg-surface p-1.5 pl-5 shadow-card">
              <a href={`mailto:${site.email}`} className="flex min-w-0 items-center gap-2 font-medium text-ink hover:text-accent-ink">
                <Mail className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{site.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-live="polite"
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  copied ? "bg-good-soft text-good" : "bg-ink text-bg hover:shadow-lg hover:shadow-accent/25"
                }`}
              >
                {copied ? <Check className="animate-pop-in h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <LinkedIn /> LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
