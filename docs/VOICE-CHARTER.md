# Thorn Industries: Voice + Terminology Charter (RO + EN)

**Status**: binding for the content-refresh-2026-07 pass. Every rewrite agent follows this verbatim.
**Revised 17 Jul 2026, two rulings landed. If you remember an earlier version of this charter, these two reversed:**
1. **The CUI gets FILLED**, it is no longer do-not-touch. `53945382`, label `CUI` (RO) / `Company no.` (EN). Never `RO`-prefixed, never `VAT`. **§5.1 is binding and prescriptive.**
2. **C2 (the `companii` audit card) is SETTLED, not open.** Its `două-patru săptămâni` is correct as-is. Do not flag it, do not align it to 1-3 weeks. **§7 C2.**
**Voice reference**: `life-os/data/work/tech-camp-pro/puntea/one-pager-v1.md` (Adrian-approved natural business Romanian).
**Scope**: TEXT ONLY. No layout, no Tailwind classes, no SVG, no hrefs, no imports, no `u()` helper, no frontmatter changes. Rewrite `title` / `description` props of `BaseLayout`, yes.

---

## 0. Hard rules (a violation fails the task)

1. **No em dashes (—) or en dashes (–)**, RO or EN, anywhere. Commas, colons, parentheses, or restructure. Hyphens in compounds (`e-Factura`, `API-first`, `Cluj-Napoca`) are fine.
2. **Full Romanian diacritics**: ă â î ș ț / Ă Â Î Ș Ț. **Comma-below** ș (U+0219) and ț (U+021B), never the cedilla ş/ţ. Never strip.
3. **Formal register throughout**: `dumneavoastră` / `dvs.` / `vă` / `vi`. Never `tu`, never `voi`.
4. **Romanian quotes**: `„text"` (opening low-99, closing high-99). Match the existing pages.
5. **Metric units always.**
6. **No invented facts.** No clients, metrics, testimonials, case studies, dates, or prices that are not already on the page or in the sourced-facts list. If you cannot source it, do not write it.
7. **No portfolio / case-study section.** Do not scaffold one.
8. **Never run git.** Edit only your assigned file.

---

## 1. Register + rhythm rules

These are the rules that make eight pages sound like one person. Each cites the voice reference (`one-pager-v1.md`).

**R1. Short declarative sentences. Average 12 to 18 words. Hard ceiling ~28.**
The reference runs: *„Sesizările nu se mai pierd, clientul știe mereu unde stă cererea lui."* Two clauses, done. If a sentence needs a third comma to survive, split it into two sentences.
*Rationale*: Adrian's Romanian is spoken-clear. Long periodic sentences are the #1 tell of English-first drafting.

**R2. Concrete verbs beat abstract nouns. Kill nominalisations.**
Not *„Identificarea liniilor de finanțare la care vă calificați"* but *„Vă spunem la ce linii de finanțare vă calificați."* The reference never says „direcționarea sesizărilor se realizează automat"; it says *„sesizarea ajunge singură la omul potrivit."*
*Rationale*: Romanian officialese is nominal. Adrian's voice is verbal. Every `-are/-ire/-ția` noun is a suspect.

**R3. Open a section with the reader's situation, not with our category.**
Reference opener: *„Astăzi, când un client are o problemă la apartament, sună agentul, agentul sună la șantier, iar cererea se pierde pe drum."* Situation first, then us. The site already does this well at `/primarii`: *„Banii există. Strategia, de regulă, nu."* Copy that move.
*Rationale*: story-led positioning (ratified strategy), not category-led.

**R4. Anti-corporate attitude = naming what we do NOT do, plainly, without accusing anyone.**
Good, already live, keep: *„Construite să poată fi întreținute, nu să pară noi."* / *„nu cele douăzeci pe care nu le deschide nimeni."* / *„Genul de predare pe care am vrea-o și noi dacă am fi de partea cealaltă a mesei."*
Bad: moralising, ANAF/mită/corruption talk, „spre deosebire de alții". The stance is a posture we hold, not a banner we wave.
*Rationale*: this is a deliberate 2026-05-26 decision. Do not reintroduce accusatory copy.

**R5. Numbers, prices and durations are stated flat, in the sentence, never softened.**
*„Aplicația este gratuită timp de două luni."* Not „poate beneficia de o perioadă de gratuitate". Say the number, move on.
*Rationale*: „prețuri transparente" is the product; hedged pricing prose contradicts it.

