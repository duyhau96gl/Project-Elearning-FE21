import React, { Component } from "react";
import "./footer.scss";
import About from "./About";
import OurServices from "./Services";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
export default class index extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <About />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  {" "}
                  <OurServices />{" "}
                </div>
                <div className="col-md-6 col-lg-7">
                  {" "}
                  <Contact />{" "}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <Subscribe />
            </div>
          </div>
        </div>

        <div className="row footer__bottom">
          <div className="col-lg-12 col-sm-12 mt-3 mb-3 text-center ">
            {" "}
            Copyright © 2019{" "}
            <a href="#" className="fs-14">
              Eudica
            </a>
            . Offlineed by{" "}
            <a href="#" className="fs-14">
              {" "}
              Spruko Technologies Pvt.Ltd{" "}
            </a>{" "}
            All rights reserved.{" "}
          </div>
        </div>
      </footer>
    );
  }
}
