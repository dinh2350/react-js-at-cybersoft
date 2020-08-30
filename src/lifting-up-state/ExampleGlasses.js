import React, { Component } from "react";
import "./index.css";
import Glasses from "./Glasses";
import Model from "./Model";
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

  render() {
    return (
      <section className="glasses">
        <div className="glasses__wrapper container my-4">
          <div className="row">
            <div className="col-6">
              <Glasses
                glassesList={this.state.glassesList}
                handleChoseGlass={this.handleChoseGlass}
              />
            </div>
            <div className="col-6">
              <Model glassesSelected={this.state.glassesSelected} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
