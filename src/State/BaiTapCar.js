import React, { Component } from "react";

export default class BaiTapCar extends Component {
  state = {
    srcImage: "./img/car/products/black-car.jpg",
  };
  handleChoseColor = (color) => {
    console.log(color);
    switch (color) {
      case "black": {
        this.setState({
          srcImage: "./img/car/products/black-car.jpg",
        });
        break;
      }
      case "red": {
        this.setState({
          srcImage: "./img/car/products/red-car.jpg",
        });
        break;
      }
      case "silver": {
        this.setState({
          srcImage: "./img/car/products/silver-car.jpg",
        });
        break;
      }
      case "steel": {
        this.setState({
          srcImage: "./img/car/products/steel-car.jpg",
        });
        break;
      }
      default: {
        break;
      }
    }
  };
  render() {
    return (
      <div>
        <h2>Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChoseColor("black");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: "50px" }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChoseColor("red");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: "50px" }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChoseColor("silver");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: "50px" }}
              />
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.handleChoseColor("steel");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: "50px" }}
              />
            </a>
          </div>
          <div className="car">
            <img
              className="img-thumbnail"
              src={this.state.srcImage}
              alt="hinh"
            />
          </div>
        </div>
      </div>
    );
  }
}
