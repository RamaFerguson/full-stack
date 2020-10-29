import React from "react";
import { Route, Switch } from "react-router-dom";
import './index.css'

import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar';
import API from './components/API';

import ThemeSwitcher from './components/ThemeSwitcher';

function App(props) {
  return (
    <div className='todoapp stack-large'>
      <Navbar />
      <ThemeSwitcher />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/API' component={API} exact />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App