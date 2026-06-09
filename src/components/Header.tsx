"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
import type { Locale, Dictionary } from "@/lib/i18n/dictionaries";

const navKeys = ["portfolio", "training", "services", "about", "contacts"] as const;
const navHrefs = {
  portfolio: "/#gallery",
  training: "/#courses",
  services: "/#services",
  about: "/#about",
  contacts: "/#location",
} as const;

const locales: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kk", label: "KZ" },
  { code: "en", label: "EN" },
];

export function Header({ lang, dict: t }: { lang: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const redirectedPathname = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const bookTrainingHref = whatsappLink(t.whatsapp.bookTraining);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center" aria-label="RK Nail Academy">
          <Image
            src="/logo.svg"
            alt="RK Nail Academy"
            width={168}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={`/${lang}${navHrefs[key]}`}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language switcher */}
          <div
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-card-border bg-white px-3 text-sm font-medium"
            role="radiogroup"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4 text-muted" />
            {locales.map((l, i) => (
              <span key={l.code} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="text-card-border">|</span>}
                <Link
                  href={redirectedPathname(l.code)}
                  role="radio"
                  aria-checked={lang === l.code}
                  className={`cursor-pointer transition-colors hover:text-brand ${
                    lang === l.code ? "font-bold text-brand" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

          <Link
            href={bookTrainingHref}
            target="_blank"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            {t.buttons.signUp}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-card-border bg-white md:hidden">
          <nav className="container-page flex flex-col py-3">
            {navKeys.map((key) => (
              <Link
                key={key}
                href={`/${lang}${navHrefs[key]}`}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-ink"
              >
                {t.nav[key]}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div
              className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-card-border bg-white px-4 text-sm font-medium"
              role="radiogroup"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4 text-muted" />
              {locales.map((l, i) => (
                <span key={l.code} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-card-border">|</span>}
                  <Link
                    href={redirectedPathname(l.code)}
                    role="radio"
                    aria-checked={lang === l.code}
                    onClick={() => setOpen(false)}
                    className={`cursor-pointer transition-colors hover:text-brand ${
                      lang === l.code ? "font-bold text-brand" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </span>
              ))}
            </div>

            <Link
              href={bookTrainingHref}
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-medium text-white"
            >
              {t.buttons.signUp}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
