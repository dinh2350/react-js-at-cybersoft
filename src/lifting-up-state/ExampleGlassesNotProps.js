import React, { Component } from "react";
import "./index.css";
export default class ExampleGlasses extends Component {
  state = {
    glassesList: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/glasses/v1.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./img/glasses/v2.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 3,
        price: 40,
        name: "DIOR D6700HQ",
        url: "./img/glasses/v3.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 4,
        price: 60,
        name: "DIOR D6005U",
        url: "./img/glasses/v4.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 5,
        price: 70,
        name: "PRADA P8750",
        url: "./img/glasses/v5.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 6,
        price: 90,
        name: "PRADA P9700",
        url: "./img/glasses/v6.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 7,
        price: 10,
        name: "FENDI F8750",
        url: "./img/glasses/v7.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 8,
        price: 35,
        name: "FENDI F8500",
        url: "./img/glasses/v8.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },

      {
        id: 9,
        price: 45,
        name: "FENDI F4300",
        url: "./img/glasses/v9.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    glassesSelected: null,
  };

  handleChoseGlass = (id) => {
    const glass = this.state.glassesList.find(
      (glassItem) => id === glassItem.id
    );
    console.log(glass);
    glass &&
      this.setState({
        glassesSelected: glass,
      });
  };

  renderGlasses = (list) =>
    list.map((glass, index) => (
      <button
        className="btn"
        key={index}
        onClick={() => this.handleChoseGlass(glass.id)}
      >
        <img src={glass.url} alt="kinh" />
      </button>
    ));

  render() {
    return (
      <section className="glasses">
        <div className="glasses__wrapper container my-4">
          <div className="row">
            <div className="col-6">
              <h2>Virtual Glasses</h2>
              <div className="d-flex flex-wrap">
                {this.renderGlasses(this.state.glassesList)}
              </div>
            </div>
            <div className="col-6">
              <div className="card position-relative" style={{ width: 400 }}>
                <img
                  className="card-img-top img-fluid"
                  src="./img/glasses/model.jpg"
                  alt="Card"
                />
                {this.state.glassesSelected ? (
                  <div className="model__content">
                    <img
                      src={this.state.glassesSelected.url}
                      className="glasses__glass"
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {this.state.glassesSelected.name || "PRADA P9700"}
                      </h4>
                      <button type="button" className="btn btn-danger btn-lg">
                        ${this.state.glassesSelected.price || 30}
                      </button>
                      <p className="card-text">
                        {this.state.glassesSelected.desc ||
                          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
