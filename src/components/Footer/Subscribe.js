import React, { Component } from "react";

export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <h4 className="title">Subscribe</h4>
        <span className="line"></span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            id="demo"
            name="email"
          />
          <div className="input-group-append">
            <span className="input-group-text">Subscribe</span>
          </div>
        </div>
        <h4 className="title">Payments</h4>
        <span className="line"></span>
        <ul>
          <li>
            <a>
              <i class="fab fa-cc-amex"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-cc-visa"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fa fa-credit-card"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-cc-mastercard"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="fab fa-cc-amazon-pay"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
