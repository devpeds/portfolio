import { ReactElement, use } from 'react'
import 'highlight.js/styles/github.min.css'

interface Props {
  className?: string
  content: string | Promise<string>
}

function HtmlContent(props: Props): ReactElement {
  const content =
    typeof props.content === 'string' ? props.content : use(props.content)
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default HtmlContent
