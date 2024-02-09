import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Food from "./components/Food.js";
import Card from "./components/Card.js";
import Button from "./components/Button/Button.js";
import Student from "./components/Student.js";
import UserGreeting from "./components/UserGreeting.js";
import List from "./components/List.js";
import ListReusable from "./components/ListReusable.js";
import ButtonClickEvent from "./components/ButtonClickEvent.js";
import ProfilePicture from "./components/ProfilePicture.js";
import UseStateExample from "./components/UseStateExample.js";
import Counter from "./components/Counter.js";
import OnChangeExample from "./components/OnChangeExample.js";
import ColorPicker from "./components/ColorPicker.js";
import CounterUpdateFnsExample from "./components/UpdateFunction.js";
import UpdateObject from "./components/UpdateObjects.js";
import UpdateArray from "./components/UpdateArray.js";
import Cars from "./components/Cars.js";
import ToDoList from "./components/ToDoList.js";
import UseEffectExampleOne from "./components/UseEffectExampleOne.js";
import UseEffectExampleTwo from "./components/UseEffectExampleTwo.js";

function App() {
  const fruits = [
    { id: 0, name: "apple", calories: 100 },
    { id: 1, name: "orange", calories: 150 },
    { id: 2, name: "banana", calories: 50 },
    { id: 3, name: "pear", calories: 37 },
    { id: 4, name: "coconut", calories: 67 },
  ];

  const veggies = [
    { id: 6, name: "potatoes", calories: 101 },
    { id: 7, name: "celery", calories: 25 },
    { id: 8, name: "corn", calories: 250 },
    { id: 9, name: "cabbage", calories: 17 },
    { id: 10, name: "avocado", calories: 57 },
  ];

  return (
    <>
      <UseEffectExampleTwo />
      <UseEffectExampleOne />
      <ToDoList />
      <Cars />
      <UpdateArray />
      <UpdateObject />
      <CounterUpdateFnsExample />
      <ColorPicker />
      <OnChangeExample />
      <Counter />
      <UseStateExample />
      <ProfilePicture />
      <ButtonClickEvent />
      <UserGreeting isLoggedIn={true} userName="niklonberg" />
      <List />
      {fruits.length > 0 ? (
        <ListReusable items={fruits} category="Fruits" />
      ) : null}
      {/* or */}
      {veggies.length > 0 && (
        <ListReusable items={veggies} category="Vegetables" />
      )}
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
