import React, { Component } from "react";

export default class Updating extends Component {
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
   * @shouldComponentUpdate
   * method shouldComponentUpdate chạy trước method render và sau method getDerivedStateFromProps
   * chỉ chạy trên updating.
   * dùng để quyết định có update lại state không , nếu retunr true là update lại và ngược lại.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
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
   * @getSnapshotBeforeUpdate
   * chạy ngay trước method componentDidUpdate
   * chỉ chạy trên updating.
   * thường không được dùng nhiều.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  /**
   * @componentDidUpdate
   * chạy ngay sau method render và getSnapshotBeforeUpdate
   * chỉ chạy trên updating.
   * dùng để update lại DOM || call API , .....
   */
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
