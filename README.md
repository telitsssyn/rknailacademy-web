# RK Nail Academy — лендинг

Одностраничный сайт авторской академии маникюра. Next.js 16 + TypeScript + Tailwind CSS v4. Деплой на Vercel.

## Запуск локально

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # производственная сборка
```

## Где править контент

Весь текст и данные вынесены в папку `src/data` — править можно без знания React:

| Файл | Что внутри |
|------|-----------|
| `src/data/site.ts` | Телефон, WhatsApp, адрес, соцсети, ссылка на карту, навигация |
| `src/data/content.ts` | Hero, «Почему выбирают нас», отзывы, «Обо мне», галерея, reels |
| `src/data/services.ts` | Услуги и цены (табы Все/Маникюр/Педикюр) |
| `src/data/courses.ts` | Курсы (название, описание, цена) |

### Кнопки «Записаться»
Ведут в WhatsApp на номер из `site.phoneRaw` с предзаполненным сообщением. Логика — в `src/lib/contact.ts`.

### Карта
В `site.mapEmbedSrc` вставьте `src` из 2ГИС/Яндекс.Карт («Поделиться → встроить»).

## Картинки

Положите файлы в папку `public/` и укажите путь в данных (путь начинается со `/`):

- `public/gallery/` → `content.ts` → `gallery[].src` (например `/gallery/work-1.jpg`)
- `public/courses/` → `courses[].image`
- `public/services/` → `services[].image`
- фото мастера → `about.photo` и hero (в `Hero.tsx`)
- превью reels → `reels[].poster`

Пока пути пустые — показываются серые плейсхолдеры, как в макете.

## Деплой на Vercel

1. Запушить репозиторий на GitHub.
2. На vercel.com → **Add New → Project** → импортировать репозиторий.
3. Vercel сам определит Next.js. Нажать **Deploy** — настройки менять не нужно.
4. (Опционально) Привязать домен в Settings → Domains.
