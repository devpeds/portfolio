import { css } from '@emotion/react'

import Container from './components/Container'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Careers, Intro, Projects, Skills } from './components/contents'
import { profile } from './data'
import { colors } from './styles'

const containerCss = css({
  backgroundColor: colors.lightGray,
  flex: 1,
  zIndex: 1,
})

function App() {
  return (
    <>
      <NavBar menus={['Skills', 'Careers', 'Projects']} />
      <Intro name={profile.name} aka={profile.aka} />
      <div css={containerCss}>
        <Container>
          <Skills skills={profile.skills} />
          <Careers careers={profile.careers} />
          <hr />
          <Projects projects={profile.projects} />
        </Container>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default App
