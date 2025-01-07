import Career from './Career'
import Project from './Project'
import { Skill } from '../enums'

interface Profile {
  name: string
  aka: string
  skills: { [key: string]: Skill[] }
  careers: Career[]
  projects: Project[]
}

export default Profile
