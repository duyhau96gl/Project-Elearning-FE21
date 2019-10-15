import React, { Component } from "react";
import "./categories.scss";
export default class Categories extends Component {
  render() {
    return (
      <div>
        <section className="categories">
          <div className="categories__title container">
            <h4 className="heading__title">Categories</h4>
            <span className="title__line">
              <span className="line__icon" />
            </span>
            <p>
              I tell you that labor and sorrow, some important things that need
              a long occaecat and vitality,
            </p>
          </div>
          <div className="categories__item">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
                  <div className="categories__icon">
                    <a href>
                      <i className="fab fa-leanpub" />
                      <p className="categories__text">Languare</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2 ">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-laptop-code" />
                      <p className="categories__text">IT Courses</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-database" />
                      <p className="categories__text">Data Science</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-heart" />
                      <p className="categories__text">Health</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-balance-scale" />
                      <p className="categories__text">Law</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-hashtag" />
                      <p className="categories__text">Maths</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-business-time" />
                      <p className="categories__text">Business</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fab fa-audible" />
                      <p className="categories__text">Marketing</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fab fa-buffer" />
                      <p className="categories__text">Degree</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-edit" />
                      <p className="categories__text">Literature</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-camera" />
                      <p className="categories__text">Photography</p>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <div className="categories__icon">
                    <a href>
                      <i className="fa fa-headphones-alt" />
                      <p className="categories__text">Life style</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
