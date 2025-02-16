import React from 'react'
import {useRef, useState, useEffect} from 'react'
import './About.css'
import ProfileImg from './profile-img.jpg'

function AboutPage() { 

  return(
    <div className="about-page-container">
      <h2 className="greeting">hello!</h2>
      
      <div className="p-container">
        <div className="links-container">
          <a className= "rotate-link" href="#">email</a>
          <a className= "rotate-link" href="#">resume</a>
        </div>
        <p className="para">
        I’m a 2024 Communication Design graduate from 
        <span className = "education"> National Institute </span> 
        of Design, Andhra Pradesh with a fungal enthusiasm for 
        <span className="work"> UX&nbsp;design and research. </span> 
        <span className="img-span">        
          <img 
            className="profile-img" 
            src= {ProfileImg} 
          />
        </span>  
          During my time in Design school I stumbled upon visual design, film, animation, graphic narrative, UX, branding and various other offshoots of the discipline, making my approach to design <span className="approach">process-driven, analytical yet rooted&nbsp;in&nbsp;storytelling.</span>
        </p>

        <p className="para">
        Currently tinkering with <span className="lately">web development, </span> and kindling a growing interest in graphic design for the web. As a creature I am <span className="self">persistent, curious and wordy.</span> Indulgences include <span className="other">cortados, plein air scribbling, amateur poetry writing and watercolour painting </span> (sometimes concurrently).
        </p>
      </div>
    </div>
  )
}

export default AboutPage 