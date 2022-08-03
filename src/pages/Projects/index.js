import "./Projects.css";
import React from "react";
import { HeaderAndFooter, SecondaryButton } from "../../components";
import { projectsInfo } from "../../utils/content";
import { Link } from "react-router-dom";
import $ from "jquery";

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <HeaderAndFooter>
          <div className="cardsContainer">
            <h1>Projects</h1>
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
                  <article>
                    {each.projectOverview.map((parag, i) => (
                      <ul key={i}>{parag}</ul>
                    ))}
                  </article>
                  <Link
                    to={`/project/${each.nameLink}`}
                    onClick={() => {
                      $("html, body").scrollTop(0);
                    }}
                  >
                    <SecondaryButton text="View Project" />
                  </Link>
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
