---
name: 플레이윙즈 웹사이트
description: SEO 및 웹투앱 마케팅을 통한 사용자 유입 증대를 위한 웹사이트
startAt: 2021-01
endAt: 2021-03
techStack:
  - TypeScript
  - Gatsby
  - TanStack Query
  - Material UI
  - Emotion
  - GraphQL
---

# 플레이윙즈 웹사이트

기존 모바일 앱으로만 운영되던 플레이윙즈의 한계를 보완하고, SEO 및 웹투앱 마케팅을 통한 사용자 유입 경로를 확장하기 위해 웹사이트를 신규 개발한 프로젝트입니다.

URL: https://www.playwings.co.kr/

## Overview

- **Period**: 2021. 01. ~ 2023. 06.
- **Members**: 프론트엔드 개발자 2명, 풀스택 개발자 1명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - TypeScript
  - Gatsby
  - Material UI
  - Emotion
  - Tanstack Query
  - GraphQL
  - Protocol Buffer
  - Contentful

## Contributions

- SSG 프레임워크 도입: 서비스 전체 MAU 50% 증가
- 공통 레이아웃 및 UI 컴포넌트 설계 및 개발
- 홈, 여행 특가 리스트 및 상세 페이지 개발
- 이미지 최적화를 통한 성능 개선: 원본 이미지 기준 평균 80% 용량 감소

## Significance

Gatsby라는 SSG 프레임워크를 처음 사용한 프로젝트입니다. 이 프로젝트를 통해 초기 렌더링과 하이드레이션을 포함한 SSR 및 SSG 관련 핵심 개념을 이해하고, 이를 실무에 적용할 인사이트를 얻었습니다.

그리고 Tanstack Query를 도입하여 클라이언트와 서버 상태를 분리하면서 코드 가독성을 높이고 복잡성을 낮추는 장점을 경험하며, 이를 실무에 활용할 수 있는 실질적인 노하우를 습득했습니다.

## Challenges

### SSG 프레임워크 도입

프로젝트의 초기 목표는 모바일 앱에서 제공하던 특가 및 매거진 서비스를 웹에서도 제공할 수 있도록 웹사이트를 제작하는 것이었습니다. 프로젝트 시작 당시 개발팀은 React Native, Flutter, SPA 개발 경험이 있었으나, SSR이나 SSG 프로젝트 경험은 부족했습니다. 빠른 프로토타이핑과 개발 리소스 효율성을 고려해 CRA나 Flutter 사용을 검토했으나, 두 프레임워크 모두 SEO 측면에서 불리하다는 단점이 있었습니다. 이에 러닝 커브가 있지만, 풍부한 문서와 커뮤니티 지원을 제공하는 SSG 프레임워크인 Gatsby를 기술 스택으로 선택했습니다.

프로젝트를 진행하며 초기 렌더링과 하이드레이션 관련 이슈들을 마주했습니다. 이와 관련된 주요 사례는 다음과 같습니다.

<details>
<summary>사례1. Date 관련 컴포넌트의 하이드레이션 미스매치 문제</summary>

항공권, 숙박권 등의 상품이 판매 예정인 경우, 판매 시작일까지 며칠 남았는지, 판매 중인 경우 종료일까지 며칠 남았는지를 프로그레스바 형태로 보여주는 요구사항이 있었습니다. CSR 프로젝트에서는 다음과 같이 구현할 수 있습니다.

```tsx
// SalePeriodProgressBar.tsx
interface Props {
  startAt: Date
  endAt: Date
}

function SalePeriodProgressBar(props: Props): ReactElement {
  const { startAt, endAt } = props
  const now = new Date()

  if (startAt > now) {
    return (
      <ScheduledSalePeriodProgressBar
        now={now}
        startAt={startAt}
        endAt={endAt}
      />
    )
  }

  return (
    <InProgressSalePeriodProgressBar
      now={now}
      startAt={startAt}
      endAt={endAt}
    />
  )
}

export default SalePeriodProgressBar
```

하지만 Gatsby와 같은 SSG 프레임워크에서는 빌드 시 컴포넌트의 초기 상태를 기준으로 HTML 파일을 생성합니다. 이때 `now`는 빌드 시점의 시간이 되고 사용자가 페이지를 요청하는 시점에는 `now`가 렌더링 시간으로 변경되므로, HTML과 React 렌더 트리 사이에 불일치가 발생해 버그가 생길 수 있습니다.

이 문제를 해결하기 위해 `withNoSsr()`이란 고차 컴포넌트를 만들어, 빌드 시점에는 fallback을 렌더링하고 하이드레이션 이후에 실제 UI를 렌더링하도록 했습니다. 이때 fallback 컴포넌트는 하이드레이션 후 레이아웃 시프트를 방지하기 위해 원래 컴포넌트와 동일한 높이로 설정했습니다.

```tsx
// withNoSsr.tsx
function withNoSsr<T>(Component: ComponentType<T>, fallback: ReactNode) {
  return (props: T) => (
    <NoSsr fallback={<Fallback />}>
      <SalePeriodProgressBar {...props} />
    </NoSsr>
  );
}

// SalePeriodProgressBar.tsx
export default withNoSsr(SalePeriodProgressBar, <Fallback />)
```
</details>

<details>
<summary>사례2. 네비게이션 메뉴 이슈</summary>

태블릿 이상의 너비에서는 페이지마다 사이드 네비게이션 메뉴를, 모바일 이하에서는 Bottom Navigation Bar를 보여주는 요구사항이 있었습니다. 기기의 화면 너비는 클라이언트 렌더링 시점에만 확인할 수 있어 빌드 시점에는 어떤 네비게이션 컴포넌트를 생성할지 결정할 수 없었습니다.

