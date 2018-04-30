import React from "react";
import "../style/navbar.css";

import logo from "../mylogo.svg";

import "../style/navbar.css";

//components
import Burger from "../components/Burguer";
import Menu from "../components/Menu";

const links = ["something", "lel", "more of something else", "puorto"];

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
    this.handleOnBurgerClick = this.handleOnBurgerClick.bind(this);
  }
  handleOnBurgerClick(e) {
    e.preventDefault();

    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  }

  render() {
    if (this.state.collapsed) {
      return (
        <div className="header">
          <Burger onBurgerClick={this.handleOnBurgerClick} />
          <div className="icon icon-apple" />
          <Menu links={links} />
        </div>
      );
    } else {
      return (
        <div className="header menu-opened">
          <Burger onBurgerClick={this.handleOnBurgerClick} />
          <div className="icon icon-apple" />
          <Menu links={links} />
          <div className="shop icon icon-bag" />
        </div>
      );
    }
  }
}
