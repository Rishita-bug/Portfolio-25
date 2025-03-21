import {React, useState, useEffect} from 'react';
import './Sandpit.css';

const images = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/Sandpit-assets/*.{png,webp,gif}", {eager: true}))
  .map(([path, module]) => {
    const fileName = path.split("/").pop().replace(/\.(png|webp|gif)$/, "");
    return [fileName, module.default]
  })
)

function Modal ({imgClicked, isModalVisible, closeModal}) {
  return (
    isModalVisible &&
    <div className = "modal-container">
      <button className = "close-modal-btn" onClick = {closeModal}>&#10006;</button>
    {imgClicked === "book-spread" ? <iframe src = "/HasTheMoonGoneMissing.pdf" /> : 
      <img className = "modal-img" src = {images[`${imgClicked}-module`]}/>}
    </div>
  )
}


function SandpitPage() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgName) => {
    setSelectedImg(imgName)
    setIsModalVisible(true)
    console.log(imgName);
  }

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Cleanup to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalVisible]);

  return(
    <>
    <Modal
      imgClicked = {selectedImg}
      isModalVisible = {isModalVisible}      
      closeModal = {() => {
        setSelectedImg(null)
        setIsModalVisible(false)
      }}>     
    </Modal>
    <div className = "sandpit-container">

      <div className = "sandpit-grid-1">
        <p className = "spaces-p">How my spaces shrunk and grew during lockdown as a zine.</p>
        <img 
          data-imgname = 'spaces'
          onClick = {(e) => openModal(e.target.dataset.imgname)}
          className = "spaces-img" 
          src = {images['spaces']} />
        <img 
          data-imgname = 'woodcut'
          onClick = {(e) => openModal(e.target.dataset.imgname)}
          className = "woodcut-img" 
          src = {images['woodcut']}/>
        <p className = "woodcut-p">Last moments in an old flat we used to call home, as a woodcut print.</p>
      </div>

      <div className = "sandpit-grid-2">
        <p className = "spread-p">A children’s book about the origin story of the phases of the moon. Written and illustrated by hand, Inspired by the work of Maurice Sendak.</p>
        <img 
          className = "spread-img"  
          data-imgname = "book-spread"
          src = {images['book-spread']}
          onClick = {(e) => openModal(e.target.dataset.imgname)}/>
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

      <div className = 'sandpit-row-4'>
        <img className = "storyboard-img" src = {images['storyboard']}/>
        <p className = 'storyboard-p'>A screenplay about an inquisitive Gulmohar flower who must hold on till the end of Monsoon to watch a neighbouring Dahlia bloom.</p>
        <img className = 'khm-gif' src={images['khm']}/>
        <p className = 'khm-p'>Experimental stop motion done for De rerum natura, KHM Germany.</p>
        <img className = "parents-gif-med"  src = {images['foot-rub-gif']}/>
        <p className='parents-p-med'>Meet my parents!</p>
      </div>

    </div>
    </>
  )
}

export default SandpitPage 