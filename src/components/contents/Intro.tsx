import styled from '@emotion/styled'
import GraphemeSplitter from 'grapheme-splitter'
import { ReactElement } from 'react'
import TypewriterComponent from 'typewriter-effect'

import backgroundImg from '../../assets/background.png'
import { breakpoints, colors } from '../../styles'
import Container from '../Container'

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  min-height: 480px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.4;
    isolation: isolate;
    background:
      linear-gradient(180deg, ${colors.dark80} 0, ${colors.dark80} 90%),
      url(${backgroundImg}) 50% no-repeat;
    background-size: cover;
    filter: grayscale(70%);
  }
`

const ContainerExt = styled(Container)`
  position: absolute;
  inset: 0;
  padding: 80px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TypewriterWrapper = styled.div`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  white-space: break-spaces;
  min-height: 120px;
  margin-bottom: 32px;

  & .Typewriter__cursor {
    font-size: 1.2em;
    line-height: 1;
  }

  @media (min-width: ${breakpoints.md}px) {
    white-space: normal;
    min-height: 60px;
  }
`

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
    <Wrapper>
      <ContainerExt>
        <TypewriterComponent
          component={TypewriterWrapper}
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
      </ContainerExt>
    </Wrapper>
  )
}

export default Intro
