import React, { Component } from "react";
import "./latest.scss";
import courseOne from "../../../assets/images/courselist/3d.jpg";
export default class LatestItem extends Component {
  render() {
    return (
      <div className="course__item">
        <div className="item__image">
          <a href> </a>
          <img src={courseOne} alt="html" />
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
                <a href>
                  <i className="fab fa-cloudsmith" />
                </a>
              </div>
              <div className="heart__item">
                <a href>
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
          <h4 className="namecourse">3D Animation</h4>
          <p className="desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus
          </p>
          <ul className="contact">
            <li>
              <a href>
                <i className="fa fa-map-marker-alt" />
                <span> Los Angles</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-calendar-alt" />
                <span> 5 hourse ago</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-user" />
                <span> Sally Peake</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-phone" />
                <span> 567987087</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="item__time container">
          <div className="months">
            <a href>
              <i className="fa fa-calendar-alt" />
              <span> :9 Months</span>
            </a>
          </div>
          <div className="hours">
            <a href>
              <i className="fa fa-clock" />
              <span> : 2 Hours</span>
            </a>
          </div>
          <div className="cart">
            <button className="btn btn-danger">
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
}
