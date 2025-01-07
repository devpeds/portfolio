import Career from './Career'
import Project from './Project'
import { Skill } from '../enums'
import Contacts from './Contacts'

interface Profile {
  name: string
  aka: string
  contacts: Contacts
  skills: { [key: string]: Skill[] }
  careers: Career[]
  projects: Project[]
}

export default Profile
