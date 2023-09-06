import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar className='navBarStyle' bg='transparent' data-bs-theme='dark'>
      <Container>
          <Navbar.Brand href='#incio'  className='logo'>
            <img
              src='./src/assets/logos/cup_logo.png'
              width='40px'
              
              className='d-inline-block align-middle logos'
              alt='Logo QINQELA'
            />
            <Navbar.Brand href='#inicio'>&nbsp;&nbsp;&nbsp;&nbsp;<span className='marca'> Q I N Q E L A </span><span className='pink'>| CoffeeShop</span></Navbar.Brand>
          </Navbar.Brand>
          
        </Container>
        <Container>
          <Nav className='me-auto nav-link'>
            <Nav.Link href='#productos'>PRODUCTOS</Nav.Link>
            <Nav.Link href='#carrito'>CARRITO</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;