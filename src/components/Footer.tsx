import Link from "next/link";
import { Send, MessageCircle, MapPin } from "lucide-react";
import { site } from "@/data/site";

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-white py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {site.copyrightYear} {site.name} ·{" "}
          <Link href="#" className="hover:text-ink">
            Условия и конфиденциальность
          </Link>
        </p>

        <div className="flex items-center gap-3 text-muted">
          <Link href={site.socials.instagram} target="_blank" aria-label="Instagram" className="hover:text-brand">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href={site.socials.telegram} target="_blank" aria-label="Telegram" className="hover:text-brand">
            <Send className="h-5 w-5" />
          </Link>
          <Link href={site.socials.whatsapp} target="_blank" aria-label="WhatsApp" className="hover:text-brand">
            <MessageCircle className="h-5 w-5" />
          </Link>
          <Link href={site.socials.twogis} target="_blank" aria-label="2ГИС" className="hover:text-brand">
            <MapPin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
