import { ReactElement } from 'react'
import Markdown from 'react-markdown'
import { use } from 'react18-use'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github.min.css'

interface Props {
  content: string | Promise<string>
}

function MarkdownContent(props: Props): ReactElement {
  const content =
    typeof props.content === 'string' ? props.content : use(props.content)
  return (
    <Markdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>{content}</Markdown>
  )
}

export default MarkdownContent
