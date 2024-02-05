import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Food from "./components/Food.js";
import Card from "./components/Card.js";
import Button from "./components/Button/Button.js";
import Student from "./components/Student.js";
import UserGreeting from "./components/UserGreeting.js";
import List from "./components/List.js";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="niklonberg" />
      <List />
      <Button />
      <Header />
      <Food />
      <Card />
      <Student name="Spongebob" age={20} isStudent={true} />
      <Student name="Patrick" age={30} isStudent={false} />
      <Footer />
    </>
  );
}

export default App;
