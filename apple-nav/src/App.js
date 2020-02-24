import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';

const App = ()=>{
  return(
    <div>
      <Navigation />
    </div>
  )
}

export default App;
