import styled from '@emotion/styled'
import { ReactElement, useRef } from 'react'

import { breakpoints, colors } from '../../styles'

const Nav = styled.nav`
  overflow: hidden;
  padding-bottom: 12px;
  transition: height 0.25s;

  @media (min-width: ${breakpoints.md}px) {
    height: fit-content;
    padding-bottom: 0;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: center;

    & > li {
      margin-left: 16px;
    }
  }
`

const Item = styled.button`
  padding: 12px;
  color: inherit;
  font-size: 1.2em;
  font-weight: 700;
  width: 100%;
  text-align: start;
  padding: 12px 24px;

  &:hover {
    background-color: ${colors.primary08};
    color: ${colors.primary};
  }

  @media (min-width: ${breakpoints.md}px) {
    padding: 12px 16px;
    text-align: center;
    border-radius: 8px;
  }
`

interface Props {
  menus: string[]
  open?: boolean
  onItemClick?: (menu: string) => void
}

function MenuList(props: Props): ReactElement {
  const { menus, open, onItemClick } = props
  const ref = useRef<HTMLUListElement>(null)

  return (
    <Nav style={{ height: open ? ref.current?.clientHeight : 0 }}>
      <List ref={ref}>
        {menus.map((menu) => (
          <li key={menu}>
            <Item onClick={() => onItemClick?.(menu)}>{menu}</Item>
          </li>
        ))}
      </List>
    </Nav>
  )
}

export default MenuList
