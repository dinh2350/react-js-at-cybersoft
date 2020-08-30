import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  listSubject = ["JavaScript", "ES6", "ReactJS", "Angular 9+"];
  renderListKey = () => {
    return this.listSubject.map(function (item, index) {
      return <li key={index}>{item}</li>;
    });
  };

  render() {
    return (
      <div>
        <h2>Danh Sách Môn Học</h2>
        <ul style={{ listStyle: "none" }}>{this.renderListKey()}</ul>
      </div>
    );
  }
}
