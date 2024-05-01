import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies && technologies.length > 0 && (
          <ul>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
