import { site } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col gap-4 px-6 pt-16 pb-12 sm:pt-24 sm:pb-16"
    >
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
        {site.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        {site.name}
      </h1>
      <h2 className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
        {site.role} · {site.roleDetail}
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {site.tagline}
      </p>
      <div className="mt-2 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Get in touch
        </a>
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          GitHub
        </a>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
