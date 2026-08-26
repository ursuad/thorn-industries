import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Production serves from the custom domain thorn.ro (GitHub Pages + public/CNAME).
// CI sets BASE_PATH='' and SITE_URL explicitly; defaults below match the custom-domain setup.
const BASE_PATH = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '' : '/');
const SITE_URL = process.env.SITE_URL ?? 'https://thorn.ro';

// English moved to the root and Romanian moved under /ro/ on 2026-08-26.
// These keep every previously-published URL working. On a static build Astro
// emits each as a small HTML page with a meta refresh and a canonical tag --
// weaker than a 301, and it carries a hardcoded noindex, but it is the only
// mechanism GitHub Pages supports.
//
// TWO PATHS ARE DELIBERATELY ABSENT, and adding either one breaks the build
// silently (a page disappears from dist/ and the sitemap, and astro still
// prints "Complete!"):
//   '/'        -- now served by the English home page, so it cannot redirect.
//                 The Romanian home lives at /ro/ and has no legacy URL.
//   '/contact' -- now served by the English contact page. The old Romanian
//                 /contact resolves to English by design; those visitors use
//                 the RO toggle in the header.
const redirects = {
  // Old English URLs -> the root they now live at.
  '/en': '/',
  '/en/services': '/services',
  '/en/portfolio': '/portfolio',
  '/en/public-sector': '/public-sector',
  '/en/companies': '/companies',
  '/en/how-we-work': '/how-we-work',
  '/en/about': '/about',
  '/en/contact': '/contact',
  // Old Romanian URLs -> the /ro/ prefix.
  '/servicii': '/ro/servicii',
  '/portofoliu': '/ro/portofoliu',
  '/primarii': '/ro/primarii',
  '/companii': '/ro/companii',
  '/cum-lucram': '/ro/cum-lucram',
  '/despre': '/ro/despre',
};

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  redirects,
});
