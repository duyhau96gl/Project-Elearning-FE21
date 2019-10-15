import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <h4 className="title">Our Services</h4>
        <span className="line"></span>
        <ul>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Terms and Services</a>
          </li>
        </ul>
      </div>
    );
  }
}
