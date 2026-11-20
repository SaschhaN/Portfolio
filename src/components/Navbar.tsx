import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/language'
import { useTheme } from '../context/theme'

const sectionIds = ['about', 'experience', 'skills', 'projects', 'contact'] as const

export function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = sectionIds.map((id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-300"
    >
      {t.nav[id]}
    </a>
  ))

  const iconButton =
    'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] ${
        scrolled || open
          ? 'border-b border-zinc-200 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
          Sascha<span className="text-accent-600 dark:text-accent-400">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">{links}</div>

        <div className="flex items-center gap-1">
          <button type="button" onClick={toggleLanguage} className={iconButton} aria-label={t.toggles.language}>
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className={iconButton}
            aria-label={theme === 'dark' ? t.toggles.toLight : t.toggles.toDark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`${iconButton} md:hidden`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.menu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="flex flex-col px-2 pb-3 md:hidden">
          {links}
        </div>
      )}
    </header>
  )
}
