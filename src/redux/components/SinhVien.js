import React, { Component } from "react";

import { connect } from "react-redux";

class SinhVien extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProp = (state) => {
  return {
    //   props của component : state của redux
    danhSandSV: state.sinhVienReducer.danhSachSinhVien,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   props của component : phương thức gửi dử liệu lên reducer

    themSV: (sv) => {
      const action = {
        type: "THEM_SV",
        sv,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(SinhVien);
