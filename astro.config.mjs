import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Production serves from the custom domain thorn.ro (GitHub Pages + public/CNAME).
// CI sets BASE_PATH='' and SITE_URL explicitly; defaults below match the custom-domain setup.
const BASE_PATH = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '' : '/');
const SITE_URL = process.env.SITE_URL ?? 'https://thorn.ro';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
});
