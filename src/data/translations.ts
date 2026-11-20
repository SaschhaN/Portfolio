import type { Language } from '../types'

const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    menu: 'Open menu',
    closeMenu: 'Close menu',
  },
  toggles: {
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
    language: 'Deutsch anzeigen',
  },
  hero: {
    greeting: "Hi, I'm",
    viewProjects: 'View projects',
    contact: 'Get in touch',
    downloadCv: 'Download CV',
  },
  sections: {
    about: 'About me',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    interests: 'Interests',
    projects: 'Projects',
    contact: 'Contact',
  },
  projects: {
    all: 'All',
    filterLabel: 'Filter projects by technology',
    code: 'Code',
    demo: 'Live demo',
    status: { done: 'Completed', 'in-progress': 'In progress', planned: 'Coming soon' },
    empty: 'No projects with this technology yet.',
    count: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
  },
  contact: {
    intro: 'Got a position, a project or a question? Send me a message and I will get back to you soon.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Thanks! Your message has been sent.',
    error: 'Something went wrong. Please try again, or reach me on LinkedIn.',
    notConfigured: 'The contact form is not set up yet. Please reach me on LinkedIn.',
    required: 'Please fill in all fields.',
    invalidEmail: 'Please enter a valid email address.',
  },
  footer: {
    built: 'Built with React, TypeScript and Tailwind CSS.',
  },
}

export type Translations = typeof en

const de: Translations = {
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    skills: 'Kenntnisse',
    projects: 'Projekte',
    contact: 'Kontakt',
    menu: 'Menü öffnen',
    closeMenu: 'Menü schliessen',
  },
  toggles: {
    toDark: 'Dunkles Design aktivieren',
    toLight: 'Helles Design aktivieren',
    language: 'Show in English',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    viewProjects: 'Projekte ansehen',
    contact: 'Kontakt aufnehmen',
    downloadCv: 'Lebenslauf herunterladen',
  },
  sections: {
    about: 'Über mich',
    experience: 'Berufserfahrung',
    education: 'Ausbildung',
    skills: 'IT-Kenntnisse',
    languages: 'Sprachen',
    interests: 'Interessen',
    projects: 'Projekte',
    contact: 'Kontakt',
  },
  projects: {
    all: 'Alle',
    filterLabel: 'Projekte nach Technologie filtern',
    code: 'Code',
    demo: 'Live-Demo',
    status: { done: 'Abgeschlossen', 'in-progress': 'In Arbeit', planned: 'Demnächst' },
    empty: 'Noch keine Projekte mit dieser Technologie.',
    count: (n: number) => `${n} Projekt${n === 1 ? '' : 'e'}`,
  },
  contact: {
    intro: 'Sie haben eine Stelle, ein Projekt oder eine Frage? Schreiben Sie mir, ich melde mich rasch zurück.',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    send: 'Nachricht senden',
    sending: 'Wird gesendet…',
    success: 'Danke! Ihre Nachricht wurde gesendet.',
    error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie mich via LinkedIn.',
    notConfigured: 'Das Kontaktformular ist noch nicht eingerichtet. Bitte kontaktieren Sie mich via LinkedIn.',
    required: 'Bitte füllen Sie alle Felder aus.',
    invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  },
  footer: {
    built: 'Erstellt mit React, TypeScript und Tailwind CSS.',
  },
}

export const translations: Record<Language, Translations> = { en, de }
