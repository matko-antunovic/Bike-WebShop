import React, { Component } from 'react'
import "./RenderPage.scss";
import Section from "../../Components/Reusable/Section/Section"
import {connect} from "react-redux"

class Trail extends Component {
    render() {

    const toRender=this.props.match.params.page ?  this.props.data.filter(el=>el.title.toLowerCase()===this.props.match.params.page)[0] : false;
        return (
            <div className="trail">
                {toRender ?
             <Section info={toRender} />
             : null  }
            </div>
        )
    }
}

const mapStateToProps=state=>({
     data:state.bikes.data
    })
   


export default connect(mapStateToProps,null)(Trail);