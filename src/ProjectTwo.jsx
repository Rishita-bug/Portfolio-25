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
    </div>
  )
}

export default ProjectTwo;