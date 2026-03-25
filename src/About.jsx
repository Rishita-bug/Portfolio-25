import React from 'react'
import {useState} from 'react'
import './About.css'
import ProfileImg from './profile-img.jpg'
import AboutHeader from './about-header.jpg'
import Resume from './RishitaB_Resume.pdf'
import ContactModal from './ContactModal'

function AboutPage() { 

  
    
    const email = "rishitabaghel@gmail.com"
    const[isCopied, setIsCopied] = useState(false);
    const[isModalOpen, setIsModalOpen] = useState(false);

    function handleCopy () {
      navigator.clipboard.writeText(email)
        .then(() => {
          setIsCopied(true)
          setTimeout(() => {setIsCopied(false)}, 1200)
        })
        .catch(() => {
          console.log("Couldn\'t copy email")
        })
    }

    function handleResumeClick (e) {
      e.preventDefault();
      setIsModalOpen(true);
    }

    function handleModalSubmit (formData) {
      // Contact info is now being sent via email and stored in Google Sheets
      // No need to open resume here - it will be emailed to them
      console.log('Contact info received:', formData);
    }

  

  return(
    <div className = 'set-relative'>
    <div className = "about-header-container">
      <img className = "about-header-img" src = {AboutHeader}/>
    </div>

    <div className="about-page-container">
      <div className = "profile-img-container">
        <img 
          className="profile-img" 
          src= {ProfileImg} 
        />
      </div>
      <h2 className="greeting">hello!</h2>
      <div className="p-container">
        <div className="links-container">
          <p className = {isCopied ? "tooltip tooltip-visible" : "tooltip"}>
            email copied to clipboard
          </p>
          <p className= "rotate-link email-link" onClick = {handleCopy}>
            email
          </p>
          <a 
            className= "rotate-link resume-link" 
            href={Resume} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>

        <p className = "para">
          <span className = "background">I’m a designer 
            with a <span className = "handwritten"> soft spot </span> 
            for visual design,and professional experience in 
            <span className = "highlight"> UX Design and Research.</span></span>
        </p>
        <p className = "para">
          <span className = "work">My experience thus far has been in emerging tech. 
          I worked on Galaxy AI at Samsung R&D when Gen AI
          was finding its footing in consumer-facing UX, then at 
          Thesys, a B2B SaaS startup pioneering Generative UI.
          </span>
        </p>
        <p className = "para">
          The problems were new, playbooks didn't exist yet, 
          and frameworks mattered more than static screens.
        </p>
        <p className = "para">
          <span className = "lately">Currently in my salad days 
          of programming,</span> <span className = "highlight">learning to think from logic-up,
          not just pixels-down. </span> As a creature I am 
          <span className = "self handwritten"> persistent, curious and wordy. </span> 
          Indulgences include <span className = "other">treks, 
          cortados, plein air scribbling and amateur poetry writing.</span>
        </p>

      </div>
      <div className="links-container-mobile">
          <p className= "rotate-link-mobile"  onClick = {handleCopy}>email</p>
          <p className = {isCopied ? "tooltip tooltip-visible" : "tooltip"}>email copied to clipboard</p>
          <a 
            className = "rotate-link-mobile" 
            href = "RishitaB_Resume.pdf" 
            target = "_blank" 
            rel = "noopener noreferrer">
              resume
          </a>
      </div>
      <p className = "about-footnote">
        Thanks for stopping by my digital abode! 
        This site is an evolving space, still maturing 
        in accessibility, usability and joy.
      </p>
    </div>
    <ContactModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleModalSubmit}
    />
    </div>
  )
}

export default AboutPage 