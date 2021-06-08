import './App.css';
import { GetCars } from './cars/cars';
import { Contacts } from './contacts/contacts';
import { SignIn } from './login/login'
import { Home } from './home/home'
import {Link, Route,Switch} from "react-router-dom"
import { Counter } from './counter/counter';
import { SignUp } from './signup/signup';


function App() {
  return (
    // <div className="App">
    //   <SignIn></SignIn>
    //   <br />
    //   <hr></hr>
    //   <br />
    //   <Contacts></Contacts>
    //   <br />
    //   <hr></hr>
    //   <br />
    //   <GetCars></GetCars>
    // </div>

    <div className="App">
      <div>
        <span>Navigate to:</span>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/counters">Counters</Link> 
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link> 
        <Link to="/signup">SignUp</Link> 
      </div>
      <div>
      <hr/>
      <br/>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/cars">
          <GetCars></GetCars>
        </Route>
        <Route path="/counters">
          <Counter></Counter>
        </Route>
        <Route path="/contacts">
          <Contacts></Contacts>
        </Route>
        <Route path="/login">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
