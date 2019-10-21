import React, { Component } from "react";
import "./latest.scss";
import CartItem from "./CartItem";

class CartList extends Component {
  render() {
    return (
      <section className="latest">
        <div className="latest__title container">
          <h4 className="heading__title">Latest Classes</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="latest__course container ">{this.props.children}</div>
      </section>
    );
  }
}

export default CartList;
