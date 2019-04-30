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
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cats">Cats</Link>
        
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/cats" component={Cats} />
           
      </header>
    </div>
  );
}

export default App;
