import { site } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-4xl flex-col gap-4 overflow-hidden px-6 pt-16 pb-12 sm:pt-24 sm:pb-16"
    >
      {/* Decorative animated color blobs */}
      <div
        className="blob -top-24 -left-24 h-72 w-72 bg-indigo-400/40 dark:bg-indigo-500/30"
        aria-hidden
      />
      <div
        className="blob top-10 -right-20 h-72 w-72 bg-pink-400/30 [animation-delay:-6s] dark:bg-fuchsia-500/20"
        aria-hidden
      />
      <div
        className="blob bottom-0 left-1/3 h-56 w-56 bg-cyan-300/30 [animation-delay:-11s] dark:bg-cyan-500/20"
        aria-hidden
      />

      <Reveal>
        <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          {site.location}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <h2 className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
          {site.role} · {site.roleDetail}
        </h2>
      </Reveal>
      <Reveal delay={240}>
        <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {site.tagline}
        </p>
      </Reveal>
      <Reveal delay={320}>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-[length:150%_100%] bg-left px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-right hover:shadow-lg hover:shadow-fuchsia-500/30"
          >
            Get in touch
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-fuchsia-400 hover:text-fuchsia-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-fuchsia-400 dark:hover:text-fuchsia-400"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
