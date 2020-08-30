import React, { Component } from "react";

export default class PropsForStateFull extends Component {
  render() {
    return (
      <div>
        <h3>PropsForStateLess</h3>

        <p>tên : {this.props.inFo.ten} </p>

        <p>lớp : {this.props.inFo.lop} </p>
      </div>
    );
  }
}
