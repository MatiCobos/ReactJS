import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import CartWidget from '../NavBar/CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'}>
                            <div className='containerLogo'>
                                <img src='/logo.png' alt="appLogo" />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>About us</Nav.Link>
                            <Nav.Link>Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a>
                                <CartWidget />
                            </a>
                        </Navbar.Text>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to={"/category/jacket"} id="textStyle">
                                    Jacket
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={"/category/polo"} id="textStyle">
                                    Polo
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={"/category/pants"} id="textStyle">
                                    Pants
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to={"/category/shirt"} id="textStyle">
                                    Shirts
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default NavBar;