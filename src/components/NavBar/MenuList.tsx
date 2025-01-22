import { css } from '@emotion/react'
import {
  FC,
  ReactElement,
  ReactNode,
  Ref,
  createContext,
  useContext,
  useRef,
} from 'react'

import { colors } from '@/styles'
import { Menu } from '@/types'
import { hoverStyle, spacingXY } from '@/utils/styleUtil'

const menuCss = {
  base: css({
    fontSize: '1em',
    fontWeight: 700,
    button: hoverStyle({
      backgroundColor: colors.primary08,
      color: colors.primary,
    }),
  }),
  bar: css({
    ul: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
    },
    button: {
      padding: spacingXY(16, 12),
      textAlign: 'center',
      borderRadius: 8,
    },
  }),
  collapsible: css({
    overflow: 'hidden',
    transition: 'height 0.25s',
    ul: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 12,
    },
    button: {
      padding: spacingXY(24, 12),
      textAlign: 'start',
      width: '100%',
    },
  }),
}

interface MenuListContextType {
  menus: Menu[]
  onMenuClick: (menu: Menu) => void
}

const MenuListContext = createContext<MenuListContextType>({
  menus: [],
  onMenuClick: () => {},
})

interface Props {
  menus: Menu[]
  children: ReactNode
  onMenuClick: (menu: Menu) => void
}

type MenuListComponent = FC<Props> & {
  Bar: () => ReactElement
  Collapsible: (props: { open: boolean }) => ReactElement
}

const MenuList: MenuListComponent = (props: Props) => {
  const { menus, children, onMenuClick } = props

  return (
    <MenuListContext.Provider value={{ menus, onMenuClick }}>
      {children}
    </MenuListContext.Provider>
  )
}

interface InnerProps {
  className?: string
  ref?: Ref<HTMLUListElement>
}

function MenuListInner({ className, ref }: InnerProps): ReactElement {
  const { menus, onMenuClick } = useContext(MenuListContext)
  return (
    <nav className={className} css={menuCss.base}>
      <ul ref={ref}>
        {menus.map((menu) => (
          <li key={menu.id}>
            <button onClick={() => onMenuClick(menu)}>{menu.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

MenuList.Bar = function Bar() {
  return <MenuListInner css={menuCss.bar} />
}

MenuList.Collapsible = function Collapsible({ open }) {
  const ref = useRef<HTMLUListElement>(null)
  const height = open ? ref.current?.clientHeight : 0
  return (
    <MenuListInner ref={ref} css={[menuCss.collapsible, css({ height })]} />
  )
}

export default MenuList
