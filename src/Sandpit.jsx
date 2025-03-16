import React from 'react'

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

      <div className = "sandpit-row-1">
        <figure className = "spaces-container">
          <img className = "spaces-img"/>
          <figcaption>How my spaces shrunk and grew during lockdown as a zine.</figcaption>
        </figure>
        <figure className = "woodcut-container">
          <img className = "woodcut-img"/>
          <figcaption>Last moments in an old flat we used to call home, as a woodcut print.</figcaption>
        </figure>
      </div>

      <div className = "sandpit-row-2">
        <figure className = "book-container">
          <img className = "book-img"/>
          <figcaption>A children’s book about the origin story of the phases of the moon. Written and illustrated by hand, Inspired by the work of Maurice Sendak.</figcaption>
        </figure>
        <figure className = "kalamkari-container">
          <img className = "kalamkari-img"/>
          <figcaption>Kalamkari inspired illustration done for Chitrakatha ‘21 merchandise</figcaption>
        </figure>
      </div>

      <div className = "sandpit-row-3">
        <figure className = "ladoo-container">
          <img className = "ladoo-img"/>
          <figcaption>How-to-make-motichoor-ladoo infographic</figcaption>
        </figure>
        <figure className = "parents-container">
          <img className = "parents-gif"/>
          <figcaption>Meet my parents!</figcaption>
        </figure>
        <figure className = "animate-container">
          <img className = "cake-gif"/>
          <img className = "dot-gif"/>
          <figcaption>Been dipping my toes in Adobe Animate lately</figcaption>
        </figure>
        <figure className = "scoby-container">
          <img className = "scoby-img"/>
          <figcaption> Painting on kombucha bioleather for Luminous Lore for Concious Collective ‘24, inspired by Bomallata Lamps.</figcaption>
        </figure>
      </div>

      <div className = "sandpit-row-4">
        <figure className = "storyboard-container">
          <img className = "storyboard-img"/>
          <figcaption>A screenplay about an inquisitive Gulmohar flower who must hold on till the end of Monsoon to watch a neighbouring Dahlia bloom.</figcaption>
        </figure>
        <figure className = "khm-container">
          <img className = "khm-gif"/>
          <figcaption>Experimental stop motion done for De rerum natura, KHM Germany.</figcaption>
        </figure>
      </div>

    </div>
  )
}

export default SandpitPage 