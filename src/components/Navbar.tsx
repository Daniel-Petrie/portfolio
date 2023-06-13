import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <h1>Daniel Petrie</h1>
      <div className="links">
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="#about">
          About
        </Link>
        <Link className="nav-links" to="#projects">
          Projects
        </Link>
        <Link className="nav-links" to="#contact-me">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
