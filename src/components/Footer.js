import React from "react";

import { FooterWrapper } from "./styles/FooterStyles";

import tangoFB from "../images/tango-facebook-icon.svg";
import tangoIG from "../images/tango-instagram-icon.svg";
import tangoLI from "../images/tango-linkedin-icon.svg";

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Contact Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>John Smith</h3>
          <p className="tango-contact">
            <a href="mailto:johnsmith@gmail.com">johnsmith@gmail.com</a>
          </p>
          <p className="tango-contact">+1 (416) 706 531 992</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>Jane Doe</h3>
          <p className="tango-contact">
            <a href="mailto:mirelle@tangobrandalliance.se">janedoe@gmail.com</a>
          </p>
          <p className="tango-contact">+1 (416) 708 328 845</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/"
            >
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>

        <div className="col-md-4">
          <h3>TANGO BRAND </h3>
          <p className="tango-contact">123 Crimson Street</p>
          <p className="tango-contact">Toronto, ON</p>
          <span className="social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
            >
              <img className="facebook" src={tangoFB} alt="tango-fb" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <img className="instagram" src={tangoIG} alt="tango-ig" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
