import React, {Component} from 'react';
import './Products.scss';
import Section from "../../../Reusable/Section/Section"
import {connect} from 'react-redux';

class Products extends Component {
  render () {
    const {data} = this.props;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push (<Section key={i} info={data[i]} />);
    }
    return (
      <div className="Products">
        {arr}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bikes: state.bikes.bikes,
  data: state.bikes.data,
});



export default connect (mapStateToProps, null) (Products);
