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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <InstagramReels />
        <Features />
        <Reviews />
        <Gallery />
        <Courses />
        <Services />
        <About />
        <Location />
      </main>
      <Footer />
    </>
  );
}
