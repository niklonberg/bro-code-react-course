import { useState, createContext } from "react";
import UseContextB from "./UseContextB";

export const UserContext = createContext<string>("Default");

function UseContextA() {
  const [user, setUser] = useState("Mario");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      {/* if we wanted to pass the user to component D */}
      {/* we would have to do the following below: */}
      {/* <UseContextB user={user} /> */}
      {/* in  function b, c, and d we would have to add 
      a props argument, and pass it like above each time
      to eventually pass it to d. this is known as prop drilling
      and is inefficient repetition */}
      {/* in typescript, we would also need to define an interface for typeerror
      to not occur */}

      {/* instead, lets implement use/createContext */}
      <UserContext.Provider value={user}>
        <UseContextB />
      </UserContext.Provider>
    </div>
  );
}

export default UseContextA;
