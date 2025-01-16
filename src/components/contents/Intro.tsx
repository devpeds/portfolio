import { css } from '@emotion/react'
import GraphemeSplitter from 'grapheme-splitter'
import { ReactElement } from 'react'
import TypewriterComponent from 'typewriter-effect'

import backgroundImg from '@/assets/background.png'
import Container from '@/components/Container'
import { colors } from '@/styles'
import { mediaQueryWidth } from '@/utils/styleUtil'

const introCss = {
  self: css({
    position: 'relative',
    minHeight: 480,
    color: colors.white,
    background: `radial-gradient(circle, ${colors.dark87} 0, ${colors.dark} 100%), url(${backgroundImg}) 50% no-repeat`,
    backgroundSize: 'cover',
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
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  typewriter: css({
    fontSize: '3rem',
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    minHeight: 120,
    marginBottom: 32,
    '& .Typewriter__cursor': {
      fontSize: '1.2em',
      lineHeight: 1,
    },
    [mediaQueryWidth('md')]: {
      whiteSpace: 'normal',
      minHeight: 60,
    },
  }),
}

const stringSplitter = (text: string): string => {
  return new GraphemeSplitter().splitGraphemes(text) as unknown as string
}

const highlight = (text: string): string => {
  return `<span style="color:${colors.primary}">${text}</span>`
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
          <TypewriterComponent
            options={{ stringSplitter }}
            onInit={(typewriter) =>
              typewriter
                .typeString(`프론트엔드 개발자\n${highlight(aka)}`)
                .pauseFor(300)
                .deleteChars(2)
                .typeString(`${highlight(name)}입니다`)
                .pauseFor(300)
                .typeString(' 👋')
                .start()
            }
          />
        </div>
      </Container>
    </div>
  )
}

export default Intro