**R6. Address the reader directly, and put the reader before us in the sentence.**
*„pentru dumneavoastră înseamnă o comunicare digitalizată cu clientul"*. Prefer *„Primiți un raport scris"* over *„Livrăm un raport scris"* when both work. Use *„noi"* when it carries accountability (*„Noi acoperim distanța"*), not as filler.

**R7. Romanian clause order, not English clause order.**
English: [Most agencies] [sell you a team] [and then hand delivery to another]. The current RO tracks it word for word. Romanian wants the contrast fronted or the verb weighted: *„Multe firme vă vând o echipă și pun alta să facă treaba."*
*Rationale*: the single most common transcription tell on this site.

**R8. One idea per paragraph. Three to five sentences max.**
The reference paragraphs are all under five sentences. Anything longer is a Model-zone essay, not web copy.

**R9. No raw English inside RO copy unless it is a product name or an unavoidable industry term, and then gloss it once.**
`Snowflake`, `BigQuery`, `Postgres`, `Airbyte`, `dbt`, `Kubernetes`, `Metabase`, `Superset`, `Looker Studio`, `API`, `ERP`, `GIS`, `SEAP`, `DUAE`, `PNRR`, `NIS2`, `GDPR` = fine bare. `Sales lead`, `stack`, `status`, `dashboards`, `stive`, `scalat` = banned (see §2/§3).
*Rationale*: preflight-jargon rule. Adrian defends this copy live in front of primari.

**R10. If a line is already good, leave it alone.**
Named voice anchors, do not touch: *„Banii există. Strategia, de regulă, nu."* / *„Deciziile bune cer cifre de încredere."* / *„Sisteme cumpărate acum cinci ani care au rezolvat o problemă și au mai creat încă trei."* / *„La mijloc e un gol. Noi lucrăm în acel gol."* / *„Într-o căsuță pe care o citim amândoi."* / *„Munca o fac oamenii pe care îi puteți suna direct."* / *„Adresa s-a schimbat sau nu a existat niciodată."*
*Rationale*: this is a calque-kill pass, not a rewrite-everything pass. Churn costs voice.

---

## 2. The calque kill-list

Exhaustive sweep of all 10 files. Left = what is live now. Right = mandated replacement. Where the replacement depends on the sentence, the pattern is given.

### 2.1 Site-wide (fix in every file you own)

| # | Live phrase | File(s) | Mandated replacement |
|---|---|---|---|
| 1 | `responsabilitate nominală` / `responsabili nominali` | index (desc, princ. 02), servicii, companii, cum-lucram (desc, princ. 02), primarii (desc) | **`un om care răspunde, cu nume și prenume`** (the site already found this at primarii: *„un responsabil tehnic cu nume și prenume"*). As a label: **`Cine răspunde`**. Banned: `responsabilitate nominală`, `nominal`. |
| 2 | `angajament` (= engagement) | index, servicii, companii, cum-lucram, despre, contact | **`proiect`** (default) / **`contract`** (when the legal instrument is meant) / **`colaborare`** (when the relationship is meant). RO `angajament` = a pledge, not a piece of work. Banned outright in this sense. |
| 3 | `scop` (= scope) | servicii ×3, primarii ×4, companii ×2, cum-lucram | **`perimetru`** as the noun, or restructure to **`ce intră în lucrare`** / **`cât acoperim`** / **`dimensiunea lucrării`**. RO `scop` = purpose. **The worst recurring error on the site.** Banned in the scope sense everywhere. |
| 4 | `fragmentate` / `fragmentăm` (contracts) | index (princ. 03 + desc), servicii, cum-lucram | **`divizarea contractului`** / **`fără divizarea contractului`**. This is the term Legea 98/2016 actually uses. Also unify `împărțirea` (cum-lucram, primarii FAQ) to `divizarea`. |
| 5 | `Preluare` (= data ingestion) | index (card 03), servicii (03), companii ×2 | **`aducem datele din sistemele care le produc`** (verb form, preferred) / **`colectarea datelor`** (noun, when a label is needed). Banned: `preluare`, `ingestie`, `ingerare`. |
| 6 | `Datorii tehnice` (plural) | index, companii, despre | **`datorie tehnică`** (singular, the accepted RO industry term). Plural reads as unpaid invoices. Better where space allows: **`integrări cârpite peste ani`**. |
| 7 | `Sales lead` | index (team card), despre (team card), contact | **`partea comercială`**. Never `Sales lead`, never `Director de vânzări`, never `Responsabil vânzări`. This is Adrian's stated wording for Ioana. |
| 8 | `consultanțe` (as a noun = consultancies) | index (Adrian bio), companii | **`firme de consultanță`** (despre already gets this right). |
| 9 | `tarif fix` | index, servicii, companii, primarii, cum-lucram | **`preț fix`**. `Tarif` implies an hourly rate card; the product is a fixed price. Keep `Tarife` as a section label (it means „prices", fine), but the promise line is `preț fix`. |
| 10 | `propunere` (= proposal) | index (princ. 02), cum-lucram (princ. 01, 02) | **`ofertă`**. RO business word. |
| 11 | `EU` (bare, in RO copy) | companii (desc) | **`european`** / **`UE`**. Unify: despre says `UE`, companii says `EU`. Use **`de nivel european`**. |
| 12 | `Practică` (= practice/discipline, as a label) | index ×2 (aside, section 002) | **`Ce facem`**. RO `practică` = internship. |
| 13 | `aliniat` / `aliniere` / `aliniem` (= aligned to) | servicii ×3, primarii (desc) | Restructure to a verb: **`se depune prin SEAP`**, **`potrivim procedura`**, **`actualizări cerute de lege`**. Banned as a stock adjective. |
| 14 | `dashboards` (raw English plural) | servicii (03 pricing) | **`tablouri de bord`**. Unify site-wide; the term is already used correctly elsewhere. |

### 2.2 `index.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 15 | `Fiecare un răspuns întreg.` | **`Fiecare, un lucru dus până la capăt.`** |
| 16 | ~~`Fără prezentări.` (hero)~~ | **STRUCK 17 Jul, do NOT apply.** The hero `Inginerie care chiar livrează. / Fără prezentări.` is **KEEP-VERBATIM**: Adrian quotes it in his own brief as the right attitude, and the directive outranks this charter. A fix agent applied `Fără PowerPoint-uri.` here once and it was reverted. Leave the hero alone. |
| 17 | `Module și integrări care unesc sistemele pe care deja le aveți cu rezultatele de care aveți nevoie.` | **`Module și integrări care leagă sistemele pe care le aveți deja de rezultatele de care aveți nevoie.`** |
| 18 | `Ajutăm să acopere această diferență.` | **`Aici intervenim noi.`** (calque of „help close that gap"; also the subject is missing in RO) |
| 19 | `Cele mai multe agenții vă vând o echipă și apoi predau livrarea către alta.` | **`Multe firme vă vând o echipă și pun alta să facă treaba.`** |
| 20 | `Fără cotații personalizate ascunse până la pagina 40 a unei propuneri.` | **`Fără oferte „personalizate" îngropate la pagina 40.`** (`cotații` = calque of „quotes") |
| 21 | `Stack` (Adrian's card, dl label) | **`Tehnologii`** |
| 22 | `primele discuții exploratorii` | **`primele discuții`** |
| 23 | `Primă discuție, calificare B2B` (Ioana's card) | **`Prima discuție, triere B2B`** (`calificare` = sales-calque; RO reads „obtaining a qualification") |
| 24 | `O săptămână sau două pe teren.` | **`Una până la trei săptămâni.`** (ratified window; see §7 conflict note) |

### 2.3 `servicii.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 25 | `fiindcă forțează claritatea înainte să intre banii în joc` | **`pentru că limpezește lucrurile înainte să intre banii în joc`** |
| 26 | `De acolo înainte, se construiește ce e de construit și se scot la suprafață datele care contează.` | **`De acolo încolo construim ce e de construit și scoatem la lumină datele care contează.`** (reflexive-impersonal hides the actor; use „noi") |
| 27 | `Identificarea liniilor de finanțare la care vă calificați acum` | **`Vă spunem la ce linii de finanțare vă calificați acum`** |
| 28 | `Oraș, scop tipic` (pricing tier) | **`Oraș, proiect obișnuit`** |
| 29 | `Aliniat cu SEAP` (aside) | **`Se depune prin SEAP`** |
| 30 | `O singură achiziție, fără să fragmentăm contractul.` | **`O singură achiziție, fără divizarea contractului.`** |
| 31 | `cu responsabili nominali și cu termene` | **`cu oameni care răspund, cu nume și prenume, și cu termene`** |
| 32 | `Mentenanța intră în angajament.` | **`Mentenanța intră în contract.`** |
| 33 | `Construcție la comandă` (pricing row) | **`Dezvoltare la comandă`** (`construcție` in RO = a building) |
| 34 | `De la o integrare punctuală la livrări multi-sistem.` | **`De la o integrare punctuală la lucrări care ating mai multe sisteme.`** |
| 35 | `aliniere la reglementări` | **`actualizări cerute de lege`** |
| 36 | `două adăugări minore de funcționalitate pe trimestru` | **`două modificări mici pe trimestru`** |
| 37 | `putere de calcul scalată la nevoie` | **`putere de calcul cât e nevoie`** (`scalat` = raw calque) |
| 38 | `Fundație de platformă` | **`Temelia de date`** |
| 39 | `Preluare din sistemele operaționale, un strat unic, de încredere, pentru raportare, guvernanță încorporată din prima zi.` | **`Aducem datele din sistemele care le produc într-un singur loc de încredere, cu reguli de guvernanță de la bun început.`** |
| 40 | `Tablouri de bord care se folosesc` | **`Tablouri de bord pe care oamenii chiar le deschid`** |
| 41 | `Două-trei vizualizări de bază, refacute peste noapte` | **`Două-trei vizualizări de bază, actualizate în fiecare noapte`** (**genuine mistranslation**: „refreshed overnight" = a nightly data refresh, not „redone overnight") |
| 42 | `Pornim de la o întrebare de business și mergem în spate, nu invers.` | **`Pornim de la o întrebare de business și mergem înapoi spre date, nu invers.`** |
| 43 | `Pilot de tablou de bord cu sursă unică` | **`Un tablou de bord pilot, pe o singură sursă de date`** |
| 44 | `Platformă multi-sursă cu guvernanță și 3-5 dashboards` | **`Platformă pe mai multe surse, cu guvernanță și 3-5 tablouri de bord`** |
| 45 | `aliniem același scop la procedura de achiziție potrivită` | **`potrivim aceeași lucrare cu procedura de achiziție corectă`** |
| 46 | `Nu sunteți sigur ce serviciu se potrivește?` | **`Nu știți sigur ce serviciu vi se potrivește?`** |
| 47 | `Stratul de raportare și analiză care transformă datele din operațiuni în decizii la nivel de conducere.` | **`Stratul de raportare care transformă datele din activitatea de zi cu zi în decizii de conducere.`** |

### 2.4 `primarii.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 48 | `Fiecare pas este un contract distinct, achiziționat corect.` | **`Fiecare pas e un contract separat, atribuit printr-o procedură corectă.`** |
| 49 | `Peisajul se schimbă la câteva luni.` | **`Regulile se schimbă la câteva luni.`** (`peisaj` = calque of „landscape") |
| 50 | `pe măsură ce se deschid și se închid ferestrele de aplicare` | **`pe măsură ce se deschid și se închid sesiunile de depunere`** (`sesiune de depunere` is the real RO funding term; „fereastră de aplicare" is a double calque) |
| 51 | `Ferestre deschise pe calendarul OUG.` | **`Sesiuni de depunere după calendarul din OUG.`** |
| 52 | `Cea mai accesibilă linie de finanțare de moment` | **`Cea mai accesibilă linie de finanțare în acest moment`** |
| 53 | `Până la M RON` (DigiLocal/PNRR tier label) | **`De ordinul milioanelor`** (**live defect**: `M RON` is a broken placeholder, meaningless in RO) |
| 54 | `Eligibilitate mai strictă, cerere mai lungă, scop mai mare.` | **`Eligibilitate mai strictă, cerere mai lungă, perimetru mai mare.`** |
| 55 | `Merită aflată clasificarea înainte să devină termenul propriu-zis strategie.` | **`Merită să vă aflați clasificarea înainte ca termenul-limită să vă țină loc de strategie.`** (**current line is near-nonsense in RO**) |
| 56 | `Ce ni se întreabă cel mai des.` | **`Ce ne întreabă lumea cel mai des.`** (**ungrammatical**: „a întreba" does not take that reflexive-dative passive in RO) |
| 57 | `rapoartele pe care un Primar le citește cu adevărat` | **`rapoartele pe care primarul chiar le citește`** (RO does not capitalise the office mid-sentence) |
| 58 | `au toate ferestre active sau care urmează să se deschidă` | **`au toate sesiuni deschise acum sau care urmează`** |
| 59 | `Pregătirea oamenilor intră în orice scop de implementare` | **`Pregătirea oamenilor intră în orice proiect de implementare`** |
| 60 | `Dacă scopul dvs. trece de un prag` (FAQ + ribbon) | **`Dacă lucrarea dvs. trece de un prag`** |
| 61 | `SEAP / Scop corect` (step 03 dl) | **`SEAP / Procedura potrivită`** |
| 62 | `Specializat pe Legea 242/2022` | **`Legea 242/2022`** (keep the legal reference verbatim; drop the „specializat" framing, which reads as a claim we cannot source) |
| 63 | `Durată 1-2 săptămâni` (step 01) + `Evaluare: 1-2 săptămâni` (FAQ) | **`1-3 săptămâni`** (ratified; see §7) |
| 64 | `ce aveți în plan la nivel general` | **`ce aveți în plan, în linii mari`** |
| 65 | `Una-trei zile la dvs., la sediu.` | Keep. Good line. |

### 2.5 `companii.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 66 | `o singură sursă de adevăr pentru consumatorii din aval` | **`o singură sursă de adevăr pentru toți cei care folosesc rapoartele mai departe`** (`consumatori din aval` = raw calque of „downstream consumers", meaningless in RO business) |
| 67 | `Am construit soluții exact pentru astfel de cazuri.` | **`Exact astfel de lucruri reparăm.`** |
| 68 | `în care definim corect scopul` | **`în care stabilim exact ce intră în lucrare`** |
| 69 | `o listă, ordonată după prioritate, a celor ce trebuie reparate` | **`lista lucrurilor de reparat, în ordinea priorității`** |
| 70 | `În funcție de scop` (pricing label) | **`În funcție de perimetru`** |
| 71 | `face ca instrumentele pe care le aveți să lucreze între ele` | **`face sistemele pe care le aveți să vorbească între ele`** (`instrumente` = calque of „tools") |
| 72 | `Cincisprezece ani de inginerie livrată prin consultanțe precum OpenCredo și Mesh-AI` | **`15 ani de inginerie, livrată prin firme de consultanță ca OpenCredo și Mesh-AI`** (numerals, not spelled out; unify with index which says „15 ani") |
| 73 | `la o fracțiune din prețul unei consultanțe echivalente` | **`la o parte din prețul unei firme echivalente`** |
| 74 | `Preluare prin Airbyte, transformare prin dbt, guvernanță încorporată.` | **`Aducem datele cu Airbyte, le transformăm cu dbt, cu guvernanță de la bun început.`** |
| 75 | `Genul de strat de integrare care rezistă peste schimbările de echipă.` | **`Genul de strat de integrare care rezistă și după ce se schimbă echipa.`** |
| 76 | `stive mai simple când nu` | **`soluții mai simple când nu`** (`stivă` in RO = a pile / a data structure, never a tech stack) |
| 77 | `API-first, event-driven, contracts-as-code` | Keep the terms, add one gloss: **`API-first, event-driven, contracte de date versionate în cod`** |
| 78 | `arhitecturi lakehouse moderne` | **`arhitecturi lakehouse`** (drop „moderne", filler) |
| 79 | `Sisteme cumpărate acum cinci ani care au rezolvat o problemă și au mai creat încă trei.` | Keep verbatim. Voice anchor. |

### 2.6 `cum-lucram.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 80 | `El rămâne pe proiect de la pornire până la predare.` | **`Rămâne pe proiect de la început până la predare.`** |
| 81 | `Nu vă vindem o echipă și predăm livrarea către alta.` | **`Nu vă vindem o echipă ca apoi să pună alta mâna pe treabă.`** |
| 82 | `infrastructură ca și cod` | **`infrastructura descrisă în cod`** (**„ca și" misuse**, a notorious RO error; if the EN term is wanted, put it in parentheses: `infrastructura descrisă în cod (infrastructure as code)`) |
| 83 | `Rezidența datelor în România, implicit` | **`Datele stau în România. Asta e regula.`** |
| 84 | `folosim furnizori UE eficienți (Hetzner)` | **`folosim furnizori din UE (Hetzner)`** (`eficienți` is an unsourced quality claim doing no work) |
| 85 | `Dacă problema dvs. e în afara a ceea ce facem` | **`Dacă problema dvs. nu e din zona noastră`** |
| 86 | `interzice împărțirea contractelor` | **`interzice divizarea contractelor`** (unify with index) |
| 87 | `Genul de predare pe care am vrea-o și noi dacă am fi de partea cealaltă a mesei.` | Keep verbatim. Voice anchor. |
| 88 | `Nu pentru că dă bine, ci pentru că următoarea persoană care va lucra la sistem trebuie să îl înțeleagă fără ca noi să fim în cameră.` | Keep verbatim. Voice anchor. |

### 2.7 `despre.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 89 | `O firmă mică din România pe un drum asumat.` (h1) | **`O firmă mică din România, cu o treabă clară.`** (`pe un drum asumat` is vague poetry, off-voice) |
| 90 | `Două observații au dus la această companie.` | **`Din două observații s-a născut firma asta.`** |
| 91 | `există un val de companii B2B medii` | **`sunt multe companii B2B medii`** (`val` = calque of „a wave of") |
| 92 | `stau pe datorii tehnice consistente` | **`stau pe o datorie tehnică serioasă`** |
| 93 | `colaboratori individuali (inginerie bună, fără continuitate)` | **`oameni pe cont propriu (inginerie bună, fără continuitate)`** |
| 94 | `Aceeași calitate de inginerie care se livrează la companii ca Sainsbury's, Centrica și Toyota` | **`Aceeași calitate de inginerie care se face pentru companii ca Sainsbury's, Centrica și Toyota`** |
| 95 | `cu responsabilitate zilnică pe relațiile cu clienții, pe colaborarea cu furnizorii și pe continuitatea operațională printr-o creștere finanțată din granturi` | Rewrite with verbs: **`A ținut zilnic relația cu clienții și cu furnizorii și a ținut firma pe linia de plutire printr-o creștere finanțată din granturi.`** (`responsabilitate pe X` = calque of „responsible for") |
| 96 | `Status SEAP` | **`SEAP`** (dt) with dd **`Înregistrați, DUAE pregătit`**. `Status` is raw English. |
| 97 | `La mijloc e un gol. Noi lucrăm în acel gol.` | Keep verbatim. Voice anchor. |
| 98 | Adrian bio | Must now carry, per sourced facts: **`15 ani de construit platforme de date și arhitecturi de integrare, din care 10+ ani în Londra (2014-2024): platforme de date, AI, software la scară enterprise.`** |
| 99 | Ioana's card eyebrow `Sales lead` | **`Partea comercială`** |

### 2.8 `contact.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 100 | `Ioana Drăghici, Sales lead` | **`Ioana Drăghici, partea comercială`** |
| 101 | `Linia directă pentru definirea scopului tehnic` | **`Linia directă pentru discuțiile tehnice`** |
| 102 | `Angajament în sectorul public` (select option) | **`Proiect în sectorul public`** |
| 103 | `Evaluare de consultanță` (select option) | **`Evaluare tehnică`** |
| 104 | `Ce aveți în minte?` (textarea label) | **`Despre ce e vorba?`** (RO idiom is „pe minte", not „în minte"; and despre.astro already says „pe minte", so the two contradict) |
| 105 | `Într-o căsuță pe care o citim amândoi` | Keep verbatim. Voice anchor. |

### 2.9 `404.astro`, `Header.astro`, `Footer.astro`

| # | Live phrase | Mandated replacement |
|---|---|---|
| 106 | 404 body copy | Keep. `Adresa s-a schimbat sau nu a existat niciodată.` is correct and in voice. |
| 107 | Header nav labels | Keep all. `Servicii / Primării / Companii / Cum lucrăm / Despre / Contact` are correct. |
| 108 | Footer `tagline` (ro) | Keep. Correct and in voice. |
| 109 | Footer `CUI RO__________` (ro + en) | **FILL IT.** Adrian ruled 17 Jul. RO → label `CUI`, value `53945382`. EN → label `Company no.`, value `53945382`. **Never `RO53945382`.** See §5.1, which is binding and overrides any earlier draft of this charter. |
| 110 | Footer `v0.3` | Leave. Not copy. (Noted: the canvas calls the live site v0.4. Not this pass's call.) |

---

## 3. Canonical terminology table

One term per concept. Pages may not diverge. „Banned" means: do not use in RO copy in this sense, at all.

| Concept | **Mandated RO** | Banned alternatives |
|---|---|---|
| scope | **perimetru** / `ce intră în lucrare` / `dimensiunea lucrării` | `scop`, `scope`, `arie de cuprindere`, `obiect` |
| assessment (the product) | **evaluare** (full name: `Evaluare de digitalizare`) | `assessment`, `analiză preliminară`, `diagnoză`, `audit` (except the existing `Audit de date și arhitectură` on companii) |
| findings | **constatări** | `descoperiri`, `rezultate`, `findings`, `concluzii` |
| action plan | **plan de acțiune** | `roadmap`, `foaie de parcurs`, `plan de măsuri` |
| recommendations | **recomandări** | `sugestii`, `propuneri` (in this sense) |
| dashboard | **tablou de bord** (pl. `tablouri de bord`) | `dashboard`, `dashboards`, `panou de control` |
| data ingestion | **aducem datele din sistemele care le produc** (verb) / **colectarea datelor** (noun) | `preluare`, `ingestie`, `ingerare`, `import` |
| data platform | **platformă de date** | `platformă de business intelligence`, `depozit de date` |
| data foundation | **temelia de date** | `fundație de platformă`, `fundație de date` |
| integration | **integrare** / **strat de integrare** | `interconectare`, `interfațare` |
| reporting layer | **strat de raportare** | `nivel de raportare`, `layer de raportare` |
| technical debt | **datorie tehnică** (singular) | `datorii tehnice`, `technical debt`, `datorie tehnologică` |
| engagement (a piece of work) | **proiect** / **contract** / **colaborare** | `angajament`, `engagement`, `misiune` |
| deliverable | **livrabil** | `deliverable`, `produs livrat`, `rezultat` |
| fixed fee | **preț fix** | `tarif fix`, `fee fix`, `sumă forfetară`, `preț forfetar` |
| accountability / ownership | **un om care răspunde, cu nume și prenume**; label: **Cine răspunde** | `responsabilitate nominală`, `ownership`, `accountability`, `responsabil desemnat` |
| stakeholder | **decident** (when deciding) / **cine folosește sistemul** (when using) | `stakeholder`, `parte interesată`, `factor interesat` |
| procurement | **achiziție** / **achiziție publică**; the ceiling = **Achiziție Directă** | `procurement`, `aprovizionare`, `licitație` (unless a licitație is literally meant) |
| contract splitting | **divizarea contractului** | `fragmentarea contractului`, `împărțirea contractului`, `splitare` |
| open standards | **standarde deschise** | `open standards`, `standarde libere` |
| handover | **predare** | `handover`, `transfer`, `tranziție` |
| maintenance | **mentenanță** | `întreținere` (as the service name), `maintenance`, `suport` (as a synonym) |
| funding line | **linie de finanțare** | `program de finanțare` (unless naming a specific programme), `fond` |
| application window | **sesiune de depunere** | `fereastră de aplicare`, `fereastră de depunere`, `apel` |
| grant application | **cerere de finanțare** | `cerere de grant`, `aplicație`, `dosar de grant` |
| build (the phase) | **dezvoltare** / **construim** | `construcție`, `build`, `edificare` |
| tech stack | **tehnologii** | `stack`, `stivă`, `set tehnologic` |
| consultancy (firm) | **firmă de consultanță** | `consultanță` (as a countable noun), `agenție` |
| AI | **AI** | `IA`, `inteligență artificială` (too long for headings; fine once in body prose if it reads naturally) |
| slide deck | **PowerPoint-uri** | `prezentări` (when the jab is meant), `slide-uri`, `deck` |
| quote / price proposal | **ofertă** | `cotație`, `quote`, `deviz` (means something else in RO construction) |

---

## 4. The service #1 spec (the productized assessment)

**This is the load-bearing block.** These exact lines get reused across `index`, `servicii`, `companii`, `cum-lucram`. Pick a variant by available space. Do not paraphrase; pick.

**Canonical name**: `Evaluare de digitalizare` (keep, do not rename). On `companii.astro`, the audience-facing framing is data + AI, but the product is the same shape.

### 4.1 The one-line promise (pick one)

1. `Perimetru fix, preț fix, una până la trei săptămâni.`
2. `Una până la trei săptămâni. Preț fix, perimetru fix, livrabil fix.`
3. `Trei săptămâni, cel mult. Preț fix, spus din prima.`
4. `Preț fix, perimetru fix, una până la trei săptămâni. Fără surprize la final.`
5. (heading form) `O evaluare scurtă. Preț fix.`

### 4.2 The duration line (pick one)

1. `Una până la trei săptămâni, în funcție de cât acoperim.`
2. `Între una și trei săptămâni.`
3. `Una-trei săptămâni de lucru.`
4. `Maximum trei săptămâni de la start la raport.`

*(Note: `1-3 săptămâni` in numerals is fine in `dl` labels and tight cards. Spell out only in prose.)*

### 4.3 The fixed-fee line (pick one)

1. `Preț fix, spus înainte să începem.`
2. `Preț fix. Îl știți înainte să semnăm.`
3. `Preț fix, din intervalele publicate pe pagina de servicii.`
4. `Preț fix. Dacă perimetrul crește, vă spunem înainte, nu la factură.`

### 4.4 The deliverable line (pick one; the triad `constatări + plan de acțiune + recomandări` is mandatory in all)

1. `Primiți trei lucruri: constatări, un plan de acțiune și recomandări.`
2. `La final primiți un document scris: constatări, plan de acțiune, recomandări.`
3. `Livrabilul e un raport scris: ce am găsit, ce e de făcut și în ce ordine, și ce vă recomandăm.`
4. `Constatări, plan de acțiune, recomandări. Scrise, într-un singur document pe care îl puteți citi fără noi în cameră.`
5. (tight card form) `Livrabil: constatări + plan de acțiune + recomandări.`

### 4.5 The AI differentiator (the new, confident claim)

**Short** (headings, cards, eyebrows, meta descriptions):
> `AI pe datele pe care le aveți deja.`

**Medium** (card body, hero sub-paragraph, 1 to 2 sentences):
> `AI pe datele pe care le aveți deja. Nu începem prin a vă cere date noi, ne uităm la ce e deja în sistemele dvs.`

Alternative medium:
> `AI pe datele pe care le aveți deja. Cele mai multe companii au datele. Le au împrăștiate.`

**Long** (section body, 3 to 4 sentences):
> `AI pe datele pe care le aveți deja. Un model bun nu salvează date proaste: orice rezultat de încredere stă pe date curate, legate între ele și verificabile. Acolo se câștigă sau se pierde treaba, și acolo lucrăm noi. Evaluarea vă spune ce se poate face cu ce aveți deja, și ce trebuie reparat mai întâi.`

**The thesis line** (usable standalone as a heading or pull-quote):
> `AI-ul nu se împiedică de model. Se împiedică de datele de dedesubt.`

**Guardrails on this claim**: no clients, no numbers, no percentages, no case studies, no „am făcut asta pentru X". The claim is a thesis about how AI value works, stated from experience. Adrian's enterprise-AI experience may only be referenced generically: **`experiență în platforme de date și AI la scară enterprise, în UK`**. Never name RS, the client, the people, or any of its figures.

### 4.6 The „what this is not" line (pick one; §R4 attitude)

1. `Nu e o prezentare. E un document scris, cu termene și cu oameni care răspund.`
2. `Nu vindem un pilot de AI ca să vedem ce iese. Ne uităm întâi la date.`
3. `Nu certificăm munca altei firme de consultanță.`
4. `Dacă răspunsul e că nu se poate face nimic util cu datele pe care le aveți, vă spunem din prima săptămână.`

### 4.7 Per-page usage

- **`index.astro`** card 01: name + one-line promise (4.1 var. 1 or 5) + short AI differentiator.
- **`servicii.astro`** §01: name + duration (4.2) + fee (4.3) + deliverable (4.4 var. 4) + long AI differentiator + „ce nu facem" (4.6).
- **`companii.astro`**: the audience page leans hardest on AI. Medium or long differentiator + deliverable triad.
- **`cum-lucram.astro`**: the flow line, mandated wording: **`evaluare (1-3 săptămâni, preț fix) → plan → implementare opțională`**, rendered in prose as: `Începem cu o evaluare: una până la trei săptămâni, preț fix. Din ea iese un plan. Implementarea e opțională și e un contract separat.` (Note: render the arrow as prose or as `→`; **never** as an em dash.)

---

## 5. Do-not-touch list (survives verbatim)

**Facts, names, legal, numeric.** Change surrounding prose freely; these tokens do not change.

- `Tech Camp Pro SRL`, `Thorn`, `Thorn Industries`, `Fondată 2026` / `2026`.
- `Adrian Ursu`, `Ioana Drăghici` (exact spelling, with the ă).
- `adrian@thorn.ro`, `ioana@thorn.ro`, `contact@thorn.ro`.
- `Str. Traian Vuia 95, Cluj-Napoca`. Offices: `Cluj-Napoca` + `Iași`.
- ⚠️ **`RO__________` is NO LONGER do-not-touch. Adrian ruled on it 17 Jul 2026. It gets FILLED this pass. See §5.1 for the exact values and the reasoning.** (An earlier draft of this charter said „leave as-is and report it". That instruction is **withdrawn**. If you are working from a cached copy, §5.1 wins.)
- `270.120 RON` (Achiziție Directă ceiling). `Articolul 11 din Legea 98/2016` (anti contract-splitting). `Legea 242/2022`. `OUG 56/2024`. `NIS2 (Legea 124/2025)`. `GDPR`.
- `PNRR Componenta 7`, `Programul Regional Nord-Vest` / `PR Nord-Vest 2021-2027`, `DigiLocal`, `SEAP`, `DUAE`, `DNSC`, `Specializare inteligentă` (the real PR-programme term).
- County list: `Cluj, Bistrița-Năsăud, Maramureș, Sălaj, Satu Mare și Bihor`.
- **All published client/consultancy names, pre-vetted, already live**: `OpenCredo`, `Mesh-AI`, `Sainsbury's`, `Metro`, `Demica`, `Centrica`, `Toyota Connected Europe`. Keep as-is. **Do not add new names. Do not remove existing ones.**
- Vendor + product names: `Regista`, `Sobis`, `Avansis`, `CityManager`, `ANAF (SPV, PatrimVen)`, `Romarg`, `ClausWeb`, `Hetzner`, `Snowflake`, `BigQuery`, `Postgres`, `Airbyte`, `dbt`, `Kubernetes`, `Metabase`, `Superset`, `Looker Studio`, `Python`, `TypeScript`, `Formspree` action URL.
- **All prices and ranges as currently published**: `8K / 20-25K / 40K RON`; `15K - 130K RON`; `40K - 250K RON`; `3,5K - 6K RON / lună`; `€8K`; `€60K`; `€4K - €12K`; `€15K - €60K`; `€8K - €40K`. Do not adjust, do not convert, do not round.
- Durations other than the assessment: `2-4 săptămâni` (cerere de finanțare), `3-9 luni` (implementare), `una-trei zile` (on-site), `două-patru săptămâni` (companii audit, but see §7).
- **Do not mention**: CTO-for-hire, equity, RS, the RS client, Puntea, any named prospect, any date after today.

---

## 5.1 The CUI (RULED 17 Jul 2026, fill it exactly as specified, no improvisation)

The site renders the literal unfilled placeholder `RO__________` in **four** places. All four get filled this pass. There is exactly one correct string and several known-wrong ones, so this section is prescriptive to the character.

### The four sites

| File | Line (at time of writing) | Label | Value |
|---|---|---|---|
| `src/components/Footer.astro` | `text.ro.cui` | **`CUI`** | **`53945382`** |
| `src/components/Footer.astro` | `text.en.cui` | **`Company no.`** | **`53945382`** |
| `src/pages/despre.astro` | `dt` „CUI" / `dd` | **`CUI`** | **`53945382`** |
| `src/pages/en/about.astro` | `dt` currently reads **`VAT`** | **`Company no.`** (change the `dt`) | **`53945382`** |

### The three strings that must never ship

1. ⚠️ **`RO53945382`** (the RO-prefixed CUI). **The `RO` prefix in the placeholder is itself the bug.** This exact brand has already been bitten by it once (Adrian's records: *„Thorn's Google CIF had wrongly held RO-prefixed CUI since 12 Jun, corrected"*). Drop the prefix. The placeholder's shape is not a template to fill; it is the error to remove.
2. ⚠️ **`RO54029413`**. That is a *cod special de TVA* (art. 317, intra-EU acquisitions). It does **not** make TCP a VAT payer.
3. ⚠️ **The label `VAT`, in any language.** TCP only becomes a VAT payer on **01.08**. Labelling anything „VAT" today claims a registration TCP does not hold, which breaks the honest-claims rule in §0.6. This is why EN gets the neutral **`Company no.`** and not „VAT".

Adrian's standing rule: *„RO = CUI 53945382, abroad = VAT RO54029413, different numbers by design, never mixed."* This pass deliberately publishes **only the company number, under a neutral EN label**.

### The Footer structural fix (a tiny tweak that serves the content, explicitly allowed)

`Footer.astro` currently hardcodes the label separately from the value and then strips it back off with a regex:

```astro
<dt class="text-cream-100/60">{lang === 'ro' ? 'CUI' : 'VAT'}</dt>
<dd class="font-mono tabular text-cream-100">{t.cui.replace(/^(VAT |CUI )/, '')}</dd>
```

This is fragile (the label lives in two places and the regex exists only to undo the duplication) and it hardcodes the banned `VAT` label. **Mandated fix**: split the field into `cuiLabel` + `cui`, and delete the regex.

```astro
// in text.ro:
cuiLabel: 'CUI',
cui: '53945382',

// in text.en:
cuiLabel: 'Company no.',
cui: '53945382',

// in the markup:
<dt class="text-cream-100/60">{t.cuiLabel}</dt>
<dd class="font-mono tabular text-cream-100">{t.cui}</dd>
```

This is the **only** structural change any agent is authorised to make. It touches no class, no layout, no grid. Do not extend it into other fields.

---

## 6. EN mirror guidance

The EN pages are **secondary to RO**. They exist for the EU/B2B reader and for credibility, not for primării. Rules:

1. **RO leads. EN mirrors.** Write RO first; the EN is the same argument in native English, not a translation artifact. Where a RO line got shorter and blunter, the EN gets shorter and blunter too.
2. **Light and natural.** British spelling (`digitalisation`, `organisation`, `prioritised`) to match what is already live. Contractions are fine in EN (`doesn't`, `won't`); they are not in RO.
3. **Same dash rule.** No em or en dashes in EN either.
4. **Do not import the RO periphrasis back into EN.** `un om care răspunde, cu nume și prenume` is `named accountability` in EN. The calque only goes one way.
5. **EN keeps the same facts, prices and names as RO.** The one place EN deliberately diverges from a literal mirror is the company number: RO labels it **`CUI`**, EN labels it **`Company no.`**, never `VAT`. Same value (`53945382`) both sides. See §5.1.
6. **EN drops nothing and adds nothing.** Same sections, same claims.

### EN term for each canonical RO term

| Concept | RO (mandated) | EN (mandated) |
|---|---|---|
| scope | perimetru / ce intră în lucrare | **scope** |
| assessment | evaluare (`Evaluare de digitalizare`) | **assessment** (`Digitalisation assessment`) |
| findings | constatări | **findings** |
| action plan | plan de acțiune | **action plan** |
| recommendations | recomandări | **recommendations** |
| dashboard | tablou de bord | **dashboard** |
| data ingestion | aducem datele din sistemele care le produc | **ingestion** (verb: *we pull the data from the systems that produce it*) |
| data platform | platformă de date | **data platform** |
| data foundation | temelia de date | **data foundations** |
| integration | integrare / strat de integrare | **integration / integration layer** |
| reporting layer | strat de raportare | **reporting layer** |
| technical debt | datorie tehnică | **technical debt** |
| engagement | proiect / contract / colaborare | **engagement** (fine in EN, banned in RO) |
| deliverable | livrabil | **deliverable** |
| fixed fee | preț fix | **fixed fee** |
| accountability | un om care răspunde, cu nume și prenume | **named accountability** |
| stakeholder | decident / cine folosește sistemul | **decision-makers / the people who use it** (avoid bare „stakeholders") |
| procurement | achiziție publică; **Achiziție Directă** | **procurement**; keep **Achiziție Directă** untranslated, gloss once as *(direct award)* |
| contract splitting | divizarea contractului | **contract splitting** |
| open standards | standarde deschise | **open standards** |
| handover | predare | **handover** |
| maintenance | mentenanță | **maintenance** |
| funding line | linie de finanțare | **funding line** |
| application window | sesiune de depunere | **application window** |
| grant application | cerere de finanțare | **grant application** |
| build | dezvoltare | **build** |
| tech stack | tehnologii | **stack** |
| consultancy firm | firmă de consultanță | **consultancy** |
| Ioana's role | partea comercială | **commercial side** (not „Sales lead", not „Head of Sales") |
| company number | **CUI** `53945382` | **Company no.** `53945382` (never `VAT`, never `RO`-prefixed, see §5.1) |
| Adrian's UK experience | experiență în platforme de date și AI la scară enterprise, în UK | **enterprise-scale data platform and AI experience, UK** (generic only, never name the client) |

**EN AI differentiator** (same three lengths):
- Short: `AI on the data you already have.`
- Medium: `AI on the data you already have. We don't start by asking for new data. We look at what is already in your systems.`
- Long: `AI on the data you already have. A good model doesn't rescue bad data: any result you can trust sits on data that is clean, connected and checkable. That is where the work is won or lost, and that is where we work. The assessment tells you what you can do with what you already have, and what needs fixing first.`
- Thesis: `AI doesn't fail at the model. It fails at the data underneath.`

**EN assessment spec**: `Fixed scope, fixed fee, one to three weeks. You get findings, an action plan and recommendations, in writing.`

---

## 7. Where the strategy directive and the live copy genuinely conflict

Rewrite agents: **apply the directive**, and the conflict is logged here for Adrian to arbitrate. Do not silently invent a reconciliation.

**C1. Assessment duration: 1-2 weeks (live) vs 1-3 weeks (ratified).**
Live in four places: `index` card 01 („O săptămână sau două"), `servicii` §01, `primarii` step 01 `dl`, `primarii` FAQ „Cât durează concret?". **Directive wins: `1-3 săptămâni` everywhere.** Flagged because it is a public-facing promise change, not a wording change.

**C2. `companii.astro` has a second, different „first phase". SETTLED FOR THIS PASS. Do not re-litigate.**
`Audit de date și arhitectură`, **două-patru săptămâni**, **€4K-€12K**. The site therefore carries two first-phase products with different names, durations and currencies from the `servicii` assessment (1-3 weeks, RON ladder). Whether they are one product or two is a **commercial decision that cannot be made without inventing one**, so **Adrian arbitrates later, outside this pass.**

**The ruling for the `companii` agent, binding:**
- **Leave the audit card alone on NAME, DURATION and PRICE.** Apply voice + terminology fixes to its prose, and let the AI differentiator do the sharpening. Nothing else.
- Its **`două-patru săptămâni` / `Two to four weeks` is CORRECT AS-IS and is NOT a violation of the 1-3 week mandate**, because it is a different product. **Do not flag it. Do not „align" it to 1-3 weeks. Do not rename it to „evaluare"/„assessment".**
- **RO and EN must agree WITH EACH OTHER on this card** (both 2-4 weeks, both `Audit de date și arhitectură` / `Data & architecture audit`). An RO/EN mismatch here **is** a real finding worth reporting. The 2-4 week duration itself is not.

**Where the 1-3 week mandate actually bites** (C1, below): the `Evaluare de digitalizare` assessment only, i.e. `index` card 01, `servicii` §01, `primarii`, `cum-lucram`. Nowhere else.

**C3. The RON ladder vs „fixed fee".**
`servicii` publishes three assessment prices by client size (8K / 20-25K / 40K RON). That is a fixed fee *per tier*, which is defensible, but „preț fix" plus three tiers plus a fourth EUR range on `companii` reads as four products. Noted, no action this pass.

**C4. `Faza inițială: Plătită, nu gratuită` vs the assessment as the lead product.**
Consistent, but the `servicii` aside frames the assessment as a paid *gate*, while the strategy frames it as a *product* that stands alone and sells itself. Tone divergence only; the §4 lines lean product. No conflict for the agents.

**C5. Ioana's coverage.**
`index` and `despre` label her card `Sector public`; `contact` calls her line „pentru discuții cu primării"; `primarii` names her the contact. Consistent. But `companii` names Adrian as contact while `despre` says Ioana handles „primele discuții exploratorii" generally. Minor; rewrite agents: keep the per-page contact as-is.

**C6. `15 ani` vs `Cincisprezece ani`.**
Live inconsistency between `index` and `companii`/`despre`. **Resolved by this charter: numerals, `15 ani`, everywhere.** Not for arbitration.

**C7. `M RON` on `primarii` (PNRR Componenta 7 tier label). KNOWN LIVE DEFECT: flag, do not invent.**
`Până la M RON` renders live and is meaningless: **a number was never there.** Fixed by kill-list #53 to **`De ordinul milioanelor`**, which is honest, non-numeric, and adds no claim. **Never invent a figure here**, and do not source one from memory, the funding programme's public documentation, or anywhere else. Flagged so Adrian knows the gap is real rather than a formatting slip.

---

## 8. Pre-submit checklist (every agent, before finishing)

- [ ] Zero `—` and zero `–` in my file. (`grep -c '[—–]'` returns 0.)
- [ ] Zero cedilla `ş` / `ţ`. All diacritics comma-below.
- [ ] Zero occurrences of: `scop` (scope sense), `angajament`, `responsabilitate nominală`, `Sales lead`, `preluare`, `tarif fix`, `fragmentat`, `stack`, `stivă`, `dashboards`, `cotați`, `consumatori din aval`.
- [ ] `dumneavoastră` / `dvs.` / `vă` only. Zero `tu` / `voi`.
- [ ] If my file had `RO__________`: it is **gone**, replaced per §5.1 (`53945382`, label `CUI` in RO / `Company no.` in EN). `grep -c 'RO__________'` returns 0. `grep -c 'RO53945382\|RO54029413'` returns 0. No `VAT` label anywhere in my file.
- [ ] Every price, client name, legal reference from §5 present and byte-identical.
- [ ] Assessment lines taken verbatim from §4, not paraphrased.
- [ ] No new client, metric, date or case study anywhere.
- [ ] No layout, class, href, import, or `u()` change. Diff is text-only.
- [ ] `title` + `description` rewritten to read native and match the new positioning; canonical / hreflang / lang props untouched.
