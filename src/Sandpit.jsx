import React from 'react'
import './Sandpit.css'

const images = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/Sandpit-assets/*.{png,webp,gif}", {eager: true}))
  .map(([path, module]) => {
    const fileName = path.split("/").pop().replace(/\.(png|webp|gif)$/, "");
    return [fileName, module.default]
  })
)


function SandpitPage() {
  return(
    <div className = "sandpit-container">

      <div className = "sandpit-grid-1">
        <p className = "spaces-p">How my spaces shrunk and grew during lockdown as a zine.</p>
        <img className = "spaces-img" src = {images['spaces']}/>
        <img className = "woodcut-img" src = {images['woodcut']}/>
        <p className = "woodcut-p">Last moments in an old flat we used to call home, as a woodcut print.</p>
      </div>

      <div className = "sandpit-grid-2">
        <p className = "spread-p">A children’s book about the origin story of the phases of the moon. Written and illustrated by hand, Inspired by the work of Maurice Sendak.</p>
        <img className = "spread-img"  src = {images['book-spread']}/>
        <img className = "kalamkari-img"  src = {images['kalamkari']}/>
        <p className = "kalamkari-p">Kalamkari inspired illustration done for Chitrakatha ‘21 merchandise</p>
      </div>

      <div className = "sandpit-grid-3">
        <p className = "ladoo-p">How-to-make-motichoor-ladoo infographic</p>
        <img className = "ladoo-img"  src = {images['ladoo']}/>
        <img className = "parents-gif"  src = {images['foot-rub-gif']}/>
        <p className='parents-p'>Meet my parents!</p>
        <img className = "cake-gif"  src = {images['blank-space-cake']}/>
        <img className = "dot-gif"  src = {images['first-ever-omg']}/>
        <p className = "animate-p">Been dipping my toes in Adobe Animate lately</p>
        <img className = "scoby-img"  src = {images['scoby']}/>
        <p className='scoby-p'>Painting on kombucha bioleather for Luminous Lore for Concious Collective ‘24, inspired by Bomallata Lamps.</p>
      </div>

      {/* <div className = "sandpit-row-4">
        <figure className = "storyboard-container">
          <img className = "storyboard-img"/>
          <figcaption>A screenplay about an inquisitive Gulmohar flower who must hold on till the end of Monsoon to watch a neighbouring Dahlia bloom.</figcaption>
        </figure>
        <figure className = "khm-container">
          <img className = "khm-gif"/>
          <figcaption>Experimental stop motion done for De rerum natura, KHM Germany.</figcaption>
        </figure>
      </div> */}

      <div className = 'sandpit-row-4'>
        <img className = "storyboard-img" src = {images['storyboard']}/>
        <p className = 'storyboard-p'>A screenplay about an inquisitive Gulmohar flower who must hold on till the end of Monsoon to watch a neighbouring Dahlia bloom.</p>
        <img className = 'khm-gif' src={images['khm']}/>
        <p className = 'khm-p'>Experimental stop motion done for De rerum natura, KHM Germany.</p>
      </div>

    </div>
  )
}

export default SandpitPage 