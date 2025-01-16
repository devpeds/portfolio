import { css } from '@emotion/react'
import { ReactElement, Suspense, lazy } from 'react'

import Modal from '@/components/Modal'
import { colors } from '@/styles'
import { Project } from '@/types'
import { spacingLRTB, spacingXY } from '@/utils/styleUtil'

const MarkdownContent = lazy(() => import('@/components/MarkdownContent'))

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
          <MarkdownContent content={project.detail} />
        </Suspense>
      </div>
    </Modal>
  )
}

export default ProjectDetailModal
