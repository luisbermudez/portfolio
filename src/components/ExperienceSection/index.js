import "./ExperienceSection.css";
import React from "react";

function ExperienceComponent(props) {
  return (
    <div className="ExperienceComponent">
      <h3 className="titleThree">{props.title}</h3>
      <h4>{props.description}</h4>
      <h5>{props.date}</h5>
      <hr />
    </div>
  );
}

class ExperienceSection extends React.Component {
  render() {
    return (
      <div className="ExperienceSection">
        <h2 className="titleTwo">
          {this.props.icon}
          {this.props.experienceTitle}
        </h2>
        {this.props.information.map((each, index) => (
          <React.Fragment key={index}>
            <ExperienceComponent
              title={each.title}
              description={each.description}
              date={each.date}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ExperienceSection;
