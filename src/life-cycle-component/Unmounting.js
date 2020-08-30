import React, { Component } from "react";

export default class Unmounting extends Component {
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
   * @componentWillUnmount
   * chạy khi chúng ta rời khỏi component
   * chỉ chạy trên Unmounting.
   * dùng để dọn dẹp các phương thức con chạy ,
   * như call API , setInterval , hủy đăng ký các cổng kết nối
   */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
