import React, { Component } from "react";

export default class Counter01 extends Component {
  constructor() {
    super();
    this.state = { Counter: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ Counter: this.state.Counter + 1 });
  }

  decrement() {
    this.setState({ Counter: this.state.Counter - 1 });
  }

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
