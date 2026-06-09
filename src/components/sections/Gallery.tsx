import { Section, SectionHeader } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Gallery({ dict: t }: { dict: Dictionary }) {

  const items = Array.from({ length: 12 }, (_, i) => ({
    src: `/gallery/work-${i + 1}.jpg`,
    alt: `${t.gallery.itemAlt} ${i + 1}`,
  }));

  return (
    <Section id="gallery">
      <SectionHeader
        title={t.gallery.heading}
        action={{ label: t.gallery.action, href: site.socials.instagram, external: true }}
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
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
