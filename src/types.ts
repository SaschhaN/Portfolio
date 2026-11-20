export type Language = 'en' | 'de'
export type Theme = 'light' | 'dark'

/** Text that exists in both site languages. */
export type Localized<T = string> = Record<Language, T>

export interface Profile {
  name: string
  title: Localized
  location: Localized
  tagline: Localized
  about: Localized<string[]>
  linkedin: string
  github?: string
  cvFile?: string
}

export interface TimelineEntry {
  period: Localized
  role: Localized
  organization: string
  place?: string
  bullets: Localized<string[]>
}

export interface SkillGroup {
  name: Localized
  items: string[]
}

export interface LanguageSkill {
  name: Localized
  level: Localized
}

export type ProjectStatus = 'done' | 'in-progress' | 'planned'

export interface Project {
  id: string
  title: string
  description: Localized
  tags: string[]
  status: ProjectStatus
  image?: string
  repoUrl?: string
  demoUrl?: string
}

export interface Interest {
  name: Localized
  detail: Localized
}
