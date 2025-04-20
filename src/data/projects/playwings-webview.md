---
name: 플레이윙즈 하이브리드 앱 전환
description: 개발자 리소스 효율화를 위해 진행한 프로젝트
startAt: 2022-03
endAt: 2022-07
techStack:
  - React Native
  - Gatsby
  - TanStack Query
  - Material UI
  - Emotion
  - GraphQL
---

# 플레이윙즈 하이브리드 앱 전환

웹사이트 출시 이후 모바일 앱에서만 제공되던 기능이 웹에 계속 추가되면서, 개발 리소스 효율화를 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환했습니다.

## Overview

- **Period**: 2022. 03. ~ 2022. 07.
- **Members**: 프론트엔드 개발자 2명, 풀스택 개발자 1명
- **Role**: 프론트엔드 개발
- **TechStack**:
  
  **Mobile**
  - TypeScript
  - React Native

  **Web**
  - TypeScript
  - Gatsby
  - Tanstack Query
  - Material UI
  - Emotion

## Contributions

- 호텔 검색, 좋아요 등 모바일 앱 전용 서비스 웹에 출시 (기여도 80%)
- 웹페이지 모바일 앱간 통신을 위한 웹뷰 개발

## Significance

하이브리드 앱 전환을 위해 웹뷰 개발을 진행하면서 모바일과 웹 앱 간의 상호작용 방법에 대해 이해할 수 있었고, 리액트 네이티브의 네이티브 모듈 구조에 대해 이해할 수 있었습니다.

## Challenges

### 웹뷰 개발 및 연동

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
