import React from 'react'
import {useState, useEffect, useRef} from "react" 
import { useParams, Link } from 'react-router-dom'
import{ useSwipeable } from 'react-swipeable'
import './Project-revised.css'
import projects from './projects'


// Helper function to render text that may contain links or highlights
const renderTextWithLinks = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((segment, index) => {
      if (typeof segment === 'string') {
        return <span key={index}>{segment}</span>;
      }
      if (segment.link) {
        return (
          <a
            key={index}
            href={segment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {segment.text}
          </a>
        );
      }
      if (segment.highlight) {
        return (
          <span key={index} className="text-highlight">
            {segment.text}
          </span>
        );
      }
      return null;
    });
  }
  return content;
};

function ProjectOverview() {
  const { id } = useParams();
  const projectInView = projects.find((p) => p.id === parseInt(id) );

  if (!projectInView) {
    return <h2>Page Not Found</h2>;
  }

  return (
    <>
      <div className="overview-container">
        <div className="overview-col-1">
          <div className="title-section">
            <h2 className="title">{projectInView.title}</h2>
            <span className="project-type-tag">
              <span className="tag-dot"></span>
              {projectInView.type}
            </span>
          </div>
          <p className="project-description">{renderTextWithLinks(projectInView.about)}</p>
        </div>

        <div className="overview-col-2">
          <div className="meta-row">
            <span className="meta-label">Scope</span>
            <span className="meta-value">{projectInView.deliverables}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">{projectInView.duration}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">Brief</span>
            <span className="meta-value">{renderTextWithLinks(projectInView.brief)}</span>
          </div>
        </div>
      </div>
    </>
      
  )
}

