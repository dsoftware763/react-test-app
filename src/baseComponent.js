import React, { Component } from 'react';
import HOC from './hoc';
import './App.css';

class BaseComponent extends Component {

    render() {
        console.log(this.props)
    const {data: {width, height}, handleChange} = this.props;
        return (
            <div className="outerDiv" style={{height: `${height}px`}}>
                <span>Width: {width}</span>
                <input value={height} onChange={handleChange} type="number"/>
            </div>
        )
    }
}

export default HOC(BaseComponent);
