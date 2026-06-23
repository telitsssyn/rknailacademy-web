import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);
  return {
    title: dict.privacy.metaTitle,
    description: dict.privacy.metaDescription,
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1 bg-[#FAFAFA] py-16 sm:py-24">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-card-border bg-white p-8 sm:p-12 shadow-sm prose prose-neutral max-w-none">
            <h1 className="mb-8 text-2xl sm:text-3xl font-bold font-lora text-ink break-words hyphens-auto">{dict.privacy.heading}</h1>

            {dict.privacy.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-ink">{section.title}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mb-4 text-muted leading-relaxed">{p}</p>
                ))}
                {"bullets" in section && section.bullets ? (
                  <ul className="mb-4 list-disc pl-5 text-muted leading-relaxed">
                    {section.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <hr className="my-8 border-card-border" />

            <p className="text-sm text-neutral-400">
              {dict.privacy.lastUpdated}{" "}
              {new Date().toLocaleDateString(
                lang === "en" ? "en-US" : lang === "kk" ? "kk-KZ" : "ru-RU",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