첫 번째 사례처럼 하이드레이션 이후에 컴포넌트를 렌더링하는 방식도 고려할 수 있었지만, 네비게이션 메뉴는 페이지 내에서 차지하는 영역이 크고 중요도가 높아 하이드레이션 전까지 사용자에게 메뉴를 제공하지 못하는 문제가 있었습니다.

따라서 `NoSsr`을 사용하는 대신 CSS의 media query와 `display: none` 속성을 이용해 노출 여부를 결정하는 방식으로 사용자 경험을 해치지 않으면서 요구사항을 해결할 수 있었습니다.

```tsx
// SideNavigationMenu.tsx
const SideNavigationMenu = styled(Component)`
  display: none;

  @media (min-width: ${breakpoint.tablet}px) {
    display: block;
  }
`

// BottomNavigationBar.tsx
const BottomNavigationBar = styled(Component)`
  display: block;

  @media (max-width: ${breakpoint.tablet}px) {
    display: none;
  }
`

// Layout.tsx
function Layout({ children }: Props): ReactElement {
  const menus = [
    /** { name: string; path: string; } */
  ]

  return (
    <Root>
      <SideNavigationMenu menus={menus} />
      <PageContainer>
        {children}
        <BottomNavigationBar menus={menus} />
      </PageContainer>
    </Root>
  )
}
```
</details>

SSG 프레임워크 도입과 관련된 도전 과제들을 해결하면서, SEO와 웹 바이털을 최적화할 수 있었습니다. 특히, 하이드레이션 이슈 해결과 네비게이션 메뉴의 반응형 디자인 개선은 사용자 경험을 향상시키는 데 기여했습니다. 그 결과, 출시 당시 lighthouse 기준 **평균 90점 이상**의 성능을 기록했으며, 모바일 앱 MAU의 50%에 해당하는 **5만 명의 사용자를 확보**할 수 있었습니다.

### 반응형 이미지 컴퍼넌트 개발

플레이윙즈 웹사이트는 히어로 섹션, 배너, 카드 등 다양한 컴포넌트에서 화면 너비에 따라 크기와 해상도가 달라지는 반응형 이미지가 필요했습니다. Gatsby에서 제공하는 반응형 이미지 컴포넌트도 고려했지만, 이는 빌드 시점에 접근 가능한 정적 이미지에만 사용할 수 있어 런타임에 요청하는 동적 이미지 URL과는 호환되지 않는 제약이 있었습니다. 이를 해결하기 위해 플랫폼에 종속되지 않는 커스텀 반응형 이미지 컴포넌트를 직접 개발했습니다.

**아트 디렉션**

홈 배너나 상세 페이지 히어로 이미지의 경우 특정 화면 너비 기준으로 비율이 다른 이미지를 사용해야 했습니다. 이를 해결하기 위해 `<picture>` 태그와 `<source>` 태그를 활용하여 뷰포트 크기에 맞는 이미지를 제공했습니다.

```tsx
function ResponsiveImage({ desktopImage, mobileImage }: Props): ReactElement {
  return (
    <picture>
      <source media="(min-width: 600px)" src={desktopImage} />
      <img src={mobileImage} />
    </picture>
  )
}
```

**클라우디너리 Transformation API**

서비스 이미지는 클라우디너리로 관리되며, Transformation API를 사용하여 최적화된 이미지를 제공했습니다. 하지만 클라우디너리는 변환 작업당 비용이 발생하기 때문에 기기 DPR과 화면 너비에 맞춰 이미지를 요청하면 변환 비용이 과도하게 증가하는 문제가 있습니다. 이를 해결하기 위해 사전에 **너비 프리셋**을 정의하고 화면 너비와 DPR을 기반으로 프리셋을 선택해 변환 파라미터를 생성했습니다.

단, 화면 너비와 DPR은 클라이언트 렌더링 시점에만 알 수 있으므로, 빌드 시점에 이미지 링크를 생성하기 위해서 모바일 너비의 최소값인 360px을 기준으로 이미지 크기를 결정하고, dpr도 프리셋으로 정의해 `srcset` 속성에 이미지 프리셋을 추가했습니다.

```tsx
// ResponsiveImage.tsx - v2
const widthPreset = [80, 160, 240, 360, 720, 1380]
const dprPreset = [1, 2, 3]

function generateTransformationURL(path: string, width: number): string {
  const widthParameter = widthPreset.find(w => w >= width) ?? widthPreset[widthPreset.length - 1]

  // f_auto: 브라우저 지원 여부에 따라 WebP 등 최신 이미지 포맷을 요청할 수 있는 파라미터
  return `${cloudinary base url}/w_${widthParameter},f_auto,other_parameters/${path}`
}

function generateSrcset(path: string, width: number): string {
  return dprPreset
    .map((dpr) => `${generateTransformationURL(path, width * dpr)} ${width * dpr}w`)
    .join(',')
}

function ResponsiveImage({ mobileImagePath, desktopImagePath, width }: Props): ReactElement {
  const desktopSrcset = generateSrcset(desktopImagePath, width)
  const mobileSrcset = generateSrcset(mobileImagePath, width)

  return (
    <picture>
      <source media="(min-width: 600px)" srcset={desktopSrcset}>
      <img src={generateTransformationURL(mobileImagePath, width)} srcset={imageSrcset}>
    </picture>
  )
}
```

이러한 방식을 통해 **평균 80% 이상** 압축된 이미지를 제공하여 성능을 개선했으며, 클라우디너리 변환 비용도 최적화할 수 있었습니다.
