import React from "react";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const placeholderProjects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Description for project alpha.",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Description for project beta.",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold">My Work</h1>
      <p className="mt-2 mb-8">A selection of my recent projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {placeholderProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
