import { hero, site, BASE_PATH } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import HeroWorkflowCard from "@/components/HeroWorkflowCard";
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Backdrop: grid, abstract mesh texture and drifting color blobs */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `url(${BASE_PATH}/background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, black 40%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent)",
        }}
      />
      <div aria-hidden className="blob -top-32 -left-24 h-96 w-96 bg-indigo-400/30 dark:bg-indigo-600/25" />
      <div
        aria-hidden
        className="blob top-20 -right-24 h-96 w-96 bg-fuchsia-300/30 [animation-delay:-7s] dark:bg-fuchsia-600/15"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pr-4 pl-2.5 text-xs font-medium text-ink-2 backdrop-blur">
              <span className="relative flex h-2 w-2 text-good">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-good" />
              </span>
              {hero.eyebrow} · {site.location.split(",")[0]}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
              {hero.headlineStart}{" "}
              <span className="gradient-text font-serif font-normal italic">
                {hero.headlineAccent}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-ink-2 sm:text-lg">
              Hi, I&apos;m {site.firstName}, {site.role} at Intellya. {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#impact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/25"
              >
                See the impact
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.cvFile}
                download={site.cvDownloadName}
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-5 py-3 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>
              <div className="flex items-center gap-1 pl-1">
                {[
                  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedIn },
                  { href: site.social.github, label: "GitHub", Icon: GitHub },
                  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroWorkflowCard />
        </Reveal>
      </div>

      <a
        href="#impact"
        aria-label="Scroll to impact"
        className="scroll-cue relative mx-auto mt-16 hidden h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink sm:flex"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
