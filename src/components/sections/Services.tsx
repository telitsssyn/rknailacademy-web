"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import {
  services,
  serviceCategories,
  type ServiceCategory,
} from "@/data/services";
import { bookServiceForHref } from "@/lib/contact";

export function Services() {
  const [active, setActive] = useState<ServiceCategory | "all">("all");

  const visible =
    active === "all"
      ? services
      : services.filter((s) => s.category === active);

  return (
    <Section id="services">
      <SectionHeader title="Запишитесь к мастеру" action={{ label: "Весь прайс", href: "#services" }} />

      <div className="mb-6 inline-flex gap-2 rounded-xl bg-section p-1">
        {serviceCategories.map((cat) => (
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
              <span className="mt-1 text-sm font-semibold text-brand">
                {service.price}
              </span>
              <a
                href={bookServiceForHref(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-brand px-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Записаться
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
