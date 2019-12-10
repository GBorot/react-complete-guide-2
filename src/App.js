import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 32 },
      { name: "Gautier", age: 28 },
      { name: "Gratiane", age: 27 }
    ]
  };

  switchNameHandler = () => {
    // console.log("Was clicked");
    this.setState({
      persons: [
        { name: "Maximilian", age: 32 },
        { name: "Orm", age: 28 },
        { name: "Luv", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello i'm Gautier !</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: Music
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
