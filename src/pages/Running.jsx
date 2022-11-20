import React from 'react'
import styled from 'styled-components'

function Running() {
  return (
    <Container>Running</Container>
  )
}

export default Running

const Container = styled.div`
    background-color: rgba(255,255,255, 0.8);
    backdrop-filter: blur(2px);

    width: 90%;
    height: 40rem;
`