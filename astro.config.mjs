import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages preview is served from /thorn-industries/ subpath.
// Once we move to thornindustries.ro (custom domain), set BASE_PATH='' and SITE_URL='https://thornindustries.ro'.
// Local dev uses root path (no subpath) for cleaner DX; CI sets BASE_PATH for production deploy.
const BASE_PATH = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/thorn-industries' : '/');
const SITE_URL = process.env.SITE_URL ?? 'https://ursuad.github.io';

export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
});
