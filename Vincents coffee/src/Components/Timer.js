import React, { Component } from 'react';
import Buttons from './Buttons';


class Timer extends Component {
    constructor(props){
      super(props)
      this.state = {
        time: 0,
        isOn: false,
        start: 0
      }
  
      this.startTimer = this.startTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this)
    }
  
    startTimer() {
      this.setState({
        isOn: true,
        time: this.state.time,
        start: Date.now() - this.state.time
      })
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1);
    }
  
    stopTimer() {
      this.setState({isOn: false})
      clearInterval(this.timer)
    }
  
    resetTimer() {
      this.setState({time: 0, isOn: false})
    }

    pad(n, width) {
      n = n + ''; 
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    }
  
    render() {


      return(
        <div>

          <h1 className = 'timerDisplay'>{this.pad(Math.floor(this.state.time/60000), 2)}:{this.pad((Math.floor(this.state.time/1000) %60), 2)}:{this.pad((this.state.time%1000), 3)}</h1>
          
          <Buttons theFunctions={{
            start: this.startTimer,
            stop: this.stopTimer,
            reset: this.resetTimer,
            isOn: this.state.isOn,
          }}/>
        </div>
      )
    }
  }

  export default Timer