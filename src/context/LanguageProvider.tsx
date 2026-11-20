import { useEffect, type ReactNode } from 'react'
import { translations } from '../data/translations'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { Language, Localized } from '../types'
import { LanguageContext } from './language'

const browserLanguage = (): Language => (navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en')

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useLocalStorage<Language>('lang', browserLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = () => setLang((current) => (current === 'en' ? 'de' : 'en'))
  const l = <T,>(value: Localized<T>) => value[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang], l }}>
      {children}
    </LanguageContext.Provider>
  )
}
