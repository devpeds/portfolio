import Skill from '../enums/Skill'

const profile = {
  name: '정승훈',
  aka: '페즈',
  skills: {
    Languages: [Skill.ts, Skill.dart],
    Frontend: [
      Skill.react,
      Skill.nextjs,
      Skill.gatsby,
      Skill.rn,
      Skill.flutter,
    ],
    'Cloud Services': [Skill.firebase, Skill.aws],
    DevOps: [Skill.fastlane, Skill.gradle, Skill.gerrit],
  },
}

export default profile
