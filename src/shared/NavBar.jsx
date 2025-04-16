import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css"

function NavBar() {
  const [ isOpen, setIsOpen ] = useState(false)

  const openNav = () => setIsOpen(true)
  const closeNav = () => setIsOpen(false)

    return (
      <nav className="nav_menu">
        <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
          <button className="closebtn" onClick={closeNav}>&times;</button>
          <div className="overlay-content">
            <a href="/">Home</a>
            <a href="/submit">Submit Circulars</a>
            <a href="/search">Search Circulars</a>
            <a href="/view_my">View My Circulars</a>
            <a href="/view_all">View All Circulars</a>
          </div>
        </div>
          
        <button className="hamburger" onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    )
}

export default NavBar;