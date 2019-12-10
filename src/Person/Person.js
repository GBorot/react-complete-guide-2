import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm a {props.name} and I'm {props.age}!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

// class Person extends React.Component {

// }

export default person;