function ProcessSlides({projectInView, id}) {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showEscBanner, setShowEscBanner] = useState(false);
  const slideContainerRef = useRef(null);
  const titlesListRef = useRef(null);
  const titleItemRefs = useRef([]);

  // Use sections if provided, otherwise group every 3 slides into sections
  const sections = projectInView.sections || (() => {
    const generatedSections = [];
    for (let i = 0; i < projectInView.slides.length; i += 3) {
      const endIndex = Math.min(i + 2, projectInView.slides.length - 1);
      generatedSections.push({
        title: `Section ${Math.floor(i / 3) + 1}`,
        slideRange: [i, endIndex]
      });
    }
    return generatedSections;
  })();

  // Determine which section is currently active based on currentSlideIndex
  const getCurrentSection = () => {
    return sections.findIndex(section => {
      if (typeof section.slideIndex === 'number') {
        return currentSlideIndex === section.slideIndex;
      } else if (Array.isArray(section.slideIndex)) {
        return section.slideIndex.includes(currentSlideIndex);
      } else if (section.slideRange) {
        const [start, end] = section.slideRange;
        return currentSlideIndex >= start && currentSlideIndex <= end;
      }
      return false;
    });
  };

  const currentSectionIndex = getCurrentSection();
  
  const PrevSlide = () => {

    if(slideContainerRef.current) {
      const container = slideContainerRef.current
      if (container.scrollLeft <= 0) {
        container.scrollTo({left: container.scrollWidth - container.clientWidth, behavior: "smooth"}) 
      } else {
        container.scrollBy({left: -container.clientWidth, behavior:"instant"})
      }
    }

    //scroll happens first, then state updates without interference
    setTimeout(() => {
      setCurrentSlideIndex((prevIndex) => {
        return prevIndex > 0 ? prevIndex - 1 : projectInView.slides.length - 1 
      })
    }, 100)


  }

  const NextSlide = () => {

    if(slideContainerRef.current) {
      const container = slideContainerRef.current
      if(container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollTo({left: 0, behavior: "smooth"}) //go back to first slide
      } else {
        container.scrollBy({left: container.clientWidth, behavior: "instant"})
        console.log(container.scrollWidth, container.clientWidth, container.scrollLeft);
      }
    }

    
    setTimeout(()=> {
      setCurrentSlideIndex((prevIndex) => {
        return prevIndex < projectInView.slides.length - 1 ? prevIndex + 1 : 0
      })
    }, 100)

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
      window.removeEventListener("keydown", handleKeyDown)
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
        setShowEscBanner(true)

        // Hide banner after 1 second
        setTimeout(() => {
          setShowEscBanner(false)
        }, 1000)

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
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setIsFullscreen(false);
      }
    };

    const handleKeyDown = (event) => {
      if(event.key === "Escape") {
        setIsFullscreen(false)
      }
    } 

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyDown)

    };
}, []);

  const toggleFullscreen = () => {
    if(isFullscreen) {
     exitFullscreen()
    } else {
     enterFullscreen()
    }
  }

  //update scroll value manually after fullscreen
  useEffect(() => {
    const updateScrollPosition = () => {
        if (slideContainerRef.current) {
            const carousel = slideContainerRef.current;
            setTimeout(() => {
                currentSlideIndex === 0 ? carousel.scrollTo ({left: 0, behavior: "instant"}) :
                carousel.scrollTo({ left: currentSlideIndex * carousel.clientWidth, behavior: "instant" });
              }, 100);
        }
    };
  
        document.addEventListener("fullscreenchange", updateScrollPosition);
        document.addEventListener("webkitfullscreenchange", updateScrollPosition);
        document.addEventListener("msfullscreenchange", updateScrollPosition);

        updateScrollPosition()

    return () => {
       
        document.removeEventListener("fullscreenchange", updateScrollPosition);
        document.removeEventListener("webkitfullscreenchange", updateScrollPosition);
        document.removeEventListener("msfullscreenchange", updateScrollPosition);
      
    };
}, [currentSlideIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: NextSlide,
    onSwipedRight: PrevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Update indicator position when section changes
  useEffect(() => {
    if (titlesListRef.current && titleItemRefs.current[currentSectionIndex]) {
      const listElement = titlesListRef.current;
      const activeItem = titleItemRefs.current[currentSectionIndex];

      if (activeItem) {
        const top = activeItem.offsetTop;
        const height = activeItem.offsetHeight;
        const reducedHeight = height * 0.6; // Reduce height to 60%
        const centerOffset = (height - reducedHeight) / 2; // Center vertically

        listElement.style.setProperty('--indicator-top', `${top + centerOffset}px`);
        listElement.style.setProperty('--indicator-height', `${reducedHeight}px`);
      }
    }
  }, [currentSectionIndex]);

  const handleSectionClick = (sectionIndex) => {
    const section = sections[sectionIndex];
    let targetSlideIndex;

    // Determine the target slide based on section definition
    if (typeof section.slideIndex === 'number') {
      targetSlideIndex = section.slideIndex;
    } else if (Array.isArray(section.slideIndex)) {
      targetSlideIndex = section.slideIndex[0]; // Navigate to first slide in array
    } else if (section.slideRange) {
      targetSlideIndex = section.slideRange[0]; // Navigate to start of range
    }

    setCurrentSlideIndex(targetSlideIndex);
    if (slideContainerRef.current) {
      const container = slideContainerRef.current;
      container.scrollTo({ left: targetSlideIndex * container.clientWidth, behavior: "smooth" });
    }
  };

  


  return (
    <div className="carousel-wrapper">
      <p className="slide-counter">{currentSlideIndex + 1}/{projectInView.slides.length}</p>

      <div className="carousel-content">
        <div className="slide-titles-list" ref={titlesListRef}>
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (titleItemRefs.current[index] = el)}
              className={`slide-title-item ${currentSectionIndex === index ? 'active' : 'inactive'}`}
              onClick={() => handleSectionClick(index)}
            >
              {section.title}
            </div>
          ))}
        </div>

        <div className="slide-and-nav-container">
          <div className="slide-container">
            <div className="slide-img-container" ref={slideContainerRef}>
              {projectInView.slides.map((slide, index) => (
                <img
                  className="slide-img"
                  src={slide}
                  key={index}
                />
              ))}
              {isFullscreen && (
                <>
                  <i
                    className="bi bi-fullscreen-exit exit-fullscreen-icon"
                    onClick={toggleFullscreen}
                  ></i>
                  <div className={`esc-banner ${showEscBanner ? 'show' : 'hide'}`}>
                    Press <span className="esc-key">Esc</span> to exit fullscreen
                  </div>
                </>
              )}
            </div>
            {!isFullscreen && (
              <i
                className="fullscreen-btn bi bi-fullscreen"
                onClick={toggleFullscreen}
              ></i>
            )}
          </div>

          <div className="carousel-nav-container">
            <button className="carousel-nav-button prev-button" onClick={PrevSlide}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="carousel-nav-button next-button" onClick={NextSlide}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Pagination({projectInView, id}) {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(0);
  const paginationRef = useRef(null);

  const currentIndex = projects.findIndex((p) => p.id === projectInView.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < (projects.length -1) ? projects[currentIndex + 1] : null;

  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  const handleMouseEnter = (e, index, project) => {
    if (project.id === projectInView.id) return;

    const target = e.currentTarget;
    const containerRect = paginationRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const centerX = targetRect.left + targetRect.width / 2 - containerRect.left;

    setTooltipPosition(centerX);
    setHoveredIndex(index);
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredProject(null);
  };

  return(
    <div className='pagination-container' ref={paginationRef}>
      {hoveredProject && (
        <div className="pagination-tooltip" style={{ left: tooltipPosition }}>
          <img className="tooltip-thumbnail" src={hoveredProject.source} alt={hoveredProject.title} />
          <div className="tooltip-info">
            <span className="tooltip-title">{hoveredProject.title}</span>
            <span className="tooltip-tag">{hoveredProject.type}</span>
          </div>
        </div>
      )}
      <Link
        className= {`previous-project-link ${previousProject ? 'active-previous-project-link' : 'inactive-previous-project-link'}`}
        to={previousProject ? `/work/${previousProject.id}` : "#"}>&#8249;
      </Link>
        <ul className={`pagination-list ${hoveredIndex !== null ? 'hovering' : ''}`}>
          {sortedProjects.map((project, index)=>{
            return(
              <Link to={`/work/${project.id}`} key={project.id} className="number-links">
                <li
                  className={`
                    ${project.id === projectInView.id ? "active-project-link" : "inactive-project-link"}
                    ${hoveredIndex === index ? "hovered-project-link" : "not-hovered-adjacent"}
                    ${hoveredIndex === index+1 || hoveredIndex === index -1 ? "adjacent-project-link" : "not-hovered-adjacent"}
                  `}
                    onMouseEnter={(e) => handleMouseEnter(e, index, project)}
                    onMouseLeave={handleMouseLeave}
                  >
                  {project.id}
                </li>
              </Link>
            )
          })}
        </ul>
      <Link
        className= {`next-project-link ${ nextProject ? "active-next-project-link" : "inactive-next-project-link" }`}
        to={nextProject ? `/work/${nextProject.id}` : "#"}>&#8250;
      </Link>
        </div>
  )
}


function ProjectPage() {

  const { id } = useParams();
  const projectInView = projects.find((p) => p.id === Number(id) );

  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    if (!projectInView) return;
    setIsLoaded(false);
    const newSrc = projectInView.headerImg
    setCurrentSrc(newSrc)
  }, [projectInView])

  if (!projectInView) {
    return <h2>Page Not Found</h2>;
  }

  const DynamicContent = projectInView.component;

  return (
    <>
      <div className="header-img-container">
        <img 
          className= {isLoaded ? "header-img" : "header-img-hidden"} 
          src= {currentSrc}
          onLoad= {()=> {setIsLoaded(true)}} />
      </div>

      <ProjectOverview projectInView = {projectInView} />
      {projectInView.id !== 3 && projectInView.id !== 1 && projectInView.id !== 2 && projectInView.id !== 5 &&
      <ProcessSlides projectInView={projectInView} id = {id} />}
      <DynamicContent />
      <Pagination projectInView={projectInView} id = {id} />
    </>
  )  
}

export default ProjectPage 
