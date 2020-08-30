import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  renderTitle = () => {
    const typeDog = "husky";
    return <h4 className="card-title">{typeDog}</h4>;
  };
  render() {
    const srcImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKAMqqFlmc5B6HCTe22Ba4SFnjY73xKzsLQ&usqp=CAU";
    return (
      <div>
        <div className="card text-left" style={{ width: "300px" }}>
          <img className="card-img-top" src={srcImage} alt="Husyky" />
          <div className="card-body">{this.renderTitle()}</div>
        </div>
      </div>
    );
  }
}
