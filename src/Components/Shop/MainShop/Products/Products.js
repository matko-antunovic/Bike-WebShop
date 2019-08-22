import React, {Component} from 'react';
import './Products.scss';
import Section from '../../../Section/Section';
import {connect} from 'react-redux';
import {getBikes} from '../../../../Redux/bikes/bikesActions';

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

const mapDispatchToProps = dispatch => ({
  getBikes: () => {
    dispatch (getBikes ());
  },
});

export default connect (mapStateToProps, mapDispatchToProps) (Products);
