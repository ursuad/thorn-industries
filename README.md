# Thorn Industries — Website

Astro static site, Tailwind, bilingual RO/EN. Built to be the credibility surface Ioana sends to warm intros.

## Local development

```bash
cd data/threads/business/tcp-services/website/site
npm install   # one-off
npm run dev   # http://localhost:4321/
```

- RO is at `/` (primary)
- EN is at `/en/` (toggle in header)

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve dist/ locally to verify
```

## Stack

- **Astro** 5.x — static site generator, zero runtime JS by default
- **Tailwind** 3.x — utility CSS, configured in `tailwind.config.mjs`
- **Inter + Source Serif 4** — Google Fonts, preconnected in `BaseLayout.astro`
- **Brand colours** — forest green primary + cream off-white + ink for text (palette in tailwind config)

## File layout

```
src/
├── layouts/
│   └── BaseLayout.astro   # html shell + Header + Footer
├── components/
│   ├── Header.astro       # nav + lang toggle
│   └── Footer.astro       # contact + nav + company info
├── pages/
│   ├── index.astro        # RO home (primary entry)
│   └── en/
│       └── index.astro    # EN home
└── styles/
    └── global.css         # Tailwind base + custom components (btn-primary, btn-ghost)
```

## Editing copy

For now copy lives inline in each `.astro` page. Workflow:

1. Adrian drafts EN copy first in the `/en/` route
2. EN copy goes through Gemini/GPT translation prompt (see `../copy/translation-prompt.md` — to be created)
3. Romanian draft lands in the `/` route
4. Ioana copy-edits RO for native tone before publish

## Pages to build (v1 scope)

- [x] Home (RO + EN)
- [ ] Servicii / Services
- [ ] Primării / Public sector
- [ ] Companii / Companies
- [ ] Cum lucrăm / How we work
- [ ] Despre / About
- [ ] Contact

## Deployment

Cloudflare Pages or Netlify, both free tier. Wire DNS to `thornindustries.ro` once registered.

Build command: `npm run build`
Output dir: `dist`
