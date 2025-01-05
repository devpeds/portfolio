import { css } from '@emotion/react'
import { ReactElement, useEffect, useState } from 'react'

import { breakpoints, colors } from '../../styles'
import Container from '../Container'
import MenuList from './MenuList'
import { paddingXY } from '../../utils/styleUtil'

const navBarCss = {
  self: css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'all .2s',
  }),
  light: css({
    backgroundColor: colors.white,
    color: colors.dark87,
    boxShadow: `0 0px 8px ${colors.dark12}`,
  }),
  dark: css({
    backgroundColor: colors.dark60,
    color: colors.white,
  }),
  inner: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: paddingXY(20, 16),
  }),
  title: css({
    fontSize: '1.8em',
    lineHeight: '48px',
  }),
  menuButton: css({
    width: 48,
    height: 48,
    borderRadius: 8,
    border: `1px solid ${colors.dark12}`,
  }),
}

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
    <header
      css={[navBarCss.self, isScrolled ? navBarCss.light : navBarCss.dark]}
    >
      <Container>
        <div css={navBarCss.inner}>
          <h1 css={navBarCss.title}>PEDS' PORTFOLIO</h1>
          {isDesktop === true && menuList}
          {isDesktop === false && (
            <button
              css={navBarCss.menuButton}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          )}
        </div>
        {isDesktop === false && menuList}
      </Container>
    </header>
  )
}

export default NavBar
