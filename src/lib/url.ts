/**
 * Build a URL that respects Astro's `base` config (subpath when deployed to GitHub Pages).
 *
 * Usage:  href={u('/servicii')}  →  /thorn-industries/servicii  (on GH Pages)
 *                                →  /servicii                    (on custom domain)
 */
export function u(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/**
 * RO ↔ EN page pairs (base-relative paths). Keep in sync when adding pages.
 *
 * English is the default language and lives at the root; Romanian is prefixed.
 *
 * /contact is the one path whose name did not change between languages. The
 * English page owns it, and the Romanian page moved to /ro/contact like the
 * rest -- so the pairing below is ordinary. The consequence is only for the
 * legacy URL: someone following an old /contact link, which used to be
 * Romanian, now lands on English and switches with the header toggle. That is
 * also why astro.config.mjs must not add a /contact redirect.
 */
export const pagePairs: Record<string, string> = {
  '/ro/': '/',
  '/ro/servicii': '/services',
  '/ro/portofoliu': '/portfolio',
  '/ro/primarii': '/public-sector',
  '/ro/companii': '/companies',
  '/ro/cum-lucram': '/how-we-work',
  '/ro/despre': '/about',
  '/ro/contact': '/contact',
};

const enToRo: Record<string, string> = Object.fromEntries(
  Object.entries(pagePairs).map(([ro, en]) => [en, ro]),
);

/** Normalize a pathname: strip the configured base and any trailing slash ('/' and '/ro/' keep theirs). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const inBase = base && (pathname === base || pathname.startsWith(`${base}/`));
  let p = inBase ? pathname.slice(base.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p === '/ro' ? '/ro/' : p;
}

/** The RO + EN paths of the page at `pathname`, for hreflang tags + the language toggle. */
export function langPair(pathname: string): { ro: string; en: string } {
  const p = stripBase(pathname);
  if (p in pagePairs) return { ro: p, en: pagePairs[p] };
  if (p in enToRo) return { ro: enToRo[p], en: p };
  return { ro: '/ro/', en: '/' };
}

/** Path of the same page in the other language (falls back to the other language's home). */
export function altPath(pathname: string): string {
  const p = stripBase(pathname);
  const pair = langPair(pathname);
  // Match the /ro/ segment, not the prefix: a page like /robotics must not read as Romanian.
  return p.startsWith('/ro/') ? pair.en : pair.ro;
}

/**
 * Absolute path in the form the host actually serves it (with trailing slash).
 *
 * GitHub Pages 301s /servicii to /servicii/, so canonical and hreflang have to
 * carry the slash or they point at a redirect — which is also the form the
 * sitemap emits.
 */
export function slashed(path: string): string {
  const p = u(path);
  return p.endsWith('/') ? p : `${p}/`;
}
