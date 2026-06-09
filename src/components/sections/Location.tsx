import { MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { whatsappLink } from "@/lib/contact";

export function Location({ dict: t }: { dict: Dictionary }) {
  const bookTrainingHref = whatsappLink(t.whatsapp.bookTraining);
  const bookServiceHref = whatsappLink(t.whatsapp.bookService);

  return (
    <Section id="location" muted>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.location.heading}
          </h2>

          <div className="mt-5 space-y-3 text-sm text-muted">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                {t.site.addressLine1}
                <br />
                {t.site.addressLine2}
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
              {t.buttons.bookTraining}
            </Button>
            <Button href={bookServiceHref} target="_blank" variant="outline">
              {t.buttons.bookService}
            </Button>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-card border border-card-border">
          <iframe
            src={site.mapEmbedSrc}
            title={t.location.mapTitle}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
