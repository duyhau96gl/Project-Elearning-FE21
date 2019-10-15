import React, { Component } from "react";
import "./logo.scss";
import logoimg from "../../../assets/images/logo.png";
export default class Logo extends Component {
  render() {
    return (
      <div className="header__logo">
        <div className="container">
          <div className="row">
            <div className="col-md-0 col-lg-10 ">
              <div className="logo__image">
                <a href>
                  <img src={logoimg} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-2">
              <div className="logo__icon">
                <ul>
                  <li>
                    <a href>
                      <i className="fa fa-cog" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-user-alt" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
