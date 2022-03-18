import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DivFooter, H5Footer, LiFooter, RowFooter } from '../../styles/FooterStyled'


const Footer = () => {
    return (

        <DivFooter>
            <Container>
                <RowFooter>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Menu</H5Footer>
                        <ul>
                            <LiFooter><Link to="/" className='textNavbar' >Inicio</Link></LiFooter>
                            <LiFooter><Link to='/users' style={{ textDecoration: 'none' }}> <span className='textNavbar2'> Usuarios </span></Link></LiFooter>
                            <LiFooter><Link to='/add-user' style={{ textDecoration: 'none' }}> <span className='textNavbar2'> Agregar Usuario </span></Link></LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Necesitas ayuda?</H5Footer>
                        <ul>
                            <LiFooter>Contacta un asesor</LiFooter>
                            <LiFooter> Enviar un comunicado </LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Quieres ser premium?</H5Footer>
                        <ul>
                            <LiFooter>Conoce más</LiFooter>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mx-auto'>
                        <H5Footer>Estado de la aplicación</H5Footer>
                        <ul>
                            <LiFooter>Política de privacidad</LiFooter>
                            <LiFooter> Contáctanos</LiFooter>
                        </ul>
                    </Col>
                </RowFooter>
            </Container>
        </DivFooter>
    )
}

export default Footer