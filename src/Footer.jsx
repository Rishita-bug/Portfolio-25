import React from 'react'
import './Footer.css'

function Footer () {
  return(
    <div className = "footer-wrapper">
      <div className = "footer-container">
        <p className="credits-line">built with React, conceived in Figma.</p>
        <p className="publishers'imprint">typeset in Barlow Semi Condensed and Hanken Grotesk.</p>
        <p className="say-hello">say hello at</p>
        <a href="mailto: rishitabaghel@gmail.com" className="email">rishitabaghel@gmail.com</a>
        <div className="copyright-notice">© 2024 <span className="rishita-b"> Rishita B</span>.</div>
      </div>
    </div>
  )
}

export default Footer;
