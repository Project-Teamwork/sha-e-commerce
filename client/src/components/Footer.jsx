import styled from 'styled-components';

const Container = styled.div `
display: flex;
align-items: center;
width: 100vw;
height: 5vh;
font-size: 1.3rem;
padding-inline: 0.5rem;
`

function Footer () {
  return ( <Container>
   This is the e-commerce Greenfield Project for SHA from Anita and Asif
  </Container> );
}

export default Footer ;
