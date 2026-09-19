import { site } from "@/lib/site-config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-16 text-center sm:text-left"
    >
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        Contact
      </h2>
      <p className="mb-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Want to get in touch? Feel free to reach out — I&apos;m happy to talk
        about roles, projects, or collaboration.
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {site.email}
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
