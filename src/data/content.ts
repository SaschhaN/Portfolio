/**
 * All personal content of the site lives here.
 * Update your CV by editing this file; the components never need to change.
 * Every text visitors read has an `en` and a `de` version.
 */
import type { Interest, LanguageSkill, Profile, Project, SkillGroup, TimelineEntry } from '../types'

export const profile: Profile = {
  name: 'Sascha Niederhauser',
  title: {
    en: 'Business Information Technology Â· MSc student',
    de: 'Wirtschaftsinformatik Â· MSc-Student',
  },
  location: { en: 'Mellingen AG, Switzerland', de: 'Mellingen AG, Schweiz' },
  tagline: {
    en: 'I connect business and IT, from cloud security on Azure to process automation and project management.',
    de: 'Ich verbinde Business und IT, von Cloud-Security auf Azure bis zu Prozessautomatisierung und Projektmanagement.',
  },
  about: {
    en: [
      'I hold a Bachelor of Science FHNW in Business Information Technology and am now studying for a Master of Science in Business Information Systems at FHNW in Olten.',
      'In my bachelor thesis I built a security framework for cloud-native applications on Microsoft Azure, with a gap analysis against the OWASP Top 10, a control catalogue and a reference architecture. Before my studies, I spent two years at ABB, where I automated processes with Power Automate, built Power BI dashboards and led a proof of concept for a project-management application.',
      'Outside of work I go bouldering, play football, play electric guitar and piano, and tinker with Linux, cloud tech and local AI.',
    ],
    de: [
      'Ich habe einen Bachelor of Science FHNW in Business Information Technology und studiere jetzt im Master of Science in Business Information Systems an der FHNW in Olten.',
      'In meiner Bachelorarbeit habe ich ein Security-Framework fÃ¼r cloud-native Anwendungen auf Microsoft Azure entwickelt, mit einer Gap-Analyse nach OWASP Top 10, einem Kontrollkatalog und einer Referenzarchitektur. Vor dem Studium war ich zwei Jahre bei ABB. Dort habe ich AblÃ¤ufe mit Power Automate automatisiert, Power-BI-Dashboards gebaut und einen Proof of Concept fÃ¼r eine Projektmanagement-Applikation verantwortet.',
      'In der Freizeit gehe ich bouldern, spiele Fussball, E-Gitarre und Klavier und experimentiere mit Linux, Cloud-Technologien und lokaler KI.',
    ],
  },
  linkedin: 'https://www.linkedin.com/in/sascha-niederhauser',
  github: 'https://github.com/SaschhaN',
  cvFile: '/Sascha_Niederhauser_CV.pdf',
}

export const education: TimelineEntry[] = [
  {
    period: { en: 'Since 09/2026', de: 'Seit 09/2026' },
    role: {
      en: 'Master of Science in Business Information Systems',
      de: 'Master of Science in Business Information Systems',
    },
    organization: 'University of Applied Sciences and Arts Northwestern Switzerland (FHNW)',
    place: 'Olten',
    bullets: { en: [], de: [] },
  },
  {
    period: { en: '09/2023 â€“ 08/2026', de: '09/2023 â€“ 08/2026' },
    role: {
      en: 'Bachelor of Science in Business Information Technology',
      de: 'Bachelor of Science in Business Information Technology',
    },
    organization: 'University of Applied Sciences and Arts Northwestern Switzerland (FHNW)',
    place: 'Brugg-Windisch',
    bullets: {
      en: [
        'Thesis: Security framework for cloud-native applications on Microsoft Azure. Analysis of a production environment, gap analysis against the OWASP Top 10, control catalogue and reference architecture.',
        'Focus: project management, business process management, cloud & security, requirements engineering, business models.',
      ],
      de: [
        'Bachelorarbeit: Security-Framework fÃ¼r cloud-native Anwendungen in Microsoft Azure. Analyse einer produktiven Umgebung, Gap-Analyse nach OWASP Top 10, Kontrollkatalog und Referenzarchitektur.',
        'Schwerpunkte: Projektmanagement, Business Process Management, Cloud & Security, Requirements Engineering, Business Models.',
      ],
    },
  },
  {
    period: { en: '08/2018 â€“ 07/2021', de: '08/2018 â€“ 07/2021' },
    role: {
      en: 'Commercial apprenticeship (Kaufmann EFZ) with vocational baccalaureate',
      de: 'Kaufmann EFZ mit BerufsmaturitÃ¤t',
    },
    organization: 'Wirtschaftsmittelschule, Kantonsschule Baden',
    bullets: { en: [], de: [] },
  },
]

