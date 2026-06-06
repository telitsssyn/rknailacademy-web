import { MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { bookTrainingHref, bookServiceHref } from "@/lib/contact";

export function Location() {
  return (
    <Section id="location" muted>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Где нас найти
          </h2>

          <div className="mt-5 space-y-3 text-sm text-muted">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </p>
            <a
              href={`tel:+${site.phoneRaw}`}
              className="flex items-center gap-2 font-medium text-brand"
            >
              <Phone className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={bookTrainingHref} target="_blank">
              Записаться на обучение
            </Button>
            <Button href={bookServiceHref} target="_blank" variant="outline">
              Записаться на услугу
            </Button>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-card border border-card-border">
          <iframe
            src={site.mapEmbedSrc}
            title="Карта проезда"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
