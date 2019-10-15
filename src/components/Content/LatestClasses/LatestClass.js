import React, { Component } from "react";
import "./latest.scss";
import LatestItem from "./LatestItem";
export default class LatestClass extends Component {
  render() {
    return (
      <section className="latest">
        <div className="latest__title container">
          <h4 className="heading__title">Latest Classes</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="latest__course container ">
          <div
            className=" row course__list"
            data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
          >
            {/* Course 1 */}
            <LatestItem />
            {/* Course 2 */}
            <LatestItem />
            {/* Course 3 */}
            <LatestItem />
            {/* Course 4 */}
            <LatestItem />
            {/* Course 5 */}
            <LatestItem />
          </div>
        </div>
      </section>
    );
  }
}
