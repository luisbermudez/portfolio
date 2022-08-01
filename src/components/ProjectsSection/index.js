import "./ProjectsSection.css";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import ProjectCarousel from "../ProjectCarousel";

class ProjectsSection extends React.Component {
  render() {
    return (
      <div id="ProjectsSection">
        <h2 className="gradientTitleTwo gradientTitleSecondary">PROJECTS</h2>
        <PrimaryButton text="View all projects" />
        <ProjectCarousel />
      </div>
    );
  }
}

export default ProjectsSection;
