import { Skill } from '@/enums'
import { Profile } from '@/types'

import projects from './projects'

const profile: Profile = {
  name: '정승훈',
  aka: '페즈',
  contacts: {
    email: 'hugh1127@gmail.com',
    github: 'https://github.com/devpeds',
    linkedin: 'https://www.linkedin.com/in/seunghoon-jung-041a811a5/',
  },
  skills: {
    Languages: [Skill.ts, Skill.dart],
    Frontend: [Skill.react, Skill.next, Skill.gatsby, Skill.rn, Skill.flutter],
    'Cloud Services': [Skill.firebase, Skill.aws],
    DevOps: [Skill.fastlane, Skill.gradle, Skill.gerrit],
  },
  careers: [
    {
      company: {
        name: 'SBT',
      },
      positions: [
        {
          title: '소프트웨어 엔지니어',
          employmentType: '정규직',
          startAt: new Date(2023, 6, 1),
          endAt: new Date(2024, 10, 30),
          performances: [
            '소울바운드 토큰(SBT)을 통한 신원 인증 서비스, 프루피 모바일 어플리케이션 개발 및 운영',
            '알뜰폰 비교 서비스, 알통 웹 어플리케이션 개발',
            '인증 기반 데이팅 서비스, 빌리피 모바일 어플리케이션 개발 및 운영',
          ],
        },
      ],
    },
    {
      company: {
        name: '스퀘어랩',
      },
      positions: [
        {
          title: '소프트웨어 엔지니어',
          employmentType: '정규직',
          startAt: new Date(2020, 3),
          endAt: new Date(2023, 5),
          performances: [
            '플레이윙즈 웹 어플리케이션 개발 및 운영',
            '여행 특가 알림 서비스, 플레이윙즈 모바일 어플리케이션 개발 및 운영',
            '플레이윙즈 백오피스 시스템 개발 지원',
            '3명의 프론트엔드 개발자로 구성된 팀의 개발 일정 조율 및 리소스 관리 (2023.01~2023.06)',
          ],
        },
        {
          title: '소프트웨어 엔지니어',
          employmentType: '인턴',
          startAt: new Date(2020, 0),
          endAt: new Date(2020, 2),
          performances: [
            '플레이윙즈 모바일 어플리케이션 개발',
            'OTA 서비스, kTravel 프론트엔드 개발',
          ],
        },
      ],
    },
  ],
  projects,
}

export default profile
