---
name: 플레이윙즈 웹 어플리케이션
description: SEO를 통한 사용자 유입 증대와 웹투앱 마케팅을 진행하기 위한 웹 어플리케이션
startAt: 2021-01
endAt: 2023-06
techStack:
  - TypeScript
  - Gatsby
  - TanStack Query
  - Material UI
  - Emotion
  - GraphQL
---

# 플레이윙즈 웹 어플리케이션

기존 모바일 어플리케이션으로만 운영하던 플레이윙즈를 SEO를 통한 사용자 유입 증대와 웹투앱 마케팅을 위해 웹 어플리케이션으로 확장한 프로젝트입니다. 출시 이후 웹 앱의 기능이 모바일 앱 기능과 비슷해지면서, 개발 리소스 효율화를 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환했습니다.

URL: https://www.playwings.co.kr/

## Overview

- **Period**: 2021. 01. ~ 2023. 06.
- **Members**: 프론트엔드 개발자 3명, 풀스택 개발자 1명
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
- 앱 내 주요 기능 및 페이지 개발
- 이미지 최적화를 통한 성능 개선: 원본 이미지 기준 평균 80% 용량 감소
- 라이브러리 업데이트 및 기술 스택 최신화
- 플레이윙즈 프론트엔드 개발팀 리딩 (2023.01~2023.06)

## Significance

Gatsby라는 SSG 프레임워크를 처음 사용한 프로젝트입니다. 이 프로젝트를 통해 초기 렌더링과 하이드레이션을 포함한 SSR 및 SSG 관련 핵심 개념을 이해하고, 이를 실무에 적용할 인사이트를 얻었습니다.

그리고 Tanstack Query를 도입하여 클라이언트와 서버 상태를 분리하면서 코드 가독성을 높이고 복잡성을 낮추는 장점을 경험하며, 이를 실무에 활용할 수 있는 실질적인 노하우를 습득했습니다.

또한, 하이브리드 앱 전환을 위해 웹뷰 개발을 진행하면서 모바일과 웹 앱 간의 상호작용 방법에 대해 이해할 수 있었고, 리액트 네이티브의 네이티브 모듈 구조에 대해 이해할 수 있었습니다.

마지막으로, 6개월이라는 짧은 기간 동안 3명의 프론트엔드 개발자로 구성된 팀을 리딩하며 리더십, 커뮤니케이션, 프로젝트 관리와 조직 운영 등 개발 외적인 역량을 성장시킬 수 있었던 의미 있는 프로젝트였습니다.

## Challenges

<details>
<summary>SSG 프레임워크 도입</summary>
프로젝트의 초기 목표는 모바일 앱에서 제공하던 특가 및 매거진 서비스를 웹에서도 제공할 수 있도록 웹사이트를 제작하는 것이었습니다. 프로젝트 시작 당시 개발팀은 React Native, Flutter, SPA 개발 경험이 있었으나, SSR이나 SSG 프로젝트 경험은 부족했습니다. 빠른 프로토타이핑과 개발 리소스 효율성을 고려해 CRA나 Flutter 사용을 검토했으나, 두 프레임워크 모두 SEO 측면에서 불리하다는 단점이 있었습니다. 이에 러닝 커브가 있지만, 풍부한 문서와 커뮤니티 지원을 제공하는 SSG 프레임워크인 Gatsby를 기술 스택으로 선택했습니다.

프로젝트를 진행하며 초기 렌더링과 하이드레이션 관련 이슈들을 마주했습니다. 이와 관련된 주요 사례는 다음과 같습니다.

**사례1. Date 관련 컴포넌트의 하이드레이션 미스매치 문제**

특가 판매 예정인 경우, 판매 시작일까지 며칠 남았는지, 판매 중인 경우 종료일까지 며칠 남았는지를 프로그레스바 형태로 보여주는 요구사항이 있었습니다. CSR 프로젝트에서는 다음과 같이 구현할 수 있습니다.

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

이 문제를 해결하기 위해 Material UI의 `NoSsr` API를 활용해 `withNoSsr()`이란 고차 컴포넌트를 만들어, 빌드 시점에는 fallback을 렌더링하고 하이드레이션 이후에 실제 UI를 렌더링하도록 했습니다. 이때 fallback 컴포넌트는 레이아웃 시프트를 방지하기 위해 원래 컴포넌트와 동일한 높이로 설정했습니다.

```tsx
// withNoSsr.tsx
function withNoSsr<T>(Component: ComponentType<T>, fallback: ReactNode) {
  return (props: T) => (
    <NoSsr fallback={fallback}>
      <Component {...props} />
    </NoSsr>
  );
}

// SalePeriodProgressBar.tsx
export default withNoSsr(SalePeriodProgressBar, <Fallback />)
```

