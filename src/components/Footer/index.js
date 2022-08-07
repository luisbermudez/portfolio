import "./Footer.css";
import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import $ from "jquery";

function Footer() {
  const { pathname } = useLocation();
  const links = [
    {
      title: "About",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleTopScroll = (linkPath) => {
    const container = $("html, body");
    if (pathname === linkPath) {
      container.animate({ scrollTop: 0 }, "slow");
      return false;
    } else {
      container.scrollTop(0);
    }
  };

  return (
    <div className="Footer">
      <div className="footerContainer">
        <h1>Ready to collaborate?</h1>
        <h2 className="gradientTitleSecondary gradientTitleTwo">Let's talk.</h2>
        <div className="contactAndLinks">
          <article id="contactInfo">
            <h1 className="nameTitle">Luis Bermudez</h1>
            <h6>Minneapolis, MN</h6>
            <h5 className="emailAndPhoneComp">
              <EmailRoundedIcon />
              lapbermudez@gmail.com
            </h5>
          </article>
          <article id="linksSection">
            {links.map((each, index) => (
              <Typography
                key={index}
                onClick={() => handleTopScroll(each.path)}
              >
                <Link tabIndex="-1" to={each.path}>
                  {each.title}
                </Link>
              </Typography>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Footer;
