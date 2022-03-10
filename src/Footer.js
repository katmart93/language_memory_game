import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="icons">
            <a href="https://github.com/katmart93">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
          </div>
          <div className="copyright">
            <small className="copyright-text">by katmart93</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
