import React from 'react'
import './Projects.css'

function ProjectOverview({infoHeading, infoContent}) {
  return (
    <div className = "overview-container">
      <div className = "info-header">{infoHeading}</div>
      <div className = "info-content">{infoContent}</div>
    </div>
  );  
};

function ProcessSlides() {
  const slides = [
    {
      id: 1,
      src: "image1.png"
    },
    {
      id: 2,
      src: "image2.png"
    },
    {
      id: 3,
      src: "image3.jpeg"
    },
    {
      id: 4,
      src: "image4.jpeg"
    },
    {
      id: 5,
      src: "image5.jpg"
    },
    {
      id: 6,
      src: "image6.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(slides[0]); //initialize state to 0th index of the arr slides

  const PrevSlide = () => {
    const prevSlide = slides.find((slide) => (slide.id === currentSlide.id - 1));
    if (prevSlide) {
    setCurrentSlide(prevSlide);
    }
  };

  const NextSlide = () => {
    const nextSlide = slides.find((slide) => (slide.id === currentSlide.id + 1));
    if (nextSlide) {
      setCurrentSlide(nextSlide);
    }  
  };

  
  return (
    <>
    <div className= "carousel-container">
      <button 
      className = "prev-slide-button button"
      onClick = {PrevSlide}> 
        prev 
      </button>
      <div className = "cards-container">
      {
        slides.find((slide) => slide.id === currentSlide.id) && (  //You can use && to render the <div> only if a match is found.
        <div 
        className = "slide"
        id = {currentSlide.id}
        > 
          
          <img src = {currentSlide.src} />
        </div>
      )}
      <div className = "indicator-container">
      {slides.map((slide, index) => (
        <div 
        className = {currentSlide.id === slide.id ? "active-indicator-dot" : "indicator-dot"}
        id = {slide.id}>
        </div>
      ))}
      </div>
      </div>
      <button 
      className = "next-slide-button button"
      onClick = {NextSlide}> 
        next 
      </button>
    </div>

    </>
  )
  
}

function Project6Page() {
  return (
    <>
    <div className="head-img-container" >
      <img 
        className="head-img"
        src="halftone-test2.png" />  
    </div>
    <p>Project Title 6</p>
    <div className="info-container">
      <div className="about-container">
        <ProjectOverview 
          infoHeading="About"
          infoContent="About the project goes here."
        />
      </div>
      <div className="other-info-container">
        <div className = "re-overview-container-1" >
          <ProjectOverview
            infoHeading="Duration"
            infoContent="6 months"
          />
        </div>
        <div className = "re-overview-container-2" >
          <ProjectOverview
            infoHeading="Team"
            infoContent="Team Member, Team Member"
          />
        </div>
        <div className = "re-overview-container-3" >
          <ProjectOverview
            infoHeading="Brief"
            infoContent="This is the brief. Its so long that it wont fit and will definitely screw my layout. Even longer. Longest ever."
          />
        </div>
      </div>
    </div>
    <ProcessSlides />
    </>
  )

}

export default Project6Page 
