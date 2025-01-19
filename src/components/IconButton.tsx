import { css } from '@emotion/react'
import { ComponentProps, ComponentType, ReactElement } from 'react'

import { Color, colors } from '@/styles'
import { HTMLComponentProps } from '@/types'
import { hoverStyle, parseColor } from '@/utils/styleUtil'

const buttonCss = {
  self: css({
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: '50%',
  }),
  color: (color?: Color) => {
    const [r, g, b] = parseColor(color ? colors[color] : colors.dark)
    return css(
      {
        color: color ? colors[color] : 'inherit',
        transition: 'all .2s',
      },
      hoverStyle({
        backgroundColor: `rgba(${r}, ${g}, ${b}, .12)`,
      }),
    )
  },
  icon: css({
    width: '100%',
    height: '100%',
  }),
}

interface Props
  extends Omit<HTMLComponentProps<HTMLButtonElement>, 'children'> {
  color?: Color
  Icon: ComponentType<ComponentProps<'svg'>>
}

function IconButton(props: Props): ReactElement {
  const { Icon, color, ...otherProps } = props
  return (
    <button {...otherProps} css={[buttonCss.self, buttonCss.color(color)]}>
      <Icon css={buttonCss.icon} />
    </button>
  )
}

export default IconButton
