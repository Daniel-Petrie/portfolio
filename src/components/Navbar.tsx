import { Link } from 'gatsby'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar' // Import your Sidebar component

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <div className="navbar-container">
        <h1>Daniel Petrie</h1>
        <FaBars className="mobile-icon" onClick={toggleSidebar} />
        <div className="links">
          <Link className="nav-links" to="/">
            Home
          </Link>
          {/* <Link className="nav-links" to="#about">
            About
          </Link> */}
          <Link className="nav-links" to="#projects">
            Projects
          </Link>
          <Link className="nav-links" to="#contact-me">
            Contact
          </Link>
        </div>
      </div>

      {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </nav>
  )
}

export default Navbar
