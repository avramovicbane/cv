import { highlights } from "@/lib/site-config";

export default function Highlights() {
  return (
    <section className="border-y border-zinc-800/10 bg-zinc-50 dark:border-zinc-100/10 dark:bg-zinc-900/40">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {item.value}
            </div>
            <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
