import React, { Component } from "react";
import "./course.scss";
import imgone from "../../../assets/images/ourcourse/0-1.jpg";
import imgtwo from "../../../assets/images/ourcourse/0-2.jpg";
import imgthree from "../../../assets/images/ourcourse/0-3.jpg";
export default class OurCourse extends Component {
  render() {
    return (
      <section className="course">
        <div className="banner">
          <div className="course__title container">
            <div className="title_item">
              <h4 className="heading__title">Our Classes</h4>
              <span className="title__line">
                <span className="line__icon" />
              </span>
              <p>
                I tell you that labor and sorrow, some important things that
                need a long occaecat and vitality,
              </p>
            </div>
          </div>
          <div className="course__content container">
            <div className="row">
              <div className="course__item col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="item__text ">
                  <div className="text">
                    <div className="text__icon">
                      <i className="fa fa-wifi" />
                    </div>
                    <div className="text__title">
                      <h4>Learn Online Classes</h4>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam
                      </p>
                    </div>
                  </div>
                  <div className="text">
                    <div className="text__icon">
                      <i className="fa fa-broadcast-tower" />
                    </div>
                    <div className="text__title">
                      <h4>Learn Offline Classes</h4>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam
                      </p>
                    </div>
                  </div>
                  <div className="text">
                    <div className="text__icon">
                      <i className="fab fa-readme" />
                    </div>
                    <div className="text__title">
                      <h4>Buy Books Online/Offline </h4>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course__item col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="item__image">
                  <img className="imgour" src={imgone} />
                  <img className="imgour" src={imgtwo} />
                  <img className="imgour" src={imgthree} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
