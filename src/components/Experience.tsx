import { education, experience } from '../data/content'
import { useLanguage } from '../context/language'
import { Section } from './Section'
import { Timeline } from './Timeline'

export function Experience() {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t.sections.experience}
          </h3>
          <Timeline entries={experience} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t.sections.education}
          </h3>
          <Timeline entries={education} />
        </div>
      </div>
    </Section>
  )
}
