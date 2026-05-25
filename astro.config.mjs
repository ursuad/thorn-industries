import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages preview is served from /thorn-industries/ subpath.
// Once we move to thornindustries.ro (custom domain), set BASE_PATH='' and SITE_URL='https://thornindustries.ro'.
const BASE_PATH = process.env.BASE_PATH ?? '/thorn-industries';
const SITE_URL = process.env.SITE_URL ?? 'https://ursuad.github.io';

export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
});
