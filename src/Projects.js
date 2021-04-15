import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import projects from './myProjects';

const Projects = () => {
  const [myProjects, setProjects] = useState(projects);
  const renderProjects = () => {
    return myProjects.map((project, index) => 
      <ProjectCard key={index} project={project}/>)
  }

  return (
    <div className='container'>
      <div className='card-center'>
        { renderProjects() }
      </div>
    </div>
  )
}

export default Projects;