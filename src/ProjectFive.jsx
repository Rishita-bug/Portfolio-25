import React from "react";
import './ProjectFive.css';

const images = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/ProjectFive-assets/*.{png,webp,gif}", {eager: true}))
  .map(([path, module]) => {
    const fileName = path.split("/").pop().replace(/\.(png|webp|gif)$/, "");
    return [fileName, module.default]
  })
) 


const ProjectFive = () => {
 
  return (
    <>
      <img className="primary-mockup"/>
      <img 
        src={images["LogoEvolution"]}
        className="logo-evolution"  
      />
      <div className="style-guide-grid">
        
        <div className="colours">
          <h2 className="section-h">Colour Palette</h2>
          <p className="colour-description">The colours are chosen to reflect the simplicity, uniqueness and elegance of pootharekulu, while retaining a festive mood.</p>
          <div className="swatch-container">
          <div className="brown"></div>
          <div className="orange"></div>
          <div className="yellow"></div>
          <div className="green"></div>
          <div className="purple"></div>
          </div>
        </div>

        <div className="typography">
          <h2 className="section-h">Typography</h2>

          <div className="primary-type-container">
          <h3 className="section-h primary-typeface-h">Primary Typeface</h3>
          <p className="primary-type-description"></p>
          <p className="primary-type-sample regular">Speak Pro Regular</p>
          <p className="primary-type-sample bold">Speak Pro Bold</p>
          <p className="primary-type-sample light">Speak Pro Light</p>
          </div>

          <div className="secondary-type-container">
          <h3 className=" section-h primary-typeface-h">Secondary Typeface</h3>
          <p className="secondary-type-description"></p>
          <p className="secondary-type-sample regular">Borel Regular</p>
          </div>

        </div>

        <div className="primary-logo-container">
          <h2 className="section-h">Primary Logo</h2>
          <img 
            className="logo-clear-space" 
            src = {images["logo-clear-space"]}
          />
          <img 
            className="logo-colour" 
            src = {images["logo-colour"]}  
          />
        </div>

        <div className="monogram-container">
          <h2 className="section-h">Monogram</h2>
          <img 
            className="monogram-clear-space" 
            src = {images["monogram-clear-space"]}  
          />
          <img 
            className="monogram-bw" 
            src = {images["monogram-bw"]}  
          />
          <img 
            className= "monogram-colour" 
            src = {images["monogram-colour"]}  
          />
          <img 
            className="monogram-icons" 
            src = {images["monogram-icons"]}  
          />
        </div>

        <div className="graphic-elements">
          <h2 className="section-h">Graphic Elements</h2>
          <p className="graphics-description"></p>
          <img className="graphic-elements-vector" />
          <img className="graphics-grid" />
        </div>

        <div className="packaging">
          <img className="front" />
          <img className="front" />
          <img className="front" />
          <img className="back" />
          <img className="side" />
          <img className="top" />
          

        </div>
      </div>
    </>

  )
}

export default ProjectFive;