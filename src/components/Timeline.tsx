import type { TimelineEntry } from '../types'
import { useLanguage } from '../context/language'

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const { l } = useLanguage()

  return (
    <ol className="relative space-y-10 border-l border-zinc-200 pl-6 dark:border-zinc-800">
      {entries.map((entry) => (
        <li key={`${entry.organization}-${entry.period.en}`} className="relative">
          <span
            aria-hidden
            className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-white bg-accent-600 dark:border-zinc-950 dark:bg-accent-400"
          />
          <p className="text-sm font-medium text-accent-700 dark:text-accent-300">{l(entry.period)}</p>
          <h4 className="mt-1 font-semibold text-zinc-900 dark:text-white">{l(entry.role)}</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {entry.organization}
            {entry.place && `, ${entry.place}`}
          </p>
          {l(entry.bullets).length > 0 && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700 marker:text-zinc-400 dark:text-zinc-300 dark:marker:text-zinc-600">
              {l(entry.bullets).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
