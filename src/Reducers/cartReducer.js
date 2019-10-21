/*
Mục đích: Xử lí Action thêm sản phẩm vào giỏ hàng
Đầu vào: State mặc định có data ở LocalStorage nếu không có data thì là 1 mảng rỗng.
Đâu ra: State mới đã có các khóa học được thêm vào giỏ hàng 
Người tạo: Nguyễn Duy Hậu
*/
import * as Types from "../Constants/ActionTypes";
/** Lấy data ở localStorage về */
var data = JSON.parse(localStorage.getItem("CART"));
var initialCourse = data ? data : [];
const cartReducers = (state = initialCourse, action) => {
  var { courses } = action;
  switch (action.type) {
    case Types.ADD_TO_CART:
      state.push({
        courses
      });
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cartReducers;
