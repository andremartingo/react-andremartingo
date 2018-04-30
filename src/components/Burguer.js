import React from "react";

import "../style/navbar.css";

const Burger = props => {
  return (
    <div className="burger-container">
      <div id="burger" onClick={props.onBurgerClick}>
        <div className="bar topBar" />
        <div className="bar btmBar" />
      </div>
    </div>
  );
};

export default Burger;
