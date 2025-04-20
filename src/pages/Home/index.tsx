import { css } from '@emotion/react'
import { Fragment, ReactElement, useEffect, useState } from 'react'

import Container from '@/components/Container'
import NavBar from '@/components/NavBar'
import Section from '@/components/Section'
import { menus, profile } from '@/data'
import { SectionId } from '@/enums'
import { colors } from '@/styles'

import { Careers, Footer, Intro, Projects, Skills } from './components'

type SectionData = {
  component: ReactElement
  divider?: boolean
}

const data: Record<SectionId, SectionData> = {
  [SectionId.skills]: {
    component: <Skills skills={profile.skills} />,
  },
  [SectionId.careers]: {
    component: <Careers careers={profile.careers} />,
    divider: true,
  },
  [SectionId.projects]: {
    component: <Projects projects={profile.projects} />,
  },
}

const pageCss = {
  navBarLight: css({
    color: colors.dark87,
    background: `linear-gradient(180deg, ${colors.lightGray} 0, ${colors.lightGray87} 100%)`,
    backdropFilter: 'blur(6px)',
    boxShadow: `0 0px 8px ${colors.dark12}`,
  }),
  navBarDark: css({
    backgroundColor: colors.dark60,
    color: colors.white,
  }),
  footer: css({
    backgroundColor: colors.dark,
  }),
}

function Home(): ReactElement {
  const [isScrolled, setScrolled] = useState<boolean>(window.scrollY > 200)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <NavBar css={isScrolled ? pageCss.navBarLight : pageCss.navBarDark} />
      <Intro name={profile.name} aka={profile.aka} />
      <Container>
        {menus.map((menu) => (
          <Fragment key={menu.id}>
            <Section>
              <Section.Title id={menu.id}>{menu.name}</Section.Title>
              {data[menu.id].component}
            </Section>
            {data[menu.id].divider && <hr />}
          </Fragment>
        ))}
      </Container>
      <div css={pageCss.footer}>
        <Container>
          <Footer contacts={profile.contacts} />
        </Container>
      </div>
    </>
  )
}

export default Home
