import React, { Component } from "react";
import "./banner.scss";
import Header from "../components/Headers";
import Content from "../components/Content";
import Footer from "../components/Footer";
export default class Home extends Component {
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
        <Content />
        <Footer />
      </div>
    );
  }
}
