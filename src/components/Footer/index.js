import "./Footer.css";
import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import $ from "jquery";

function Footer() {
  const links = [
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="Footer">
      <h1>Ready to collaborate?</h1>
      <h2 className="gradientTitleSecondary gradientTitleTwo">Let's talk.</h2>
      <article id="contactInfo">
        <h1 className="nameTitle">Luis Bermudez</h1>
        <h6>Minneapolis, MN</h6>
        <h5 className="emailAndPhoneComp">
          <EmailRoundedIcon />
          lapbermudez@gmail.com
        </h5>
      </article>
      <article id="linksSection">
        <Typography>
          <Link
            tabIndex="-1"
            to="/"
            onClick={() => {
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
            }}
          >
            About
          </Link>
        </Typography>
        {links.map((each, index) => (
          <Typography key={index}>
            <Link tabIndex="-1" to={each.path}>
              {each.title}
            </Link>
          </Typography>
        ))}
      </article>
    </div>
  );
}

export default Footer;
