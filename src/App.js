import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 32 },
      { name: "Gautier", age: 28 },
      { name: "Gratiane", age: 27 }
    ],
    otherState: "some other value"
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked");
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 32 },
        { name: "Orm", age: 28 },
        { name: "Luv", age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello i'm Gautier !</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: Music
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello i'm Gautier !")
  // );
};

export default app;
