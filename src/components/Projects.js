import React from "react";
import { ProjectCardLayout } from "react-storybook-library-v3";
import { projectsData } from "../data.js";

const ProjectsComponent = () => {
  return (
    <div id="projects">
      <ProjectCardLayout projects={projectsData} />
    </div>
  );
};

export default ProjectsComponent;
