import React from 'react'
import {useState} from 'react'
import './About.css'
import ProfileImg from './profile-img.jpg'
import AboutHeader from './about-header.jpg'
import Resume from './RishitaB-resume-edited.pdf'

function AboutPage() { 

  
    
    const email = "rishitabaghel@gmail.com"
    const[isCopied, setIsCopied] = useState(false);

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

  

  return(
    <div className = 'set-relative'>
    <div className = "about-header-container"><img className = "about-header-img" src = {AboutHeader}/></div>

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
          <p className = {isCopied ? "tooltip tooltip-visible" : "tooltip"}>email copied to clipboard</p>
          <p className= "rotate-link email-link" onClick = {handleCopy}>email</p>
          <a className= "rotate-link resume-link" href={Resume} target='_blank'>resume</a>
        </div>
        <p className="para">
        I’m a 2024 Communication Design graduate from 
        <span className = "education"> National Institute </span> 
        of Design, Andhra Pradesh with a fungal enthusiasm for 
        <span className="work"> UX&nbsp;design and research. </span> 
          During my time in Design school I stumbled upon visual design, film, animation, graphic narrative, UX, branding and various other offshoots of the discipline, making my approach to design <span className="approach">process-driven, analytical yet rooted&nbsp;in&nbsp;storytelling.</span>
        </p>

        <p className="para">
        Currently tinkering with <span className="lately">web development, </span> and kindling a growing interest in graphic design for the web. As a creature I am <span className="self">persistent, curious and wordy.</span> Indulgences include <span className="other">cortados, plein air scribbling, amateur poetry writing and watercolour painting </span> (sometimes concurrently).
        </p>
      </div>
      <div className="links-container-mobile">
          <p className= "rotate-link-mobile"  onClick = {handleCopy}>email</p>
          <p className = {isCopied ? "tooltip tooltip-visible" : "tooltip"}>email copied to clipboard</p>
          <a className= "rotate-link-mobile" href={Resume}>resume</a>
      </div>
      <p className = "about-footnote">Thanks for stopping by my digital abode! This site is an evolving space, still maturing in accessibility, usability and joy.</p>
    </div>
    </div>
  )
}

export default AboutPage 