import "./PictureSection.css";
import React from "react";
import profilePic from "../../profilePic.jpg";

class PictureSection extends React.Component {
  render() {
    return (
      <div id="PictureSection">
        <article>
          <img src={profilePic} />
          <div></div>
        </article>
      </div>
    );
  }
}

export default PictureSection;
