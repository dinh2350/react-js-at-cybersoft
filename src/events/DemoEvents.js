import React, { Component } from "react";

export class DemoEvents extends Component {
  handleClick = () => {
    alert("đã mua HusKy");
  };

  render() {
    const srcImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKAMqqFlmc5B6HCTe22Ba4SFnjY73xKzsLQ&usqp=CAU";
    const typeDog = "husky";
    return (
      <div>
        <div className="card text-left" style={{ width: "300px" }}>
          <img className="card-img-top" src={srcImage} alt="Husyky" />
          <div className="card-body">
            <h4 className="card-title">{typeDog}</h4>
          </div>
          <div className="card-foot">
            <button className="btn btn-success" onClick={this.handleClick}>
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default class DemoEventsParams extends Component {
  handleClickParams = (message) => {
    alert(message);
  };

  render() {
    return (
      <div>
        <div className="card text-left" style={{ width: "300px" }}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKAMqqFlmc5B6HCTe22Ba4SFnjY73xKzsLQ&usqp=CAU"
            alt="Husyky"
          />
          <div className="card-body">
            <h4 className="card-title">Husky</h4>
          </div>
          <div className="card-foot">
            <button
              className="btn btn-success"
              onClick={() => this.handleClickParams("đã mua HusKy")}
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}
