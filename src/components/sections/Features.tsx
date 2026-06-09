import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Features({ dict: t }: { dict: Dictionary }) {

  return (
    <Section id="features">
      <h2 className="mb-10 text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.features.heading}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.features.items.map((f) => (
          <div
            key={f.num}
            className="rounded-card border border-card-border bg-white p-6"
          >
            <div className="text-2xl font-semibold text-brand">{f.num}</div>
            <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
