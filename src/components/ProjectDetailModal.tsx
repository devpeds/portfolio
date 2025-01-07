import { css } from '@emotion/react'
import { ReactElement, Suspense } from 'react'
import Markdown from 'react-markdown'
import { use } from 'react18-use'

import { Project } from '../types'
import IconButton from './IconButton'
import Modal from './Modal'
import { SvgClose } from '../assets/svg'

const modalCss = {
  self: css({
    position: 'relative',
    height: '100%',
    padding: 24,
    '& h1': {
      marginBottom: 32,
    },
    '& h2, h3, p': {
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
  }),
  close: css({
    position: 'absolute',
    top: 24,
    right: 24,
    marginTop: -8,
    marginRight: -8,
  }),
}

interface ContentProps {
  content: Promise<string>
}

function ProjectDetailContent(props: ContentProps): ReactElement {
  const content = use(props.content)
  return <Markdown>{content}</Markdown>
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
      <Suspense>
        <ProjectDetailContent content={project.detail} />
      </Suspense>
      <IconButton css={modalCss.close} onClick={onClose} Icon={SvgClose} />
    </Modal>
  )
}

export default ProjectDetailModal
