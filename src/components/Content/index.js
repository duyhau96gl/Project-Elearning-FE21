import React, { Component } from "react";
import Search from "./Searchs/Search";
import Categories from "./Categories/Categories";
import LatestClass from "./LatestClasses/LatestClass";
import Total from "./Totals/Total";
import ComingUpList from "./ComingUps/ComingUpList";
import OurCourse from "./OurCourses/OurCourse";
import Sponsor from "./Sponsors/Sponsor";
import RatedLocation from "./RatedLocations/RatedLocation";
import Trainer from "./Trainers/Trainer";
import New from "./News/NewList";
import Download from "./Download/Download";
import CoursesContainer from "../../Containers/CoursesContainer";
export default class index extends Component {
  render() {
    return (
      <div>
        <Search />
        <Categories />
        <CoursesContainer />
        <Total />
        <ComingUpList />
        <OurCourse />
        <Sponsor />
        <RatedLocation />
        <Trainer />
        <New />
        <Download />
      </div>
    );
  }
}
