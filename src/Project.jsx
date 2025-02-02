import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './Project.css'
import projects from './projects'

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
        <p className="about overview-text">{projectInView.about}</p>
        
        <h3 className="overview-headers brief-h">Brief</h3>
        <p className="brief overview-text">{projectInView.brief}</p>
        
        <h3 className="overview-headers deliverables-h">Deliverables</h3>
        <p className="deliverables overview-text">{projectInView.deliverables}</p>
        
        <h3 className="overview-headers duration-h">Duration</h3>
        <p className="duration overview-text">{projectInView.duration}</p>

      </div>
    </>
      
  )
}

function Pagination({projectInView, id}) {
  
  const currentIndex = projects.findIndex((p) => p.id === projectInView.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[currentIndex];
  const nextProject = currentIndex < (projects.length -1) ? projects[currentIndex + 1] : projects[currentIndex];

  return(
    <div className='pagination-container'>
      <Link className='previous-project-link' to={previousProject ? `/work/${previousProject.id}` : "#"}>previous project</Link>
        <ul className="pagination-list">
          {projects.map((project)=>{
            return(
              <Link to={`/work/${project.id}`} key={project.id} className="number-links">
                <li className={project.id === projectInView.id ? "current-project-link" : ""}>
                  {project.id}
                </li>
              </Link>
            )
          })}
        </ul>
      <Link className='next-project-link' to={nextProject ? `/work/${nextProject.id}` : "#"}>next project</Link>  
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
      <ProjectOverview />
      <Pagination projectInView={projectInView} id = {id} />
    </>
  )  
}

export default ProjectPage 
