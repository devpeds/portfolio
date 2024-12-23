import styled from '@emotion/styled'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Career, Intro, Projects, Skills } from './components/sections'
import { breakpoints, colors } from './styles'

const SectionsContainer = styled.div`
  color: ${colors.black};
  background-color: #f5f5f5;
  flex: 1;
  padding: 0 24px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.lg};
  width: 100%;
`

const Divider = styled.hr`
  border-color: rgba(0, 0, 0, 0.14);
`

function App() {
  return (
    <>
      <NavBar menus={['Skills', 'Careers', 'Projects']} />
      <Intro />
      <SectionsContainer>
        <Container>
          <Skills />
          <Career />
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
