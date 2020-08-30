const initialState = {
  danhSachSinhVien: [],
};

const sinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SV": {
      let danhSachSinhVien = [...state.danhSachSinhVien];
      danhSachSinhVien.push(action.sv);
      return { ...state, danhSachSinhVien };
    }
    default: {
      return state;
    }
  }
};

export default sinhVienReducer;
