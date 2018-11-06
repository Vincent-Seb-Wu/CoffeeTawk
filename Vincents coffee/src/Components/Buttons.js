import React, { Component } from 'react';

class Buttons extends Component {
    state = {}



    render() {



        let disappear = this.props.theFunctions.isOn ? <button onClick={this.props.theFunctions.stop}>Stop</button> : <div><button onClick={this.props.theFunctions.start}>Start</button> <button onClick={this.props.theFunctions.reset}>Reset</button></div>

        return (
            <div>

                {/* <button onClick={this.props.theFunctions.start}>Start</button> */}
                {/* <button onClick={this.props.theFunctions.stop}>Stop</button>
                <button onClick={this.props.theFunctions.reset}>Reset</button>       */}
                {disappear}


            </div>


        );
    }
}

export default Buttons;