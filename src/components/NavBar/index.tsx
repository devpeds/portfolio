import { css } from '@emotion/react'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import Container from '@/components/Container'
import { menus } from '@/data'
import useMatchMedia from '@/hooks/useMatchMedia'
import { breakpoints } from '@/styles'
import { Menu } from '@/types'
import { spacingXY } from '@/utils/styleUtil'

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
  className?: string
}

function NavBar({ className }: Props): ReactElement {
  const [isMenuOen, setMenuOpen] = useState<boolean>(false)
  const isDesktop = useMatchMedia(`(min-width: ${breakpoints.md}px)`)
  const ref = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hash) {
      return
    }

    // NOTE: scroll to element after next animation frame
    // to make sure all contents is loaded (workaround)
    requestAnimationFrame(() => {
      const id = decodeURIComponent(hash.substring(1))
      const section = document.getElementById(id)
      if (section) {
        const offset = innerRef.current?.getBoundingClientRect().height ?? 0
        window.scrollBy({
          top: section.getBoundingClientRect().top - offset,
          behavior: 'smooth',
        })
      }

      navigate('', { replace: true })
    })
  }, [hash, navigate])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent): void => {
      if (ref.current?.contains(e.target as HTMLElement | null)) {
        return
      }

      setMenuOpen(false)
    }

    window.addEventListener('click', onClickOutside)
    return () => window.removeEventListener('click', onClickOutside)
  }, [])

  const onLogoClick = () => {
    if (pathname === '/') {
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    navigate('/')
  }

  const onMenuItemClick = (menu: Menu) => {
    navigate(`/#${menu.id}`, { replace: pathname === '/' })
    setMenuOpen(false)
  }

  return (
    <header ref={ref} css={navBarCss.self} className={className}>
      <MenuList menus={menus} onMenuClick={onMenuItemClick}>
        <Container>
          <div ref={innerRef} css={navBarCss.inner}>
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
