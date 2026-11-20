import { skillGroups } from '../data/content'
import { useLanguage } from '../context/language'
import { Section } from './Section'

export function Skills() {
  const { t, l } = useLanguage()

  return (
    <Section id="skills" title={t.sections.skills}>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.name.en}
            className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <h3 className="mb-4 font-semibold text-zinc-900 dark:text-white">{l(group.name)}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
