import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

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

export const metadata: Metadata = {
  title: `${site.name} — авторская академия маникюра`,
  description:
    "Авторская академия Раймы Курашовны: обучение маникюру и педикюру с нуля до профессионала. 20+ лет опыта, индивидуальный подход и ногтевой сервис.",
  keywords: [
    "обучение маникюру",
    "курсы маникюра",
    "академия ногтевого сервиса",
    "педикюр обучение",
    "RK Nail Academy",
  ],
  openGraph: {
    title: `${site.name} — авторская академия маникюра`,
    description:
      "Обучение маникюру и педикюру с нуля до профессионала. 20+ лет опыта.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${lora.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
