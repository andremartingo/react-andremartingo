import React from "react";
import "../style/footer.css";

const Footer = props => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">Made by André Martingo</div>
        <div className="socialfooter">
          <a
            class="socialIcon"
            href="https://www.github.com/andremartingo"
            target="_blank"
          >
            <i class="fa fa-github" aria-hidden="true" />
          </a>
          <a
            class="socialIcon"
            href="https://www.linkedin.com/in/andremartingo"
            target="_blank"
          >
            <i class="fa fa-linkedin" />
          </a>
          <a class="socialIcon" href="https://www.twitter.com/andremartingo">
            <i class="fa fa-twitter" target="_blank" />
          </a>
          <a class="socialIcon" href="https://www.instagram.com/andremartingo">
            <i class="fa fa-instagram" target="_blank" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
