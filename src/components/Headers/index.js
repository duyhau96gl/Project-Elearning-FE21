import React, { Component } from "react";
import "./header.scss";
import { range } from "lodash";
import { StickyContainer, Sticky } from "react-sticky";
import Topbar from "./Topbars/Topbar";
import Logo from "./Logos/Logo";
import Menu from "./Menus/Menu";
import Slider from "./Sliders/Slider";
export default class index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const NUMBER_OF_KITTIES = 1;
    const kitties = range(0, NUMBER_OF_KITTIES).map(index => {
      return (
        <StickyContainer style={{ zIndex: 99 }}>
          <Sticky>
            {({
              style,
              isSticky,
              wasSticky
              // the following are also available but unused in this example
            }) => <Menu style={style} />}
          </Sticky>
        </StickyContainer>
      );
    });
    return (
      <div className="header">
        <Topbar />
        <Logo />
        {kitties}
        <Slider />
      </div>
    );
  }
}
