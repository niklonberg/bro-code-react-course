import UseContextD from "./UseContextD";
import { useContext } from "react";
import { UserContext } from "./UseContextA";

function UseContextC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello again ${user}`}</h2>
      <UseContextD />
    </div>
  );
}

export default UseContextC;
