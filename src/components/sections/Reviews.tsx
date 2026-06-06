import { Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { reviews } from "@/data/content";
import { site } from "@/data/site";

export function Reviews() {
  return (
    <Section id="reviews" muted>
      <SectionHeader
        title="Отзывы"
        action={{ label: "Смотреть все отзывы в 2ГИС", href: site.socials.twogis }}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="flex flex-col rounded-card border border-card-border bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {r.author.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-medium">{r.author}</div>
                <div className="text-xs text-muted">{r.date}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: r.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
