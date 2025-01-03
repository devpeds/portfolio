import Skill from '../enums/Skill'

interface Project {
  name: string
  image: string
  startAt: Date
  endAt?: Date
  techStack: Skill[]
  description: string
  detail: Promise<string>
}

export default Project
