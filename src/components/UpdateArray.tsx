import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = (document.getElementById("foodInput") as HTMLInputElement)
      .value;
    (document.getElementById("foodInput") as HTMLInputElement).value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index: number) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="enter food name" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default UpdateArray;
