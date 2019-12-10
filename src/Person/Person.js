import React from "react";

const person = props => {
  return (
    <p>
      I'm a {props.name} and I'm {props.age}!
    </p>
  );
};

// class Person extends React.Component {

// }

export default person;
