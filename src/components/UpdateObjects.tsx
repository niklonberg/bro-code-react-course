import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    year: 2022,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, year: parseInt(e.target.value) }));
  }

  function handleMakeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }

  function handleModelChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}

export default UpdateObject;
