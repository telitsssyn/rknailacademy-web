// Центральный файл с контактами и общими данными.
// Меняйте значения здесь — они подставятся по всему сайту.

export const site = {
  name: "RK Nail Academy",
  brandTop: "Авторская академия",
  brandAccent: "Раймы Курашовны",

  // Телефон в международном формате для отображения
  phoneDisplay: "+7 777 284 25 28",
  // Тот же номер только цифрами — для ссылок tel: и WhatsApp
  phoneRaw: "77772842528",

  address: {
    line1: "Улица Лермонтова, дом 4, 2 этаж",
    line2: "Остановка «Гульдер», пересечение Лермонтова · Сатпаева",
  },

  socials: {
    instagram: "https://instagram.com/", // TODO: вставить профиль
    whatsapp: "https://wa.me/77772842528",
    telegram: "https://t.me/", // TODO: вставить аккаунт
    twogis: "https://2gis.kz/", // TODO: ссылка на карточку 2ГИС
  },

  // iframe-карта 2ГИС / Яндекс. Вставьте src из «Поделиться → встроить».
  mapEmbedSrc:
    "https://yandex.ru/map-widget/v1/?ll=76.945465%2C43.238949&z=15",

  copyrightYear: 2026,
} as const;

export const nav = [
  { label: "Обучение", href: "#courses" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#gallery" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#location" },
] as const;
