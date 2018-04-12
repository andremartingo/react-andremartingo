import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
      <div>
        <Navbar fixed="top" color="white" light expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} className="logo" alt="logo" />
            </NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} /> */}
            {/* <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://twitter.com/andremartingo">
                    <i className="fa fa-twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    <i className="fa fa-github" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse> */}
          </div>
        </Navbar>
      </div>
    );
  }
}
