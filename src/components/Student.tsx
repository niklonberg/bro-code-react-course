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
