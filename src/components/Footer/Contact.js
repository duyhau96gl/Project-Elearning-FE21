import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h4 className="title">Contact</h4>
        <span className="line"></span>
        <ul>
          <li>
            <a>
              <i class="fa fa-home"></i> New York, NY 10012, US
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-envelope"></i> nduyhau11@gmail.com
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-phone-volume"></i> +84 969 672 100
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-mobile-alt"></i> +84 389 093 947
            </a>
          </li>
        </ul>
        <ul className="icon__contact">
          <li>
            <a className="socials__icon" href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a className="socials__icon" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a className="socials__icon" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a className="socials__icon" href="#">
              <i className="fab fa-google-plus-g" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
