import React, { Component } from "react";
import "./Sidebar.scss";
import "./SidebarList";
import SidebarList from "./SidebarList";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

class Sidebar extends Component {

  state = {
    showItem: 0
  };


  handleChange = id => {
    const title=this.props.data.filter(i=>i.id === id)[0].title;
      this.setState({
      showItem:
        this.state.showItem === title ? null : title
    });
  };

  render()
  {
    return (
      <div className="sidebar">
        <div className="sidebar-container">
          <h2 className="sidebar-container__title">SHORT CUTS</h2>
          <div className="sidebar-container">
            <h2 className="sidebar-container__subtitle">CATEGORY</h2>
            <div className="sidebar-menu">
              <SidebarList
                list={this.props.data}
                hidden={this.state.showItem}
                handleChange={this.handleChange}
              />
              <p className="sidebar-menu-text">Bikes manufactured and sold by
             Specialized are guaranteed for quality and performance. 
            We stand by our bikes and aim to produce the highest quality
             products. Our bikes are made for riders, by riders.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  data: state.bikes.data,
});
export default connect(mapStateToProps, null)( withRouter(Sidebar));
