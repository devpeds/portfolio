import { ReactElement } from 'react'
import TypewriterComponent from 'typewriter-effect'

import { colors } from '@/styles'

const stringSplitter = (text: string): string => {
  // NOTE: `str.split('')` splits the string based on UTF-16 code units,
  // while `for` loop traverses it based on Unicode code points
  const result: string[] = []
  for (const c of text) {
    result.push(c)
  }

  // NOTE: type must be cast to string since type is mis-declared
  return result as unknown as string
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
