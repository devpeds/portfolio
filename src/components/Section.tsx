import { css } from '@emotion/react'

import { HTMLComponentType } from '@/types'
import { spacingY } from '@/utils/styleUtil'

type SectionComponent = HTMLComponentType<HTMLElement> & {
  Title: HTMLComponentType<HTMLHeadingElement>
}

const sectionCss = {
  self: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '48px 24px',
  }),
  title: css({
    fontSize: '2em',
    fontWeight: 700,
    padding: spacingY(16),
    marginBottom: 16,
  }),
}

const Section: SectionComponent = (props) => {
  return <section css={sectionCss.self} {...props} />
}

Section.Title = (props) => {
  return <h2 css={sectionCss.title} {...props} />
}

export default Section
