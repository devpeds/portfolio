import { css } from '@emotion/react'
import { ReactElement, useEffect, useRef, useState } from 'react'

import Container from '@/components/Container'
import { colors } from '@/styles'
import { Menu } from '@/types'
import { mediaQueryConditionWidth, spacingXY } from '@/utils/styleUtil'

import MenuButton from './MenuButton'
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
    paddingTop: `calc(${10}px + env(safe-area-inset-top))`,
  }),
  logo: css({
    fontSize: '1.2em',
    fontWeight: 700,
    lineHeight: '40px',
  }),
  menuButton: css({
    width: 40,
    height: 40,
    padding: 4,
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

  const onLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  return (
    <header
      css={[navBarCss.self, isScrolled ? navBarCss.light : navBarCss.dark]}
    >
      <MenuList menus={menus} onMenuClick={onMenuItemClick}>
        <Container>
          <div ref={ref} css={navBarCss.inner}>
            <button css={navBarCss.logo} onClick={onLogoClick}>
              PEDSFOLIO
            </button>
            {isDesktop === true && <MenuList.Bar />}
            {isDesktop === false && (
              <MenuButton
                css={navBarCss.menuButton}
                open={isMenuOen}
                onClick={() => setMenuOpen((prev) => !prev)}
              />
            )}
          </div>
          {isDesktop === false && <MenuList.Collapsible open={isMenuOen} />}
        </Container>
      </MenuList>
    </header>
  )
}

export default NavBar
