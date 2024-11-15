import { Button } from 'antd'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Cart from '../Pages/Assets/Cart.png'
import Filter from '../Pages/Assets/Filter.png'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-light navbar-light">
                <Container>
                    <Link to="/" className='mt-1 nav-link fs-4' style={{ fontFamily: "Quella" }}>GREENMIND</Link>
                    <Navbar.Toggle aria-controls="basic-lg-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-5 text-center nav-imgs'>
                            <Nav.Link className='ms-4' to="/">Home</Nav.Link>
                            <Nav.Link className='ms-4' to="/product">Product</Nav.Link>
                            <Nav.Link className='ms-4' to="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto d-flex justify-content-center align-items-center bg-light'>
                            <NavDropdown title="Account" className='mt-1 ms-sm-5 ms-md-5 d-flex justify-content-center align-items-center' id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link className='ms-4 nav-link text-dark' to="/auth/login">Login</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className='ms-4 nav-link  text-dark' to="/auth/register">Register</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button className='border-0 bg-light mt-2 ms-1'>
                                <img src={Cart} alt="person" className=' ms-4 my-sm-2 d-flex justify-content-center align-items-center' style={{ height: "20px", width: "20px" }} />
                            </Button>
                            <span className='ms-3 mt-2 fs-5 text-center text-md-center'>|</span>
                            <Button className='border-0 mt-2 bg-light ms-1'>
                                <img src={Filter} alt="person" className=' ms-4  my-sm-2 d-flex justify-content-center align-items-center' style={{ height: "20px", width: "20px" }} />
                            </Button>
                        </Nav>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navbar1