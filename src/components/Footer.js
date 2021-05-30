import React from "react";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import Tooltip from "@material-ui/core/Tooltip";

import "./Footer.css";
const Footer = () => {
  return (
    <>
      <h2 className="footer-text">❰ ▶ Contact Me ◀ ❱</h2>
      <div className="footer-wrapper">
        <Tooltip title="Twitter" arrow placement="right">
          <a href="https://twitter.com/vengithiyagu">
            <img src={twitter} alt="twitter-logo" className="social-img"></img>
          </a>
        </Tooltip>
        <Tooltip title="GitHub" arrow placement="right">
          <a href="https://github.com/vengi57">
            <img src={github} alt="github-logo" className="social-img"></img>
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow placement="right">
          <a href="https://www.linkedin.com/in/vengi-thiyagarajan-296693146/">
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="social-img"
            ></img>
          </a>
        </Tooltip>
        <Tooltip title="Instagram" arrow placement="right">
          <a href="https://www.instagram.com/vengi_thiyagarajan/">
            <img
              src={instagram}
              alt="instagram-logo"
              className="social-img"
            ></img>
          </a>
        </Tooltip>
      </div>
    </>
  );
};
export default Footer;
