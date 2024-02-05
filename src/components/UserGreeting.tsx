interface UserGreetingProps {
  isLoggedIn: boolean;
  userName?: string; // The userName prop is optional if isLoggedIn is false
}

function UserGreeting(props: UserGreetingProps) {
  // if (props.isLoggedIn) {
  //   return <h2>Welcome {props.userName}</h2>;
  // } else {
  //   return <h2>Please log in to continue</h2>;
  // }

  // OR

  // return props.isLoggedIn ? (
  //   <h2 className="welcome-message">Welcome {props.userName}</h2>
  // ) : (
  //   <h2 className="login-prompt">Please log in to continue</h2>
  // );

  // OR
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
