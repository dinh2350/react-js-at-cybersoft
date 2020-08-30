import React, { Component } from "react";

export default class Glasses extends Component {
  renderGlasses = (list) =>
    list.map((glass, index) => (
      <button
        className="btn"
        key={index}
        onClick={() => this.props.handleChoseGlass(glass.id)}
      >
        <img src={glass.url} alt="kinh" />
      </button>
    ));
  render() {
    return (
      <div>
        <h2>Virtual Glasses</h2>
        <div className="d-flex flex-wrap">
          {this.renderGlasses(this.props.glassesList)}
        </div>
      </div>
    );
  }
}
