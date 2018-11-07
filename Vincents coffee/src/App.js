import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';
import Results from './Components/Results';

class App extends Component {
  constructor() {
    super();
    this.state = { time: [] }
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({ time: this.state.time.concat(data) });
    alert('time span: ' + data);
  }

  glassesAlertYes() {
    alert("Let There Be Glasses!")
  }

  glassesAlertNo() {
    alert("Glasses Aren't That Cool Anyway...")
  }

  submit() {
    alert("Submitted!")
    window.location.reload();
  }


  render() {
    return (


      <div className="App">

        <h1 className='coffeeHeader'> CoffeeTawk ☕</h1>
        <h3 className='coffeeSub'>  </h3>

        <Timer handlerFromP={this.handleData} />
        <br></br>
        <Results records={this.state.time} />

        <br></br>
        <h4 className='coffeeGlasses'>Glasses?</h4>


        <form>
          <input checked id="q2y" name="membership" type="radio" value="1" onClick={this.glassesAlertYes}></input>
          <label for="q2y"> Yes </label>
          <input id="q2n" name="membership" type="radio" value="0" onClick={this.glassesAlertNo}></input>
          <label for="q2n"> No </label>
        </form>

        <br></br>
        <button onClick={this.submit}>Submit</button>



      </div>
    );
  }
}

export default App;