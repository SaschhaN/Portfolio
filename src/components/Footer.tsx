import { profile } from '../data/content'
import { useLanguage } from '../context/language'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-6 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  )
}
