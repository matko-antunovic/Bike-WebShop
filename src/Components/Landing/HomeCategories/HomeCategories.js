import React from 'react';
import './HomeCategories.scss';

const HomeCategories = () => {
  return (
    <div className="HomeCategories">

      <p className="title">EXPLORE OUR BIKES</p>

      <div className="categories">

      <div className="wrapper">
        <div className="trail filter"> </div>
          <span className="categories-text">trail</span>
          </div>

        <div className="wrapper">
        <div className="downhill filter"></div>
          <span className="categories-text">downhill</span>
        </div>

        <div className="wrapper filter">
        <div className="s-works"></div>
          <span className="categories-text">s-works</span>
        </div>

      </div>
    </div>
  );
};

export default HomeCategories;
