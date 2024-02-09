import { useState, useEffect } from "react";

function UseEffectExampleTwo() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    console.log("event listener added");

    return () => {
      // we can return a function to remove eventlistener
      window.removeEventListener("resize", handleWindowResize);
      console.log("event listener removed");
    }; // when this component is removed
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleWindowResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  );
}

export default UseEffectExampleTwo;
