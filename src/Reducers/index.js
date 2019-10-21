import { combineReducers } from "redux";
import coursesReducers from "./coursesReducers";
import cartReducer from "./cartReducer";
const bigReducer = combineReducers({
  courseList: coursesReducers,
  //   Nên thay đổi cùng tên
  cartReducer
});

export default bigReducer;
