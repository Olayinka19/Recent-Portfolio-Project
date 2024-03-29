import React, {useState} from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);

    }
    const toggleLogoDropdown = () => {
        setIsLogoDropdownOpen(!isLogoDropdownOpen);
      };
    
  return (
    <div class="Nav">
   <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-logo ${isLogoDropdownOpen ? 'active' : ''}`} onClick={toggleLogoDropdown}>
          <a href="/">Your Logo</a>
          <div className="dropdown-content">
            <a href="/">Option 1</a>
            <a href="/">Option 2</a>
            <a href="/">Option 3</a>
          </div>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <div className="dropdown">
            <button className="dropbtn">Projects <i className="fas fa-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="/">Ahead-Shopping</a>
              <a href="/">Service 2</a>
              <a href="/">Service 3</a>
            </div>
          </div>
          <a href="/">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar