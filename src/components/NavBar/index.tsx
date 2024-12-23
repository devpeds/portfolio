import styled from '@emotion/styled'
import { ReactElement, useEffect, useState } from 'react'

import { breakpoints, colors } from '../../styles'
import Container from '../Container'
import MenuList from './MenuList'

interface NavBarRootProps {
  in?: boolean
}

const NavBarRoot = styled('header', {
  shouldForwardProp: (key) => key !== 'in',
})<NavBarRootProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${colors.white};
  color: ${colors.dark};
  box-shadow: 0 2px 8px hsla(0, 0%, 80%, 0.8);
  transition: all 0.2s;

  @media (min-width: ${breakpoints.md}px) {
    background-color: ${(props) => (props.in ? colors.white : 'transparent')};
    color: ${(props) => (props.in ? colors.dark : colors.white)};
    box-shadow: ${(props) =>
      props.in ? '0 2px 8px hsla(0, 0%, 80%, 0.8)' : 'none'};
  }
`

const NavBarInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
`

const Title = styled.h1`
  font-size: 1.8em;
  line-height: 48px;
`

const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${colors.black12};

  &:hover {
    background-color: ${colors.black12};
  }
`

interface Props {
  menus: string[]
}

function NavBar({ menus }: Props): ReactElement {
  const [isScrolled, setScrolled] = useState<boolean>(false)
  const [isDesktop, setDesktop] = useState<boolean>()
  const [isMenuOen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      setDesktop(window.innerWidth >= breakpoints.md)
    }

    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onMenuItemClick = () => {
    // TODO: scroll to section
    setMenuOpen(false)
  }

  const menuList = (
    <MenuList
      menus={menus}
      open={isDesktop || isMenuOen}
      onItemClick={onMenuItemClick}
    />
  )

  return (
    <NavBarRoot in={isScrolled}>
      <Container>
        <NavBarInner>
          <Title>PEDS' PORTFOLIO</Title>
          {isDesktop === true && menuList}
          {isDesktop === false && (
            <MenuButton onClick={() => setMenuOpen((prev) => !prev)} />
          )}
        </NavBarInner>
        {isDesktop === false && menuList}
      </Container>
    </NavBarRoot>
  )
}

export default NavBar
