import React, { Component } from "react";
import "./Sidebar.scss";
import { withRouter } from "react-router-dom";
import TRAIL_DATA from "../../../../Assets/data/TrailData";
import SWORKS_DATA from "../../../../Assets/data/SWorksData";
import DOWNHILL_DATA from "../../../../Assets/data/DownHillData";
import "./SidebarList";
import SidebarList from "./SidebarList";

class Sidebar extends Component {
  state = {
    data: [TRAIL_DATA, SWORKS_DATA, DOWNHILL_DATA],
    showItem: 0
  };

  handleChange = id => {
    const title=this.state.data.filter(i=>i.id === id)[0].title;
      this.setState({
      showItem:
        this.state.showItem === title ? null : title
    });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-container">
          <h2 className="sidebar-container__title">SHORT CUTS</h2>
          <div className="sidebar-container">
            <h2 className="sidebar-container__subtitle">CATEGORY</h2>
            <div className="sidebar-menu">
              <SidebarList
                list={this.state.data}
                hidden={this.state.showItem}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Sidebar);
