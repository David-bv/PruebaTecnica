import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBarUser = () => {

    return (
        <div>        
            <Navbar  className='navbar2' >
              
                <Link to='/users' style={{textDecoration:'none'}}> <span className='textNavbar2'> Usuarios </span></Link>
                <Link to='/add-user' style={{textDecoration:'none'}}> <span className='textNavbar2'> Agregar Usuario </span></Link>
            </Navbar>
        </div>
    )
}

export default NavBarUser