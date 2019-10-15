import React, { Component } from "react";
import "./total.scss";
import CountUp from "react-countup";
export default class Total extends Component {
  render() {
    return (
      <section className="total">
        <div className="banner">
          <div className="total__content container">
            <div className="row">
              <div className="total__item col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="item__icon ">
                  <i className="fa fa-users" />
                </div>
                <p>Toltal Learners</p>
                <CountUp
                  start={0}
                  end={3500}
                  duration={5}
                  className="counter"
                />
              </div>
              <div className="total__item col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="item__icon">
                  <i className="fa fa-graduation-cap" />
                </div>
                <p>Total Graduates</p>
                <CountUp
                  start={0}
                  end={1650}
                  duration={5}
                  className="counter"
                />
              </div>
              <div className="total__item col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="item__icon">
                  <i className="fab fa-free-code-camp" />
                </div>
                <p>Total Countries</p>
                <CountUp start={0} end={768} duration={5} className="counter" />
              </div>
              <div className="total__item col-12 col-sm-6 col-md-3s col-lg-3">
                <div className="item__icon">
                  <i className="fab fa-connectdevelop" />
                </div>
                <p>Total Courses</p>
                <CountUp
                  start={0}
                  end={7010}
                  duration={5}
                  className="counter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
