import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';
import Results from './Components/Results';

class App extends Component {

  orderTime = () => {
    alert('Ordering time has started');
  }


  render() {
    return (
      
      
      <div className="App">

      <h1 className = 'coffeeHeader'> CoffeeTawk ☕</h1>
      <h3 className = 'coffeeSub'>  </h3>
      
      <Timer />
      <Results />



      </div>
    );
  }
}

export default App;