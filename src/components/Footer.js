import React from "react";
import "../style/footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <div className="container">
        <div className="copyright">
          Made by <b>A</b>ndré <b>M</b>artingo
        </div>
        <div className="socialfooter">
          <a className="socialIcon" href="https://www.github.com/andremartingo">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
          <a
            className="socialIcon"
            href="https://www.linkedin.com/in/andremartingo"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            className="socialIcon"
            href="https://www.twitter.com/andremartingo"
          >
            <i className="fa fa-twitter" target="_blank" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
