function List() {
  const fruits = [
    { id: 0, name: "apple", calories: 100 },
    { id: 1, name: "orange", calories: 150 },
    { id: 2, name: "banana", calories: 50 },
    { id: 3, name: "pear", calories: 37 },
    { id: 4, name: "coconut", calories: 67 },
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); // Kcal asce.
  // fruits.sort((a, b) => b.calories - a.calories); // Kcal desc.

  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  // we could then map over the filtered fruist instead of just fruits.

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default List;
