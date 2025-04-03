import React from 'react'
import { useState, forwardRef, useRef, useEffect } from "react";
import './index.css';
import './HomePage.css';
import {Link} from 'react-router-dom';
import projects from './projects';

function HeroSection(){
  return(
    <header className="hero-section">
      <h1 className="hero-text">
        A designer-storyteller in the avid pursuit of human-ness in design.
      </h1>
      <p className="about-site">
        Here you will find selected work, <span>musings</span>, and ways to reach out to me.
      </p>
      <img className="hero-visual"></img>
    </header>
  )
}  

HeroSection.displayName = "HeroSection";


function ProjectTitles({number, year, title, isWorkVisible}){
  return(
    // <div className="project-title-container">
    // <div className = {`set-sticky fade-in ${isWorkVisible ? 'fade-in-visible' : ''}`}>
    <>
    <p className= {` project-number set-sticky fade-in ${isWorkVisible ? 'fade-in-visible' : ''}`}>{number}</p>
    <p className={`project-year set-sticky fade-in ${isWorkVisible ? 'fade-in-visible' : ''}`}>{year}</p>
    <h2 className={`project-title set-sticky fade-in ${isWorkVisible ? 'fade-in-visible' : ''}`}>{title}</h2>
    </>
    // </div>
    // </div>
  )
}

ProjectTitles.displayName = "ProjectTitles";


function ProjectTags ({tags, className}){
  return(
    <ul className = {`tags-list ${className}`}>
      {tags.map((tag, index) => {
        return(
          <li key = {index} className = "tag">
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

ProjectTags.displayName = "ProjectTags";


function ProjectDescription({scope, description, className}){
  return(
    // <div className = "description-container">
    <p className={`project-description ${className}`}>{description}</p>
    // </div>
  )
}

ProjectDescription.displayName = "ProjectDescription";


const ProjectThumbnails = forwardRef(({id, source, path}, ref) => {
  return(
    <div 
      className="thumbnail-container"
      data-id = {id}
      ref = {ref}
    >
    <img src = {source} className="thumbnail-img"></img>
    <Link to={path} className="view-more-link"></Link>
    </div>
  )
})

ProjectThumbnails.displayName = "ProjectThumbnails";


function WorkSection({ref}){

  

  const [isWide, setIsWide] = useState(window.innerWidth >= 700);

  const [visibleProject, setVisibleProject] = useState(null);
  const [currentProject, setCurrentProject] = useState(false);

  const [isWorkVisible, setIsWorkVisible] = useState(false);
 
  const workSectionRef = useRef();
  const thumbnailRefs = useRef([]); //create an array of refs to observe

  useEffect(() => {

    // function getRootMargin() {
    //   if (window.innerWidth > 1440) { // Large desktop screens
    //     return '-35% 0px -55% 0px'; // Adjusted values for bigger viewports
    //   } else if (window.innerWidth > 1024) { // Standard laptop screens
    //     return '-25% 0px -45% 0px';
    //   } else { // Smaller screens
    //     return '-20% 0px -40% 0px';
    //   }
    // }

    // const observerOptions = {
    //   rootMargin: getRootMargin(),
    //   threshold: [0.2], 
    // };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);
            const project = projects.find((proj) => proj.id === id);
            setVisibleProject(project);
            setCurrentProject(project);
        } 
      });
    },
    {rootMargin: '-25% 0px -45% 0px', threshold: 0.2}
  );

  //observe all thumbnails
  thumbnailRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });
  return () => observer.disconnect();
  }, []);

  useEffect(()=>{
    const observerWork = new IntersectionObserver(
      ([entry]) => {
          if(entry.isIntersecting) {
            setIsWorkVisible(true)
          }
      }, {threshold: 0.2}
    )

    if (workSectionRef.current) {
      observerWork.observe(workSectionRef.current)
    }

    return () => {
      if (workSectionRef.current) {
        observerWork.unobserve(workSectionRef.current)
      }
    }
  }, [])


  useEffect(()=>{
    const handleResize = () => {
      setIsWide(window.innerWidth >= 700);
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isWide])

  return(
    <div className="work-section-container" ref={workSectionRef}>
      <div className="sticky-titles-container">
    { isWide && visibleProject && (
      <ProjectTitles
          number={currentProject.number}
          year={currentProject.year}
          title={currentProject.title}
          isWorkVisible={isWorkVisible}
        />  
      //for bigger screens
    )}
  </div>

    <div>
      {
        projects.map((project, index)=>{
          return(
            <div className="project-grid" >
             { !isWide && (
            <ProjectTitles
              number={project.number}
              year={project.year}
              title={project.title}
            />
             )
             }  
            {/* <Link to= {project.path}> */}
              <ProjectThumbnails
                source={project.source}
                key={project.id}
                id = {project.id}
                path={`/work/${project.id}`}
                ref = {(el) => (thumbnailRefs.current[index] = el)}
                                //"When React gives us the DOM element (el) for this Thumbnail, 
                                // store it in the thumbnailRefs.current array at the position index."
              />
            {/* </Link> */}
            <div>
            <hr className={currentProject?.id === project.id ? "active-hr" : "inactive-hr" } />
              <ProjectTags
                className={currentProject?.id === project.id ? "active-tags" : "inactive-tags" }
                tags = {project.tags}
              />
              <ProjectDescription
                className={currentProject?.id === project.id ? "active-description" : "inactive-description" }
                description={project.description}
              />
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
    
  )
}


function HomePage() {
    return (
      <>
      <HeroSection />
      <WorkSection className="set-relative" />
      </>
    )
  }

  export default HomePage;