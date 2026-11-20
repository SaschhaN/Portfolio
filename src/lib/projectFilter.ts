import type { Project } from '../types'

/** null means "all projects" */
export type TagFilter = string | null

/** Every tag that appears in the projects, ordered by how often it's used, then alphabetically. */
export function collectTags(projects: Project[]): string[] {
  const counts = new Map<string, number>()
  for (const project of projects) {
    for (const tag of project.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([tag]) => tag)
}

export function filterProjects(projects: Project[], tag: TagFilter): Project[] {
  return tag === null ? projects : projects.filter((project) => project.tags.includes(tag))
}
