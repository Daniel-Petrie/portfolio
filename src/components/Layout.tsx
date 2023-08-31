import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../styles/global.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
