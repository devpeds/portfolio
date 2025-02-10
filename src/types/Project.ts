import { Skill } from '@/enums'

interface Project {
  name: string
  image: ImagePreset
  startAt: Date
  endAt?: Date
  techStack: Skill[]
  description: string
  detail: string
  showcase: { image: ImagePreset; alt: string }[]
}

export default Project
