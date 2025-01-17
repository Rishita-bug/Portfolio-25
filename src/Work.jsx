//when the first thumbnail with atleast 10% in view, first project title will become visible

import React from 'react'
import { useState, forwardRef, useRef, useEffect, useMemo } from "react";
import './Work.css'
import {Link} from 'react-router-dom';

function LandingPage () {
  return(
    <div 
    className="landing-page-container"
    >
      hello
    </div>
  );  
};

LandingPage.displayName = "LandingPage";

const Thumbnail = forwardRef(({id, children}, ref) => {

  return (
    <>
    <div 
    className = "thumbnail-container"
    data-id = {id} //attach id as a data-* attribute
    ref={ref}
    >
      {children}
    </div>
    </>
  );
});

Thumbnail.displayName = "Thumbnail"


function ProjectTitles ({number, title, year, className}) {
  return (
    <div className = "info-container">
    <p>{number}</p>  
    <p>{year}</p>
    <p>{title}</p>
    </div>
  )
}



function WorkPage () {
  const [visibleProject, setVisibleProject] = useState(null);
  const [currentProject, setCurrentProject] = useState(false);
  const [isFirstThumbnailVisible, setIsFirstThumbnailVisible] = useState(false);

  

  const projects = useMemo(()=> [
    {
      number:"1/6",
      path:'/project-1',
      title: "Project Title 1",
      year: "2024",
      id: 1,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    },
    {
      number:"2/6",
      path:'/project-2',
      title: "Project Title 2",
      year: "2023",
      id: 2,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    },
    {
      number:"3/6",
      path:'/project-3',
      title: "Project Title 3",
      year: "2022",
      id: 3,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    },
    {
      number:"4/6",
      path:'/project-4',
      title: "Project Title 4",
      year: "2022",
      id: 4,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    },
    {
      number:"5/6",
      path:'/project-5',
      title: "Project Title 5",
      year: "2021",
      id: 5,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    },
    {
      number:"6/6",
      path:'/project-6',
      title: "Project Title 6",
      year: "2021",
      id: 6,
      scope: "information design  /  graphic design  /  ux research",
      description: "Very short description about the project. Might go upto a second line, partly. Perhaps a little more."
    }
  ],[]); 
  
const thumbnailRefs = useRef([]) //create an array of refs to observe

useEffect(() => {
  const observerFirstThumbnail = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target.dataset.id === "1"){
          setIsFirstThumbnailVisible(entry.isIntersecting)
        }
      })
    }, {threshold: 0.8}
  )
  if (thumbnailRefs.current[0]){
    observerFirstThumbnail.observe(thumbnailRefs.current[0])}
})

useEffect(() => {
  const observer1 = new IntersectionObserver(
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
  {
    threshold: 0.9
  }
);

//observe all thumbnails
thumbnailRefs.current.forEach((ref) => {
  if (ref) observer1.observe(ref);
});
return () => observer1.disconnect();
}, [projects]);

  return (
    <>
      <LandingPage />
      {isFirstThumbnailVisible && visibleProject && visibleProject.id === 1 && (
        <ProjectTitles 
        number={visibleProject.number}
        title= {visibleProject.title}
        year= {visibleProject.year}
      />
      )}

      <div className="project-container">
        {projects.map((project, index) => (
          <div 
          className = "wrapper"
          key = {project.id}
          >
      <Link to = {project.path}>
        <Thumbnail 
          key={project.id}
          id = {project.id}
          ref = {(el) => (thumbnailRefs.current[index] = el)}
                //"When React gives us the DOM element (el) for this Thumbnail, 
                // store it in the thumbnailRefs.current array at the position index."
        >
        </Thumbnail>
      </Link>
          
          
          {currentProject?.id === project.id && project.id >= "2" && (
              <ProjectTitles
                number={project.number}
                title={project.title}
                year={project.year}
              />
            )}

            <div className= {currentProject?.id === project.id ? "active-about-project-container" : "about-project-container"}>
              <hr className = {currentProject?.id === project.id ? "active-line-decoration" : "line-decoration"}></hr>
              <p className="project-scope">
                {project.scope}
              </p>
              <p className="project-description">
                {project.description}
              </p>
            </div>
            </div>
        ))}
      </div>
    </>
  )
}
export default WorkPage