import React, { Component } from "react";

export default class Mounting extends Component {
  /**
   *  @constructor
   *  phương thức chạy đầu tiên khi component được gọi.
   *  và chỉ chạy một lần duy nhất
   *  là nơi khởi tạo state và các event cần binding
   */
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      i: 0,
    };
  }
  /**
   * @getDerivedStateFromProps
   * method getDerivedStateFromProps chạy trước khi method render.
   * cả mounting và updating đều chạy lại method này.
   * dùng để cập nhật lại state từ props.
   */
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    return {
      lop: "FE44",
    };
  }
  /**
   * @render
   * chạy khi props || state thay đổi
   * cả mounting và updating đều chạy lại method này.
   * dùng để kết xuất DOM
   */
  render() {
    console.log("render");
    return (
      <div>
        <h2>DemoLifeCycle</h2>
        <p>{this.state.i}</p>
        <button
          onClick={() =>
            this.setState({
              i: this.state.i + 1,
            })
          }
        >
          tăng
        </button>
      </div>
    );
  }
  /**
   * @componentDidMount
   * chạy ngay sau method render
   * chỉ chạy trên Mounting.
   * dùng để update lại DOM || call API , .....
   */
  componentDidMount() {
    console.log("componentDidMount");
  }
}
