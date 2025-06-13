---
name: 페즈폴리오(PEDSFOLIO)
description: SPA 기반 개인 포트폴리오 사이트
startAt: 2024-12
techStack:
  - TypeScript
  - React
  - Emotion
  - Vite
  - SWC
---

# 페즈폴리오(PEDSFOLIO)

SPA 기반 개인 포트폴리오 사이트입니다.

Repository: https://github.com/devpeds/portfolio

## Overview

- **Period**: 2024. 12. ~ 현재
- **Members**: 1명
- **TechStack**:
  - TypeScript
  - React
  - Emotion
  - Vite
  - SWC

## Significance

Vite, SWC를 처음 적용해본 CSR 프로젝트입니다. 여러 성능 최적화 기법을 적용했으며, 특히 폰트 최적화를 통해 웹폰트가 사이트 성능에 미치는 영향을 경험할 수 있었습니다.

## Challenges

### 모바일 환경 성능 최적화

첫 출시 당시 모바일 환경에서 Lighthouse 기준 LCP 점수가 0점 포함, 총 75점을 기록해 총점 90점 이상을 목표로 성능 개선 작업을 진행했습니다.

<details open>
<summary>시도 1. Pre-render</summary>

일반적으로 CSR 기반 사이트는 SSR, SSG 기반 사이트와 비교해 LCP 성능이 좋지 않기 때문에, 성능 개선 작업시 가장 먼저 고려한 방법이 빌드시 미리 HTML을 생성하는 것이었습니다. 하지만 `react-snap`을 적용해 테스트해보니, LCP 점수는 약간 개선되었지만 FCP 등 다른 지표가 떨어지면서 전체 성능은 전과 큰 차이가 없었습니다. HTML 생성시 옵션 값을 변경해 성능을 더 개선할 수 있었겠지만 '**CSR 기반이더라도 컨텐츠와 기능이 많지 않은 웹페이지의 LCP가 0점인 것이 이상하다**'라는 근본적인 의문이 있었기 때문에 다른 방법을 찾아보았습니다.

</details>

<details open>
<summary>시도 2. 웹 폰트 최적화</summary>

처음 폰트를 선택할 때, 폰트 파일 하나로 다양한 글꼴 굵기를 적용할 수 있도록 가변 폰트인 `NanumSquareNeo Variable`을 사용했습니다. 가변 폰트는 폰트 파일 하나로 다양한 글꼴 스타일을 적용할 수 있는 폰트입니다. 하지만 정적 폰트(Static font)보다 다양한 글꼴 스타일과 추가적인 메타데이터를 포함하고 있어 용량이 더 크다는 단점이 있습니다. 프로젝트에서 사용한 폰트 역시 `woff2` 기준으로도 **1.5MB**에 달했으며, 프리로드를 하더라도 LCP 지표에 악영향을 주는 문제가 있었습니다.

이를 해결하기 위해 사이트에서 사용하는 글자(Glyphs)만 추출한 **서브셋 폰트**를 적용했습니다. 처음에는 인터넷에서 많이 소개된 '서브셋 폰트 메이커'를 사용했으나 가변 폰트를 변환할 경우 폰트의 가변성이 사라지고 굵기가 400으로 고정되는 문제가 있어 파이쎤 라이브러리인 `fonttools`의 `pyftsubset`를 이용해 서브셋을 생성했습니다.

```bash
pyftsubset "NanumSquareNeo-variable-font.ttf"
  --output-file="NanumSquareNeo-variable-subset-font.woff2"
  --text-file="glyphs.txt"
  --flavor=woff2
```

`glyphs.txt`는 한국 산업 규격으로 지정된 [한국어 문자 집합 KS X 1001 표준](https://ko.wikipedia.org/wiki/KS_X_1001)에 영문, 숫자 등을 추가해 글자를 추출했습니다.

서브셋 폰트를 적용한 결과, 폰트 용량을 원본의 33% 수준인 500KB까지 줄일 수 있었고, **LCP를 0점에서 8점으로 올려 총 점수 83점까지 성능을 향상** 시겼습니다. ([commit](https://github.com/devpeds/portfolio/commit/80e5c2c3a3712f9f50f022315275e8169992b306))

또한 다양한 글꼴 굵기를 적용하기 위해 가변 폰트를 사용했지만, 실제로는 세가지 굵기(`normal`, `bold`, `heavy`)만 사용하고 있어 **정적 폰트로 대체**하는 작업도 추가 진행했습니다. 처음에는 각 굵기에 대해 개별 폰트 파일을 생성했지만, 테스트 결과 가변 폰트를 사용했을 때와 성능이 거의 동일했습니다. 따라서 성능 최적화를 위해 `heavy` 폰트를 제거하고, 기존 `heavy`를 적용했던 텍스트는 `font-size`를 조정하는 방식으로 변경했습니다. 정적 폰트로 변경한 후 **LCP가 8점에서 15점으로 증가해 총 90점까지 성능 향상**을 할 수 있었습니다. ([commit](https://github.com/devpeds/portfolio/commit/41eb03ed339d3014cdece7668026fe2150e62572))

웹 성능 지표 향상 외에도 폰트 최적화 작업 이후 실제적인 사용자 경험도 개선되었습니다. 최적화 이전에는 오래된 모바일 기기의 브라우저에서 페이지를 빠르게 스크롤하면 컨텐츠가 사라졌다 다시 나타나는 현상이 있었는데(재현환경: 아이폰 12/iOS 16.5), 최적화 이후 해당 현상이 사라졌습니다. 정확한 이유를 찾지 못했지만, 가변 폰트가 고정 폰트로 변경되면서 브라우저가 텍스트를 렌더링하는 과정에서 연산 복잡도가 줄어들어 문제가 해결된 것으로 추정됩니다.

</details>

<details open>
<summary>그 외의 시도들</summary>

- 프로젝트 섹션의 카드 썸네일 이미지 최적화를 위해 `vite-plugin-image-presets`를 도입했습니다. 단일 이미지를 직접 사용하는 대신 이미지 프리셋을 활용하고, `<img>` 태그의 `loading` 속성으로 레이지 로딩을 적용해 성능을 개선했습니다. ([commit](https://github.com/devpeds/portfolio/commit/d0e3f0a3f725a78c88d63c8b5f143ad620e37f41))
- `rollup-plugin-visualizer`를 사용해 번들을 분석하고, 상대적으로 용량이 큰 파일을 찾아 최적화 작업을 진행했습니다.
  - 프로젝트 섹션의 카드 클릭 시 마크다운을 파싱해 상세 정보를 보여주는데, 기존에는 브라우저에서 마크다운을 파싱했습니다. 이를 번들러에서 마크다운을 HTML로 변환하도록 변경해 번들 사이즈를 약 456KB 줄였습니다. ([commit](https://github.com/devpeds/portfolio/commit/012d6f4dec1a1e9c488c8365ba7281fa1fef2143))
  - 사이트 헤더의 TypeWriter 효과 구현에 사용하던 `grapheme-splitter` 라이브러리를 직접 구현한 로직으로 대체해, 번들 사이즈를 약 110KB 줄였습니다. ([commit](https://github.com/devpeds/portfolio/commit/90f5e85eceaef264ab6bb6a986e8d0f6211f966a))

</details>

위와 같은 시도를 통해 (모바일 기준) **LCP 점수를 18점까지 끌어올려 종합 점수 93점을 달성**할 수 있었습니다.
