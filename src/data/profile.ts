import backgroundImg from '@/assets/images/background.png'
import { Skill } from '@/enums'
import { Profile } from '@/types'

function getMarkdown({ markdown }: typeof import('*.md')): string {
  return markdown
}

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
  projects: [
    {
      name: '빌리피(Beliefy)',
      image: backgroundImg,
      startAt: new Date(2023, 9),
      endAt: new Date(2024, 11),
      techStack: [Skill.dart, Skill.flutter, Skill.bloc],
      description: '인증 기반 데이팅 앱',
      detail: import('./projects/beliefy.md').then(getMarkdown),
    },
    {
      name: '알통(Altong)',
      image: backgroundImg,
      startAt: new Date(2023, 8),
      endAt: new Date(2023, 9),
      techStack: [Skill.ts, Skill.next, Skill.mui, Skill.tailwind],
      description: '알뜰폰 요금제 비교 웹사이트',
      detail: import('./projects/altong.md').then(getMarkdown),
    },
    {
      name: '프루피(Proofy)',
      image: backgroundImg,
      startAt: new Date(2023, 6),
      endAt: new Date(2024, 5),
      techStack: [
        Skill.ts,
        Skill.rn,
        Skill.tQuery,
        Skill.jotai,
        Skill.tailwind,
      ],
      description: '소울바운드토큰(SBT) 기반 신원 인증 앱',
      detail: import('./projects/proofy.md').then(getMarkdown),
    },
    {
      name: '플레이윙즈 웹 어플리케이션',
      image: backgroundImg,
      startAt: new Date(2021, 0),
      endAt: new Date(2023, 5),
      techStack: [
        Skill.ts,
        Skill.gatsby,
        Skill.tQuery,
        Skill.mui,
        Skill.emotion,
        Skill.graphql,
      ],
      description:
        'SEO를 통한 사용자 유입 증대와 웹투앱 마케팅을 진행하기 위한 웹 어플리케이션',
      detail: import('./projects/playwings-web.md').then(getMarkdown),
    },
    {
      name: '플레이윙즈 리뉴얼 프로젝트',
      image: backgroundImg,
      startAt: new Date(2020, 2),
      endAt: new Date(2022, 2),
      techStack: [Skill.ts, Skill.rn, Skill.mobx, Skill.graphql],
      description: '여행 특가 알림 서비스 플레이윙즈의 리뉴얼 프로젝트',
      detail: import('./projects/playwings-renewal.md').then(getMarkdown),
    },
  ],
}

export default profile
