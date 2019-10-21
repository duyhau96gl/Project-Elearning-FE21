import * as Types from "../Constants/ActionTypes";
var initialCourse = [];
// Khai báo để store lưu trữ Course vào state
const coursesReducers = (state = initialCourse, action) => {
  switch (action.type) {
    case Types.GET_COURSE:
      state = action.courseList;
      return [...state];
    default:
      return [...state];
  }
};

export default coursesReducers;
