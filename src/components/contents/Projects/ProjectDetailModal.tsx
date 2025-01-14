import { css } from '@emotion/react'
import { ReactElement, Suspense } from 'react'
import Markdown from 'react-markdown'
import { use } from 'react18-use'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github.css'

import { Project } from '../types'
import Modal from './Modal'
import { colors } from '../styles'
import { spacingLRTB, spacingXY } from '../utils/styleUtil'

const modalCss = {
  self: css({
    height: '100%',
  }),
  contents: css({
    padding: spacingLRTB(24, 24, 0, 24),
    '& h1': {
      marginBottom: 32,
    },
    '& h2, h3, p, pre': {
      marginBottom: 16,
    },
    '& ul, ol': {
      listStyle: 'initial',
      paddingLeft: 20,
      paddingBottom: 16,
    },
    '& li': {
      marginBottom: 8,
    },
    '& summary': {
      padding: spacingXY(0, 12),
      fontSize: '1.2em',
      fontWeight: 700,
    },
    '& p code': {
      backgroundColor: colors.lightGray,
      color: 'red',
      padding: 4,
      borderRadius: 4,
    },
    '& pre code': {
      borderRadius: 8,
    },
  }),
}

interface ContentProps {
  content: Promise<string>
}

function ProjectDetailContent(props: ContentProps): ReactElement {
  const content = use(props.content)
  return (
    <Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>{content}</Markdown>
  )
}

interface Props {
  project: Project
  open?: boolean
  onClose?: () => void
}

function ProjectDetailModal(props: Props): ReactElement {
  const { project, open, onClose } = props

  return (
    <Modal css={modalCss.self} open={open} onClose={onClose}>
      <Modal.Header onClose={onClose}>Project Details</Modal.Header>
      <div css={modalCss.contents}>
        <Suspense>
          <ProjectDetailContent content={project.detail} />
        </Suspense>
      </div>
    </Modal>
  )
}

export default ProjectDetailModal
