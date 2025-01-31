import * as thumbnail from '@/assets/images/projects'
import { Project } from '@/types'

import * as altong from './altong.md'
import * as beliefy from './beliefy.md'
import * as playwingsRenewal from './playwings-renewal.md'
import * as playwingsWeb from './playwings-web.md'
import * as proofy from './proofy.md'

type ProjectKey = keyof typeof projectMap

function parseDate(str: string): Date {
  return new Date(parseInt(str.substring(0, 4)), parseInt(str.substring(5)) - 1)
}

const projectMap = {
  altong,
  beliefy,
  proofy,
  playwingsWeb,
  playwingsRenewal,
}

const projects: Project[] = (
  [
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
    ...other,
    image: thumbnail[key],
    startAt: parseDate(startAt),
    endAt: endAt ? parseDate(endAt) : undefined,
    detail,
    showcase: [],
  }
})

export default projects
