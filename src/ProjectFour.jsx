import React from 'react'
import './ProjectFour.css'
import AshoreHero from './assets/Ashore-assets/ashore-hero-img.webp'
import AshoreHowTo from './assets/Ashore-assets/how-to-play.webp'

const ProjectFour = () => {
  return (
    <div className = "p4-container">

      <div className = "ashore-how-to-container">
        <img src = {AshoreHowTo}/>
      </div>
      <div className = "ashore-hero-container">
        <img src = {AshoreHero} />
      </div>
    </div>
  )
}

export default ProjectFour;