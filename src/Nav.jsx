import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

  const[isActive, setIsActive] = useState("Work");

  const navItems = [
    {
      label : "rishita b.",
      id : 1,
      path: '/'
    },
    {
      label : "work",
      id: 2,
      path: '/'
    }, 
    {
      label : "sandpit",
      id: 3,
      path: '/sandpit'
    }, 
    {
      label : "about",
      id: 4,
      path: '/about'
    }
  ];

  const handleClick= (label) => {
    setIsActive(label)
  };



  return (
    <nav>
    <ul>
      <li  
        key = {navItems[0].id}
        className = "home-link">
         <Link to={navItems[0].path}>
            {navItems[0].label}
          </Link>
      </li>

      { navItems.slice(1).map((navItem) => {
          return ( 
            <li
              key = {navItem.id}
              //dynamically creating a string of class names based on conditions
              className = {navItem.label === isActive ? "active-nav-link" : "nav-link"}
              onClick = {() => handleClick(navItem.label)}  
            >
              <Link to={navItem.path}>
                {navItem.label}
              </Link>  
            </li>                
          )
        })
      }
    </ul>
    </nav>
  );
 };

export default Nav
