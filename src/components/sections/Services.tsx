"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { whatsappLink } from "@/lib/contact";

type CategoryId = "all" | "manicure" | "pedicure";

export function Services({ dict: t }: { dict: Dictionary }) {
  const [active, setActive] = useState<CategoryId>("all");

  const visible =
    active === "all"
      ? t.services.items
      : t.services.items.filter((s) => s.category === active);

  return (
    <Section id="services">
      <SectionHeader title={t.services.heading} />

      <div className="mb-6 inline-flex gap-2 rounded-xl bg-section p-1">
        {t.services.categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`h-9 rounded-lg px-4 text-sm font-medium transition-colors ${
              active === cat.id
                ? "bg-white text-ink shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((service) => (
          <div
            key={service.name}
            className="flex flex-col overflow-hidden rounded-card border border-card-border bg-white"
          >
            <Media
              src={service.image}
              alt={service.name}
              rounded="rounded-none"
              className="aspect-[4/3] w-full"
            />
            <div className="flex flex-1 flex-col p-3">
              <h3 className="text-sm font-medium leading-snug">{service.name}</h3>
              <span className="mt-1 mb-3 text-sm font-semibold text-brand">
                {service.price}
              </span>
              <a
                href={whatsappLink(t.whatsapp.bookServiceFor.replace("{name}", service.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                {t.services.bookBtn}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
