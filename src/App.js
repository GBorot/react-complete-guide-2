import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello i'm Gautier !</h1>
        <Person name="Gautier" age="28" />
        <Person name="Max" age="32" />
        <Person name="Gratiane" age="27" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello i'm Gautier !")
    // );
  }
}

export default App;
