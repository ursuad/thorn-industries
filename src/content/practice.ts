type Item = { id?: string; kicker?: string; title: string; body: string; deliverable?: string; href?: string; link?: string };
type Section = { id?: string; label: string; heading: string; intro?: string; items: Item[] };
type Page = { label: string; heading: string; accent: string; description: string; sections: Section[] };
export type PageKey = 'home' | 'services' | 'companies' | 'process' | 'public' | 'about' | 'contact';

const en: Record<PageKey, Page> = {
  home: {
    label: 'Senior engineering · Europe', heading: 'From a delivery gap', accent: 'to a working system.',
    description: 'A small senior engineering practice for consultancies, integrators and European businesses. We build defined pieces of data, platform, integration and AI work, from a focused test to implementation and handover.',
    sections: [
      { label: 'Where we fit', heading: 'Your project. A clear piece of the work.', items: [
        { kicker: '01 · Delivery partners', title: 'An engineering gap in a funded project.', body: 'You have the customer and the wider programme. We scope a specialist work package with your delivery lead, within the customer’s architecture and ways of working.', href: '/companies#partners', link: 'For consultancies & integrators' },
        { kicker: '02 · Business teams', title: 'A process held together by manual work.', body: 'Disconnected systems, unreliable reporting or repeated reconciliation. Start with the operational problem and a result the receiving team can check.', href: '/companies#businesses', link: 'For European businesses' },
        { kicker: '03 · Public sector', title: 'Better use of the systems you have.', body: 'Data flows, integrations and useful digital services for Romanian public institutions. Define the technical work around the institution’s requirements.', href: '/public-sector', link: 'For Romanian public institutions' },
      ] },
      { label: 'Example work packages', heading: 'Small enough to test. Useful enough to build on.', intro: 'Illustrative starting points, not completed customer case studies. Inputs, acceptance criteria and price are agreed after reviewing the problem.', items: [
        { title: 'Find one operational exception.', body: 'Compare supplied order data with supplier updates. Check one exception type against the current manual process.', deliverable: 'A retrospective test, source evidence for review and a recommendation on whether to proceed.', href: '/services#ai', link: 'AI & workflow engineering' },
        { title: 'Reconcile data before a migration.', body: 'Compare catalogues or datasets, expose mismatches and make mappings reviewable before moving the data.', deliverable: 'Reviewed mappings, a repeatable reconciliation process and an unresolved-exception list.', href: '/services#data', link: 'Data & integration engineering' },
        { title: 'Make one deployment repeatable.', body: 'Take one application through a supported deployment path in the customer’s existing environment.', deliverable: 'Deployment automation, checks, logs, rollback instructions and a handover to the receiving team.', href: '/services#platform', link: 'Cloud & platform engineering' },
      ] },
      { label: 'How we work', heading: 'A test, a decision, then implementation.', items: [
        { title: 'Define the smallest useful result.', body: 'Review the inputs, constraints and existing tools. Name the person who can accept the result and agree what success means.' },
        { title: 'Make the evidence reviewable.', body: 'Run a bounded test or assessment. Show what worked, what failed and what remains uncertain. The next step follows the evidence.' },
        { title: 'Build for the receiving team.', body: 'Scope production work separately. Agree access, operation and support responsibilities, then hand over code, checks and operating instructions.', href: '/how-we-work', link: 'Our delivery process' },
      ] },
    ],
  },
  services: {
    label: 'Services', heading: 'Defined engineering work.', accent: 'A result you can inspect.',
    description: 'Data engineering, systems integration, cloud automation and AI workflows. Each package starts with a problem, accessible inputs and an agreed acceptance owner.',
    sections: [
      { id: 'consultancy', label: 'Assessment & delivery', heading: 'Start where the uncertainty is.', intro: 'An assessment produces findings, an action plan and recommendations. A focused test checks one proposed outcome. Choose the smallest useful first step together.', items: [
        { id: 'data', title: 'Data platforms & integration', body: 'Connect operational systems, reconcile inconsistent data and build a dependable path to reporting or migration. Work within the customer’s platform and access rules.', deliverable: 'Pipelines or integrations, documented mappings, quality checks and instructions for running them.' },
        { id: 'platform', title: 'Cloud & platform automation', body: 'Make a deployment path repeatable in the existing environment. Agree the runtime, security constraints and receiving team before implementation.', deliverable: 'Automation, deployment checks, logs, rollback instructions and operational handover.' },
        { id: 'ai', title: 'AI workflows on business data', body: 'Test a concrete task against supplied historical inputs and the current process. Keep source evidence available and make human review part of the workflow.', deliverable: 'A test set, reviewable outputs, an evaluation against agreed criteria and production recommendations.' },
      ] },
      { id: 'software', label: 'Commercial shape', heading: 'Agree the boundary before the build.', items: [
        { title: 'One written work package.', body: 'Define inputs, deliverables, exclusions, acceptance criteria, responsibilities and fees in the proposal. Duration and team composition depend on the work.' },
        { title: 'A separate production decision.', body: 'Production integrations, hosting, ongoing operation and support need an explicit scope and receiving owner. A test is evidence for that decision.' },
      ] },
    ],
  },
  companies: {
    label: 'Partners & businesses', heading: 'Specialist engineering.', accent: 'Inside your delivery.',
    description: 'For established consultancies, integrators and European businesses with a concrete data, platform or integration problem. Define the gap, agree a package and validate the result together.',
    sections: [
      { id: 'partners', label: 'Consultancies & integrators', heading: 'You own the programme. We take a defined part.', items: [
        { title: 'A work package for your delivery lead.', body: 'A migration, integration, deployment path or AI workflow that fits inside a wider customer project. Start with the blocked milestone, the architecture and the acceptance owner.', deliverable: 'A scoped technical proposal with dependencies, deliverables, validation and a handover plan.' },
        { title: 'Work within the customer’s constraints.', body: 'Agree access, security requirements, delivery practices and communication before starting. Team composition and availability are confirmed for the engagement.' },
      ] },
      { id: 'businesses', label: 'Direct business projects', heading: 'Start with the cost of the current process.', items: [
        { title: 'Reporting and reconciliation.', body: 'Trace a number back to its source, connect data across systems or make a repeated manual check reproducible. Agree which decision the result needs to support.' },
        { title: 'AI with an acceptance test.', body: 'Choose one task and compare results with how the work is done today. Review errors, source evidence and operating cost before deciding on production.' },
      ] },
    ],
  },
  process: {
    label: 'How we work', heading: 'Clear boundaries.', accent: 'Reviewable progress.',
    description: 'A focused first step, a decision based on evidence and an implementation the receiving team can operate. Scope and fees are agreed before work starts.',
    sections: [
      { label: 'Delivery sequence', heading: 'Each stage ends with something you can review.', items: [
        { title: '01 · Inspect & scope', body: 'Understand the blocked outcome and inspect representative inputs. Check whether an existing product or configuration already solves the problem.', deliverable: 'A written scope: outcome, inputs, exclusions, acceptance criteria, responsibilities, timing and fees.' },
        { title: '02 · Test & decide', body: 'Run the agreed assessment or bounded test. Compare with the current process and record gaps and limits.', deliverable: 'Findings, source evidence, an action plan and a recommendation to proceed, change direction or stop.' },
        { title: '03 · Implement & hand over', body: 'Agree production work separately. Build within the chosen environment and validate with the person receiving the system.', deliverable: 'Code, documentation, checks and operating instructions. Ongoing support is defined explicitly.' },
      ] },
      { label: 'Working agreement', heading: 'Decisions made before access is granted.', items: [
        { title: 'Data and access.', body: 'Agree what data is needed, where it may be processed, which providers may be used and who can access it. Use representative or minimised inputs where practical.' },
        { title: 'Ownership and operation.', body: 'Name the technical contact and acceptance owner. Set out delivery checkpoints, handover materials and responsibility for production operation in the proposal.' },
      ] },
    ],
  },
  public: {
    label: 'Romanian public sector', heading: 'Digital services', accent: 'with a practical plan.',
    description: 'Engineering for Romanian city halls, county councils and local public services. Start with the systems in use, the operational problem and the people who will receive the result.',
    sections: [
      { label: 'Technical work', heading: 'Connect what exists. Make the next step clear.', items: [
        { title: 'Assessment & priorities.', body: 'Review current systems, data flows and bottlenecks. Identify feasible interventions and dependencies.', deliverable: 'Written findings, an action plan, recommendations and a proposed implementation scope.' },
        { title: 'Integration & useful services.', body: 'Define an integration, reporting flow or digital service around the institution’s requirements and available interfaces.', deliverable: 'An agreed technical deliverable, validation with the receiving team and operating documentation.' },
      ] },
      { label: 'Before contracting', heading: 'Confirm the requirements for the actual project.', items: [
        { title: 'Procurement and funding.', body: 'The institution’s procurement requirements and any funding conditions need to be checked for the specific project. Eligibility and an open funding window must be confirmed before planning around them.' },
        { title: 'Data and ongoing operation.', body: 'Agree hosting location, access, data-processing obligations, support and the receiving owner before implementation. These belong in the contract for the actual system.' },
      ] },
    ],
  },
  about: {
    label: 'About', heading: 'A small practice.', accent: 'Senior engineering focus.',
    description: 'Thorn Industries is the commercial brand of Tech Camp Pro SRL, a Romanian company. Our work spans data platforms, cloud automation, backend integration and useful AI workflows.',
    sections: [
      { label: 'The practice', heading: 'Experience applied to a defined problem.', items: [
        { title: 'Technical depth.', body: 'The available expertise includes data engineering, platform automation, backend systems and integration, with experience working remotely across European organisations.' },
        { title: 'A team agreed for the work.', body: 'The proposal identifies who will deliver, what they will be responsible for and their availability. The work is scoped around the customer’s architecture and the team receiving the system.' },
      ] },
      { label: 'Company', heading: 'A direct route to a technical conversation.', items: [
        { title: 'Thorn Industries / Tech Camp Pro SRL', body: 'Company no. 53945382. Registered address: Str. Traian Vuia 95, Cluj-Napoca, Romania.', href: '/contact', link: 'Contact details' },
        { title: 'Adrian Ursu', body: 'For technical questions, a delivery gap or a proposed work package, contact Adrian at adrian@thorn.ro.', href: 'mailto:adrian@thorn.ro', link: 'Email Adrian' },
      ] },
    ],
  },
  contact: {
    label: 'Contact', heading: 'Tell us what', accent: 'needs to work.',
    description: 'A short outline is enough to begin. Describe the blocked outcome, the systems involved and what a useful result would look like.',
    sections: [
      { label: 'A useful first conversation', heading: 'Bring the problem, the constraints and the owner.', items: [
        { title: 'For delivery partners.', body: 'Describe the customer project in general terms, the engineering gap, the target milestone and who will accept the work. Include timing and budget constraints if known.' },
        { title: 'For businesses & public institutions.', body: 'Describe the current process, what causes the problem and which systems are involved. Tell us who uses the result and who will receive the system.' },
      ] },
    ],
  },
};

