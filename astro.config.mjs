// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * Публичная документация TeleGain.
 *
 * `site` задан явно: без него Astro не построит абсолютные canonical и корректный
 * sitemap. При переезде на собственный домен меняется только это значение —
 * все внутренние ссылки относительные.
 */
const SITE_URL = 'https://telegain-guides.github.io';
const OFFICIAL_SITE = 'https://telegain.net/ru';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    starlight({
      // Заголовок задан по локалям: иначе суффикс <title> и подпись в шапке
      // остаются русскими на английских и украинских страницах.
      // Ключ — код языка (`ru`), а не имя локали (`root`).
      title: {
        ru: 'Документация TeleGain',
        uk: 'Документація TeleGain',
        en: 'TeleGain Documentation',
      },
      description:
        'Пошаговые руководства по модулям TeleGain: нейрокомментинг, прогрев аккаунтов, ' +
        'инвайтинг, рассылки, парсеры и работа с прокси.',
      // Русский — корень сайта; украинский и английский живут в подпапках.
      // Starlight сам расставит hreflang между локалями одной страницы.
      defaultLocale: 'root',
      locales: {
        root: { label: 'Русский', lang: 'ru' },
        uk: { label: 'Українська', lang: 'uk' },
        en: { label: 'English', lang: 'en' },
      },
      head: [
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'Документация TeleGain' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/telegain-guides' },
        { icon: 'external', label: 'Официальный сайт', href: OFFICIAL_SITE },
      ],
      editLink: {
        baseUrl: 'https://github.com/telegain-guides/telegain-guides.github.io/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        {
          label: 'Начало работы',
          translations: { uk: 'Початок роботи', en: 'Getting started' },
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Модули',
          translations: { uk: 'Модулі', en: 'Modules' },
          items: [{ autogenerate: { directory: 'modules' } }],
        },
        {
          label: 'Правила и безопасность',
          translations: { uk: 'Правила та безпека', en: 'Rules and security' },
          items: [
            {
              label: 'Диагностика запусков',
              translations: { uk: 'Діагностика запусків', en: 'Troubleshooting runs' },
              slug: 'troubleshooting',
            },
            {
              label: 'Безопасность аккаунтов и данных',
              translations: { uk: 'Безпека акаунтів і даних', en: 'Account and data security' },
              slug: 'security',
            },
            {
              label: 'Ответственное использование',
              translations: { uk: 'Відповідальне використання', en: 'Responsible use' },
              slug: 'responsible-use',
            },
          ],
        },
        {
          label: 'Справка',
          translations: { uk: 'Довідка', en: 'Reference' },
          items: [
            {
              label: 'Частые вопросы',
              translations: { uk: 'Часті питання', en: 'FAQ' },
              slug: 'faq',
            },
            {
              label: 'О документации',
              translations: { uk: 'Про документацію', en: 'About' },
              slug: 'about',
            },
          ],
        },
      ],
      customCss: ['./src/styles/telegain.css'],
      credits: false,
    }),
  ],
});
