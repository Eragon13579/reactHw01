import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Righty from "./components/Righty/righty";
import Lefty from "./components/Lefty/lefty";

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
        <div class="row">
          <Lefty />
          <Righty />
        </div>
      </div>
    );
  }
}

export default App;
