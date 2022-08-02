import "./ProjectsSection.css";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import ProjectCarousel from "../ProjectCarousel";
import { Link } from "react-router-dom";

class ProjectsSection extends React.Component {
  render() {
    return (
      <div id="ProjectsSection">
        <h2 className="gradientTitleTwo gradientTitleSecondary">PROJECTS</h2>
        <Link tabIndex="-1" to="/projects">
          <PrimaryButton text="View all projects" />
        </Link>
        <ProjectCarousel />
      </div>
    );
  }
}

export default ProjectsSection;
