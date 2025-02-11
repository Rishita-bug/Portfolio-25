import React from 'react'
import {useState, useEffect, useRef} from "react" 
import { useParams, Link } from 'react-router-dom'
import{ useSwipeable } from 'react-swipeable'
import './Project.css'
import projects from './projects'
import FullscreenIcon from './fullscreen-icon.svg'
import ExitFullscreenIcon from './esc-fullscreen-icon.png'


function HeaderImg({headerImgSrc}) {
  return(
    <div className="header-img-container" >
      <img className="header-img" src={headerImgSrc}></img>
    </div>
    
  )
}

function ProjectOverview() {
  const { id } = useParams();
  const projectInView = projects.find((p) => p.id === parseInt(id) );

  if (!projectInView) {
    return <h2>Page Not Found</h2>;
  }
  
  return (
    <>
      <h2 className="title">{projectInView.title}</h2>

      <div className="overview-container">
        
        <h3 className="overview-headers about-h">About</h3>
        <p className="about-text overview-text">{projectInView.about}</p>
        
        <h3 className="overview-headers brief-h">Brief</h3>
        <p className="brief-text overview-text">{projectInView.brief}</p>
        
        <h3 className="overview-headers deliverables-h">Deliverables</h3>
        <p className="deliverables-text overview-text">{projectInView.deliverables}</p>
        
        <h3 className="overview-headers duration-h">Duration</h3>
        <p className="duration-text overview-text">{projectInView.duration}</p>

      </div>
    </>
      
  )
}

function ProcessSlides({projectInView, id}) {
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slideContainerRef = useRef(null);
  
  const PrevSlide = () => {

    if(slideContainerRef.current) {
      const container = slideContainerRef.current
      if (container.scrollLeft <= 0) {
        container.scrollTo({left: container.scrollWidth - container.clientWidth, behavior: "instant"}) 
      } else {
        container.scrollBy({left: -container.clientWidth, behavior:"smooth"})
      }
    }

    setCurrentSlideIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : projectInView.slides.length - 1 
    })
  }

  const NextSlide = () => {

    if(slideContainerRef.current) {
      const container = slideContainerRef.current
      if(container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({left: 0, behavior: "instant"}) //go back to first slide
      } else {
        container.scrollBy({left: container.clientWidth, behavior: "smooth"})
      }
    }

    setCurrentSlideIndex((prevIndex) => {
      return prevIndex < projectInView.slides.length - 1 ? prevIndex + 1 : 0
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        NextSlide()
      } else if (event.key === "ArrowLeft") {
        PrevSlide()
      } else if (event.key === "Escape" && isFullscreen) {
        exitFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.addEventListener("keydown", handleKeyDown)
    }
  }, [isFullscreen]);

  const enterFullscreen = async () => {
    if(slideContainerRef.current) {
      try {
        if (slideContainerRef.current.requestFullscreen) {
          await slideContainerRef.current.requestFullscreen()
        } else if (slideContainerRef.current.webkitRequestFullscreen) {
          await slideContainerRef.current.webkitRequestFullscreen()
        } else if (slideContainerRef.current.msRequestFullscreen) {
          await slideContainerRef.current.msRequestFullscreen()
        }
        setIsFullscreen(true)

        if (window.screen.orientation && window.innerWidth < 768) {
          await window.screen.orientation.lock("landscape")
        }
      } catch (err) {
        console.error("Error enabling fullscreen", err)
      }
    }
  }

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        await document.msExitFullscreen();
      }

      setIsFullscreen(false)

      // Unlock orientation if it was changed
      if (window.screen.orientation) {
        await window.screen.orientation.unlock();
      }
    } catch (err) {
      console.error("Error exiting fullscreen:", err);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
}, []);

  const toggleFullscreen = () => {
    if(document.fullscreenElement) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  const currentSlide = projectInView.slides[currentSlideIndex]

  const handlers = useSwipeable({
    onSwipedLeft: NextSlide,  // Swipe left for next slide
    onSwipedRight: PrevSlide, // Swipe right for previous slide
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables swipe using mouse as well
  });

  // return(
  //   <div className = "carousel-container" {...handlers}>
  //     <button className = "prev-slide-button" onClick={PrevSlide}></button>
  //       {currentSlide && (
  //       <div className="slide-img-container" {...handlers} ref={slideContainerRef} >
  //         <img 
  //           className="slide-img"
  //           src = {projectInView.slides[currentSlideIndex]} />
  //         <img 
  //           className="fullscreen-btn"
  //           src = {isFullscreen ? ExitFullscreenIcon : FullscreenIcon}
  //           onClick={toggleFullscreen}
  //         />
  //       </div>
  //       )}
  //     <button className = "next-slide-button" onClick={NextSlide}></button>
  //   </div>
  // )

  return (
    <div className="carousel-container">
    <button className="prev-slide-button" onClick= {PrevSlide}></button>
    <div className="slide-img-container" ref= {slideContainerRef}>
      {projectInView.slides.map((slide, index) => (
        <img
          className="slide-img"
          src={slide}
          key={index}
        />
      ))}
        <img 
        className = "fullscreen-btn"
        src = {isFullscreen ? ExitFullscreenIcon : FullscreenIcon}
        onClick={toggleFullscreen}
        />
    </div>
    <button className="next-slide-button" onClick= {NextSlide}></button>
    </div>
  )



}

function Pagination({projectInView, id}) {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const currentIndex = projects.findIndex((p) => p.id === projectInView.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[currentIndex];
  const nextProject = currentIndex < (projects.length -1) ? projects[currentIndex + 1] : projects[currentIndex];

  return(
    <div className='pagination-container'>
      <Link className={previousProject ? 'previous-project-link' : 'inactive-previous-project-link'} to={previousProject ? `/work/${previousProject.id}` : "#"}>&#x1438;</Link>
        <ul className="pagination-list">
          {projects.map((project, index)=>{
            return(
              <Link to={`/work/${project.id}`} key={project.id} className="number-links">
                <li 
                  className={`
                    ${project.id === projectInView.id ? "active-project-link" : "inactive-project-link"}
                    ${hoveredIndex === index ? "hovered-project-link" : "not-hovered-adjacent"}
                    ${hoveredIndex === index+1 || hoveredIndex === index -1 ? "adjacent-project-link" : "not-hovered-adjacent"}
                  `}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                  {project.id}
                </li>
              </Link>
            )
          })}
        </ul>
      <Link className={ nextProject ? "next-project-link" : "inactive-next-project-link" } to={nextProject ? `/work/${nextProject.id}` : "#"}>&#x1433;</Link>  
        </div>
  )
}

function ProjectPage() {
  const { id } = useParams();
  const projectInView = projects.find((p) => p.id === Number(id) );

  if (!projectInView) {
    return <h2>Page Not Found</h2>;
  }

  return(
    <>
      <HeaderImg headerImgSrc={projectInView.headerImg} />
      <ProjectOverview projectInView = {projectInView} />
      <ProcessSlides projectInView={projectInView} id = {id} />
      <Pagination projectInView={projectInView} id = {id} />
    </>
  )  
}

export default ProjectPage 
