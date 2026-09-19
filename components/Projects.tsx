import { projects } from "@/lib/site-config";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-10">
      <h2 className="mb-6 text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Card = (
            <div className="h-full rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          );

          return project.link ? (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {Card}
            </a>
          ) : (
            <div key={project.name}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}
