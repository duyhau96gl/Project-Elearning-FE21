import React, { Component } from "react";
import { actGetCourseRequest, actAddToCart } from "../Actions";
import { connect } from "react-redux";
import LatestClass from "../components/Content/LatestClasses/LatestClass";
import LatestItem from "../components/Content/LatestClasses/LatestItem";

class CoursesContainer extends Component {
  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    var { courseList } = this.props;
    var { onAddToCart } = this.props;
    const elmCourse = this.props.courseList.map(course => {
      return (
        <LatestItem
          course={course}
          onAddToCart={onAddToCart}
          className="course__item"
        />
      );
    });

    return <LatestClass> {elmCourse} </LatestClass>;
  }
}
// Lấy dữ liệu về
const mapStateToProps = state => {
  return {
    courseList: state.courseList
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
)(CoursesContainer);
