import { css } from '@emotion/react'
import { ReactElement, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { breakpoints, colors } from '../styles'

const modalCss = {
  overlay: css({
    position: 'fixed',
    inset: 0,
    backgroundColor: colors.black60,
    zIndex: 100,
  }),
  container: css({
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    margin: 'auto',
    maxWidth: 'calc(100% - 80px)',
    width: '100%',
    maxHeight: 'calc(100vh - 160px)',
    overflow: 'scroll',
    scrollbarWidth: 'none',
    backgroundColor: colors.white,
    borderRadius: 16,
    color: colors.dark87,
    [`@media (min-width: ${breakpoints.lg}px)`]: {
      maxWidth: breakpoints.lg - 160,
    },
  }),
}

interface Props {
  className?: string
  open?: boolean
  onClose?: () => void
  children: ReactNode
}

function Modal(props: Props): ReactElement {
  const { className, open, onClose, children } = props

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open])

  if (!open) {
    return <></>
  }

  const modal = (
    <div css={modalCss.overlay} onClick={onClose}>
      <div
        className={className}
        css={modalCss.container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

export default Modal