**사례2. 네비게이션 메뉴 이슈**

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

이러한 SSG 프레임워크 도입과 관련된 도전 과제들을 해결하면서, SEO와 초기 렌더링 성능을 최적화할 수 있었습니다. 특히, 하이드레이션 이슈 해결과 네비게이션 메뉴의 반응형 디자인 개선은 사용자 경험을 향상시키는 데 기여했습니다. 그 결과, 출시 당시 lighthouse 기준 **평균 90점 이상**의 성능을 기록했으며, 모바일 앱 MAU의 50%에 해당하는 **5만 명의 사용자를 확보**할 수 있었습니다.

</details>

<details>
<summary>반응형 이미지 컴퍼넌트 개발</summary>

해당 프로젝트에서는 히어로 섹션, 배너, 카드 등과 같이 화면 너비에 따라 크기나 해상도가 달라지는 반응형 이미지가 필요했습니다. Gatsby가 제공하는 반응형 이미지 컴포넌트를 사용할 수 있었지만, 이는 GraphQL로 접근 가능한 정적 이미지에만 제한되어 서버에서 제공하는 동적 이미지 URL을 사용할 수 없는 제약이 있었습니다. 이러한 한계를 극복하기 위해 플랫폼 독립적인 반응형 이미지 컴포넌트를 개발했습니다.

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

</details>

<details>
<summary>웹뷰 개발 및 연동</summary>

플레이윙즈 웹 어플리케이션은 SEO를 위해 기존 모바일 앱에서 제공하던 특가 및 매거진 서비스의 웹 버전을 구현하기 위해 시작되었습니다. 하지만 서비스를 운영하면서 모바일 앱의 기능들이 점차 웹 앱으로 확대되었고, 결국 웹과 모바일 두 플랫폼을 모두 관리해야 하는 상황에 직면했습니다. 당시 프론트엔드 개발자 3명이 웹과 모바일을 동시에 관리하고 있었기 때문에, 개발 리소스를 효율적으로 활용하기 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환하기로 결정했습니다.

하이브리드 앱으로 전환하면서, UI와 비즈니스 로직의 대부분을 웹으로 이동시켰습니다. 하지만, 소셜 로그인, 애널리틱스, 딥링크와 같은 기능은 네이티브(Android/iOS) 단에서 처리해야 했습니다. 예를 들어, 사용자가 웹에서 구글 로그인을 클릭하면, 웹이 네이티브 앱에 로그인 요청을 보내고, 네이티브 단에서 실제 구글 로그인 플로우를 실행한 후 결과를 웹으로 전달하는 방식이 필요했습니다.

![플레이윙즈 모바일 앱 아키텍처](projects/playwings-web-architecture.png)

이를 해결하기 위해 웹뷰를 네이티브 모듈로 관리하여, 웹뷰에서 들어온 요청을 리액트 네이티브에서 받아 처리하고, 응답을 보내거나 웹 앱으로 전달해야 할 데이터가 있으면 웹뷰를 통해 전달하는 구조를 설계했습니다. 웹과 웹뷰 간의 통신은 자바스크립트 브릿지를 활용하여, 웹과 네이티브 모두 동일한 API를 사용할 수 있도록 구현했습니다.

