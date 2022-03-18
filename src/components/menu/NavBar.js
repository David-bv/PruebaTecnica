import React from 'react'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/actionLogin';
import { TextBrand } from '../../styles/StyledNavBar';


const NavBar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())

    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navbar1' variant="dark">
                <Container fluid style={{ height: 'auto' }}>
                    <Navbar.Brand >
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <TextBrand>WeatherApp</TextBrand>
                            <img
                                alt=""
                                src="https://i.pinimg.com/originals/3f/9f/05/3f9f05296f222540e0e3905108015e0d.jpg"
                                width="50"
                                height="40"
                                className="logo"
                            />{' '}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Link to="/" className='textNavbar' >Inicio</Link>
                        <Nav>
                            <Link to="/login" className='textNavbar' >Login</Link>
                            <Link to='/register' className='NavLink textNavbar'>Registrarse </Link>
                        </Nav>
                        <Nav>
                            <NavLink className='NavLink textNavbar' >
                                <IoIosLogOut style={{ fontSize: '22px' }}
                                    onClick={handleLogout}
                                />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar