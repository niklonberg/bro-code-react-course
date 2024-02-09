import UseContextC from "./UseContextC";

// function UseContextB(props) {
//   return (
//     <div className="box">
//       <h1>Component B</h1>
//       <UseContextC user={props.user} /> // prop drilling not needed
//     </div>
//   );
// }

function UseContextB() {
  return (
    <div className="box">
      <h1>Component B</h1>
      <UseContextC />
    </div>
  );
}

export default UseContextB;
