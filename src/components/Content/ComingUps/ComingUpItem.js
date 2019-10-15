import React, { Component } from "react";
import "./comingup.scss";
import courseOne from "../../../assets/images/courselist/3d.jpg";
export default class ComingUpItem extends Component {
  render() {
    return (
      <div className="course__item ">
        <div className="item__image">
          <a href> </a>
          <img src={courseOne} alt="html" />
          <div className="power-ribbon power-ribbon-conner text-warning">
            <p className="bg-warning">
              {" "}
              <span>
                {" "}
                <i className="fa fa-bolt" />{" "}
              </span>{" "}
            </p>
          </div>
          <div className="overlay" />
          <div className="item__icon">
            <div className="star">
              <span>Marketing</span>
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
                <i className="fa fa-phone" />
                <span> 567987087</span>
              </a>
            </li>
          </ul>
          <p className="mb-0">
            Nemo enim ipsam voluptatem voluptas sit aspernatur ratione
            voluptatem sequi nesciunt..
          </p>
        </div>
        <div className="item__time  ">
          <div className="months">
            <a href>
              <p>
                Duration <span>: 9 Months</span>
              </p>
            </a>
          </div>
          <div className="hours">
            <a href>
              <p>
                {" "}
                Daily <span>: 2 Hours</span>
              </p>
            </a>
          </div>
        </div>
        <div className="item__join">
          <button type="button" className="btn btn-danger w-100">
            Join Now
          </button>
        </div>
      </div>
    );
  }
}
