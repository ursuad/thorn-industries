# Website refresh, 16 October 2026

Status: draft for Adrian's review. No merge or live publication.

## Result

Lead with a small senior engineering practice delivering defined data, platform, integration and AI work for established consultancies, integrators and European businesses. Keep the Romanian public-sector route and every existing language pair and legacy redirect.

Retain the established visual identity, self-hosted fonts and social preview image. Put matched EN/RO copy in one typed content module and reuse the existing design primitives through a shared page component. This accounts for the large reduction in duplicated page markup.

The homepage introduces three illustrative packages: a retrospective exception test, data reconciliation, and a repeatable deployment path. Each states a problem and deliverable, and the delivery process explains the test-to-production decision and handover. Examples are explicitly illustrative, not customer case studies.

## Claims and contact decisions

- Remove named enterprise client and consultancy references rather than imply corporate engagements or endorsements. Individual experience is described generically.
- Remove founding year, two-office claims, guaranteed staffing, response times, ongoing hosting/support commitments, blanket compliance and procurement-registration claims.
- Remove price ladders, fixed durations and time-sensitive funding/threshold statements. Fees, team composition, timing and production operation are agreed for the actual project.
- Keep the two existing independent project examples and their public links. Remove live counts, rapid-delivery claims and infrastructure/backup commitments. This retains examples without presenting them as enterprise client references.
- Preserve the existing company name, company number and registered address. These remain reviewable company details, not new assertions derived from external registry research.
- Use `contact@thorn.ro` as the primary route, with `adrian@thorn.ro` and `ioana@thorn.ro` available directly. Remove the Formspree form because its recipient configuration was not verified. No messages or test submissions were sent.

## Deployment boundary

Repository metadata confirms **public** visibility and `main` as the default branch. Do not include internal planning material. This change does not alter visibility.

The existing Pages workflow runs only on push to `main` or manual dispatch. Pages settings confirm workflow builds, `thorn.ro`, and enforced HTTPS. The workflow, CNAME, redirects, DNS and account settings are unchanged. A branch push and draft PR do not invoke that deployment workflow.

## Validation

- Locked dependency installation and Astro production build pass.
- `npm run check:site`: 31 generated HTML files; 664 local link/asset/anchor checks; 16 required bilingual pages; exactly the three intended contact email addresses.
- `git diff --check` passes.
- Browser review at 390, 768 and 1280 CSS pixels: all 16 bilingual pages, 48 route/width checks, no horizontal overflow and one main heading per page.
- Desktop and Romanian mobile homepage screenshots inspected. Mobile menu opening, Escape closing and EN-to-RO switching checked without sending email.
- Local preview returns HTTP 200. Existing portfolio links (`evenimente.iotcafe.net`, `events.iotcafe.net`, `app.earthpatchers.org`) returned HTTP 200 on 16 October 2026. HTTP status verifies reachability, not every product feature or ownership claim.
- Local build has no analytics token or third-party contact form. Production analytics configuration is unchanged.

## Review before publication

Review the positioning, paired Romanian wording, the removal of public pricing and named references, the continued inclusion of the independent project examples, company details and the email-only contact route. Reintroduce stronger claims only with approved evidence and attribution.

No domain purchase, visibility change, DNS/MX/Workspace/billing change, merge or live deployment was performed.
