import React from 'react';
import './NavBarUpper.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

const NavBarUpper = () => {
  return (
    <div className="NavBar-container">

    <div className="NavBar-main">
     <span className="NavBar-shipping">FREE SHIPPING ON ALL ORDERS OVER 1500$</span>

        <div className="NavBar-wrapper">
          <div className="NavBar-location__icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span className="NavBar-location__txt">FIND A RETAILER</span>
          </div>
          <div className="NavBar-lang">
              <div className="NavBar-lang--flag"></div>
              <span>EN</span>
          </div>
          <div className="NavBar-signIn">
            <span>SIGN IN</span>
          </div>
         
        </div>
        </div>
      </div>
  );
};

export default NavBarUpper;
