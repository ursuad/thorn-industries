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

/** RO ↔ EN page pairs (base-relative paths). Keep in sync when adding pages. */
export const pagePairs: Record<string, string> = {
  '/': '/en/',
  '/servicii': '/en/services',
  '/primarii': '/en/public-sector',
  '/companii': '/en/companies',
  '/cum-lucram': '/en/how-we-work',
  '/despre': '/en/about',
  '/contact': '/en/contact',
};

const enToRo: Record<string, string> = Object.fromEntries(
  Object.entries(pagePairs).map(([ro, en]) => [en, ro]),
);

/** Normalize a pathname: strip the configured base and any trailing slash ('/' and '/en/' keep theirs). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/$/, '');
  return p === '/en' ? '/en/' : p;
}

/** The RO + EN paths of the page at `pathname`, for hreflang tags + the language toggle. */
export function langPair(pathname: string): { ro: string; en: string } {
  const p = stripBase(pathname);
  if (p in pagePairs) return { ro: p, en: pagePairs[p] };
  if (p in enToRo) return { ro: enToRo[p], en: p };
  return { ro: '/', en: '/en/' };
}

/** Path of the same page in the other language (falls back to the other language's home). */
export function altPath(pathname: string): string {
  const p = stripBase(pathname);
  const pair = langPair(pathname);
  return p.startsWith('/en') ? pair.ro : pair.en;
}
