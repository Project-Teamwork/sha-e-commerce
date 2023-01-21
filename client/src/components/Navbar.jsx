import styled from 'styled-components';
import { HiOutlineShoppingCart } from "react-icons/hi"

const Container = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
background-color: black;
width: 100%;
height: 10vh;
padding: 0 2rem;
color: white;
`

const Logo = styled.div`
font-size: 1.5em;
`

const List = styled.ul `
display: flex;
flex: 2;
list-style: none;
padding-inline: 0 3rem;
`
const ListItem = styled.li `
padding-inline: 1rem;
font-size: 1.3em;
`

function Navbar () {
  return ( <Container>
    <Logo>Navbar</Logo>
    <div>
      <List>
        <ListItem>Register</ListItem>
        <ListItem>Login</ListItem>
        <ListItem> <HiOutlineShoppingCart/> </ListItem>
      </List>
    </div>
    
  </Container> );
}

export default Navbar ;