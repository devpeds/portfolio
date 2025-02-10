import { css } from '@emotion/react'
import { ReactElement, ReactNode } from 'react'

import { breakpoints } from '@/styles'

const containerCss = css({
  margin: '0 auto',
  maxWidth: breakpoints.lg,
  width: '100%',
})

interface Props {
  className?: string
  children: ReactNode
}

function Container(props: Props): ReactElement {
  return <div css={containerCss} {...props} />
}

export default Container
