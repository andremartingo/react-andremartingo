import React from "react";
import "../style/intro.css";

const Intro = props => {
  return (
    <div className="heroWrap">
      <div className="heroWords">
        I design and develop experiences that make people's lives
        <b> clean.</b>
      </div>
      <div className="buttons">
        <a href="https://github.com/andremartingo" class="button">
          See my work
        </a>
      </div>
    </div>
  );
};

export default Intro;
