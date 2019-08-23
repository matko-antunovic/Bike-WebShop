import React, { Component } from "react";
import "./Bike.scss";
import Button from "../../Components/Reusable/Buttton/Button"
import Carousel from "../../Components/Carousel/Carousel";
import { connect } from "react-redux";
import { getBike } from "../../Redux/bikes/bikesActions";

class Bike extends Component {
  componentDidMount() {
    this.props.getBike(this.props.match.params.name);
  }

  render() {
    const { bike } = this.props;

    return (
      <div className="bike">
        {bike ? <Carousel images={bike.imageUrl} /> : null}

      <div className="bike-details">
        <div className="bike-details-info">

        <div className="buttons">
        <Button text="ADD TO CART" color="#fff" bck="#d32e2e" width="15rem" size="1.7rem" padding="1.3rem" margin=".5rem" />
        <Button text="FIND NEARBY" color="black" bck="transparent" border="1px solid" width="15rem" size="1.7rem" margin=".5rem" padding="1.3rem" />
        </div>

        <div className="main">
        <p className="price">{bike.price}$</p>
        <p className="name">{bike.name}</p>
        <p className="part">Part number : {bike.partNumber}</p>
        </div>

        </div>
        <div className="bike-description">
        <ul>
        <li>"Berms, jumps, ruts—hawt laps." By now, you've probably seen the new Demo Racer 29 video—it's a must if you haven't. Not only is it shred-inspiring, but it clearly shows what the Demo Racer 29 Pro 29 is all about—being the ultimate trail bike.</li>
        <li>The Demo Racer 29's asymmetrical, FACT 11m carbon fiber construction is lightweight, stiff, and ready to take on the trail. It's built off our 29 Trail Geometry, so it's just the right amount of both capable and comfortable. And with SWAT™ integration in the down tube, a threaded BB,
           easy cable routing, and an all new chain silencer, it's ready for anything the trail, or you, throw at it.</li>
        <li>FOX FLOAT DPX2 Factory has three modes—Open, Trail, and Firm—that control large compression adjustments on-the-fly. There's also a tool adjust compression adjustment that allows for fine-tuning of the compression in Open mode.</li>
        <li>The legendary GRIP 2 damper, large stanchions, buttery-smooth Kashima coating—the FOX 36 Factory 150mm fork is one of the best out there.</li>
        </ul>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bike: state.bikes.bike
});

const mapDispatchToProps = dispatch => ({
  getBike: name => {
    dispatch(getBike(name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bike);