export const experience: TimelineEntry[] = [
  {
    period: { en: 'Summer 2025 (approx. 3 months)', de: 'Sommer 2025 (ca. 3 Monate)' },
    role: { en: 'Temporary production associate', de: 'TemporÃ¤rmitarbeiter Produktion' },
    organization: 'Hitachi Energy',
    bullets: {
      en: [
        'Production work during the semester break.',
        'Part of a well-established team with high quality and safety standards.',
      ],
      de: [
        'Mitarbeit in der Produktion wÃ¤hrend der Semesterferien.',
        'Einsatz in einem eingespielten Team mit hohen QualitÃ¤ts- und Sicherheitsanforderungen.',
      ],
    },
  },
  {
    period: { en: '08/2022 â€“ 01/2023', de: '08/2022 â€“ 01/2023' },
    role: { en: 'Project Manager Support', de: 'Projectmanager Support' },
    organization: 'ABB Schweiz AG',
    place: 'Untersiggenthal',
    bullets: {
      en: [
        'Owned a project to develop a proof of concept for an application that supports project management.',
        'Coordinated regularly with stakeholders and prepared project status reports.',
        'Onboarded and mentored the new intern.',
      ],
      de: [
        'Verantwortung fÃ¼r ein Projekt zur Entwicklung eines Proof of Concept fÃ¼r eine Applikation zur UnterstÃ¼tzung des Projektmanagements.',
        'RegelmÃ¤ssige Abstimmung mit den Stakeholdern und Aufbereitung des Projektstands.',
        'Einarbeitung und Betreuung des neuen Praktikanten.',
      ],
    },
  },
  {
    period: { en: '08/2021 â€“ 07/2022', de: '08/2021 â€“ 07/2022' },
    role: { en: 'Back Office Associate', de: 'Mitarbeiter Back Office' },
    organization: 'ABB Schweiz AG',
    place: 'Untersiggenthal',
    bullets: {
      en: [
        'Automated and digitised existing workflows with Power Automate.',
        'Built a Power BI dashboard that gives a clearer view of sales data.',
        'Created standard templates and documentation in SharePoint and MS Office.',
        'Administration: procurement, expense reports, scheduling and events, on- and offboarding.',
      ],
      de: [
        'Automatisierung und Digitalisierung bestehender AblÃ¤ufe mit Power Automate.',
        'Aufbau eines Power-BI-Dashboards fÃ¼r Verkaufsdaten zur besseren Ãœbersicht.',
        'Erstellung einheitlicher Vorlagen und Dokumentationen in SharePoint und MS Office.',
        'Administrative Aufgaben: Materialbeschaffung, Spesenabrechnung, Termin- und Eventplanung, On- und Offboarding.',
      ],
    },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: { en: 'Cloud & Security', de: 'Cloud & Security' },
    items: ['Microsoft Azure', 'Azure Landing Zone', 'OWASP Top 10', 'ISO 27001 (basics)'],
  },
  {
    name: { en: 'Microsoft 365', de: 'Microsoft 365' },
    items: ['SharePoint', 'Excel', 'Word', 'PowerPoint', 'Power Automate', 'Power BI'],
  },
  {
    name: { en: 'Development', de: 'Entwicklung' },
    items: ['SQL', 'Java (Spring Boot)', 'Python (basics)', 'Git', 'React', 'TypeScript'],
  },
  {
    name: { en: 'Methods', de: 'Methoden' },
    items: [
      'Project Management',
      'Business Process Management',
      'Requirements Engineering',
      'Agile Application Lifecycle Management',
    ],
  },
]

export const languages: LanguageSkill[] = [
  { name: { en: 'German', de: 'Deutsch' }, level: { en: 'Native', de: 'Muttersprache' } },
  {
    name: { en: 'English', de: 'Englisch' },
    level: { en: 'Fluent, spoken and written (C1)', de: 'Fliessend in Wort und Schrift (C1)' },
  },
  { name: { en: 'French', de: 'FranzÃ¶sisch' }, level: { en: 'Good (B2)', de: 'Gute Kenntnisse (B2)' } },
]

