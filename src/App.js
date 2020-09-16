import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route}  from 'react-router-dom';
import NavBar from './components/navigation/navBar';
import Signup from './components/authentication/signup';
import Login from './components/authentication/login';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
      <Route path="/login" component={Login} /><Route />
      <Route path="/signup" component={Signup} /><Route />




    </div>
    </Router>
  );
}

export default App;
