import { css } from '@emotion/react'
import { ComponentType, ReactElement, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { SvgClose } from '@/assets/svg'
import { breakpoints, colors } from '@/styles'
import { spacingXY } from '@/utils/styleUtil'

import IconButton from './IconButton'

const modalCss = {
  overlay: css({
    position: 'fixed',
    inset: 0,
    backgroundColor: colors.black60,
    zIndex: 100,
  }),
  container: css({
    position: 'relative',
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
  header: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    fontSize: '1.2em',
    fontWeight: 700,
    padding: spacingXY(24, 16),
    backgroundColor: colors.white87,
    backdropFilter: 'blur(6px)',
  }),
}

type ModalComponent = ComponentType<ModalProps> & {
  Header: ComponentType<ModalHeaderProps>
}

interface ModalProps {
  className?: string
  open?: boolean
  onClose?: () => void
  children: ReactNode
}

const Modal: ModalComponent = (props: ModalProps): ReactElement => {
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

interface ModalHeaderProps {
  onClose?: () => void
  children: ReactNode
}

Modal.Header = (props: ModalHeaderProps): ReactElement => {
  const { onClose, children } = props
  return (
    <div css={modalCss.header}>
      {children}
      <IconButton onClick={onClose} Icon={SvgClose} />
    </div>
  )
}

export default Modal
