"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Check, Copy, Download, GitHub, LinkedIn, Mail } from "@/components/Icons";

export default function Contact() {
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
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="blob top-10 left-1/4 h-80 w-80 bg-indigo-400/25 dark:bg-indigo-600/20" />
      <div aria-hidden className="blob right-1/4 bottom-0 h-72 w-72 bg-pink-300/25 [animation-delay:-9s] dark:bg-fuchsia-600/15" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent-ink uppercase">07 — Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-7xl">
            Let&apos;s talk <span className="gradient-text font-serif font-normal italic">product.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            Product, AI in financial services, or a role on your team — I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <div className="flex items-center justify-between gap-2 rounded-full border border-line bg-surface p-1.5 pl-5 shadow-card">
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 truncate font-medium text-ink hover:text-accent-ink">
                <Mail className="h-4 w-4 shrink-0 text-muted" />
                <span className="truncate">{site.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  copied ? "bg-good-soft text-good" : "bg-ink text-bg hover:shadow-lg hover:shadow-accent/25"
                }`}
                aria-live="polite"
              >
                {copied ? <Check className="animate-pop-in h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <LinkedIn /> LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <GitHub /> GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.cvFile}
              download={site.cvDownloadName}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" /> Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-10 text-sm text-muted">
            {site.location} ·{" "}
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-ink">
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
