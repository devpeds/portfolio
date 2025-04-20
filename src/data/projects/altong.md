---
name: 알통(Altong)
description: 알뜰폰 요금제 비교 웹사이트
startAt: 2023-09
endAt: 2023-10
techStack:
  - TypeScript
  - Next.js
  - Material UI
  - TailwindCSS
---

# 알통(Altong)

알뜰폰 요금제 비교 서비스 '알통' 웹사이트를 개발한 프로젝트입니다. 홈, 요금제 리스트, 요금제 상세, 이용팁으로 구성되어 있습니다.

## Overview

- **Period**: 2023. 09. ~ 2023. 10.
- **Members**: 프론트엔드 개발자 2명, 백엔드 개발자 2명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - TypeScript
  - Next.js
  - Material UI (Headless UI)
  - TailwindCSS
  - Docker

## Contributions

- JS 번들 사이즈 최적화를 위한 App Router, RSC 도입
- Headless UI, TailwindCSS를 이용한 컴포넌트 개발
- 요금제 검색을 제외한 앱 내 주요 기능 및 페이지 개발 (기여도 70%)

## Significance

처음 Next.js로 진행한 프로젝트입니다. 이전 회사에서 SSG 기반 웹사이트를 운영했을 때, JS 번들이 계속 커지면서 모바일 브라우저 환경에서 TTI(Time to Interactive)가 증가하는 문제가 발생했던 경험이 있었습니다. 이러한 문제를 해결하기 위해 이번 프로젝트에서는 번들 크기 최적화를 목표로 React 18에서 도입된 서버 컴포넌트를 사용했고, 서버 컴포넌트 도입을 위해 Next.js의 App Router 방식을 채택했습니다.

비록 회사 사정으로 인해 최종 출시에는 이르지 못했지만, Next.js와 서버 컴포넌트를 활용한 실험적인 접근을 시도할 수 있었던 의미 있는 프로젝트였습니다.
