import { css } from '@emotion/react'
import { Fragment, ReactElement, useEffect } from 'react'

import Container from '../components/Container'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Section from '../components/Section'
import { Careers, Intro, Projects, Skills } from '../components/contents'
import { profile } from '../data'
import { SectionId } from '../enums'
import { colors } from '../styles'
import { Menu } from '../types'

type SectionData = Menu & {
  component: ReactElement
  divider?: boolean
}

const menus: SectionData[] = [
  {
    id: SectionId.skills,
    name: 'Skills',
    component: <Skills skills={profile.skills} />,
  },
  {
    id: SectionId.careers,
    name: 'Careers',
    component: <Careers careers={profile.careers} />,
    divider: true,
  },
  {
    id: SectionId.projects,
    name: 'Projects',
    component: <Projects projects={profile.projects} />,
  },
]

const pageCss = {
  footer: css({
    backgroundColor: colors.dark,
  }),
}

function Home(): ReactElement {
  useEffect(() => {
    const scrollY = sessionStorage.getItem('scroll')
    if (scrollY) {
      window.scrollTo(0, parseFloat(scrollY))
    }
  }, [])

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem('scroll', window.scrollY.toString())
    }

    window.addEventListener('beforeunload', saveScrollPosition)
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition)
    }
  }, [])

  return (
    <>
      <NavBar menus={menus} />
      <Intro name={profile.name} aka={profile.aka} />
      <Container>
        {menus.map((menu) => (
          <Fragment key={menu.id}>
            <Section>
              <Section.Title id={menu.id}>{menu.name}</Section.Title>
              {menu.component}
            </Section>
            {menu.divider && <hr />}
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
