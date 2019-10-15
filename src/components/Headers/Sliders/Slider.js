import React, { Component } from "react";
import "./slider.scss";
export default class Slider extends Component {
  render() {
    return (
      <section className="slider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* 1 */}
              <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h2>You only have to know one thing</h2>
                    <h1>Online Free Course</h1>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="btn btn-lg popup-vimeo"
                    >
                      <i className="fa fa-play" />
                      <span className="icon">Start Learning Now!</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 2 */}
              <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h2>You only have to know one thing</h2>
                    <h1>Online Free Course</h1>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="btn btn-lg popup-vimeo"
                    >
                      <i className="fa fa-play" />
                      <span className="icon">Start Learning Now!</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 3 */}
              <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h2>You only have to know one thing</h2>
                    <h1>Online Free Course</h1>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="btn btn-lg popup-vimeo"
                    >
                      <i className="fa fa-play" />
                      <span className="icon">Start Learning Now!</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 4 */}
              <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h2>You only have to know one thing</h2>
                    <h1>Online Free Course</h1>
                    <p>
                      <a
                        href="https://vimeo.com/channels/staffpicks/93951774"
                        className="btn btn-lg popup-vimeo"
                      >
                        <span className="icon">
                          <i className="fa fa-play" />
                        </span>{" "}
                        Start Learning Now!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* 5 */}
              <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h2>You only have to know one thing</h2>
                    <h1>Online Free Course</h1>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="btn btn-lg popup-vimeo"
                    >
                      <i className="fa fa-play" />
                      <span className="icon">Start Learning Now!</span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </section>
    );
  }
}
