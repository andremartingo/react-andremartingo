import React from "react";

const renderLinks = props => {
  var links = props.links;

  return links.map(link => (
    <li className="menu-item" key={link} style={{ color: "red" }}>
      {link}
    </li>
  ));
};

const Menu = props => {
  return <ul className="menu">{renderLinks(props)}</ul>;
};

export default Menu;
