import { site } from "@/data/site";

// Собирает ссылку на WhatsApp с предзаполненным сообщением.
export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.phoneRaw}?text=${text}`;
}

// Готовые ссылки для типовых кнопок.
export const bookTrainingHref = whatsappLink(
  "Здравствуйте! Хочу записаться на обучение в RK Nail Academy.",
);

export const bookServiceHref = whatsappLink(
  "Здравствуйте! Хочу записаться на услугу в RK Nail Academy.",
);

export function bookServiceForHref(serviceName: string): string {
  return whatsappLink(
    `Здравствуйте! Хочу записаться на услугу: ${serviceName}.`,
  );
}

export function bookCourseHref(courseName: string): string {
  return whatsappLink(
    `Здравствуйте! Хочу узнать подробнее о курсе: ${courseName}.`,
  );
}
