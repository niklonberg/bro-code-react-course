function ButtonClickEvent() {
  const handleClick = () => {
    console.log("Ouch");
  };

  // return <button onClick={handleClick}>Click me for event</button>;

  const handleClick2 = (name: string) => {
    console.log(`Please stop clicking me ${name}`);
  };

  // if '() =>' is not used inside onClick{}, the function will be
  // invoked when rendered if we have an argument we need to pass
  // return (
  //   <button onClick={() => handleClick2("Nikolai")}>Click me for event</button>
  // );

  let count = 0;
  const handleClick3 = (name: string) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };

  // return (
  //   <button onClick={() => handleClick3("Nikolai")}>Click me for event</button>
  // );

  const handleClick4 = (e: React.MouseEvent) => {
    console.log(e);
    const btn = e.target as HTMLButtonElement;
    btn.textContent = "YOWCH!";
  };

  return (
    <button onDoubleClick={(e) => handleClick4(e)}>Click me for event</button>
  );
}

export default ButtonClickEvent;
