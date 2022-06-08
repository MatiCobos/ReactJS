import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const renderNavBar = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='containerLogo'>
                        <img src='/logo.png' />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <Nav.Link href="#home">Contactos</Nav.Link>
                    <Nav.Link href="#link">Productos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#login" >
                        <CartWidget />
                        </a>
                            
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default renderNavBar