import React, { Component } from "react";
import "./comingup.scss";
import ComingUpItem from "./ComingUpItem";
import ComingUpItemFree from "./ComingUpItemFree";
export default class ComingUp extends Component {
  render() {
    return (
      <section className="comingup">
        <div className="latest__title container">
          <h4 className="heading__title">Coming Up Classes</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="comingup__course container">
          {/* Nav pills */}
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#all">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#short">
                Short Term Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#long">
                Long Term Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#online">
                Online Courses
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane container active" id="all">
              <div className="row">
                {/* 1 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItemFree />
                </div>
                {/* 2 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 3 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 4 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 5 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 6 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
              </div>
            </div>
            <div className="tab-pane container fade" id="short">
              <div className="row">
                {/* 1 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItemFree />
                </div>
                {/* 2 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 3 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
              </div>
            </div>
            <div className="tab-pane container fade" id="long">
              <div className="row">
                {/* 1 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItemFree />
                </div>
                {/* 2 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
                {/* 3 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItem />
                </div>
              </div>
            </div>
            <div className="tab-pane container fade" id="online">
              <div className="row">
                {/* 1 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <ComingUpItemFree />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
