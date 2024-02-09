import { useState } from "react";

interface Car {
  make: string;
  model: string;
  year: number;
}

function Cars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { make: carMake, model: carModel, year: carYear };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index: number) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleCarYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarYear(parseInt(event.target.value));
  }

  function handleCarMakeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarMake(event.target.value);
  }

  function handleCarModelChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of car objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.make} {car.model}, {car.year}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleCarYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleCarMakeChange}
        placeholder="enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleCarModelChange}
        placeholder="enter car model"
      />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}

export default Cars;
