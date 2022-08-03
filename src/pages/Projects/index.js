import "./Projects.css";
import React from "react";
import { HeaderAndFooter, SecondaryButton } from "../../components";
import { projectsInfo } from "../../utils/content";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <HeaderAndFooter>
          <div className="cardsContainer">
            {projectsInfo.map((each, index) => (
              <div className="cardItem" key={index}>
                <section>
                  <img alt={each.projectTitle} src={each.projectImage} />
                </section>
                <section>
                  <h4 className="titleFour gradientTitleSecondary">
                    {each.projectType}
                  </h4>
                  <h3 className="titleThree">{each.projectTitle}</h3>
                  <SecondaryButton text="View Project" />
                </section>
              </div>
            ))}
          </div>
        </HeaderAndFooter>
      </div>
    );
  }
}

export default Projects;
