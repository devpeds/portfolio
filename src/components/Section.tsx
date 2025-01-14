import { css } from '@emotion/react'

import { HTMLComponentType } from '../types'

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
    marginBottom: 32,
    fontWeight: 900,
  }),
}

const Section: SectionComponent = (props) => {
  return <section css={sectionCss.self} {...props} />
}

Section.Title = (props) => {
  return <h2 css={sectionCss.title} {...props} />
}

export default Section
