import { createContext, useContext } from 'react'
import type { Translations } from '../data/translations'
import type { Language, Localized } from '../types'

export interface LanguageContextValue {
  lang: Language
  toggleLanguage: () => void
  /** UI strings for the active language */
  t: Translations
  /** Picks the active language from a content entry */
  l: <T>(value: Localized<T>) => T
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
