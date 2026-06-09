import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { whatsappLink } from "@/lib/contact";

export function Courses({ dict: t }: { dict: Dictionary }) {

  return (
    <Section id="courses" muted>
      <SectionHeader title={t.courses.heading} />
      <div className="grid gap-5 md:grid-cols-2">
        {t.courses.items.map((course) => (
          <div
            key={course.name}
            className="overflow-hidden flex flex-col rounded-card border border-card-border bg-white"
          >
            <Media
              src={course.image}
              alt={course.name}
              rounded="rounded-none"
              className="aspect-[16/9] w-full"
            />
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {course.description}
              </p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand">
                  {course.price}
                </span>
                <Button
                  href={whatsappLink(t.whatsapp.bookCourse.replace("{name}", course.name))}
                  target="_blank"
                  variant="outline"
                  size="sm"
                >
                  {t.courses.detailsBtn}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
