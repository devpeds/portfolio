import { css } from '@emotion/react'
import { ReactElement, Suspense, lazy } from 'react'

import backgroundImg from '@/assets/images/background.png'
import Container from '@/components/Container'
import { colors } from '@/styles'
import { spacingLRTB } from '@/utils/styleUtil'

const Typewriter = lazy(() => import('./Typewriter'))

const introCss = {
  self: css({
    position: 'relative',
    minHeight: 'min(720px, 100vh)',
    color: colors.white,
    background: `radial-gradient(circle, ${colors.dark87} 0, ${colors.dark} 100%), url(${backgroundImg}) 50% no-repeat`,
    backgroundSize: 'cover',
    '@supports (min-height: 100svh)': {
      minHeight: 'min(720px, 100svh)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      isolation: 'isolate',
      backdropFilter: 'grayscale(100%)',
    },
  }),
  container: css({
    position: 'absolute',
    inset: 0,
    paddingTop: `calc(80px + env(safe-area-inset-top))`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  typewriter: css({
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    wordBreak: 'keep-all',
    margin: spacingLRTB(20, 20, 40, 120),
    '& .Typewriter__cursor': {
      fontSize: '1.2em',
      lineHeight: 1,
    },
  }),
}

interface Props {
  name: string
  aka: string
}

function Intro(props: Props): ReactElement {
  const { name, aka } = props

  return (
    <div css={introCss.self}>
      <Container css={introCss.container}>
        <div css={introCss.typewriter}>
          <Suspense>
            <Typewriter name={name} aka={aka} />
          </Suspense>
        </div>
      </Container>
    </div>
  )
}

export default Intro
