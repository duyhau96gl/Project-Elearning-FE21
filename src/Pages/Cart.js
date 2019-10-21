import React, { Component } from "react";
import "./banner.scss";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import CoursesContainer from "../Containers/CoursesContainer";
import CartContainer from "../Containers/CartContainer";
export default class Cart extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="banner__animation" />
        <div className="clear" />
        <Header />
        <CartContainer />
        <CoursesContainer />

        <Footer />
      </div>
    );
  }
}
