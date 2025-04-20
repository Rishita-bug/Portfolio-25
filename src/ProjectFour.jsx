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

      <div className = "credits-container">
        <h3>Credits</h3>
        <div className = "credits-content">
          <div>
            <h4 className = "credits-h1">Concept & Game Mechanics</h4>
            <p className = "credits-p1">Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h2">Illustrations</h4>
            <p className = "credits-p2">Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h2">Graphics</h4>
            <p className = "credits-p2">Rishita Baghel, Yadu Krishnan</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectFour;