import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label htmlFor="color-picker">Select a color: </label>
      <input
        type="color"
        id="color-picker"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ColorPicker;
