import React, { Component } from "react";
import "./latest.scss";
export default class LatestItem extends Component {
  render() {
    const { course } = this.props;
    return (
      <div className="course__item">
        <div className="item__image">
          <a href="#"> </a>
          <img src={course.hinhAnh} alt="html" />
          <div className="overlay" />
          <div className="item__icon">
            <div className="star">
              <span>3.9</span>
              <div className="star__item active">
                <i className="fa fa-star" />
              </div>
              <div className="star__item active">
                <i className="fa fa-star" />
              </div>
              <div className="star__item active">
                <i className="fa fa-star" />
              </div>
              <div className="star__item">
                <i className="fa fa-star" />
              </div>
              <div className="star__item">
                <i className="fa fa-star" />
              </div>
            </div>
            <div className="heart">
              <div className="link__item">
                <a href="#">
                  <i className="fab fa-cloudsmith" />
                </a>
              </div>
              <div className="heart__item">
                <a href="#">
                  <i className="fa fa-heart" />
                </a>
              </div>
            </div>
            <div className="price">
              <p>$546.22</p>
            </div>
          </div>
        </div>
        <div className="item__information container">
          <h4 className="namecourse">{course.tenKhoaHoc}</h4>
          <p className="desc">{course.moTa}</p>
          <ul className="contact">
            <li>
              <a href="#">
                <i className="fa fa-map-marker-alt" />
                <span> Los Angles</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-calendar-alt" />
                <span> {course.ngayTao}</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user" />
                <span> {course.nguoiTao.hoTen}</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-phone" />
                <span> 567987087</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="item__time container">
          <div className="months">
            <a href="#">
              <i className="fa fa-calendar-alt" />
              <span> :9 Months</span>
            </a>
          </div>
          <div className="hours">
            <a href="#">
              <i className="fa fa-clock" />
              <span> : 2 Hours</span>
            </a>
          </div>
          <div className="cart">
            <button
              className="btn btn-danger"
              onClick={() => this.onAddToCart(course)}
            >
              <i className="fa fa-shopping-cart" />
            </button>
          </div>
          <div className="buy">
            <button className="btn btn-danger">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  /*
  Mục đích: Tạo hàm khi click vào button giỏ hàng thì sẽ thêm khóa học vào giỏ hàng và đưa lên storage
  Đầu vào: Khóa học sẽ mua, Nhận vào 1 props và nơi kết nối là courseContainer thông qua map dispatchs
  Đâu ra: State mới đã có các khóa học được thêm vào giỏ hàng 
  Người tạo: Nguyễn Duy Hậu
  */
  onAddToCart = courses => {
    this.props.onAddToCart(courses);
  };
}
