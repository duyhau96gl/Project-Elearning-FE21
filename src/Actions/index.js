/*
Mục đích: Tạo Action cho các Reducer xử lí  
Người tạo: Nguyễn Duy Hậu
*/
import * as Types from "../Constants/ActionTypes";
import callApi from "../utils/apiCaller";

//   Gọi API Lấy dữ liệu từ server về
export const actGetCourseRequest = () => {
  return dispatch => {
    return callApi(
      "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09",
      "GET",
      null
    ).then(res => {
      dispatch(actGetCourse(res.data));
      console.log(res.data);
    });
  };
};
// Gửi danh sách khóa học lên store
export const actGetCourse = courseList => {
  return {
    type: Types.GET_COURSE,
    courseList
  };
};
/*
Mục đích: Action thêm sản phẩm vào giỏ hàng
Đầu vào: Thông tin các khóa học được thêm vào giỏ hàng
Đâu ra: Các khóa học khi người dùng bấm vào nút thêm giỏ hảng  
Người tạo: Nguyễn Duy Hậu
*/
export const actAddToCart = courses => {
  return {
    type: Types.ADD_TO_CART,
    courses // courses : courses
  };
};
