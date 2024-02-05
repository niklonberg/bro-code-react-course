interface StudentProps {
  name: string;
  age: number;
  isStudent: boolean;
}

function Student(props: StudentProps) {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Student;

// if you want default values kind of like .defaultProps in StudentPropTypes.jsx
// do this:

/* 
function Student({
  name = "Guest",
  age = 0,
  isStudent = false,
}: StudentProps) {
  return (
    <div className="student-card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
*/