- WebView(iOS/Android)

  웹과 리액트 네이티브간의 통신을 지원하기 위해 다음 작업들을 플랫폼별로 구현했습니다.
  - 웹에서 웹뷰로 데이터를 전송하기 위해 자바스크립트 인터페이스를 `window` 객체에 추가
  - 웹에서 데이터가 들어오면 리액트 네이티브 단에서 props로 `onMessage`를 통해 전달
  - 리액트 네이티브 단에서 웹으로 데이터를 전달하기 위해 `postMessage()` API 추가
  - `postMessage`를 통해 리액트 네이티브 단에서 데이터가 들어오면 `window.dispatchEvent()`를 통해 웹으로 데이터 전달
  <details>
  <summary>iOS</summary>
  
  ```swift
  let jsInterface = "WebView"

  @objc(CustomWebViewManager)
  class CustomWebViewManager: RCTViewManager {
    var webView: CustomWebView!

    // 웹에서 웹뷰로 통신할 수 있는 스크립트 추가
    func view() -> UIView! {
      let config = WKWebViewConfiguration()
      let postMessageScript = WKUserScript(
        source: """
        window.\(jsInterface) = window.\(jsInterface) || {};
        window.\(jsInterface).postMessage = function (data) {
          window.webkit.messageHandlers.\(jsInterface).postMessage(String(data));
        };
        """,
        injectionTime: .atDocumentStart,
        forMainFrameOnly: true
      )

      config.userContentController.addUserScript(postMessageScript)
      webView = CustomWebView(frame: .zero, configuration: config)
      return webView
    }

    @objc public func postMessage(_ data: Any) {
      webView.postMessage(data)
    }
  }

  class CustomWebView: WKWebView, WKScriptMessageHandler {
    var onMessage: RCTDirectEventBlock?

    // 웹에서 메시지를 받으면 리액트 네이티브로 데이터 전달
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
      if (message.name == jsInterface) {
        if let onMessage = self.onMessage {
          onMessage(message.body)
        }
      }
    }

    // 웹으로 메시지 전송
    func postMessage(_ data: String) {
      do {
        let json = try JSONSerialization.data(withJSONObject: ["data": data])
        let js = "window.dispatchEvent(new MessageEvent('message', \(json)));"
        evaluateJavaScript(js)
      } catch {
        print("Error serializing JSON: \(error)")
      }
    }
  }
  ```
  </details>

  <details>
  <summary>Android</summary>

  ```kotlin
  const val jsInterface = "WebView"

  class CustomWebViewManager: SimpleViewManager<CustomWebView>() {
    override fun createViewInstance(context: ThemedReactContext): CustomWebview {
      val webview = CustomWebView(context)

      // 웹에서 웹뷰로 통신할 수 있는 스크립트 추가
      webView.settings.javaScriptEnabled = true
      webView.addJavascriptInterface(object {
        @JavascriptInterface
        fun postMessage(message: String) {
          webView.onMessage(message)
        }
      }, jsInterface)

      return webView
    }

    override fun receiveCommand(
      root: CustomWebView,
      commandId: String,
      args?: ReadableArray?
    ) {
      when (commandId) {
        "postMessage" -> root.postMessage(args!.getString(0))
      }
    }
  }

  class CustomWebView(context: Context): WebView(context) {
    // 웹에서 메시지를 받으면 리액트 네이티브로 데이터 전달
    fun onMessage(message: String) {
      val jsModule = (context as? ReactContext)
        ?.getJSModule(RNCWebViewMessagingModule.class)
        ?.emit("onMessage", message)
    }

    // 웹으로 메시지 전송
    fun postMessage(message: String) {
      val js = "window.dispatchEvent(new MessageEvent('message', { data: '$message' }));"
      evaluateJavascript(js, null)
    }
  }
  ```
  </details>
- React Native
  ```tsx
  function App(): ReactElement {
    // ref.current?.postMessage()를 사용해 웹으로 데이터를 전송
    const ref = useRef<WebView>(null)
    return (
      <WebView ref={ref} onMessage={data => {/** 웹에서 온 요청 처리 */}}>
    )
  }
  ```
- playwings_web
  ```tsx
  // 웹뷰로 데이터 전송
  window.CustomWebView.postMessage(data)

  window.addEventListener('message', event => {/** 웹뷰에서 온 데이터 처리 */})
  ```

웹뷰를 네이티브 모듈로 관리하고 웹뷰를 매개로 리액트 네이티브와 웹이 통신하는 구조를 만들면서, 플랫폼 간의 일관성을 유지하면서도 각 플랫폼에서 필요한 특화된 기능을 별도로 처리할 수 있는 구조를 만들었습니다. 이를 통해 웹과 네이티브를 동시에 관리하는 데 드는 리소스를 효율적으로 절감할 수 있었고, 개발 효율성과 유지보수성이 크게 향상되었습니다.

또한, 웹과 네이티브 간의 안정적인 통신을 위해 메시지 형식을 일관되게 정의해야 했습니다. 이를 위해 타입스크립트의 **유니온 타입**을 활용하여 `command` 필드를 공통으로 가지되, `command`에 따라 필요한 필드가 달라지는 구조로 메시지 형식을 설계했습니다.

```ts
type SocialLogin = {
  command: 'login'
  type: 'google' | 'kakao' | 'apple'
}

type Analytics = {
  command: 'analytics'
  provider: 'firebase' | 'appsflyer'
  eventName: string
  eventParams: Record<string, unknown>
}

type WebToApp = SocialLogin | Analytics
```

이 구조를 채택하면서 새로운 기능을 추가할 때 `command`만 추가하는 방식으로 메시지 구조를 확장할 수 있었고, 메시지를 받아 처리할 때도 `command`에 대응하는 API를 호출하는 구조로 쉽게 구현할 수 있었습니다. 이를 통해 유지보수성과 확장성을 높일 수 있었습니다.

```tsx
function App(): ReactElement {
  const onMessage = (data: WebToApp) => {
    switch (data.command) {
      case 'login':
        socialLogin[data.type].login()
        break
      case 'analytics':
        analytics[data.provider].logEvent(data.eventName, data.eventParams)
        break
      // ...
    }
  }

  return <CustomWebView onMessage={onMessage} />
}
```

</details>