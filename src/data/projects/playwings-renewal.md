---
name: 플레이윙즈 리뉴얼 프로젝트
description: 여행 특가 알림 서비스 플레이윙즈의 리뉴얼 프로젝트
startAt: 2020-02
endAt: 2022-03
techStack:
  - TypeScript
  - React Native
  - MobX
  - GraphQL
---

# 플레이윙즈 리뉴얼 프로젝트

항공권 특가 알림 서비스인 플레이윙즈의 시스템을 재구축한 리뉴얼 프로젝트입니다. 기존 네이티브 앱(Swift, Kotlin)을 React Native로 전환하여 구현하였으며, 출시 이후 호텔, 액티비티 등 다양한 특가 상품과 숙박권 비교 기능을 도입하며 여행 특가 알림 서비스로 기능을 확장했습니다.

## Overview

- **Period**: 2020. 02. ~ 2022. 03.
- **Members**: 
  <br>(출시 전) 프론트엔드 개발자 3명, 백엔드 개발자 3명
  <br>(출시 후) 프론트엔드 개발자 2명, 풀스택 개발자 1명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - TypeScript
  - React Native
  - MobX
  - GraphQL
  - Protocol Buffer
  - Contentful
  - Fastlane

## Contributions

- 앱 내 주요 기능 및 화면 개발
- 컨텐트풀 기반의 동적 페이지 레이아웃 관리 시스템 구현
- 리액트 컴포넌트 성능 개선

## Significance

처음 React Native로 진행한 프로젝트입니다. 출시 전 퍼포먼스 개선 작업을 통해 React Native 아키텍처를 깊이 이해할 수 있었으며, React 개발에서 best practice를 준수하는 것의 중요성을 직접 체감할 수 있었습니다.

또한 Protocol Buffers와 GraphQL을 포함한 다양한 데이터 전송 기술을 활용하면서 각 기술의 개념과 장단점을 실무에서 비교하고 이해할 수 있었습니다.

## Challenges

<details open>
<summary>UI 성능 개선</summary>

출시 전 스크롤 버벅임 등의 앱 전체적인 성능 이슈가 있었습니다. 아직 개발이 필요한 작업들이 있었지만 성능 이슈는 해결하고 출시하고 싶어 성능 개선 작업을 진행했습니다. 성능 개선 작업에서 마주한 주요 사례는 다음과 같습니다.

**사례 1. 홈**

홈은 모든 사용자의 첫인상을 결정하는 페이지 중 하나입니다. 플레이윙즈 홈에는 무한 루프 배너, 띠 배너, 판매 중인 특가, 판매 예정 특가 등 여러 컴포넌트들을 조합해 구성되었습니다. 하지만 다양한 요인으로 인해 성능 문제가 발생했습니다.

- **잘못된 key 사용**

  출시 전 플레이윙즈의 배너는 Google Ads API를 활용한 네이티브 모듈을 통해 구현되었습니다. 이 컴포넌트는 구좌에 해당하는 광고 데이터를 받아와 React Native 컴포넌트로 렌더링합니다. 스와이퍼 컴포넌트에 배너 여러개를 넣어 구현했는데, 스와이퍼 컴포넌트 특성상 광고 데이터가 없는 배너인 경우 렌더링에서 제외해야 했습니다.

  ```tsx
  function BannerSwiper({ placementIds }: Props): ReactElement {
    const [visiblePlacementIds, setVisiblePlacementIds] =
      useState<string[]>(placementIds)

    const onAdLoadFailed = (placementId: string): void => {
      setVisiblePlacementIds((prev) => prev.filter((id) => id !== placementId))
    }

    return (
      <Swiper
        loop
        autoPlay
        data={visiblePlacementIds}
        renderItem={(id, index) => (
          <Banner id={id} onLoadFailed={onAdLoadFailed} />
        )}
        keyExtractor={(id, index) => index}
      />
    )
  }
  ```

  하지만 인덱스를 키값으로 사용하면서 광고 데이터를 불러오는데 실패할 경우, 무거운 컴포넌트인 배너를 다시 렌더링하게 되어 성능 이슈가 발생했습니다. 이를 해결하기 위해 배너의 키값으로 `placementId`로 사용하였고, 무한 루프 스와이퍼 특성상 동일 배너 여러개를 미리 만들어 사용하기 때문에 키가 중복되지 않도록 `index`도 같이 활용했습니다.

  ```tsx
  <Swiper
    loop
    autoPlay
    data={visiblePlacementIds}
    renderItem={(id, index) => <Banner id={id} onLoadFailed={onAdLoadFailed} />}
    keyExtractor={(id, index) =>
      `${id}_${Math.ceil(index / visiblePlacementIds.length)}`
    }
  />
  ```

