import React, { Component } from "react";

export default class DemoForm extends Component {
  state = {
    hoTen: "",
    soDT: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // ngăn chặn các event mặt định từ trình duyệt
    // ở đây sẽ ngăn chặn việc load lại trang
    e.preventDefault();
    console.log(this.state);
    // khi có được state chúng ta có thể làm được rất nhiều thứ.
    // call api , gửi lên reducers , show cho người dùng xem  , ...
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Register</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="hoTen">Họ Và Tên</label>
            <input
              type="text"
              className="form-control"
              id="hoTen"
              placeholder="Họ Và Tên"
              onChange={this.handleChange}
              name="hoTen"
            />
          </div>
          <div className="form-group">
            <label htmlFor="soDT">Số Điện Thoại</label>
            <input
              type="text"
              className="form-control"
              id="soDT"
              placeholder="Số Điện Thoại"
              onChange={this.handleChange}
              name="soDT"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="email"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
