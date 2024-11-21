import React from 'react'
import { Button } from 'antd'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthContext } from 'Context/Auth'
import Cart from '../Pages/Assets/Cart.png'
import { Link } from 'react-router-dom'
const Navbar1 = () => {
    const { isAuth , handleLogout } = useAuthContext(() => {
        console.log('isAuth', isAuth)
    })
    return (
        <header>
            <Navbar expand="lg" className="bg-light  navbar-light">
                <Container>
                    <Link to="/" className='mt-1 nav-link fs-4' style={{ fontFamily: "Quella" }}>GREENMIND</Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-5 text-center nav-imgs'>
                            <Nav.Link className='ms-4' to="/">Home</Nav.Link>
                            <Nav.Link className='ms-4' to="/about/aboutPage">About</Nav.Link>
                            <Nav.Link className='ms-4' to="contacts">Contacts</Nav.Link>
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
                    <Nav className='ms-auto d-flex flex-row-reverse  justify-content-center align-items-center bg-light'>
                        <Navbar.Toggle aria-controls="basic-lg-navbar-nav" className='ms-md-4 ms-2' />
                        <NavDropdown title="Account" className='mt-1 d-flex ' id="basic-nav-dropdown">
                            {!isAuth
                                ? <>
                                    <NavDropdown.Item>
                                        <Link className='ms-4 nav-link text-dark' to="/auth/login">Login</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='ms-4 nav-link  text-dark' to="/auth/register">Register</Link>
                                    </NavDropdown.Item>
                                </>
                                : <>
                                    <NavDropdown.Item>
                                        <Link className='ms-4 nav-link  text-dark' to="/dashboard">DashBoard</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='ms-4 nav-link  text-dark' onClick={handleLogout} >Logout</Link>
                                    </NavDropdown.Item>
                                </>
                            }
                        </NavDropdown>
                        <Button className='border-0 bg-light mt-2 ms-1'>
                            <img src={Cart} alt="person" className=' me-4  mx-sm-2 d-flex justify-content-center align-items-center' style={{ height: "20px", width: "20px" }} />
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navbar1