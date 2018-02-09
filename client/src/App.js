import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Users from './Users/users'



class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/users/register">Register</Link>
          <Link to='/users/login'>Login</Link>
        </nav>

        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
