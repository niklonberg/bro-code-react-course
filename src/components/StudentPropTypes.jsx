import PropTypes from "prop-types";

function StudentPropTypes(props) {
  return (
    <div className="student-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
// we can define the expected type of the keys of our props object
// like below - this is only when working with javascript
StudentPropTypes.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
// inside our App(), if we use the wrong value types for each props key
// we would get a warning in our console

// we can add default values too
StudentPropTypes.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

// would be used inside App like this
// <Student /> no values given to it.
// you could give one or more values to it though
// <Student name="larry" age={2}/>

export default StudentPropTypes;
