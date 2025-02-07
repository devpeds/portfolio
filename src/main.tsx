import { Global, css } from '@emotion/react'
import { StrictMode } from 'react'

import App from './App.tsx'
import nanumSquareNeoRegular from './assets/fonts/NanumSquareNeo-bRg-subset.woff'
import nanumSquareNeoRegular2 from './assets/fonts/NanumSquareNeo-bRg-subset.woff2'
import nanumSquareNeoBold from './assets/fonts/NanumSquareNeo-cBd-subset.woff'
import nanumSquareNeoBold2 from './assets/fonts/NanumSquareNeo-cBd-subset.woff2'
import colors from './styles/colors.ts'

// NOTE 1: multiple @font-face is not supported on object styling
// NOTE 2: change variable font if more than 3 font-weights are needed
// eslint-disable-next-line @emotion/syntax-preference
const globalStyles = css`
  @font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 400;
    font-display: swap;
    src:
      local('NanumSquare Neo'),
      url(${nanumSquareNeoRegular2}) format(woff2),
      url(${nanumSquareNeoRegular}) format(woff);
  }

  @font-face {
    font-family: 'NanumSquare Neo';
    font-weight: 700;
    font-display: swap;
    src:
      local('NanumSquare Neo'),
      url(${nanumSquareNeoBold2}) format(woff2),
      url(${nanumSquareNeoBold}) format(woff);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  }

  :root {
    font-family: 'NanumSquare Neo', system-ui, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;
    color: ${colors.dark87};
    background-color: ${colors.lightGray};
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: 0;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
  button:not(:disabled),
  [type='button']:not(:disabled) {
    cursor: pointer;
  }

  hr {
    border-color: ${colors.dark12};
  }
`

import('react-dom/client').then(({ createRoot }) =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Global styles={globalStyles} />
      <App />
    </StrictMode>,
  ),
)
