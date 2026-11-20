import { useState } from 'react'
import { projects } from '../data/content'
import { useLanguage } from '../context/language'
import { collectTags, filterProjects, type TagFilter } from '../lib/projectFilter'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

// The project list is static, so the tags only need computing once.
const tags = collectTags(projects)

export function Projects() {
  const { t } = useLanguage()
  const [activeTag, setActiveTag] = useState<TagFilter>(null)

  const visible = filterProjects(projects, activeTag)

  const chip = (label: string, tag: TagFilter) => {
    const active = activeTag === tag
    return (
      <button
        key={label}
        type="button"
        aria-pressed={active}
        onClick={() => setActiveTag(tag)}
        className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
          active
            ? 'border-accent-700 bg-accent-700 text-white dark:border-accent-400 dark:bg-accent-400 dark:text-zinc-950'
            : 'border-zinc-300 text-zinc-700 hover:border-accent-600 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent-400 dark:hover:text-accent-300'
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <Section id="projects" title={t.sections.projects}>
      <div role="group" aria-label={t.projects.filterLabel} className="mb-4 flex flex-wrap gap-2">
        {chip(t.projects.all, null)}
        {tags.map((tag) => chip(tag, tag))}
      </div>

      <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400" aria-live="polite">
        {t.projects.count(visible.length)}
      </p>

      {visible.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} activeTag={activeTag} onTagClick={setActiveTag} />
          ))}
        </div>
      ) : (
        <p className="text-zinc-600 dark:text-zinc-400">{t.projects.empty}</p>
      )}
    </Section>
  )
}
