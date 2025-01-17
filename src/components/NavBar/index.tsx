import { css } from '@emotion/react'
import { ReactElement, useEffect, useRef, useState } from 'react'

import { SvgMenu } from '@/assets/svg'
import Container from '@/components/Container'
import IconButton from '@/components/IconButton'
import { colors } from '@/styles'
import { Menu } from '@/types'
import { mediaQueryConditionWidth, spacingXY } from '@/utils/styleUtil'

import MenuList from './MenuList'

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
    color: colors.dark87,
    background: `linear-gradient(180deg, ${colors.lightGray} 0, ${colors.lightGray87} 100%)`,
    backdropFilter: 'blur(6px)',
    boxShadow: `0 0px 8px ${colors.dark12}`,
  }),
  dark: css({
    backgroundColor: colors.dark60,
    color: colors.white,
  }),
  inner: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacingXY(20, 10),
  }),
  title: css({
    fontSize: '1.2em',
    lineHeight: '40px',
  }),
  menuButton: css({
    marginRight: -8,
  }),
}

interface Props {
  menus: Menu[]
}

function NavBar({ menus }: Props): ReactElement {
  const [isScrolled, setScrolled] = useState<boolean>(false)
  const [isDesktop, setDesktop] = useState<boolean>()
  const [isMenuOen, setMenuOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const matchMedia = window.matchMedia(mediaQueryConditionWidth('md'))
    const onMatchMedia = (e: MediaQueryListEvent) => setDesktop(e.matches)

    setDesktop(matchMedia.matches)
    matchMedia.addEventListener('change', onMatchMedia)
    return () => matchMedia.removeEventListener('change', onMatchMedia)
  }, [])

  const onMenuItemClick = (menu: Menu) => {
    const section = document.getElementById(menu.id)
    if (section) {
      const offset = ref.current?.getBoundingClientRect().height ?? 0
      window.scrollBy({
        top: section.getBoundingClientRect().top - offset,
        behavior: 'smooth',
      })
    }
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
        <div ref={ref} css={navBarCss.inner}>
          <h1 css={navBarCss.title}>PEDSFOLIO</h1>
          {isDesktop === true && menuList}
          {isDesktop === false && (
            <IconButton
              css={navBarCss.menuButton}
              onClick={() => setMenuOpen((prev) => !prev)}
              color={isScrolled ? 'dark87' : 'white'}
              aria-label="메뉴"
              Icon={SvgMenu}
            />
          )}
        </div>
        {isDesktop === false && menuList}
      </Container>
    </header>
  )
}

export default NavBar
