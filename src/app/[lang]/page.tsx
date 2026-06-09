import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { Features } from "@/components/sections/Features";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Courses } from "@/components/sections/Courses";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} />
        <InstagramReels dict={dict} />
        <Features dict={dict} />
        <Reviews dict={dict} />
        <Gallery dict={dict} />
        <Courses dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <Location dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
