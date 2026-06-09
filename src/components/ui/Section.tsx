import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean; // светло-серый фон
};

export function Section({ id, children, className = "", muted }: SectionProps) {
  return (
    <section
      id={id}
      className={`${muted ? "bg-section" : "bg-white"} py-16 sm:py-20 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

type HeaderProps = {
  title: string;
  action?: { label: string; href: string; external?: boolean };
};

export function SectionHeader({ title, action }: HeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {action ? (
        <Link
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-card-border bg-white px-4 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
