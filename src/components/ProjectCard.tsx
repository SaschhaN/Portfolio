import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/language'
import type { TagFilter } from '../lib/projectFilter'
import type { Project, ProjectStatus } from '../types'
import { GitHubIcon } from './icons'

const statusStyle: Record<ProjectStatus, string> = {
  done: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
  'in-progress': 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  planned: 'bg-accent-50 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300',
}

interface ProjectCardProps {
  project: Project
  activeTag: TagFilter
  onTagClick: (tag: string) => void
}

export function ProjectCard({ project, activeTag, onTagClick }: ProjectCardProps) {
  const { t, l } = useLanguage()

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 transition-all hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-lg hover:shadow-zinc-200/60 dark:border-zinc-800 dark:hover:border-accent-700 dark:hover:shadow-black/40">
      {project.image && (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-video w-full border-b border-zinc-200 object-cover dark:border-zinc-800"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
          <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle[project.status]}`}>
            {t.projects.status[project.status]}
          </span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{l(project.description)}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                onClick={() => onTagClick(tag)}
                className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-accent-100 text-accent-900 dark:bg-accent-500/25 dark:text-accent-100'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-accent-50 hover:text-accent-700 dark:bg-zinc-800/70 dark:text-zinc-400 dark:hover:text-accent-300'
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-5 flex gap-4 border-t border-zinc-100 pt-4 text-sm font-medium dark:border-zinc-800">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-accent-700 dark:text-zinc-300 dark:hover:text-accent-300"
              >
                <GitHubIcon size={16} /> {t.projects.code}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-accent-700 dark:text-zinc-300 dark:hover:text-accent-300"
              >
                <ExternalLink size={16} aria-hidden /> {t.projects.demo}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
