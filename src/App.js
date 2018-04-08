import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
