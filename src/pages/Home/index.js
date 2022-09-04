import "./Home.css";
import React from "react";
import {
  IntroSection,
  ProjectsSection,
  ExperienceSection,
} from "../../components";
import { educationInfo, workExpInfo } from "../../utils/content";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.experienceInfo = [
      {
        icon: <SchoolRoundedIcon />,
        experienceTitle: "Education",
        information: educationInfo,
      },
      {
        icon: <WorkRoundedIcon />,
        experienceTitle: "Work Experience",
        information: workExpInfo,
      },
    ];
  }

  render() {
    return (
      <div
        id="Home"
        className="introPicSectionContainer generalContainer intialTopMargin"
      >
        <div className="maxGrowth">
          <div className="secondaryMaxGrowth">
            <IntroSection />
            <ProjectsSection />
            <div className="experienceSectionContainer">
              {this.experienceInfo.map((each, index) => (
                <React.Fragment key={index}>
                  <ExperienceSection
                    icon={each.icon}
                    experienceTitle={each.experienceTitle}
                    information={each.information}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
