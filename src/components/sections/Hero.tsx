import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { hero } from "@/data/content";
import { bookTrainingHref, bookServiceHref } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="bg-white pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {hero.title}
            <br />
            <span className="italic text-brand">{hero.titleAccent}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={bookTrainingHref} target="_blank">
              Записаться на обучение
            </Button>
            <Button href={bookServiceHref} target="_blank" variant="outline">
              Записаться на услугу
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-brand">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Media
          src="/hero.png"
          alt="Райма Курашовна в академии"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
