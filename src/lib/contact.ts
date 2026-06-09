import { site } from "@/data/site";

// Build a WhatsApp link with a pre-filled message.
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.phoneRaw}?text=${text}`;
}
