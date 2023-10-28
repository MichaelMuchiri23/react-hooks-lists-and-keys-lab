import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const item=projects.map((obj)=>{
    return(
     <ProjectItem key={obj.id} technologies={obj.technologies} name={obj.name} about={obj.about} />
    )
  }) 

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {item}
      </div>
    </div>
  );
}

export default ProjectList;
