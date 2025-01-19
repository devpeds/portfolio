import GraphemeSplitter from 'grapheme-splitter'
import { ReactElement } from 'react'
import TypewriterComponent from 'typewriter-effect'

import { colors } from '@/styles'

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

function Typewriter(props: Props): ReactElement {
  const { name, aka } = props

  return (
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
  )
}

export default Typewriter
