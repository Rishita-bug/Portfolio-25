import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isProjectPage = location.pathname.startsWith('/work/');
  const isWorkPage = location.pathname === '/' || location.pathname.startsWith('/work');

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(isAboutPage);
  const [showFloatingNav, setShowFloatingNav] = useState(isAboutPage);
  const [showOriginalNav, setShowOriginalNav] = useState(!isAboutPage && !isProjectPage);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isJumping, setIsJumping] = useState(false);
  const jumpTimerRef = useRef(null);
  const navListRef = useRef(null);
 

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeLinkMouseEnter = () => {
    if (jumpTimerRef.current) clearTimeout(jumpTimerRef.current);
    setIsJumping(true);
  };

  const handleHomeLinkMouseLeave = () => {
    // 0.5s animation + 0.2s max delay = 0.7s; wait a bit longer to ensure completion
    jumpTimerRef.current = setTimeout(() => setIsJumping(false), 750);
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

  useEffect(() => {
    // On About page, always show floating nav
    if (isAboutPage) {
      setIsScrolled(true);
      setShowFloatingNav(true);
      setShowOriginalNav(false);
      return;
    }

    // On Project pages, hide everything initially
    if (isProjectPage) {
      setIsScrolled(true);
      setShowFloatingNav(false);
      setShowOriginalNav(false);
    }

    let scrollDownTimeoutId;

    const handleScroll = () => {
      // Only apply scroll logic on desktop (>= 700px)
      if (window.innerWidth >= 700) {
        if (window.scrollY > 10) {
          setIsScrolled(true)
          setShowOriginalNav(false)
          // On project pages, show floating nav immediately on scroll
          if (isProjectPage) {
            setShowFloatingNav(true)
          } else {
            // Wait for the original navbar to scroll up (500ms) before showing floating nav
            scrollDownTimeoutId = setTimeout(() => {
              setShowFloatingNav(true)
            }, 500)
          }
        } else {
          // Keep isScrolled true on project pages to prevent original nav from showing
          if (!isProjectPage) {
            setIsScrolled(false)
            setShowOriginalNav(true)
          }
          setShowFloatingNav(false)

          if (scrollDownTimeoutId) {
            clearTimeout(scrollDownTimeoutId)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollDownTimeoutId) {
        clearTimeout(scrollDownTimeoutId)
      }
    }
  }, [isAboutPage, isProjectPage])

  // Update sliding indicator position
  useEffect(() => {
    const updateIndicator = () => {
      if (navListRef.current) {
        const activeLink = navListRef.current.querySelector('.active-link');
        if (activeLink) {
          const navListRect = navListRef.current.getBoundingClientRect();
          const activeLinkRect = activeLink.getBoundingClientRect();
          setIndicatorStyle({
            left: activeLinkRect.left - navListRect.left,
            width: activeLinkRect.width,
            height: activeLinkRect.height,
          });
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateIndicator, 100);
    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [location.pathname, showFloatingNav])


  return(
    <div className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""} ${isAboutPage ? "navbar-about" : ""} ${isProjectPage ? "navbar-project" : ""}`}>
      <NavLink
        to='/'
        className={`home-link ${isProjectPage && !showFloatingNav ? "home-link-hidden" : ""} ${isJumping ? "home-link-jumping" : ""}`}
        onMouseEnter={handleHomeLinkMouseEnter}
        onMouseLeave={handleHomeLinkMouseLeave}
      >
        <span>R</span>
        <span>i</span>
        <span>s</span>
        <span>h</span>
        <span>i</span>
        <span>t</span>
        <span>a</span>
        <span>&nbsp;</span>
        <span>B</span>
        <span>.</span>
      </NavLink>

      <div className={`menu-icon-container ${isOpen ? "menu-open" : ""}`} onClick={toggleNav}>
        <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>

      <ul ref={navListRef} className = {`nav-list ${isOpen ? "nav-open" : ""} ${showFloatingNav ? "nav-scrolled" : ""} ${showOriginalNav ? "nav-original" : ""}`}>
        {showFloatingNav && (
          <div
            className="nav-indicator"
            style={{
              transform: `translateX(${indicatorStyle.left}px) translateY(-50%)`,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
            }}
          />
        )}
        <li className="work-link">
          <NavLink
            to='/'
            className={() => isWorkPage ? "nav-link active-link" : "nav-link"}
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
