import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
          <Link to='/'>PokeDix</Link>
          <Link to='/team'>Dix Team</Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation
