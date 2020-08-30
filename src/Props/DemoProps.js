import React, { Component } from "react";
import PropsForStateFull from "./PropsForStateFull";

export default class DemoProps extends Component {
  render() {
    const thongTin = {
      ten : "Nguyễn Phong Hào",
      lop : "FE42",
    }
    return (
      <div>
        <h2>Demo Props</h2>

        <PropsForStateFull inFo = { thongTin }/>
        
      </div>
    );
  }
}
