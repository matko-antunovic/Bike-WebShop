import React from 'react';
import './HomeCategories.scss';
import {withRouter} from "react-router-dom"

const HomeCategories = ({match,history}) => {
  return (
    <div className="HomeCategories">

      <p className="title">EXPLORE OUR BIKES</p>

      <div className="categories">

      <div className="wrapper">
        <div onClick={()=>{history.push("/section/trail")}} className="trail filter"> </div>
          <span className="categories-text">trail</span>
          </div>

        <div className="wrapper">
        <div onClick={()=>{history.push("/section/downhill")}}  className="downhill filter"></div>
          <span className="categories-text">downhill</span>
        </div>

        <div className="wrapper filter">
        <div onClick={()=>{history.push("/section/s-works")}}  className="s-works"></div>
          <span className="categories-text">s-works</span>
        </div>

      </div>
    </div>
  );
};

export default withRouter(HomeCategories);
