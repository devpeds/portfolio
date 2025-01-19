import { Skill } from '@/enums'

import Career from './Career'
import Contacts from './Contacts'
import Project from './Project'

interface Profile {
  name: string
  aka: string
  contacts: Contacts
  skills: { [key: string]: Skill[] }
  careers: Career[]
  projects: Project[]
}

export default Profile
