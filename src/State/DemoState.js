import React, { Component } from "react";

export default class DemoState extends Component {
  number = 0;
  handleClick = () => {
    this.number += 1;
  };
  render() {
    return (
      <div>
        <h2>Demo State</h2>
        <p>{this.number}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
