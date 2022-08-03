import "./ProjectDetails.css";
import React from "react";
import { HeaderAndFooter } from "../../components";
import { projectsInfo } from "../../utils/content";
import { useParams } from "react-router-dom";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

function ProjectDetails() {
  const { _projectId } = useParams();
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    setProject(projectsInfo.find((e) => e.nameLink === _projectId));
  }, [_projectId]);

  return (
    <div className="ProjectDetails">
      <HeaderAndFooter>
        <div className="projectContainer">
          {project && (
            <>
              <h1>{project.name}</h1>
              <section>
                <img alt={project.projectTitle} src={project.projectImage} />
              </section>
              <section>
                <h4 className="titleFour gradientTitleSecondary">
                  {project.projectType}
                </h4>
                <h3 className="titleThree">{project.projectTitle}</h3>
                <p>{project.projectDescription}</p>
                <p>Some of the technologies and concepts applied:</p>
                <article>
                  {project.projectOverview.map((parag, i) => (
                    <ul key={i}>{parag}</ul>
                  ))}
                </article>
                <a
                  href={project.projectRepoLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <h3>
                    <ArrowRightRoundedIcon />
                    Check out the remote repository
                  </h3>
                </a>
                <a href={project.projectSite} rel="noreferrer" target="_blank">
                  <h3>
                    <ArrowRightRoundedIcon />
                    Visit site
                  </h3>
                </a>
              </section>
            </>
          )}
        </div>
      </HeaderAndFooter>
    </div>
  );
}

export default ProjectDetails;
