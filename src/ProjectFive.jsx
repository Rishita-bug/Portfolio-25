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
          <div className="palette-container">
          
          <div className="swatch-container">
            <div className="swatch brown"></div>
            <p className="hex-code">#844921</p>
          </div>

          
          <div className="swatch-container">
            <div className="swatch orange"></div>
            <p className="hex-code">#F37921</p>
          </div>

          
          <div className="swatch-container">
            <div className="swatch yellow"></div>
            <p className="hex-code">#F1EC76</p>
          </div>

          
          <div className="swatch-container">
            <div className="swatch green"></div>
            <p className="hex-code">#B1D689</p>
          </div>

          
          <div className="swatch-container">
            <div className="swatch purple"></div>
            <p className="hex-code">#C0A0CB</p>
          </div>

          </div>
        </div>

        <div className="typography">
          <h2 className="section-h">Typography</h2>

          <div className = "primary-secondary-type-container" >
          <div className="primary-type-container">

          <h3 className="section-h primary-typeface-h">Primary Typeface</h3>
          <p className="primary-type-description">
            Speak Pro is a simple, low-contrast and crisp sans-serif typeface. This is used in the logotype and bodies of text. Headers must be in the Heavy weight of the face while bodies of text must be in Bold. Additional information may use Speak Pro Light.
          </p>
          <p className="primary-type-sample regular">Speak Pro Regular</p>
          <p className="primary-type-sample bold">Speak Pro Bold</p>
          <p className="primary-type-sample light">Speak Pro Light</p>
          </div>


          <div className="secondary-type-container">
          <h3 className=" section-h primary-typeface-h">Secondary Typeface</h3>
          <p className="secondary-type-description">
            Borel Regular is a low-contrast, cursive typeface to emphasize the fluid, continuous stroke of the monogram. It is to be used only along with the Primary typeface for emphasis, additional imformation or callouts.
          </p>
          <p className="secondary-type-sample regular">Borel Regular</p>
          </div>

        </div>
        </div>

        <div className="primary-logo-container">
          <h2 className="section-h">Primary Logo</h2>
          
          <div className = "logo-content-container" >

            <figure className="logo-clear-space-container">
                <img 
                  className="logo-clear-space" 
                  src = {images["resized-22"]}
                />
              <figcaption>Logo clear space</figcaption>
            </figure>
            
            <figure className="logo-colour-container">
                <img 
                  className="logo-colour" 
                  src = {images["logo-colour"]}  
                />
              
              <figcaption>Logo colour variations</figcaption>
            </figure>

          </div>
          
        </div>

        <div className="monogram-container">
          <h2 className="section-h">Monogram</h2>

          <div className = "monogram-content-container" >

            <figure className = "monogram-clear-space-container">
                <img 
                  className="monogram-clear-space" 
                  src = {images["monogram-clear-space"]}  
                />
                <figcaption>Monogram clear space</figcaption>
              </figure>
           
            <figure className = "monogram-colour-container">
              <img 
                className= "monogram-colour" 
                src = {images["monogram-colour"]}  
              />
              <figcaption>Monogram colour variations</figcaption>
            </figure>
            
            <figure className="monogram-icons-container">
              <img 
                className="monogram-icons" 
                src = {images["monogram-icons"]}  
              />
              <figcaption>Monogram as icons</figcaption>
            </figure>
          

          </div>
          
        </div>

        <div className="graphic-elements">

          <div>
            <h2 className="section-h">Graphic Elements</h2>

            <p className="graphics-description">
              The packaging graphics are composed using the following guide to ensure a dynamic, asymmetric composition of elements. The elements include visualizations of chopped dry fruits as found traditionally in poothareku, partially visible through layers translucent rice paper, coated with a sheen of ghee.
            </p>
          </div>
          
          <img 
            className="graphics-grid" 
            src = {images['graphics-grid']}
          />

          <img 
            className="graphic-elements-vector" 
            src = {images['graphic-elements-vector']}
          />

        </div>

        <div className="packaging">
          
          <p>Front</p>
          <img 
            className="front"
            src={images['front-1']} 
          
          />
          <img 
            className="front"
            src={images['front-2']} 
          
          />
          <img 
            className="front"
            src={images['front-3']} 
          
          />

          <p>Back</p>
          <img className="back" 
            src = {images['']}
          />

          <p>Side</p>
          <img className="side" 
            src = {images['side']}
          />

          <p>Top</p>
          <img className="top" 
            src = {images['top']}
          />

        </div>
      </div>
    </>

  )
}

export default ProjectFive;