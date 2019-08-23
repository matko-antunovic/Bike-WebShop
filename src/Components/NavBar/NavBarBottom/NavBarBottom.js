import React from 'react';
import "./NavBarBottom.scss"
import {withRouter} from "react-router-dom"

const NavBarBottom = ({history}) => {
   
    return (
        <div className="NavBarB-container">

            <div className="NavBarB-main">
            <div onClick={()=>{history.push("")}} className="NavBarB-logo"> </div>

            <div className="NavBarB-links">
                <div  onClick={()=>{history.push("/bikes")}} className="NavBarB-links__bikes  NavSize">Bikes</div>
                <div onClick={()=>{history.push("/section/trail")}} className="NavBarB-links__trail NavSize">Trail</div>
                <div onClick={()=>{history.push("/section/downhill")}} className="NavBarB-links__downhill NavSize">Downhill</div>
                <div onClick={()=>{history.push("/section/s-works")}} className="NavBarB-links__works NavSize">S-works</div>
                <div onClick={()=>{history.push("/story")}} className="NavBarB-links__inside NavSize">Inside specialized</div>
            </div>

            <div className="NavBarB-icons">
                <div className="search-icon"></div>
                <div onClick={()=>{history.push("/cart")}} className="cart-icon"></div>
            </div>


        </div>
        </div>
    )
}

export default withRouter(NavBarBottom);
