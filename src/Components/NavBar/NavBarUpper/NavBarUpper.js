import React from 'react';
import './NavBarUpper.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {withRouter} from "react-router-dom"

const NavBarUpper = ({history}) => {
  return (
    <div className="NavBar-container">

    <div className="NavBar-main">
     <span className="NavBar-shipping">FREE SHIPPING ON ALL ORDERS OVER 1500$</span>

        <div className="NavBar-wrapper">
          <div className="NavBar-location__icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span onClick={()=>{history.push("/retailer")}} className="NavBar-location__txt">FIND A RETAILER</span>
          </div>
          <div className="NavBar-lang">
              <div className="NavBar-lang--flag"></div>
              <span>EN</span>
          </div>
          <div className="NavBar-signIn">
            <span onClick={()=>{history.push("/signin")}}>SIGN IN</span>
          </div>
         
        </div>
        </div>
      </div>
  );
};

export default withRouter(NavBarUpper);
