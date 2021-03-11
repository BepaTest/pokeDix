import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>PokeDix</Link>
        </li>
        <li>
          <Link to='/team'>Dix Team</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
