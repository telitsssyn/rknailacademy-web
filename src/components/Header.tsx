"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/site";
import { bookTrainingHref } from "@/lib/contact";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center" aria-label="RK Nail Academy">
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href={bookTrainingHref}
            target="_blank"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Записаться
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Меню"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-card-border bg-white md:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={bookTrainingHref}
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-brand px-4 text-sm font-medium text-white"
            >
              Записаться
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
