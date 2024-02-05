function ButtonInlineStyles() {
  //inline styling way
  //here you often define an object, that contains the styles you want
  //here you need to use camel-case, since '-' are not allowed
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click Me Too</button>;
}

export default ButtonInlineStyles;
