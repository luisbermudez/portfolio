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
        <h1 className="titleOne">Web Development</h1>
        <p>
          Hi there! I am a MERN, and ASP.NET web developer. Currently
          part of the web dev team at{" "}
          <a href="https://www.weber.edu/" className="underlinedLink">
            Weber State University.
          </a>
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
