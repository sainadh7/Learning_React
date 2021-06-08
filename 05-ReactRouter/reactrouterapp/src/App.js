import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './home/home';
import { PageNotFound } from './pagenotfound/pnf';
import { Products } from './products/products';
import { Services } from './services/services';

function App() {
  return (
    <div>
      <div>
        <h3>Router Demo</h3>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
      </div>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </div>
    </div>

  );
}

export default App;
