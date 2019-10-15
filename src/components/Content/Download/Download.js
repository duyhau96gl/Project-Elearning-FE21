import React, { Component } from "react";
import "./download.scss";
export default class Download extends Component {
  render() {
    return (
      <section className="download">
        <div className="download__title container">
          <h4 className="heading__title">Download</h4>
          <span className="title__line">
            <span className="line__icon" />
          </span>
          <p>
            I tell you that labor and sorrow, some important things that need a
            long occaecat and vitality,
          </p>
        </div>
        <div className="download__btn container ">
          <div className="item__btn">
            <button type="button" class="btn btn-danger">
              <i class="fab fa-apple"></i> App Store
            </button>
          </div>
          <div className="item__btn">
            <button type="button" class="btn btn-primary">
              <i class="fab fa-android"></i> Gooogle Play
            </button>
          </div>
          <div className="item__btn">
            <button type="button" class="btn btn-info">
              <i class="fab fa-windows"></i> Windows
            </button>
          </div>
        </div>
      </section>
    );
  }
}
