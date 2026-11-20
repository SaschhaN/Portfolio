import { interests, languages, profile } from '../data/content'
import { useLanguage } from '../context/language'
import { Section } from './Section'

export function About() {
  const { t, l } = useLanguage()

  return (
    <Section id="about" title={t.sections.about}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="space-y-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
          {l(profile.about).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {t.sections.languages}
            </h3>
            <dl className="space-y-2">
              {languages.map((language) => (
                <div key={language.name.en} className="flex justify-between gap-4 text-sm">
                  <dt className="font-medium text-zinc-900 dark:text-white">{l(language.name)}</dt>
                  <dd className="text-right text-zinc-600 dark:text-zinc-400">{l(language.level)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {t.sections.interests}
            </h3>
            <dl className="space-y-2">
              {interests.map((interest) => (
                <div key={interest.name.en} className="text-sm">
                  <dt className="font-medium text-zinc-900 dark:text-white">{l(interest.name)}</dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">{l(interest.detail)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
