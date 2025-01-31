import { css } from '@emotion/react'
import { ReactElement } from 'react'

import HtmlContent from '@/components/HtmlContent'
import Modal from '@/components/Modal'
import { colors } from '@/styles'
import { Project } from '@/types'
import { spacingLRTB, spacingY } from '@/utils/styleUtil'

import Showcase from './Showcase'

const modalCss = {
  self: css({
    height: '100%',
  }),
  showcase: css({
    marginBottom: 32,
  }),
  contents: css({
    padding: spacingLRTB(24, 24, 0, 24),
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
    },
    li: {
      marginBottom: 8,
    },
    summary: {
      padding: spacingY(12),
      fontSize: '1.2em',
      fontWeight: 700,
    },
    p: {
      code: {
        backgroundColor: colors.lightGray,
        color: 'red',
        padding: 4,
        borderRadius: 4,
      },
    },
    pre: {
      overflow: 'scroll',
      code: {
        borderRadius: 8,
      },
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
      <Showcase css={modalCss.showcase} assets={project.showcase} />
      <HtmlContent css={modalCss.contents} content={project.detail} />
    </Modal>
  )
}

export default ProjectDetailModal
