import './App.css';
import { GetCars } from './cars/cars';
import { Contacts } from './contacts/contacts';
import { SignIn } from './login/login'


function App() {
  return (
    <div className="App">
      <SignIn></SignIn>
      <br />
      <hr></hr>
      <br />
      <Contacts></Contacts>
      <br />
      <hr></hr>
      <br />
      <GetCars></GetCars>
    </div>
  );
}

export default App;
