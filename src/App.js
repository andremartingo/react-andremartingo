import React, { Component } from "react";
import "./App.css";
import Navbar from "./container/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Intro />
        </div>
        <div className="spaceindex" />
        <Footer />
      </div>
    );
  }
}

export default App;
