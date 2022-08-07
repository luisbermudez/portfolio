import "./ProjectsSection.css";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import ProjectCarousel from "../ProjectCarousel";
import { Link } from "react-router-dom";
import $ from "jquery";

class ProjectsSection extends React.Component {
  render() {
    return (
      <div id="ProjectsSection">
        <div className="titleContainer">
          <h2 className="gradientTitleTwo gradientTitleSecondary">PROJECTS</h2>
          <Link
            tabIndex="-1"
            to="/projects"
            onClick={() => {
              $("html, body").scrollTop(0);
            }}
          >
            <PrimaryButton text="View all projects" />
          </Link>
        </div>

        <ProjectCarousel />
      </div>
    );
  }
}

export default ProjectsSection;
