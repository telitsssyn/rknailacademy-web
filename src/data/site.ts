// Центральный файл с контактами и общими данными.
// Меняйте значения здесь — они подставятся по всему сайту.

export const site = {
  name: "RK Nail Academy",
  url: "https://rknail.kz",
  brandTop: "Авторская академия",
  brandAccent: "Раймы Курашовны",

  // Телефон в международном формате для отображения
  phoneDisplay: "+7 777 284 25 28",
  // Тот же номер только цифрами — для ссылок tel: и WhatsApp
  phoneRaw: "77772842528",

  address: {
    line1: "Улица Лермонтова, дом 46, 2 этаж",
    line2: "Остановка «Гульдер», пересечение Лермонтова · Сатпаева",
  },

  socials: {
    instagram: "https://www.instagram.com/rk_nail_academy/",
    whatsapp: "https://wa.me/77772842528",
    telegram: "https://t.me/raima2021",
    twogis: "https://go.2gis.com/CMhZr",
  },

  // Карта с меткой академии (Павлодар). Координаты lon,lat из карточки 2ГИС.
  mapEmbedSrc:
    "https://yandex.ru/map-widget/v1/?ll=76.941837%2C52.290669&z=17&pt=76.941837,52.290669,pm2rdm",

  copyrightYear: 2026,
} as const;

export const nav = [
  { label: "Портфолио", href: "/#gallery" },
  { label: "Обучение", href: "/#courses" },
  { label: "Услуги", href: "/#services" },
  { label: "Обо мне", href: "/#about" },
  { label: "Контакты", href: "/#location" },
] as const;
