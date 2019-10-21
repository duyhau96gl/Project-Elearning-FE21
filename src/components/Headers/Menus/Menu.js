import React, { Component } from "react";
import "./menu.scss";
export default class Menu extends Component {
  render() {
    return (
      <div>
        <div className="header__navbar">
          <div className="container" id="nav">
            <div className="row">
              {/** Menu */}
              <div className=" col-9 col-sm-9 col-md-11 col-lg-10">
                <nav className=" navbar navbar-expand-md  navbar-dark  nav_menu">
                  <button
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#collapse_target"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="collapse_target"
                  >
                    <ul className="nav nav-tabs dropleft menu_lvone">
                      {/** Lv1 Home */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link active" href="#">
                          HOME
                        </a>
                      </li>
                      {/** Lv1 About */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link" href="#">
                          About
                        </a>
                      </li>
                      {/** Lv1 Widgets */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link" href="#">
                          Widgets
                        </a>
                      </li>
                      {/** Lv1 Course */}
                      <li className="nav-item dropdown item_lvone">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                        >
                          Course
                        </a>
                        {/** Lv2 Course */}
                        <ul className="menu_lvtwo">
                          <li className="item_lvtwo">
                            <a className="dropdown-item" href="#">
                              Courses Single
                            </a>
                          </li>
                          <li className="item_lvtwo">
                            <a className="dropdown-item" href="#">
                              Mobile Apps
                            </a>
                          </li>
                          <li className="item_lvtwo">
                            <a className="dropdown-item" href="#">
                              Website
                            </a>
                          </li>
                          <li className="item_lvtwo">
                            <a className="dropdown-item" href="#">
                              Web Design
                            </a>
                          </li>
                          <li className="item_lvtwo">
                            <a className="dropdown-item" href="#">
                              WordPress
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/** Lv1 Pages */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link " href="#">
                          Pages
                        </a>
                      </li>
                      {/** Lv1 Blog */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link " href="#">
                          Blog
                        </a>
                      </li>
                      {/** Lv1 Custom Pages */}
                      <li className="nav-item item_lvone">
                        <a className="nav-link " href="#">
                          Custom Pages
                        </a>
                      </li>
                      {/** Lv1 Contact Us*/}
                      <li className="nav-item item_lvone">
                        <a className="nav-link " href="#">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/** Icon */}
              <div className=" col-3 col-sm-3 col-md-1 col-lg-2">
                <a className=" btn btn-info enroll" id="navicon" href="#">
                  {" "}
                  Enroll Now
                </a>
                <a className=" btn btn-warning phone" id="navicon" href="#">
                  <i className="fa fa-phone" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
