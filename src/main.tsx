import { Global, css } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import colors from './styles/colors.ts'

const globalStyles = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  ':root': {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    color: colors.dark87,
    backgroundColor: colors.dark,
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
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
)