const ro: Record<PageKey, Page> = {
  home: {
    label: 'Inginerie cu experiență · Europa', heading: 'De la un blocaj tehnic', accent: 'la un sistem funcțional.',
    description: 'O echipă mică de ingineri cu experiență, pentru firme de consultanță, integratori și companii europene. Livrăm lucrări bine definite de date, infrastructură, integrare și AI, de la un test punctual la implementare și predare.',
    sections: [
      { label: 'Cui ne adresăm', heading: 'Proiectul dumneavoastră. O lucrare bine definită.', items: [
        { kicker: '01 · Parteneri', title: 'O nevoie tehnică într-un proiect cu buget.', body: 'Aveți clientul și coordonați proiectul. Stabilim împreună cu responsabilul de proiect lucrarea tehnică, în arhitectura și modul de lucru ale clientului.', href: '/ro/companii#partners', link: 'Pentru firme de consultanță și integratori' },
        { kicker: '02 · Companii', title: 'Un proces ținut în viață prin muncă manuală.', body: 'Sisteme care nu comunică, rapoarte greu de verificat sau reconcilieri repetate. Pornim de la problema concretă și de la un rezultat pe care echipa îl poate verifica.', href: '/ro/companii#businesses', link: 'Pentru companii europene' },
        { kicker: '03 · Sector public', title: 'Mai multă valoare din sistemele existente.', body: 'Fluxuri de date, integrări și servicii digitale utile pentru instituții publice din România. Definim lucrarea pornind de la cerințele instituției.', href: '/ro/primarii', link: 'Pentru instituții publice' },
      ] },
      { label: 'Exemple de lucrări', heading: 'Un test restrâns. Un rezultat util.', intro: 'Exemple de puncte de pornire, nu studii de caz ale unor clienți. Stabilim datele necesare, criteriile de acceptare și prețul după analiza problemei.', items: [
        { title: 'Identificarea unei excepții operaționale.', body: 'Comparăm datele furnizate despre comenzi cu actualizările de la furnizori. Verificăm un tip de excepție față de procesul manual actual.', deliverable: 'Un test pe date istorice, dovezi din surse pentru verificare și o recomandare privind continuarea.', href: '/ro/servicii#ai', link: 'AI în procesele de lucru' },
        { title: 'Reconcilierea datelor înainte de migrare.', body: 'Comparăm cataloage sau seturi de date, evidențiem nepotrivirile și pregătim corespondențe care pot fi verificate înainte de mutarea datelor.', deliverable: 'Corespondențe verificate, un proces repetabil de reconciliere și lista excepțiilor nerezolvate.', href: '/ro/servicii#data', link: 'Date și integrări' },
        { title: 'O instalare care poate fi repetată.', body: 'Pregătim o cale de instalare și actualizare pentru o aplicație, în mediul existent al clientului.', deliverable: 'Automatizare, verificări, jurnale, instrucțiuni de revenire la versiunea anterioară și predare către echipă.', href: '/ro/servicii#platform', link: 'Infrastructură și automatizare' },
      ] },
      { label: 'Cum lucrăm', heading: 'Un test, o decizie, apoi implementarea.', items: [
        { title: 'Definim cel mai mic rezultat util.', body: 'Analizăm datele, constrângerile și instrumentele existente. Stabilim cine poate accepta rezultatul și ce înseamnă reușita.' },
        { title: 'Facem rezultatele verificabile.', body: 'Realizăm un test restrâns sau o evaluare. Arătăm ce a funcționat, ce a eșuat și ce rămâne incert. Următorul pas se bazează pe rezultate.' },
        { title: 'Construim pentru echipa care preia sistemul.', body: 'Stabilim separat lucrarea pentru producție. Clarificăm accesul, operarea și suportul, apoi predăm codul, verificările și instrucțiunile.', href: '/ro/cum-lucram', link: 'Procesul de lucru' },
      ] },
    ],
  },
  services: {
    label: 'Servicii', heading: 'Lucrări tehnice bine definite.', accent: 'Rezultate verificabile.',
    description: 'Inginerie de date, integrări, automatizarea infrastructurii și fluxuri de lucru cu AI. Fiecare lucrare începe cu o problemă, date accesibile și un responsabil pentru acceptarea rezultatului.',
    sections: [
      { id: 'consultancy', label: 'Evaluare și implementare', heading: 'Începem cu ce trebuie lămurit.', intro: 'Evaluarea produce constatări, un plan de acțiune și recomandări. Un test punctual verifică un rezultat propus. Alegem împreună cel mai mic pas util.', items: [
        { id: 'data', title: 'Platforme de date și integrări', body: 'Legăm sistemele operaționale, reconciliem datele neuniforme și pregătim raportarea sau migrarea. Lucrăm în platforma clientului și cu regulile sale de acces.', deliverable: 'Fluxuri de date sau integrări, corespondențe documentate, verificări de calitate și instrucțiuni de operare.' },
        { id: 'platform', title: 'Infrastructură cloud și automatizare', body: 'Pregătim o cale repetabilă de instalare în mediul existent. Stabilim mediul de rulare, cerințele de securitate și echipa care preia sistemul.', deliverable: 'Automatizare, verificări, jurnale, instrucțiuni de revenire la versiunea anterioară și predare operațională.' },
        { id: 'ai', title: 'AI pe datele companiei', body: 'Testăm o sarcină concretă pe date istorice furnizate, în comparație cu procesul actual. Păstrăm dovezile din surse și includem verificarea umană în proces.', deliverable: 'Date de test, rezultate verificabile, evaluare după criteriile convenite și recomandări pentru producție.' },
      ] },
      { id: 'software', label: 'Forma colaborării', heading: 'Stabilim ce intră în lucrare înainte de dezvoltare.', items: [
        { title: 'O lucrare descrisă în scris.', body: 'Oferta precizează datele necesare, livrabilele, excluderile, criteriile de acceptare, responsabilitățile și prețul. Durata și echipa depind de lucrare.' },
        { title: 'O decizie separată pentru producție.', body: 'Integrările de producție, găzduirea, operarea și suportul cer o lucrare definită explicit și un responsabil pentru preluare. Testul ajută la luarea acestei decizii.' },
      ] },
    ],
  },
  companies: {
    label: 'Parteneri și companii', heading: 'Inginerie specializată.', accent: 'În proiectul dumneavoastră.',
    description: 'Pentru firme de consultanță, integratori și companii europene cu o problemă concretă de date, infrastructură sau integrare. Definim nevoia, convenim lucrarea și verificăm rezultatul împreună.',
    sections: [
      { id: 'partners', label: 'Firme de consultanță și integratori', heading: 'Coordonați proiectul. Preluăm o parte bine definită.', items: [
        { title: 'O lucrare pentru responsabilul de proiect.', body: 'O migrare, o integrare, o cale de instalare sau un proces cu AI într-un proiect mai amplu. Pornim de la etapa blocată, arhitectură și cine acceptă rezultatul.', deliverable: 'O ofertă tehnică în care precizăm dependențele, livrabilele, validarea și planul de predare.' },
        { title: 'Lucrăm în limitele stabilite de client.', body: 'Convenim accesul, cerințele de securitate, modul de lucru și comunicarea înainte de începere. Echipa și disponibilitatea se confirmă pentru fiecare proiect.' },
      ] },
      { id: 'businesses', label: 'Proiecte directe pentru companii', heading: 'Pornim de la costul procesului actual.', items: [
        { title: 'Raportare și reconciliere.', body: 'Urmărim o cifră până la sursă, conectăm date între sisteme sau facem repetabilă o verificare manuală. Stabilim ce decizie trebuie să susțină rezultatul.' },
        { title: 'AI cu un test de acceptare.', body: 'Alegem o sarcină și comparăm rezultatele cu procesul actual. Analizăm erorile, dovezile din surse și costul de operare înainte de decizia pentru producție.' },
      ] },
    ],
  },
  process: {
    label: 'Cum lucrăm', heading: 'Limite clare.', accent: 'Progres verificabil.',
    description: 'Un prim pas bine delimitat, o decizie bazată pe rezultate și o implementare pe care echipa o poate opera. Stabilim lucrarea și prețul înainte de începere.',
    sections: [
      { label: 'Etapele de lucru', heading: 'Fiecare etapă se încheie cu ceva verificabil.', items: [
        { title: '01 · Analiză și definire', body: 'Înțelegem rezultatul blocat și analizăm date reprezentative. Verificăm dacă un produs existent sau configurarea lui rezolvă deja problema.', deliverable: 'O descriere scrisă: rezultat, date, excluderi, criterii de acceptare, responsabilități, durată și preț.' },
        { title: '02 · Test și decizie', body: 'Realizăm evaluarea sau testul convenit. Comparăm cu procesul actual și consemnăm lipsurile și limitele.', deliverable: 'Constatări, dovezi din surse, un plan de acțiune și o recomandare: continuare, schimbare de direcție sau oprire.' },
        { title: '03 · Implementare și predare', body: 'Convenim separat lucrarea pentru producție. Construim în mediul ales și validăm cu persoana care preia sistemul.', deliverable: 'Cod, documentație, verificări și instrucțiuni de operare. Suportul ulterior se stabilește explicit.' },
      ] },
      { label: 'Înainte de începere', heading: 'Decizii luate înainte de acordarea accesului.', items: [
        { title: 'Date și acces.', body: 'Stabilim ce date sunt necesare, unde pot fi procesate, ce furnizori pot fi folosiți și cine are acces. Folosim date reprezentative sau reduse când este practic.' },
        { title: 'Responsabilități și operare.', body: 'Numim persoana de contact tehnic și responsabilul pentru acceptare. Oferta stabilește verificările intermediare, materialele de predare și cine operează sistemul în producție.' },
      ] },
    ],
  },
  public: {
    label: 'Administrație publică din România', heading: 'Servicii digitale', accent: 'cu un plan practic.',
    description: 'Inginerie pentru primării, consilii județene și servicii publice locale. Pornim de la sistemele folosite, problema operațională și oamenii care vor prelua rezultatul.',
    sections: [
      { label: 'Lucrarea tehnică', heading: 'Conectăm ce există. Clarificăm următorul pas.', items: [
        { title: 'Evaluare și priorități.', body: 'Analizăm sistemele actuale, fluxurile de date și blocajele. Identificăm intervențiile fezabile și dependențele.', deliverable: 'Constatări scrise, un plan de acțiune, recomandări și o propunere de implementare.' },
        { title: 'Integrări și servicii utile.', body: 'Definim o integrare, un flux de raportare sau un serviciu digital pornind de la cerințele instituției și interfețele disponibile.', deliverable: 'Un rezultat tehnic convenit, validare cu echipa care îl preia și documentație de operare.' },
      ] },
      { label: 'Înainte de contractare', heading: 'Confirmăm cerințele proiectului concret.', items: [
        { title: 'Achiziție și finanțare.', body: 'Cerințele de achiziție ale instituției și condițiile de finanțare trebuie verificate pentru proiectul concret. Eligibilitatea și existența unei sesiuni deschise se confirmă înainte de planificare.' },
        { title: 'Date și operare.', body: 'Stabilim locația găzduirii, accesul, obligațiile privind datele, suportul și responsabilul pentru preluare înainte de implementare. Acestea se prevăd în contractul sistemului.' },
      ] },
    ],
  },
  about: {
    label: 'Despre', heading: 'O echipă mică.', accent: 'Ingineri cu experiență.',
    description: 'Thorn Industries este marca comercială a Tech Camp Pro SRL, o companie din România. Lucrăm la platforme de date, automatizare cloud, integrări și procese utile cu AI.',
    sections: [
      { label: 'Ce aducem în proiect', heading: 'Experiență aplicată unei probleme concrete.', items: [
        { title: 'Experiență tehnică.', body: 'Expertiza disponibilă cuprinde inginerie de date, automatizarea infrastructurii, sisteme backend și integrări, cu experiență de lucru la distanță în organizații europene.' },
        { title: 'O echipă stabilită pentru lucrare.', body: 'Oferta precizează cine livrează, pentru ce răspunde și când este disponibil. Definim lucrarea în funcție de arhitectura clientului și de echipa care preia sistemul.' },
      ] },
      { label: 'Companie', heading: 'O cale directă către o discuție tehnică.', items: [
        { title: 'Thorn Industries / Tech Camp Pro SRL', body: 'CUI 53945382. Sediu social: Str. Traian Vuia 95, Cluj-Napoca, România.', href: '/ro/contact', link: 'Date de contact' },
        { title: 'Adrian Ursu', body: 'Pentru întrebări tehnice, un blocaj într-un proiect sau o lucrare propusă, îl puteți contacta pe Adrian la adrian@thorn.ro.', href: 'mailto:adrian@thorn.ro', link: 'Scrieți-i lui Adrian' },
      ] },
    ],
  },
  contact: {
    label: 'Contact', heading: 'Spuneți-ne ce', accent: 'trebuie să funcționeze.',
    description: 'O descriere scurtă este suficientă pentru început. Spuneți-ne ce rezultat este blocat, ce sisteme sunt implicate și cum arată un rezultat util.',
    sections: [
      { label: 'O primă discuție utilă', heading: 'Problema, limitele și cine preia rezultatul.', items: [
        { title: 'Pentru parteneri de proiect.', body: 'Descrieți proiectul clientului în termeni generali, nevoia tehnică, etapa vizată și cine va accepta lucrarea. Includeți termenele și limitele de buget, dacă le cunoașteți.' },
        { title: 'Pentru companii și instituții publice.', body: 'Descrieți procesul actual, cauza problemei și sistemele implicate. Spuneți-ne cine folosește rezultatul și cine va prelua sistemul.' },
      ] },
    ],
  },
};

export const pages = { en, ro };
