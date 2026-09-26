import Link from "next/link";
import { explore } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export default function Explore() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3">
        {explore.map((item, i) => (
          <Reveal key={item.href} delay={i * 90}>
            <Link
              href={item.href}
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <div>
                <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
