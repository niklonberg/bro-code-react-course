import { useState, useEffect, useRef } from "react";

// function UseRefExample() {
//   // let [number, setNumber] = useState(0);
//   /* EACH time number would be incremented,
//   it would rerender the component */

//   const ref = useRef(0);
//   console.log(ref);
//   // useRef returns an object, with a single property current
//   // we can set it to whatever we want
//   // the current property can also refer to an html element

//   useEffect(() => {
//     console.log("COMPONENT RENDERED");
//   });

//   function handleClick() {
//     // setNumber((n) => n + 1);
//     ref.current = ref.current + 1;
//     console.log(ref.current);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click me!</button>
//     </div>
//   );
// }

function UseRefExample() {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "Yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2?.current?.focus();
    inputRef2.current.style.backgroundColor = "Yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3?.current?.focus();
    inputRef3.current.style.backgroundColor = "Yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />
      {/* the ref attribute of an htmls element
      is a special attribute used to create references
      to elements*/}
      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />
      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRefExample;
