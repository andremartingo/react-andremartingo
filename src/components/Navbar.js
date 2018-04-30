import React from "react";
import "../style/navbar.css";

import logo from "../mylogo.svg";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>
            <a href="/">
              <img src={logo} className="logo" alt="logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
