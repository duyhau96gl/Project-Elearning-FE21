import React, { Component } from "react";
import { actGetCourseRequest, actAddToCart } from "../Actions";
import { connect } from "react-redux";
import CartItem from "../components/Content/Carts/CartItem";
import CartList from "../components/Content/Carts/CartList";
import * as Message from "../Constants/Message";
class CartContainer extends Component {
  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    var { courses } = this.props;
    return <CartList> {this.showCartItem(courses)} </CartList>;
  }
  /*
  Mục đích: Hiển thị các khóa học được Add vào giỏ hàng
  Đầu vào: 
  Đâu ra: State mới đã có các khóa học được thêm vào giỏ hàng 
  Người tạo: Nguyễn Duy Hậu
  */
  showCartItem = courses => {
    var result = Message.MSG_CARD_EMPTY;
    if (courses.length > 0) {
      result = courses.map((courses, index) => {
        return <CartItem key={courses.maKhoaHoc} courses={courses} />;
      });
    }
    return result;
  };
}
// Lấy dữ liệu về
const mapStateToProps = state => {
  return {
    courses: state.cartReducer
  };
};
// Tiến hành dispatch action lên để thêm course vào courses
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllCourses: () => {
      dispatch(actGetCourseRequest());
    },
    onAddToCart: courses => {
      dispatch(actAddToCart(courses));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
