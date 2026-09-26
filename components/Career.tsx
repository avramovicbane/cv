import Link from "next/link";
import { education, releases } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export default function Career() {
  return (
    <ol className="relative">
      <span aria-hidden className="absolute top-3 bottom-3 left-[11px] w-px bg-linear-to-b from-accent via-line to-transparent" />
      {releases.map((r, i) => (
        <li key={r.version}>
          {r.version === "v2.0" && (
            <Reveal>
              <div className="relative flex items-baseline gap-3 pb-8 pl-10">
                <span aria-hidden className="absolute top-1 left-[5px] h-3.5 w-3.5 rotate-45 rounded-[3px] border-2 border-amber-500 bg-bg" />
                <span className="font-mono text-xs text-muted">{education.year}</span>
                <p className="text-sm text-ink-2">
                  <span className="font-medium text-ink">Graduated</span> · {education.degree}, {education.school}
                </p>
              </div>
            </Reveal>
          )}
          <Reveal delay={i * 60}>
            <div className="group relative pb-8 pl-10">
              <span
                aria-hidden
                className={`absolute top-0.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-bg transition-colors ${
                  r.current ? "border-accent" : "border-line group-hover:border-accent/60"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${r.current ? "pulse-dot relative bg-accent text-accent" : "bg-muted/50"}`} />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs font-semibold text-accent-ink">{r.version}</span>
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{r.role}</h3>
                <span className="text-sm text-muted">
                  {r.org} · {r.period}
                </span>
                {r.current && (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-ink">
                    Latest
                  </span>
                )}
              </div>
              <p className="mt-1.5 max-w-2xl leading-relaxed text-ink-2">
                {r.summary}
                {r.link && (
                  <>
                    {" "}
                    <Link href={r.link.href} className="inline-flex items-center gap-1 font-medium text-accent-ink hover:underline">
                      {r.link.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </>
                )}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
