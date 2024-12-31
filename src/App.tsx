import styled from '@emotion/styled'

import Container from './components/Container'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Careers, Intro, Projects, Skills } from './components/contents'
import { profile } from './data'
import { colors } from './styles'

const SectionsContainer = styled.div`
  color: ${colors.black};
  background-color: #f5f5f5;
  flex: 1;
  z-index: 1;
`

const Divider = styled.hr`
  border-color: rgba(0, 0, 0, 0.14);
`

function App() {
  return (
    <>
      <NavBar menus={['Skills', 'Careers', 'Projects']} />
      <Intro name={profile.name} aka={profile.aka} />
      <SectionsContainer>
        <Container>
          <Skills skills={profile.skills} />
          <Careers />
          <Divider />
          <Projects />
        </Container>
      </SectionsContainer>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default App
