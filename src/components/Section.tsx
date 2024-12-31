import { css } from '@emotion/react'
import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react'

type HTMLComponentType<T extends HTMLElement> = ComponentType<
  DetailedHTMLProps<HTMLAttributes<T>, T>
>

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
  }),
}

const Section: SectionComponent = (props) => {
  return <section css={sectionCss.self} {...props} />
}

Section.Title = (props) => {
  return <h2 css={sectionCss.title} {...props} />
}

export default Section
