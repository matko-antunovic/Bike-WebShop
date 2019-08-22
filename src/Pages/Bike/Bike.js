import React, { Component } from 'react'
import "./Bike.scss"
import {connect} from "react-redux"
import {getBike} from "../../Redux/bikes/bikesActions";

class Bike extends Component {

    componentDidMount(){
        this.props.getBike(this.props.match.params.name)
    }

    render() {
        const {bike}=this.props;
        return (
            <div className="Bike">
             
                {bike ? (bike.imageUrl.map((i,index)=>{
                    return <img key={index} src={i.url} alt="alo"/>
                }) ) :null   
            }

            <p>{bike.partNumber}</p>
              <p>{bike.name}</p>
            </div>
        )
    }
}


const mapStateToProps=state=>({
    bike:state.bikes.bike
  })
  
  const mapDispatchToProps=dispatch=>({
    getBike:(name)=>{dispatch(getBike(name))}
  })
  

export default connect(mapStateToProps,mapDispatchToProps)(Bike);

