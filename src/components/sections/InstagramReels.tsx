import { Section, SectionHeader } from "@/components/ui/Section";
import { ReelPlayer } from "@/components/ReelPlayer";
import { reels } from "@/data/content";
import { site } from "@/data/site";

export function InstagramReels() {
  return (
    <Section id="reels" muted>
      <SectionHeader
        title="Как это выглядит"
        action={{ label: "Смотреть в Instagram", href: site.socials.instagram }}
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {reels.map((reel, i) => (
          <ReelPlayer
            key={i}
            src={reel.src}
            poster={reel.poster || undefined}
            href={reel.href}
          />
        ))}
      </div>
    </Section>
  );
}
