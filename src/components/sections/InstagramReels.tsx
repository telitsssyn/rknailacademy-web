import { Section, SectionHeader } from "@/components/ui/Section";
import { ReelPlayer } from "@/components/ReelPlayer";
import { reels } from "@/data/content";
import { site } from "@/data/site";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function InstagramReels({ dict: t }: { dict: Dictionary }) {

  return (
    <Section id="reels" muted>
      <SectionHeader
        title={t.reels.heading}
        action={{ label: t.reels.action, href: site.socials.instagram, external: true }}
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
