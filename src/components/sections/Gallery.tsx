import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { gallery } from "@/data/content";
import { site } from "@/data/site";

export function Gallery() {
  return (
    <Section id="gallery">
      <SectionHeader
        title="Наши работы"
        action={{ label: "Вся галерея", href: site.socials.instagram }}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((item, i) => (
          <Media
            key={i}
            src={item.src || undefined}
            alt={item.alt}
            className="aspect-[4/3] w-full"
          />
        ))}
      </div>
    </Section>
  );
}
