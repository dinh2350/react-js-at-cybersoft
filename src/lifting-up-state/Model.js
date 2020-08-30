import React, { Component } from "react";

export default class Model extends Component {
  render() {
    return (
      <div>
        <div className="card position-relative" style={{ width: 400 }}>
          <img
            className="card-img-top img-fluid"
            src="./img/glasses/model.jpg"
            alt="Card"
          />
          {this.props.glassesSelected ? (
            <div className="model__content">
              <img
                src={this.props.glassesSelected.url}
                className="glasses__glass"
              />
              <div className="card-body">
                <h4 className="card-title">
                  {this.props.glassesSelected.name || "PRADA P9700"}
                </h4>
                <button type="button" className="btn btn-danger btn-lg">
                  ${this.props.glassesSelected.price || 30}
                </button>
                <p className="card-text">
                  {this.props.glassesSelected.desc ||
                    "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
