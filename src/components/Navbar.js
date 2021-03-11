import React from 'react'
import { Link } from 'react-router-dom'
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

// <nav>
//   <ul>
//     <li>
//       <Link to='/'>PokeDix</Link>
//     </li>
//     <li>
//       <Link to='/team'>Dix Team</Link>
//     </li>
//   </ul>
// </nav>

{
  /* */
}

export default Navigation
