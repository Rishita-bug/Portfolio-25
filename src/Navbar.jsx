import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import HamburgerIcon from './hamburger-icon.png'
import CloseIcon from './close-icon.png'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const[isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleMouseMove = (event) => {
    if (event.clientY <= 10 * window.innerHeight / 100) {
      setIsNavbarVisible(true); 
    } else {
      setIsNavbarVisible(false); 
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 900) {
        document.body.addEventListener('mousemove', handleMouseMove)
      } else {
        document.body.removeEventListener('mousemove', handleMouseMove)
      }
    }
      checkScreenSize(); //run once when component mounts
      window.addEventListener('resize', checkScreenSize); //run when window resizes

    
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkScreenSize)
    };
  }, []);
 

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar-container")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])


  return(
    <div 
      className={`navbar-container ${isNavbarVisible ? '' : 'nav-hidden'}`}  
    >
      <NavLink to = '/' className="home-link">
        <span>r</span>
        <span>i</span>      
        <span>s</span>
        <span>h</span>
        <span>i</span>
        <span>t</span>
        <span>a </span> 
        <span>b</span>
        <span>.</span>      
      </NavLink>

      <div className="menu-icon-container" onClick={toggleNav}>
        <img 
          src={isOpen ? CloseIcon : HamburgerIcon}
          width="20">
        </img>
      </div>

      <ul className = {`nav-list ${isOpen ? "nav-open" : ""}`}>
        <li className="work-link">
          <NavLink 
            to='/'
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              work
          </NavLink>
        </li>

        <li className="sandpit-link">
          <NavLink 
            to='/sandpit'
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
            >
              sandpit
        </NavLink></li>

        <li className="about-link">
          <NavLink
            to='/about'
            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
          >
            about
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