- **불필요한 상태값 사용**

  홈을 구성하는 섹션 중 판매 중이 항공권 특가를 출발지별로 보여주는 섹션이 있었습니다. 이를 구현하기 위해 서버에서 특가를 가져오는 로직, 출발지 목록을 가져오는 로직, 사용자가 선택한 출발지에 해당하는 특가만 필터링하여 노출하는 로직이 필요했는데, 초기 구현에서는 각 로직을 별도의 `useEffect`로 나누어 관리했습니다.

  ```tsx
  function InProgressDealsSection(): ReactElement {
    const [deals, setDeals] = useState<Deal[]>()
    const [departures, setDepartures] = useState<string[]>()
    const [selectedDeparture, setSelectedDeparture] = useState<string>()

    useEffect(() => {
      fetchDeals().then((deals) => setDeals(deals))
    }, [])

    useEffect(() => {
      fetchDepartures().then((departures) => {
        setDepartures(departures)
        setSelectedDeparture(departures[0])
      })
    }, [])

    useEffect(() => {
      if (!deals || !selectedDeparture) {
        return
      }

      setVisibleDeals(
        deals.filter((deal) => deal.departure === selectedDeparture),
      )
    }, [deals, selectedDeparture])

    if (!deals || !departures) {
      return <LoadingView />
    }

    return (
      <View>
        <DepartureChips
          departures={departures}
          onChange={(selected) => setSelectedDepartures(selected)}
        />
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </View>
    )
  }
  ```

  `useEffect`로 나눠 로직을 관리하다보니 사용자가 출발지를 변경할 때 `visibleDeals`의 상태가 변경될 때까지 이전 출발지의 특가를 보여주는 문제가 있었습니다. 이를 해결하기 위해 `visibleDeals`를 상태 대신 computed property로 관리하는 방식으로 수정했습니다.

  ```tsx
  function InProgressDealsSection(): ReactElement {
    // ...
    const visibleDeals = deals.filter(
      (deal) => deal.departure === selectedDeparture,
    )

    return (
      <View>
        <DepartureChips
          departures={departures}
          onChange={(selected) => setSelectedDepartures(selected)}
        />
        {visibleDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </View>
    )
  }
  ```

**사례 2. 항공권 비교**

플레이윙즈는 사용자가 항공편을 검색하면 예약 가능한 항공권을 1분간 polling하여 리스트 형태로 보여주는 항공권 비교 기능을 제공합니다. 항공권 리스트는 매 응답마다 자체 정렬 알고리즘을 통해 재정렬 됩니다.

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

개선 이전에는 항공권 리스트의 각 항목을 렌더링할 때 key로 리스트의 인덱스를 사용하고 있습니다. 하지만 리스트가 매 응답마다 재정렬되면서 기존 카드를 재사용하지 않고 새롭게 생성하기 때문에 성능 저하가 발생했습니다. 이를 해결하기 위해 리액트가 이미 렌더링된 카드를 재사용할 수 있도록 인덱스 대신 고유한 값을 키로 사용해야 했는데, 항공권 모델(`Itinerary`)의 경우 `id`와 같이 식별 가능한 고유한 값이 없었기 때문에 여러 필드를 조합해 키값으로 사용했습니다.

```tsx
<FlatList
  data={itineraries}
  renderItem={(item) => <ItineraryCard item={item} />}
  keyExtractor={(item) => generateUniqKey(item)}
/>
```

종합적으로, 잘못된 키 사용으로 인한 컴포넌트 리렌더링과 불필요한 상태 관리로 인한 잦은 리렌더링이 성능 문제를 유발했습니다. 이를 해결하기 위해 고유한 키 값을 사용하여 컴포넌트 재사용성을 높이고, 불필요한 상태를 제거하는 등의 조치를 통해 성능을 비약적으로 개선할 수 있었습니다.

</details>

<!-- <details>
<summary>좋아요 기능 개발</summary>
</details> -->
