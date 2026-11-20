import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import { useLanguage } from '../context/language'
import { LinkedInIcon } from './icons'

export function Hero() {
  const { t, l } = useLanguage()

  return (
    <section id="top" className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <p className="mb-3 font-medium text-accent-700 dark:text-accent-300">{t.hero.greeting}</p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">{profile.name}</h1>
      <p className="mt-4 text-lg font-medium text-zinc-600 sm:text-xl dark:text-zinc-400">{l(profile.title)}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{l(profile.tagline)}</p>

      <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
        <MapPin size={16} aria-hidden /> {l(profile.location)}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 dark:bg-accent-500 dark:hover:bg-accent-400 dark:hover:text-zinc-950"
        >
          {t.hero.viewProjects} <ArrowRight size={16} aria-hidden />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-accent-600 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-accent-400 dark:hover:text-accent-300"
        >
          {t.hero.contact}
        </a>
        {profile.cvFile && (
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:text-accent-700 dark:text-zinc-300 dark:hover:text-accent-300"
          >
            <Download size={16} aria-hidden /> {t.hero.downloadCv}
          </a>
        )}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-accent-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-accent-300"
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  )
}
