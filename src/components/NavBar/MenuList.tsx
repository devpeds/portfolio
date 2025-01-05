import { css } from '@emotion/react'
import { ReactElement, useRef } from 'react'

import { colors } from '../../styles'
import { hoverStyle, mediaQueryWidth, paddingXY } from '../../utils/styleUtil'

const menuCss = {
  nav: css({
    overflow: 'hidden',
    transition: 'height 0.25s',
    [mediaQueryWidth('md')]: {
      height: 'fit-content',
    },
  }),
  list: css({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 12,
    [mediaQueryWidth('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
      paddingBottom: 0,
    },
  }),
  item: css(
    {
      padding: paddingXY(24, 12),
      color: 'inherit',
      fontSize: '1.2em',
      fontWeight: 700,
      width: '100%',
      textAlign: 'start',
      [mediaQueryWidth('md')]: {
        padding: paddingXY(16, 12),
        textAlign: 'center',
        borderRadius: 8,
      },
    },
    hoverStyle({
      backgroundColor: colors.primary08,
      color: colors.primary,
    }),
  ),
}

interface Props {
  menus: string[]
  open?: boolean
  onItemClick?: (menu: string) => void
}

function MenuList(props: Props): ReactElement {
  const { menus, open, onItemClick } = props
  const ref = useRef<HTMLUListElement>(null)

  return (
    <nav
      css={menuCss.nav}
      style={{ height: open ? ref.current?.clientHeight : 0 }}
    >
      <ul css={menuCss.list} ref={ref}>
        {menus.map((menu) => (
          <li key={menu}>
            <button css={menuCss.item} onClick={() => onItemClick?.(menu)}>
              {menu}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuList
