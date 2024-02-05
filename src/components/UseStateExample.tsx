//in order to use a react hook, we need to import it
import React, { useState } from "react";

//using the useState function will create a stateful variable
//and a setter function to update it

function UseStateExample() {
  // use array destructuring to get two variable
  // here name and setName function.
  // when we call useState, we can pass in a starting value for name, here 'Guest'
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Mario"); //pass in new value. DOM updates automatically
    console.log(name);
  };

  const incrementAge = () => {
    setAge(age + 1);
    console.log(age);
  };

  const toggleIsEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>

      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleIsEmployedStatus}>Toggle employment</button>
    </div>
  );
  // it is a little funky that we can change the values of
  // the stateful variables above, like name, age even though
  // we initialize them with const
}

export default UseStateExample;
