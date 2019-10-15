import React, { Component } from "react";
import "./ratedlocation.scss";
import imgAusterlia from "../../../assets/images/location/1.jpg";
import imgChicago from "../../../assets/images/location/2.jpg";
import imgGermany from "../../../assets/images/location/3.jpg";
import imgLondon from "../../../assets/images/location/4.jpg";
import imgCanada from "../../../assets/images/location/5.jpg";

export default class RatedLocation extends Component {
  render() {
    return (
      <section className="ratedlocation">
        <div className="ratedlocation__title container">
          <h4 className="heading__title">Our Sponsors</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="ratedlocation__content container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="ratedlocation__left">
                <div className="item">
                  <div className="item__img">
                    <img src={imgGermany} atl="Germany" />
                  </div>
                  <div className="overlay" />
                  <div className="item__icon">
                    <div className="location">
                      <p>44,327</p>
                      <i className="fa fa-map-marker-alt"></i>
                      <span>Germany</span>
                    </div>
                    <div className="heart">
                      <a href>
                        <i className="fa fa-heart" /> <span>689</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item">
                  {" "}
                  <div className="item__img">
                    <img src={imgLondon} atl="London" />
                  </div>
                  <div className="overlay" />
                  <div className="item__icon">
                    <div className="location">
                      <p>52,145</p>
                      <i className="fa fa-map-marker-alt"></i>
                      <span>London</span>
                    </div>
                    <div className="heart">
                      <a href>
                        <i className="fa fa-heart" /> <span>491</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <div className="item__img">
                    <img src={imgAusterlia} atl="Austerlia" />
                  </div>
                  <div className="overlay" />
                  <div className="item__icon">
                    <div className="location">
                      <p>63,263</p>
                      <i className="fa fa-map-marker-alt"></i>
                      <span>Austerlia</span>
                    </div>
                    <div className="heart">
                      <a href>
                        <i className="fa fa-heart" /> <span>729</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {" "}
                  <div className="item__img">
                    <img src={imgChicago} atl="Chicago" />
                  </div>
                  <div className="overlay" />
                  <div className="item__icon">
                    <div className="location">
                      <p>36,485</p>
                      <i className="fa fa-map-marker-alt"></i>
                      <span>Chicago</span>
                    </div>
                    <div className="heart">
                      <a href>
                        <i className="fa fa-heart" /> <span>567</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="ratedlocation__right">
                <div className="item">
                  {" "}
                  <div className="item__img">
                    <img src={imgCanada} atl="Canada" />
                  </div>
                  <div className="overlay" />
                  <div className="item__icon">
                    <div className="location">
                      <p>64,825</p>
                      <i className="fa fa-map-marker-alt"></i>
                      <span>Canada</span>
                    </div>
                    <div className="heart">
                      <a href>
                        <i className="fa fa-heart" /> <span>209</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
