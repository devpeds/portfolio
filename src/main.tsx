import { Global, css } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import nanumSquareNeoWoff from './assets/fonts/NanumSquareNeo-Variable.woff'
import nanumSquareNeoWoff2 from './assets/fonts/NanumSquareNeo-Variable.woff2'
import Seo from './components/Seo.tsx'
import colors from './styles/colors.ts'

// NODE: multiple @font-face is not supported on object styling
// Change it to literal template if multiple @font-face is required
const globalStyles = css({
  '@font-face': {
    fontFamily: '"NanumSquare Neo variable"',
    src: `
      local('NanumSquare Neo variable'),
      url(${nanumSquareNeoWoff2}) format(woff2),
      url(${nanumSquareNeoWoff}) format(woff)
    `,
    fontDisplay: 'swap',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    lineHeight: 1.5,
  },
  ':root': {
    fontFamily: '"NanumSquare Neo variable", system-ui, sans-serif',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    color: colors.dark87,
    backgroundColor: colors.lightGray,
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  'ul, ol': {
    listStyleType: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    border: 0,
    color: 'inherit',
    fontFamily: 'inherit',
  },
  'button:not(:disabled),[type="button"]:not(:disabled)': {
    cursor: 'pointer',
  },
  hr: {
    borderColor: colors.dark12,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Seo />
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
)
