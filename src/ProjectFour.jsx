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
      <div style={{ position: "relative", paddingTop: "max(60%, 324px)", width: "100%", height: 0 }}>
      <iframe
        style={{ position: "absolute", border: "none", width: "100%", height: "100%", left: 0, top: 0 }}
        src="https://online.fliphtml5.com/beozc/hihc/#p=2"
        seamless="seamless"
        scrolling="no"
        frameBorder="0"
        allowTransparency={true}
        allowFullScreen={true}
      ></iframe>
    </div>
    </div>
  )
}

export default ProjectFour;