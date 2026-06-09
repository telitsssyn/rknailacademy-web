import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { whatsappLink } from "@/lib/contact";

export function About({ dict: t }: { dict: Dictionary }) {
  const bookTrainingHref = whatsappLink(t.whatsapp.bookTraining);
  const bookServiceHref = whatsappLink(t.whatsapp.bookService);

  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Media
          src="/about.png"
          alt={t.about.photoAlt}
          className="aspect-[4/3] w-full"
        />
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.about.heading}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
      </div>
    </Section>
  );
}
