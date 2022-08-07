import "./ProjectDetails.css";
import React from "react";
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
      <div className="projectContainer">
        {project && (
          <>
            <h1>{project.name}</h1>
            <div className="projectSection">
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
                {[
                  {
                    link: project.projectRepoLink,
                    title: "Check out the Remote Repository",
                  },
                  {
                    link: project.projectSite,
                    title: "Visit Website",
                  },
                ].map((e, i) => (
                  <h3 key={i}>
                    <a href={e.link} rel="noreferrer" target="_blank">
                      <ArrowRightRoundedIcon />
                      {e.title}
                    </a>
                  </h3>
                ))}
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
