# Thorn Industries website

Bilingual Astro 5 static site for Thorn Industries, the commercial brand of Tech Camp Pro SRL. English lives at `/`; Romanian at `/ro/`. Production domain: https://thorn.ro/.

## Develop and verify

Use Node.js 22, matching the existing deployment workflow, and the locked dependencies:

```sh
npm ci
npm run dev
```

Before review:

```sh
npm run build
npm run check:site
npm run preview -- --host 127.0.0.1
```

The preview serves the built site at http://127.0.0.1:4321/ without publishing. `check:site` checks generated HTML, local destinations, assets, fragment targets, required bilingual routes, page headings, languages, canonicals and the three intended email addresses. External URL availability is checked separately.

## Editing

- `src/content/practice.ts`: paired English/Romanian copy for the seven core pages.
- `src/components/PracticePage.astro`: shared page composition using the established forest/cream palette, Inter and JetBrains Mono.
- `src/pages/portfolio.astro` and `src/pages/ro/portofoliu.astro`: independent project examples.
- `src/lib/url.ts`: URL helpers and language pairs.
- `astro.config.mjs`: legacy redirects. Preserve them when editing routes.
- `src/layouts/BaseLayout.astro`: SEO, structured data and navigation behaviour.

Fonts are self-hosted. Cloudflare Web Analytics is included only when `CF_ANALYTICS_TOKEN` is supplied at build time. Local builds without that variable contain no analytics beacon. No form service is used; contact links open the visitor's email app.

## Deployment

`.github/workflows/deploy.yml` builds with `npm ci` and `npm run build`, then publishes `dist/` through GitHub Actions to GitHub Pages. It runs on **push to `main`** or **manual workflow dispatch**. Branch pushes and pull requests do not trigger this workflow.

GitHub Pages uses workflow builds, custom domain `thorn.ro`, HTTPS enforcement, and the existing `public/CNAME`. Review and authorise publication before merging into `main` or manually running the deployment workflow. No hosting or DNS changes are required for this refresh.

## Review handoff

See [the refresh handoff](docs/website-refresh-2026-10-16.md) for scope, claims decisions and validation. Historical copy-pass instructions in `docs/VOICE-CHARTER.md` describe the July pass; the October refresh changes the positioning and page composition while retaining the plain language and Romanian register.
