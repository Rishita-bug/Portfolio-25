import React from "react";
import './ProjectTwo.css'

import BrochureCover from './assets/ProjectTwo-assets/brochure-cover-mockup.webp'
import BrochureFull from './assets/ProjectTwo-assets/brochure-mockup-full.webp'
import BrochureMap from './assets/ProjectTwo-assets/commute-guide-map.webp'

function ProjectTwo () {
  return (
    <div className = "project-two-container">
      <img className = "brochure-cover" src = {BrochureCover} />
      <img className = "brochure-full" src = {BrochureFull} />
      <img className = "brochure-map" src ={BrochureMap} />
      <div className = "credits-container">
        <h3>Credits</h3>
        <div className = "credits-content">
          <div>
            <h4 className = "credits-h1">Research & Synthesis</h4>
            <p className = "credits-p1">Vaidehi Shirsath, Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h2">Visual Design</h4>
            <p className = "credits-p2">Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h3">Documentation</h4>
            <p className = "credits-p3">Rishita Baghel</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectTwo;