import { about } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        About
      </h2>
      <p className="max-w-2xl text-base leading-relaxed whitespace-pre-line text-zinc-700 dark:text-zinc-300">
        {about}
      </p>
    </section>
  );
}
