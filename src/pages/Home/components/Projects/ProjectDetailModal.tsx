import { css } from '@emotion/react'
import { ReactElement } from 'react'

import { SvgChevronLeft } from '@/assets/svg'
import HtmlContent from '@/components/HtmlContent'
import Modal from '@/components/Modal'
import Showcase from '@/components/Showcase'
import { colors } from '@/styles'
import { Project } from '@/types'
import { hoverStyle, spacingLRTB, spacingLRY } from '@/utils/styleUtil'

const modalCss = {
  self: css({
    height: '100%',
  }),
  showcase: css({
    marginBottom: 20,
  }),
  contents: css({
    padding: spacingLRTB(24, 24, 0, 24),
  }),
  nav: css({
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    button: {
      textAlign: 'start',
      fontSize: '0.8em',
      fontWeight: 700,
      color: colors.dark33,
      div: {
        fontSize: '1.25em',
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        svg: {
          position: 'absolute',
        },
        span: {
          color: colors.dark87,
        },
      },
      ...hoverStyle({ color: colors.dark87 }),
    },
  }),
  prev: css({
    padding: spacingLRY(44, 8, 8),
    svg: {
      left: -20,
    },
  }),
  next: css({
    marginLeft: 'auto',
    padding: spacingLRY(8, 44, 8),
    svg: {
      right: -20,
      transform: 'rotate(180deg)',
    },
  }),
}

interface Props {
  project?: Project
  prev?: Project
  next?: Project
  onPrevClick: (prev: Project) => void
  onNextClick: (next: Project) => void
  onClose?: () => void
}

function ProjectDetailModal(props: Props): ReactElement {
  const { project, prev, next, onPrevClick, onNextClick, onClose } = props

  return (
    <Modal css={modalCss.self} open={Boolean(project)} onClose={onClose}>
      <Modal.Header onClose={onClose}>Project Details</Modal.Header>
      <Showcase css={modalCss.showcase} showcase={project?.showcase ?? []} />
      <HtmlContent css={modalCss.contents} content={project?.detail ?? ''} />
      <div css={modalCss.nav}>
        {prev && (
          <button css={modalCss.prev} onClick={() => onPrevClick(prev)}>
            이전
            <div>
              <SvgChevronLeft width={16} height={16} />
              <span>{prev.name}</span>
            </div>
          </button>
        )}
        {next && (
          <button css={modalCss.next} onClick={() => onNextClick(next)}>
            다음
            <div>
              <span>{next.name}</span>
              <SvgChevronLeft width={16} height={16} />
            </div>
          </button>
        )}
      </div>
    </Modal>
  )
}

export default ProjectDetailModal
