import { site } from "@/lib/site-config";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-4xl overflow-hidden px-6 py-16 text-center sm:text-left"
    >
      <div
        className="blob top-0 right-0 h-64 w-64 bg-indigo-400/20 dark:bg-indigo-500/15"
        aria-hidden
      />
      <Reveal>
        <h2 className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
          Contact
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Want to get in touch? Feel free to reach out — I&apos;m happy to talk
          about roles, projects, or collaboration.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-linear-to-r from-indigo-500 via-fuchsia-500 to-pink-500 bg-[length:150%_100%] bg-left px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-right hover:shadow-lg hover:shadow-fuchsia-500/30"
          >
            {site.email}
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
      {site.phone && (
        <Reveal delay={220}>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
          </p>
        </Reveal>
      )}
    </section>
  );
}
