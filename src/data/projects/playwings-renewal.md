# 플레이윙즈 리뉴얼 프로젝트

항공권 특가 알림 서비스인 플레이윙즈의 시스템을 재구축한 리뉴얼 프로젝트입니다. 기존 네이티브 앱(Swift, Kotlin)을 React Native로 전환하여 구현하였으며, 출시 이후 호텔, 액티비티 등 다양한 특가 상품과 숙박권 비교 기능을 도입하며 여행 특가 알림 서비스로 기능을 확장했습니다.

## Overview

- **Period**: 2020. 03. ~ 2022. 03.
- **Members**: (출시 전) 프론트엔드 개발자 3명, 백엔드 개발자 3명 -> (출시 후) 프론트엔드 개발자 2명, 풀스택 개발자 1명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - TypeScript
  - React Native
  - MobX
  - GraphQL
  - Contentful
  - Fastlane

## Contributions

- 앱 내 주요 기능 및 화면 개발
- 컨텐트풀 기반의 동적 페이지 레이아웃 관리 시스템 구현
- 리액트 컴포넌트 성능 개선

## Significance

처음 React Native으로 진행한 프로젝트로,

## Challenges

<details>
<summary>1. UI 성능 개선</summary>

출시 전 스크롤 버벅임 등의 앱 전체적인 성능 이슈가 있었습니다. 아직 개발이 필요한 작업들이 있었지만 성능 이슈는 해결하고 출시하고 싶어 성능 개선 작업을 진행했습니다. 성능 개선 작업에서 마주한 주요 사례는 다음과 같습니다.

**사례 1. 불필요한 사이드 이펙트 발생**

TDB

**사례 2. 잘못된 key 사용**

플레이윙즈는 사용자가 항공편을 검색하면 예약 가능한 항공권을 1분간 polling하여 리스트 형태로 보여주는 항공권 비교 기능을 제공합니다. 이항공권 리스트는 매 응답마다 자체 정렬 알고리즘을 통해 재정렬 됩니다.

```tsx
// 항공권 검색 결과 화면
function FlightSearchScreen({ departure, arrival }: Props): ReactElement {
  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    searchFlight({
      request: { departure, arrival },
      onUpdate: (itineraries) => setItineraries(itineraries),
    })
  }, [departure, arrival])

  return (
    <Screen>
      <NavBar />
      <FlatList
        data={itineraries}
        renderItem={(item) => <ItineraryCard item={item} />}
        keyExtractor={(item, index) => index}
      />
    </Screen>
  )
}
```

개선 이전에는 항공권 리스트의 각 항목을 렌더링할 때 key로 리스트의 인덱스를 사용하고 있습니다. 하지만 리스트가 매 응답마다 재정렬되면서 기존 카드를 재사용하지 않고 새롭게 생성하기 때문에 성능 저하가 발생했습니다. 이를 해결하기 위해 리액트가 이미 렌더링된 카드를 재사용할 수 있도록 인덱스 대신 고유한 값을 키로 사용해야 했는데, 항공권 모델(Itinerary)의 경우 id와 같이 식별 가능한 고유한 값이 없었기 때문에 여러 필드를 조합해 키값으로 사용했습니다.

```tsx
<FlatList
  data={itineraries}
  renderItem={(item) => <ItineraryCard item={item} />}
  keyExtractor={(item) => generateUniqKey(item)}
/>
```

</details>
