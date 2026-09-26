"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/lib/site-config";
import { toggleTheme } from "@/lib/theme";
import { OPEN_PALETTE_EVENT } from "@/components/Nav";
import { ArrowRight, Download, GitHub, LinkedIn, Mail, Search, Copy, Sparkles } from "@/components/Icons";

type Command = {
  id: string;
  label: string;
  group: "Jump to" | "Actions";
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
};

const go = (hash: string) => () => {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", hash);
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = useMemo(
    () => [
      { id: "top", label: "Home", group: "Jump to", icon: ArrowRight, run: go("#top") },
      { id: "impact", label: "Impact & case studies", group: "Jump to", icon: ArrowRight, run: go("#impact") },
      { id: "what", label: "What I do", group: "Jump to", icon: ArrowRight, run: go("#what-i-do") },
      { id: "work", label: "How I work", group: "Jump to", icon: ArrowRight, run: go("#work") },
      { id: "journey", label: "Career journey", group: "Jump to", icon: ArrowRight, run: go("#journey") },
      { id: "skills", label: "Skills", group: "Jump to", icon: ArrowRight, run: go("#skills") },
      { id: "learning", label: "Certificates & learning", group: "Jump to", icon: ArrowRight, run: go("#learning") },
      { id: "contact", label: "Contact", group: "Jump to", icon: ArrowRight, run: go("#contact") },
      {
        id: "cv",
        label: "Download CV (PDF)",
        group: "Actions",
        icon: Download,
        run: () => {
          const a = document.createElement("a");
          a.href = site.cvFile;
          a.download = site.cvDownloadName;
          a.click();
        },
      },
      {
        id: "copy",
        label: "Copy email address",
        group: "Actions",
        hint: site.email,
        icon: Copy,
        run: () => {
          navigator.clipboard
            ?.writeText(site.email)
            .then(() => setToast("Email copied"))
            .catch(() => (window.location.href = `mailto:${site.email}`));
        },
      },
      { id: "mail", label: "Send an email", group: "Actions", icon: Mail, run: () => (window.location.href = `mailto:${site.email}`) },
      { id: "li", label: "Open LinkedIn", group: "Actions", icon: LinkedIn, run: () => window.open(site.social.linkedin, "_blank", "noopener") },
      { id: "gh", label: "Open GitHub", group: "Actions", icon: GitHub, run: () => window.open(site.social.github, "_blank", "noopener") },
      { id: "theme", label: "Toggle light / dark theme", group: "Actions", icon: Sparkles, run: toggleTheme },
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.hint ?? ""} ${c.group}`.toLowerCase().includes(q));
  }, [query, commands]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const runAt = useCallback(
    (i: number) => {
      const cmd = results[i];
      if (!cmd) return;
      close();
      // Let the dialog close before scrolling / opening links.
      window.setTimeout(cmd.run, 10);
    },
    [results, close],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      window.clearTimeout(t);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 1800);
    return () => window.clearTimeout(t);
  }, [toast]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(cursor);
    } else if (e.key === "Escape") {
      close();
    }
  };

  let lastGroup = "";

  return (
    <>
      {open && (
        <div
          className="animate-fade-in fixed inset-0 z-[90] flex items-start justify-center bg-black/50 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            className="animate-slide-up w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="h-4 w-4 text-muted" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Search sections and actions…"
                aria-label="Search sections and actions"
                aria-activedescendant={results[cursor] ? `cmd-${results[cursor].id}` : undefined}
                aria-controls="cmd-list"
                className="h-14 flex-1 bg-transparent text-ink outline-none placeholder:text-muted focus-visible:outline-none"
              />
              <kbd className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                Esc
              </kbd>
            </div>
            <ul id="cmd-list" role="listbox" className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches “{query}”.</li>
              )}
              {results.map((c, i) => {
                const header = c.group !== lastGroup ? c.group : null;
                lastGroup = c.group;
                const Icon = c.icon;
                return (
                  <li key={c.id} role="presentation">
                    {header && (
                      <p className="px-3 pt-3 pb-1.5 font-mono text-[10px] tracking-widest text-muted uppercase">
                        {header}
                      </p>
                    )}
                    <button
                      id={`cmd-${c.id}`}
                      type="button"
                      role="option"
                      aria-selected={i === cursor}
                      onMouseMove={() => setCursor(i)}
                      onClick={() => runAt(i)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                        i === cursor ? "bg-accent-soft text-ink" : "text-ink-2"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${i === cursor ? "text-accent-ink" : "text-muted"}`} />
                      <span className="flex-1">{c.label}</span>
                      {c.hint && <span className="hidden text-xs text-muted sm:inline">{c.hint}</span>}
                      {i === cursor && <span className="font-mono text-[10px] text-muted">↵</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="animate-slide-up fixed bottom-6 left-1/2 z-[95] -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg shadow-lg"
        >
          {toast}
        </div>
      )}
    </>
  );
}
