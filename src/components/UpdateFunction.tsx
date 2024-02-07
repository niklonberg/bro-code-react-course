import { useState } from "react";

function CounterUpdateFnsExample() {
  const [count, setCount] = useState(0);

  function increment() {
    //Uses the CURRENT state to calculate the NEXT state
    //set functions do not trigger an update
    //react batches together state updates for performance reasons
    //NEXT state becomes the CURRENT state after an update

    //ergo below doesnt work
    setCount(count + 1);
    //normally count value update would update here
    setCount(count + 1);
    //and here again
    setCount(count + 1);

    // what actually happens is this:
    setCount(0 + 1);
    // count didnt update yet, so it is still 0
    setCount(0 + 1);
    // once again it happens
    setCount(0 + 1);
  }

  function incrementUpdaterFn() {
    // takes the PENDING state to calculate the NEXT state.
    // react puts your update function in a queue (waiting in line)
    // during the next render, it will call them in the same order

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);

    // OR, by first letter of state variable (react naming convention), less verbose
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  }

  function reset() {
    //updater function not necessary here, as we dont care about the prev state
    setCount(0);
  }

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-btn" onClick={incrementUpdaterFn}>
        Increment
      </button>
      <button className="counter-btn" onClick={reset}>
        Reset
      </button>
      <button className="counter-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default CounterUpdateFnsExample;
