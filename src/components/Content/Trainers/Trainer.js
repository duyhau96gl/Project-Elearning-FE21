import React, { Component } from "react";
import "./trainer.scss";
import imgone from "../../../assets/images/trainer/w.jpg";
import imgtwo from "../../../assets/images/trainer/men.jpg";
import imgthree from "../../../assets/images/trainer/woman.jpg";
export default class Trainer extends Component {
  render() {
    return (
      <section className="trainer">
        <div className="banner">
          <div className="trainer__title container">
            <div className="title_item">
              <h4 className="heading__title">Best Trainers</h4>
              <span className="title__line">
                <span className="line__icon" />
              </span>
              <p>
                I tell you that labor and sorrow, some important things that
                need a long occaecat and vitality,
              </p>
            </div>
          </div>
          <div className="container trainer__list">
            <div className="slick_item">
              <div className="trainer__content">
                <div className="trainer__item">
                  <div className="item__image active"></div>
                  <div className="item__image"></div>
                  <div className="item__image"> </div>
                </div>
              </div>
              <div className="trainer__text">
                <div className="item__contact">
                  <h3>ElizaBeth</h3>
                  <p>Web Developer</p>
                  <div className="item__icon">
                    <div className="star">
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
                  </div>
                </div>
                <div className="item__introduction">
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born, a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth and will unfold in the
                    master-builder of human happiness."
                  </p>
                  <button type="button" class="btn btn-danger">
                    View all Testimonials
                  </button>
                </div>
              </div>
            </div>
            {/**2 */}
            <div className="slick_item">
              <div className="trainer__content">
                <div className="trainer__item">
                  <div className="item__image "></div>
                  <div className="item__image active"></div>
                  <div className="item__image"> </div>
                </div>
              </div>
              <div className="trainer__text">
                <div className="item__contact">
                  <h3>Williamson</h3>
                  <p>Web Developer</p>
                  <div className="item__icon">
                    <div className="star">
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
                  </div>
                </div>
                <div className="item__introduction">
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born, a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth and will unfold in the
                    master-builder of human happiness."
                  </p>
                  <button type="button" class="btn btn-danger">
                    View all Testimonials
                  </button>
                </div>
              </div>
            </div>
            {/**3 */}
            <div className="slick_item">
              <div className="trainer__content">
                <div className="trainer__item">
                  <div className="item__image "></div>
                  <div className="item__image"></div>
                  <div className="item__image active"> </div>
                </div>
              </div>
              <div className="trainer__text">
                <div className="item__contact">
                  <h3>Sophie Carr</h3>
                  <p>Web Developer</p>
                  <div className="item__icon">
                    <div className="star">
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
                  </div>
                </div>
                <div className="item__introduction">
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born, a complete
                    account of the system, and expound the actual teachings of
                    the great explorer of the truth and will unfold in the
                    master-builder of human happiness."
                  </p>
                  <button type="button" class="btn btn-danger">
                    View all Testimonials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
