import showcase from '@/assets/images/projects/showcase'
import * as thumbnail from '@/assets/images/projects/thumbnail'
import { Project } from '@/types'

import * as altong from './altong.md'
import * as beliefy from './beliefy.md'
import * as pedsfolio from './pedsfolio.md'
import * as playwingsRenewal from './playwings-renewal.md'
import * as playwingsWeb from './playwings-web.md'
import * as proofy from './proofy.md'

type ProjectKey = keyof typeof projectMap

function parseDate(str: string): Date {
  return new Date(parseInt(str.substring(0, 4)), parseInt(str.substring(5)) - 1)
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

const projectMap = {
  altong,
  beliefy,
  proofy,
  playwingsWeb,
  playwingsRenewal,
  pedsfolio,
}

const projects: Project[] = (
  [
    'pedsfolio',
    'beliefy',
    'altong',
    'proofy',
    'playwingsWeb',
    'playwingsRenewal',
  ] satisfies ProjectKey[]
).map((key) => {
  const { attributes, html: detail } = projectMap[key]
  const { startAt, endAt, ...other } = attributes
  return {
    id: toKebabCase(key),
    ...other,
    image: thumbnail[key],
    startAt: parseDate(startAt),
    endAt: endAt ? parseDate(endAt) : undefined,
    detail,
    showcase: (showcase as Record<ProjectKey, Project['showcase']>)[key] || [],
  }
})

export default projects
