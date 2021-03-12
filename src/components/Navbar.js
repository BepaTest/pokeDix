import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <img
            src='/img/pokeball.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>PokeDix</Nav.Link>
          <Nav.Link href='/team'>Dix Team</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
