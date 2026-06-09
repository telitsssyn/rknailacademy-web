import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../globals.css";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  style: ["italic", "normal"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);
  const title = `${site.name} — ${dict.site.brandTop} ${dict.site.brandAccent}`;
  const description = dict.hero.subtitle;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: [
      "обучение маникюру",
      "курсы маникюра",
      "академия ногтевого сервиса",
      "педикюр обучение",
      "RK Nail Academy",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: lang === "ru" ? "ru_RU" : lang === "kk" ? "kk_KZ" : "en_US",
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "ru" }, { lang: "en" }, { lang: "kk" }];
}

export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${lora.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
