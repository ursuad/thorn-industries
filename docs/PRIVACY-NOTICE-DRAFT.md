# Privacy notice — DRAFT, not published

**Status: not wired up as a page. Two facts are missing and only Adrian can supply them — see "Gaps" at the bottom.**

Why this exists: the footer asserts **"GDPR: Compliant"** on every page of thorn.ro and there is no privacy notice anywhere on the site to back it. An unbacked compliance claim is worse than saying nothing, and it is the first thing a patient association's data officer will look for.

Everything in the body below was verified against the live site and the repo on 2026-08-26. Nothing here is invented.

---

## What was verified

| Claim | How it was checked | Result |
|---|---|---|
| The site sets no cookies | `document.cookie` on a loaded page | Empty |
| No client-side storage | `localStorage` key count | 0 |
| Third-party requests | `performance.getEntriesByType('resource')` | Cloudflare Web Analytics only, since the fonts were self-hosted on 26 Aug |
| Contact form destination | `action` attribute, `src/pages/contact.astro` | `formspree.io` |
| Fields collected | form markup, both language versions | name, organisation (optional), email, topic, message |
| Company identity | `BaseLayout.astro` JSON-LD + footer | Tech Camp Pro SRL, CUI 53945382, Str. Traian Vuia 95, Cluj-Napoca |

Because there are no cookies and no client-side storage, **no consent banner is legally required**. That is a genuinely strong position and worth stating plainly rather than hiding.

---

## Draft text (EN)

### Privacy notice

**Who we are.** This site is operated by Tech Camp Pro SRL, trading as Thorn Industries, Str. Traian Vuia 95, Cluj-Napoca, Romania (company no. 53945382). For anything in this notice, write to contact@thorn.ro.

**What we collect.** Only what you send us. If you use the contact form, we receive the name, organisation, email address, topic and message you enter. If you email us directly, we receive whatever your message contains. We do not ask for, and have no use for, special category data — please do not send it through this form.

**How the form works.** The form is handled by Formspree, a third-party form service, which passes your message to our inbox. Your message therefore passes through Formspree's systems before it reaches us. [GAP 1 — see below.]

**Why we hold it.** To reply to you and to keep a record of the enquiry. The lawful basis is our legitimate interest in responding to people who contact us about our services, and, where an engagement follows, the performance of a contract.

**How long we keep it.** [GAP 2 — see below.]

**Cookies.** This site sets no cookies and stores nothing in your browser. There is no consent banner because there is nothing to consent to.

**Analytics.** We use Cloudflare Web Analytics, which is cookieless: it sets no identifier in your browser and does not follow you across other sites. It gives us aggregate page-view counts only.

**Fonts and other third parties.** Fonts are served from this domain. The site makes no other third-party requests, so your visit is not disclosed to anyone beyond the analytics described above.

**Your rights.** Under the GDPR you can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, or object to us holding it. Write to contact@thorn.ro and we will respond. If you are not satisfied, you can complain to the Romanian supervisory authority, ANSPDCP (dataprotection.ro), or to the authority in your own country.

**Changes.** If this notice changes we will update the date below.

*Last updated: [date on publish]*

---

## Gaps — Adrian's facts, not mine to guess

**GAP 1 — Formspree.** I could not verify from the code whether there is a data-processing agreement with Formspree, or whether the account is configured to store submissions in the EU rather than the US. Formspree is US-headquartered. Two questions:
- Is there a signed DPA? (Formspree offers one on paid plans.)
- Is submission storage set to an EU region, or is it US?

This matters more than usual here: the prospect is a Norwegian patient association, and their own members' data is health data. If the answer is "US, no DPA", the honest options are to say so in the notice, or to switch the form to something EU-hosted. Worth knowing before they ask.

**GAP 2 — Retention.** How long do enquiry emails and form submissions stay in the inbox? Any real answer works ("until the enquiry is closed and then a year", "we clear the inbox annually"), but it has to be true and it has to be something you actually do. I will not write a number you have not agreed to.

---

## What I would do with the footer

Right now the footer row reads **GDPR / Compliant**. Once this notice is published, that should become a link to it — a claim with a document behind it. Until then, the honest options are to link it to nothing and soften the wording, or to leave it and publish the notice quickly. I have not changed it either way, because what the company asserts about its own legal posture is Adrian's call and not a typo fix.
