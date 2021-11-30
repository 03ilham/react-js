import React, { Component } from "react";

export default class Counter02 extends Component {
  state = {
    Counter: 0,
  };

  increment = () => {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      Counter: this.state.Counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Counter :{this.state.Counter}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
