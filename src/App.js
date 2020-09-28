import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './component/login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
    <div className="container">
      <ul>
        <li>
          <Link to={'/'}>Login </Link>
        </li>
        <li>
          <Link to={'/home'}>Home </Link>
        </li>
        <li>
          <Link to={'/about'}>About us </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Dashboard} />
        <Route exact path='/about' component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
