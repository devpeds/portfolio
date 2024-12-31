import Career from './Career'
import Skill from '../enums/Skill'

interface Profile {
  name: string
  aka: string
  skills: { [key: string]: Skill[] }
  careers: Career[]
}

export default Profile
