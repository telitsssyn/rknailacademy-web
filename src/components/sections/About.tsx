import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { about } from "@/data/content";
import { bookTrainingHref, bookServiceHref } from "@/lib/contact";

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Media
          src={about.photo}
          alt="Райма Курашовна"
          className="aspect-[4/3] w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {about.title}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
      </div>
    </Section>
  );
}
