import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../NavBar/CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='containerLogo'>
                            <img src='/logo.png' alt="appLogo" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About us</Nav.Link>
                            <Nav.Link href="#home">Contacts</Nav.Link>
                            <Nav.Link href="#link">Products</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#cart" >
                                <CartWidget />
                            </a>
                        </Navbar.Text>
                        <NavDropdown title="Language" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default NavBar