import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";
import { bookCourseHref } from "@/lib/contact";

export function Courses() {
  return (
    <Section id="courses" muted>
      <SectionHeader title="Каталог курсов" action={{ label: "Все курсы", href: "#courses" }} />
      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.name}
            className="overflow-hidden rounded-card border border-card-border bg-white"
          >
            <Media
              src={course.image}
              alt={course.name}
              rounded="rounded-none"
              className="aspect-[16/9] w-full"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {course.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-brand">
                  {course.price}
                </span>
                <Button
                  href={bookCourseHref(course.name)}
                  target="_blank"
                  variant="outline"
                  size="sm"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
