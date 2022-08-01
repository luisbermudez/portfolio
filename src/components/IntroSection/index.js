import "./IntroSection.css";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { Link } from "react-router-dom";

class IntroSection extends React.Component {
  render() {
    return (
      <div id="IntroSection">
        <h1 className="gradientTitleMain titleOne">Web Developer</h1>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </p>
        <div className="buttonSection">
          <PrimaryButton text="Get in Touch" />
          <Link tabIndex="-1" to="/files/LBermudez_Resume2022.pdf" target="_blank" download>
            <SecondaryButton text="Download Resume" />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroSection;
