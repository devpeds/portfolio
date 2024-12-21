import styled from '@emotion/styled'
import { ReactElement } from 'react'

const Wrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: -1;
  top: 0;
`

function Intro(): ReactElement {
  return <Wrapper>TODO: Implement Intro</Wrapper>
}

export default Intro
