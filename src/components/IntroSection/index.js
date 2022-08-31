import "./IntroSection.css";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { Link } from "react-router-dom";
import $ from "jquery";

class IntroSection extends React.Component {
  render() {
    return (
      <div id="IntroSection">
        <h1 className="titleOne">Web Developer</h1>
        <p>
          I am a certified Full Stack MERN Web Developer with a college degree
          in Electronics Engineering. I believe in the power of technology to
          help transform and improve the lives of people around the world.
        </p>
        <div className="buttonSection">
          <Link
            tabIndex="-1"
            to="/contact"
            onClick={() => {
              $("html, body").scrollTop(0);
            }}
          >
            <PrimaryButton text="Get in Touch" />
          </Link>
          <Link
            tabIndex="-1"
            to="/files/LBermudez_Resume2022.pdf"
            target="_blank"
            download
          >
            <SecondaryButton text="Download Resume" />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroSection;
