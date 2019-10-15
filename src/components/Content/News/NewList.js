import React, { Component } from "react";
import "./new.scss";
import NewItem from "./NewItem";
export default class NewList extends Component {
  render() {
    return (
      <section className="new">
        <div className="new__title container">
          <h4 className="heading__title">Latest Classes</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="new__course container ">
          <div
            className=" row course__list"
            data-slick='{"slidesToShow": 3, "slidesToScroll": 1}'
          >
            {/* Course 1 */}
            <NewItem />
            {/* Course 2 */}
            <NewItem />
            {/* Course 3 */}
            <NewItem />
            {/* Course 4 */}
            <NewItem />
            {/* Course 5 */}
            <NewItem />
            {/* Course 6 */}
            <NewItem />
            {/* Course 7 */}
            <NewItem />
          </div>
        </div>
      </section>
    );
  }
}
