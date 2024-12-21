import styled from '@emotion/styled'
import { ReactElement } from 'react'

import Container from './Container'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 24px;
  background-color: #222222;
`

function NavBar(): ReactElement {
  return (
    <Wrapper>
      <Container>TODO: Implement Header</Container>
    </Wrapper>
  )
}

export default NavBar
