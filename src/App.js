import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import {
  Link,
  Route
  } from 'react-router-dom';

  //What is bind?
  // - a way to make sure that a method knows who this is
  // why do I need bind?
  //why do I bind?
  
  
  //Functions are 'callable' objects
  //One of their methods is .bind
  //.bind returns a new copy of the function, 
  // with the value of 'this' locked in.

  // componentDidMount() {
    //Earlier alternative syntax did not give you a copy of the function,
    //It ran the function
    // this._incrementCount.apply(this); - these are two older methods that would 
    // this._incrementCount.call(this); - have the functions fireing right on load

  // }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      arrowCounter: 0
    }
    //in this spot where you def have access to the instance
    //.bind will lock-in the value of this
    this._incrementCount = this._incrementCount.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>{this.state.counter}</h2>
        <button onClick={this._incrementCount}>increment</button>
        <h2>{this.state.arrowCounter}</h2>
        <button onClick={this._incrementCountUsingArrow}>increment with Arrow</button>
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
  //normal method to use normal functions you have to use the bind method
  _incrementCount() {
    console.log('App: _incrementCount');
    console.log(this);
    // debugger;
    this.setState({
      counter: this.state.counter + 1
    })
    
  }
  //Arrow functions automatically bind this.
  _incrementCountUsingArrow = () => {
    console.log("Arrow Fuction")
    this.setState({
      arrowCounter: this.state.counter + 1
    })
  }
}


export default App;