export const interests: Interest[] = [
  { name: { en: 'Sports', de: 'Sport' }, detail: { en: 'Fitness, bouldering, football', de: 'Fitness, Bouldern, Fussball' } },
  { name: { en: 'Music', de: 'Musik' }, detail: { en: 'Electric guitar and piano', de: 'E-Gitarre und Klavier' } },
  {
    name: { en: 'Tech', de: 'Technik' },
    detail: {
      en: 'Linux, cloud tech and local AI as hobby projects',
      de: 'Linux, Cloud-Technologien und lokale KI als Hobbyprojekte',
    },
  },
]

export const projects: Project[] = [
  {
    id: 'azure-security-framework',
    title: 'Azure Security Framework',
    description: {
      en: 'Bachelor thesis: a security framework for cloud-native applications on Microsoft Azure. It analyses a production environment, runs a gap analysis against the OWASP Top 10 and turns the results into a control catalogue and a reference architecture.',
      de: 'Bachelorarbeit: Security-Framework fÃ¼r cloud-native Anwendungen auf Microsoft Azure. Analyse einer produktiven Umgebung, Gap-Analyse nach OWASP Top 10, daraus abgeleitet ein Kontrollkatalog und eine Referenzarchitektur.',
    },
    tags: ['Azure', 'Security', 'OWASP'],
    status: 'done',
  },
  {
    id: 'majesty-bit',
    title: 'Majesty â€“ Online Card Game',
    description: {
      en: 'Team project at FHNW: a browser version of the board game "Majesty" with a Java Spring Boot backend for game logic, game state and match data stored in SQL.',
      de: 'Teamprojekt an der FHNW: eine Browser-Version des Brettspiels Â«MajestyÂ» mit Java-Spring-Boot-Backend fÃ¼r Spiellogik und Spielzustand, Matchdaten in SQL.',
    },
    tags: ['Java', 'Spring Boot', 'SQL', 'Git'],
    status: 'done',
  },
  {
    id: 'abb-pm-poc',
    title: 'Project Management App â€“ Proof of Concept',
    description: {
      en: 'At ABB I owned the proof of concept for an application that supports project managers: gathering requirements with stakeholders, steering the project and reporting progress.',
      de: 'Bei ABB habe ich den Proof of Concept fÃ¼r eine Applikation zur UnterstÃ¼tzung von Projektleitenden verantwortet: Anforderungen mit Stakeholdern erheben, Projekt steuern, Fortschritt rapportieren.',
    },
    tags: ['Project Management', 'Requirements'],
    status: 'done',
  },
  {
    id: 'abb-sales-dashboard',
    title: 'Sales Dashboard & Workflow Automation',
    description: {
      en: 'A Power BI dashboard that gives the back office a clear view of sales data, plus Power Automate flows that replaced manual, repetitive steps.',
      de: 'Power-BI-Dashboard fÃ¼r eine bessere Ãœbersicht Ã¼ber Verkaufsdaten im Back Office, dazu Power-Automate-Flows, die manuelle, wiederkehrende Schritte ersetzen.',
    },
    tags: ['Power BI', 'Power Automate', 'SharePoint'],
    status: 'done',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description: {
      en: 'The site you are looking at: React + TypeScript + Tailwind CSS with a dark mode, an EN/DE switch, project filters and a contact form. Hosted on Vercel.',
      de: 'Die Seite, die Sie gerade sehen: React + TypeScript + Tailwind CSS mit Dark Mode, EN/DE-Umschaltung, Projektfilter und Kontaktformular. Gehostet auf Vercel.',
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'done',
  },
  {
    id: 'study-planner',
    title: 'Study Planner',
    description: {
      en: 'An Obsidian-inspired planner for daily study tasks: daily notes in Markdown, [[links]] between days and courses, and a weekly overview.',
      de: 'Ein von Obsidian inspirierter Planer fÃ¼r tÃ¤gliche Studienaufgaben: Daily Notes in Markdown, [[Links]] zwischen Tagen und Modulen, dazu eine WochenÃ¼bersicht.',
    },
    tags: ['React', 'TypeScript'],
    status: 'planned',
  },
]
