import React, { Component } from "react";

export default class DemoConditional extends Component {
  render() {
    const isHusky = false;
    return (
      <div>
        <div className="card text-left" style={{ width: "300px" }}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKAMqqFlmc5B6HCTe22Ba4SFnjY73xKzsLQ&usqp=CAU"
            alt="Husyky"
          />
          <div className="card-body">
            {isHusky ? (
              <h4 className="card-title">Husky</h4>
            ) : (
              <h3 className="card-title">Others</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
