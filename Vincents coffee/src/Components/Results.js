import React, { Component } from 'react';

class Results extends Component {
    state = {}
    render() {
        return (

            <div>{this.props.records.map(function (value) {
                return <li className="dataForm">{value}</li>
            })}</div>


        );
    }
}

export default Results;