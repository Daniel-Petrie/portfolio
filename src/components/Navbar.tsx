import { Link } from 'gatsby'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <h1>Daniel Petrie</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
