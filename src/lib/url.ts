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
