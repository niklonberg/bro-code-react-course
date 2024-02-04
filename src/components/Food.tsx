import React from "react";

function Food() {
  const food1 = "Apple";
  const food2 = "Banana";

  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>Pear</li>
    </ul>
  );
}

export default Food;
