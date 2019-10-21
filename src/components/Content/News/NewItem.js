import React, { Component } from "react";
import "./new.scss";
import imgNewOne from "../../../assets/images/new/0-1.jpg";
import imgAvtOne from "../../../assets/images/new/fmade1.jpg";

export default class NewItem extends Component {
  render() {
    return (
      <div className="new__item">
        <div className="item__image">
          <a href> </a>
          <img src={imgNewOne} alt="html" />
        </div>
        <div className="item__time container">
          <div className="months">
            <a href>
              <i className="fa fa-calendar" />
              <span> Nov 1-1-2020</span>
            </a>
          </div>
          <div className="hours">
            <a href>
              <i className="fa fa-comment" />
              <span> 2 Comments </span>
            </a>
          </div>
        </div>
        <div className="item__information container">
          <h4 className="namecourse">But I must explain how this</h4>
          <p className="desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus
          </p>
          <ul className="contact">
            <li>
              <a href>
                <img src={imgAvtOne} />
              </a>
            </li>

            <li>
              <a href>
                <span> Rosita Chatmon</span>
                <br />
                <span> 5 day ago</span>
              </a>
            </li>
            <li>
              <a href>
                <i className="fa fa-heart" />
                <i className="fa fa-thumbs-up"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
