import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='card'>
      <div className='img-container'>
        <img src={project.img} alt={project.name}/>
      </div>
      <div className='card-footer container clickable'>
        <h5 
          onClick={() => window.open(project.url, "_blank")}
        >
          {project.name}
        </h5>
      </div>
    </div>
  )
}

export default ProjectCard;