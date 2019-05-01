import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';
import Header from './Header';
import Cat from './Cat';

import {
  Link,
  Route,
  Switch
  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cats">Cats</Link>
        <Link to="knowhere">This Goes Nowhere</Link>
      <Switch> 
        {/* Switch shows the first matching path or the last route listed */}
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/cats" component={Cats} />
       
        <Route component={PageNotFound} />
      </Switch>  
        <Route path="/cats/:cat" component={Cat} />
      </header>
    </div>
  );
}

export default App;
