import { css } from '@emotion/react'
import { ReactElement, use } from 'react'
import 'highlight.js/styles/github.min.css'

import { colors } from '@/styles'
import { spacingX, spacingY } from '@/utils/styleUtil'

const contentCss = css({
  h1: {
    marginBottom: 24,
  },
  'h2, h3, p, pre': {
    marginBottom: 16,
  },
  '& ul, ol': {
    listStyle: 'initial',
    paddingLeft: 20,
    paddingBottom: 16,
    'ul, ol': {
      paddingBottom: 0,
    },
  },
  li: {
    marginBottom: 8,
    summary: {
      padding: 0,
      paddingTop: 8,
      fontSize: '0.9em',
      fontWeight: 400,
    },
  },
  summary: {
    padding: spacingY(12),
  },
  '& :not(pre) > code': {
    backgroundColor: colors.black12,
    color: 'red',
    margin: spacingX(2),
    padding: 4,
    borderRadius: 4,
  },
  pre: {
    backgroundColor: colors.white,
    padding: 16,
    overflow: 'scroll',
    borderRadius: 8,
  },
  figure: {
    display: 'block',
    width: '100%',
    maxWidth: 480,
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 'bold',
    img: {
      width: '100%',
    },
  },
})

interface Props {
  className?: string
  content: string | Promise<string>
}

function HtmlContent(props: Props): ReactElement {
  const content =
    typeof props.content === 'string' ? props.content : use(props.content)
  return (
    <div
      css={contentCss}
      className={props.className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default HtmlContent
