---
name: 프루피(Proofy)
description: 소울바운드토큰(SBT) 기반 신원 인증 앱
startAt: 2023-07
endAt: 2024-06
techStack:
  - TypeScript
  - React Native
  - TanStack Query
  - Jotai
  - Tailwind
---

# 프루피(Proofy)

소울바운드토큰(SBT) 기반 신원 인증 서비스 '프루피'의 모바일 어플리케이션을 개발한 프로젝트입니다. KYC와 SBT 민팅을 통한 신원인증 기능, 지갑 관리, 연봉 비교 기능 등을 포함하고 있습니다.

## Overview

- **Period**: 2023. 07. ~ 2023. 10.
- **Members**: 프론트엔드 개발자 2명, 백엔드 개발자 1명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - TypeScript
  - React Native
  - TailwindCSS(Nativewind)
  - Tanstack Query
  - Jotai

## Contributions

- 앱 주요 기능 개발
  - react-hook-form을 이용한 KYC 입력 폼 개발
  - 소셜 로그인(Kakao, Google, Apple) 연동
  - 소득 인증 기능 개발
  - react-native-reanimated을 활용한 애니메이션 추가
- Fastlane, Github Workflow를 이용한 배포 관리

## Significance

이 프로젝트에서 Git-flow 전략을 처음 경험했습니다. 이전 회사에서는 트렁크 기반 개발 환경에서 하나의 main 브랜치만 사용하여 개발했지만, 이번 프로젝트에서는 Git-flow를 도입하면서 두 전략의 차이점과 각 접근 방식의 장단점을 비교할 수 있었습니다.

트렁크 기반 개발은 작은 변경사항을 자주 통합할 수 있어 브랜치 관리가 간편하고, 코드 리뷰 부담이 줄어든다는 장점이 있습니다. 하지만 PR당 코드량이 적기 때문에 모든 기능을 하나의 PR에 담기 어려워, 코드 리뷰 시 기능의 전체 흐름을 이해하기 까다로운 경우가 있었습니다. 반면, Git-flow 전략에서는 기능 단위로 브랜치와 PR을 생성하기 때문에 코드 리뷰 시 기능의 맥락을 더 쉽게 파악할 수 있고, 완성된 기능만 통합할 수 있어 배포 관리를 더 안정적으로 할 수 있었습니다.

또한, 이번 프로젝트는 Jotai를 처음으로 도입한 사례이기도 합니다. SWR과 Tanstack Query가 등장하면서 클라이언트 상태와 서버 상태가 분리되면서 전역 상태 관리의 필요성이 줄어들었습니다. 이러한 흐름 속에서 Redux 대신 Jotai를 선택함으로써 보일러플레이트를 줄이고 번들 크기를 최적화할 수 있었습니다. 특히, Jotai는 Context API와 달리 상태를 소비하는 모든 컴포넌트가 아니라 필요한 부분에서만 리렌더링을 발생시켜 성능을 더 개선할 수 있었습니다.
