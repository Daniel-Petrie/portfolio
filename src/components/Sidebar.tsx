import React from 'react'
import { Link } from 'gatsby'
import { FaTimes } from 'react-icons/fa'

function Sidebar({ toggleSidebar }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="close-icon">
            <FaTimes onClick={toggleSidebar} />
          </div>
          <Link className="sidebar-link" to="/" onClick={toggleSidebar}>
            Home
          </Link>
          {/* <Link className="sidebar-link" to="#about" onClick={toggleSidebar}>
            About
          </Link> */}
          <Link className="sidebar-link" to="#projects" onClick={toggleSidebar}>
            Projects
          </Link>
          <Link
            className="sidebar-link"
            to="#contact-me"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
