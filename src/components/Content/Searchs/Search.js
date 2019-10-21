import React, { Component } from "react";
import "./search.scss";
export default class Search extends Component {
  render() {
    return (
      <section className="search">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <input type="text" placeholder="Search Courses..." />
            </div>
            <div className="col-sm-12">
              <input
                type="text"
                name="location"
                id
                placeholder="Enter Location"
              />
              <i className="fa fa-map-marker-alt" />
            </div>
            <div className="col-sm-12">
              <select
                className="form-control select2-show-search border-bottom-0 select2-hidden-accessible"
                data-placeholder="Select Category"
                data-select2-id={1}
                tabIndex={-1}
                aria-hidden=""
              >
                <optgroup label="Categories" data-select2-id={7}>
                  <option data-select2-id={3}>Select</option>
                  <option value={1} data-select2-id={8}>
                    IT
                  </option>
                  <option value={2} data-select2-id={9}>
                    Language
                  </option>
                  <option value={3} data-select2-id={10}>
                    Science
                  </option>
                  <option value={4} data-select2-id={11}>
                    Health
                  </option>
                  <option value={5} data-select2-id={12}>
                    Humanities
                  </option>
                  <option value={6} data-select2-id={13}>
                    Business
                  </option>
                  <option value={7} data-select2-id={14}>
                    Math
                  </option>
                  <option value={8} data-select2-id={15}>
                    Marketing
                  </option>
                </optgroup>
              </select>
            </div>
            <div className="col-sm-12">
              <button type="button" className="btn btn-warning">
                Search Here
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
