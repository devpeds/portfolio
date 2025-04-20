---
name: 빌리피(Beliefy)
description: 인증 기반 데이팅 앱
startAt: 2023-10
endAt: 2024-11
techStack:
  - Dart
  - Flutter
  - BloC
---

# 빌리피(Beliefy)

인증 기반 데이팅 서비스, 빌리피의 모바일 어플리케이션을 개발한 프로젝트입니다. 프로필 심사, 이성 추천 및 매칭, 채팅, 인증 등의 기능을 포함하고 있습니다.

## Overview

- **Period**: 2023. 10. ~ 2024. 11.
- **Members**: 프론트엔드 1명, 풀스택 2명, 백엔드 2명
- **Role**: 프론트엔드 개발
- **TechStack**:
  - Dart
  - Flutter
  - BloC
  - RxDart
  - Firebase
  - Fastlane
  - Github Workflow

## Contributions

- BLoC 패턴을 활용한 앱 내 주요 기능 및 화면 개발 (기여도 50%)
- Fastlane, Github Workflow를 활용한 배포 관리

## Significance

처음으로 플러터로 개발한 프로젝트입니다. 프로젝트를 진행하면서 플러터와 React Native의 차이점과 각 프레임워크의 장단점을 직접 체감할 수 있었습니다.

또한, BloC 패턴을 활용하면서 Flutter 생태계에서의 상태 관리 방식을 경험할 수 있었습니다. 그리고 프레젠테이션 레이어와 비즈니스 로직을 명확히 분리하는 BloC 패턴의 구조적 이점 덕분에 유지보수성과 코드의 가독성을 높일 수 있음을 느꼈습니다.

## Challenges

### 아키텍쳐 설계

처음 프로젝트를 진행할 때 보일러 플레이트 코드가 많지만 UI와 비지니스 로직을 명확하게 분리할 수 있는 BloC 패턴을 채택해, 레포지토리에서 가져온 데이터를 BloC을 거쳐 UI로 보여주고 사용자가 데이터를 입력/제출하면 BloC을 통해 레포지토리의 데이터를 변경하도록 설계했습니다. 레포지토리의 경우 백엔드 API 호출하는 API를 제공하거나 데이터 저장이 필요한 경우 단순 변수를 사용했는데, 프로젝트를 진행하면서 레포지토리 내 데이터의 흐름이 점점 복잡해지는 문제가 있었습니다.

예를 들어, 사용자가 호감 페이지에서 관심 있어한 상대방의 프로필에 들어가 좋아요를 누르면 호감탭에서 `내가 관심 있어요` 섹션에 있던 상대방 카드가 `내가 좋아해요` 섹션으로 이동해야 합니다. 리액트 프로젝트였다면 React Query을 사용해 호감 mutation이 성공하면 쿼리 데이터를 업데이트 하는 방식으로 호감 페이지 UI를 갱신할 수 있지만, 플러터의 경우 상대방 프로필 페이지에서 호감 페이지로 되돌아갈 때마다 UI 갱신을 위해 추가적인 백엔드 API를 호출해야 했습니다.

이를 해결하기 위해 레포지토리의 데이터가 갱신되면 레포지토리를 의존성으로 갖는 모든 BloC의 상태가 갱신될 수 있도록, 레포지토리 레이어는 데이터를 스트림에 저장하고 BloC은 스트림을 구독하는 방식으로 재설계했습니다.

![빌리피 아키텍처](projects/beliefy-architecture.png)

또한, Bloc에서 레포지토리의 스트림을 구독하는 경우가 많아지기 때문에 BloC 리소스가 해제될 때 스트림 구독이 자동으로 해제될 수 있도록 Bloc 객체를 만들어, 리소스 관리의 일관성을 유지하고 수동으로 구독을 해제하는 반복적인 코드를 줄였습니다.

```dart
mixin ExtendedBlocMixin<T> on BlocBase<T> {
  final List<StreamSubscription> _subscriptions = [];

  StreamSubscription subscribe(StreamSubscription subscription) {
    _subscriptions.add(subscription);
    return subscription;
  }

  @override
  Future<void> close() {
    for (final subscription in _subscriptions) {
      subscription.cancel();
    }

    return super.close();
  }

  @override
  void emit(state) {
    if (!isClosed) {
      super.emit(state);
    }
  }
}

abstract class ExtendedBloc<State, Event> extends Bloc<State, Event>
    with ExtendedBlocMixin {
  ExtendedBloc(super.initialState);
}

abstract class ExtendedCubit<State> extends Cubit<State>
    with ExtendedBlocMixin {
  ExtendedCubit(super.initialState);
}

// 사용처
class AttractionCubit extends ExtendedCubit<AttractionState> {
  AttractionCubit({
    required AttractionRepository attractionRepository,
  }): {
    add(attractionRepository.sentLikesStream.listen((sentLikes) {
      emit(state.copyWith(sentLikes: sentLikes))
    }))
    add(attractionRepository.sentInterestsStream.listen((sentInterests) {
      emit(state.copyWith(sentLikes: sentInterests))
    }))
  }
}
```

<!-- TODO: ### 인증 기능 개발 -->