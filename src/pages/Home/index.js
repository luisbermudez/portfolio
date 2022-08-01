import "./Home.css";
import React from "react";
import {
  Navbar,
  IntroSection,
  PictureSection,
  ProjectsSection,
  ExperienceSection,
  Footer,
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
      <div id="Home">
        <Navbar />
        <div className="introPicSectionContainer">
          <IntroSection />
          <PictureSection />
        </div>

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
        <Footer />
      </div>
    );
  }
}

export default Home;
