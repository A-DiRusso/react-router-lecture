import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import {
  Link,
  Route
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/cats" component={Cats} />
           
      </header>
    </div>
  );
}

export default App;
