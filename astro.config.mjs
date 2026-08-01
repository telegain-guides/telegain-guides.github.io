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
      title: 'Документация TeleGain',
      description:
        'Пошаговые руководства по модулям TeleGain: нейрокомментинг, прогрев аккаунтов, ' +
        'инвайтинг, рассылки, парсеры и работа с прокси.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Русский', lang: 'ru' },
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
        { label: 'Начало работы', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Модули', items: [{ autogenerate: { directory: 'modules' } }] },
        {
          label: 'Правила и безопасность',
          items: [
            { label: 'Диагностика запусков', slug: 'troubleshooting' },
            { label: 'Безопасность аккаунтов и данных', slug: 'security' },
            { label: 'Ответственное использование', slug: 'responsible-use' },
          ],
        },
        {
          label: 'Справка',
          items: [
            { label: 'Частые вопросы', slug: 'faq' },
            { label: 'О документации', slug: 'about' },
          ],
        },
      ],
      customCss: ['./src/styles/telegain.css'],
      credits: false,
    }),
  ],
});
