import { Skill } from '@/enums'

interface Project {
  name: string
  image: string
  startAt: Date
  endAt?: Date
  techStack: Skill[]
  description: string
  detail: string
}

export default Project
