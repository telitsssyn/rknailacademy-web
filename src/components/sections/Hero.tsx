import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { whatsappLink } from "@/lib/contact";

export function Hero({ dict: t }: { dict: Dictionary }) {
  const bookTrainingHref = whatsappLink(t.whatsapp.bookTraining);
  const bookServiceHref = whatsappLink(t.whatsapp.bookService);

  return (
    <section id="top" className="bg-white pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t.hero.title}
            <br />
            <span className="italic text-brand">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={bookTrainingHref} target="_blank">
              {t.buttons.bookTraining}
            </Button>
            <Button href={bookServiceHref} target="_blank" variant="outline">
              {t.buttons.bookService}
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-brand">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Media
          src="/hero.png"
          alt={t.hero.heroImageAlt}
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
