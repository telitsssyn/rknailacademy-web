import Link from "next/link";
import { Play } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
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
          <Link
            key={i}
            href={reel.href}
            target="_blank"
            className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-card bg-white"
            style={
              reel.poster
                ? { backgroundImage: `url(${reel.poster})`, backgroundSize: "cover" }
                : undefined
            }
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-300 text-zinc-600 transition-transform group-hover:scale-110">
              <Play className="h-5 w-5 fill-current" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
