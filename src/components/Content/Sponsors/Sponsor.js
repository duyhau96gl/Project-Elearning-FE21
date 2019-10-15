import React, { Component } from "react";
import "./sponsor.scss";
import imgSponOne from "../../../assets/images/sponser/1.png";
import imgSponTwo from "../../../assets/images/sponser/2.png";
import imgSponThree from "../../../assets/images/sponser/3.png";
import imgSponFour from "../../../assets/images/sponser/4.png";
import imgSponFive from "../../../assets/images/sponser/5.png";
import imgSponSix from "../../../assets/images/sponser/6.png";
import imgSponSeven from "../../../assets/images/sponser/7.png";
import imgSponEight from "../../../assets/images/sponser/8.png";
export default class Sponsor extends Component {
  render() {
    return (
      <section className="sponsor">
        <div className="sponsor__title container">
          <h4 className="heading__title">Our Sponsors</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="container ">
          <div
            className=" row course__list"
            data-slick='{"slidesToShow": 5, "slidesToScroll": 2}'
          >
            {/* Course 1 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponOne} alt="" />
              </div>
            </div>
            {/* Course 2 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponTwo} alt="" />
              </div>
            </div>
            {/* Course 3 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponThree} alt="" />
              </div>
            </div>
            {/* Course 4 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponFour} alt="" />
              </div>
            </div>
            {/* Course 5 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponFive} alt="" />
              </div>
            </div>
            {/* Course 6 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponSix} alt="" />
              </div>
            </div>
            {/* Course 7 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponSeven} alt="" />
              </div>
            </div>
            {/* Course 8 */}
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
              <div className="course__item">
                <img src={imgSponEight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
