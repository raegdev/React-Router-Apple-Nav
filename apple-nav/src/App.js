import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import { Home, iPad, iPhone, Mac, Music, Navigation, Support, TV, Watch } from './components/';

const App = ()=>{
  return(
    <div>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/mac' component={Mac} />
      <Route path='/ipad' component={iPad} />
      <Route path='/iphone' component={iPhone} />
      <Route path='/watch' component={Watch} />
      <Route path='/tv' component={TV} />
      <Route path='/music' component={Music} />
      <Route path='/support' component={Support} />
    </div>
  )
}

export default App;
