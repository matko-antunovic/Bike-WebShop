import React from 'react';
import "./NavBarBottom.scss"

const NavBarBottom = () => {
    return (
        <div className="NavBarB-container">

            <div className="NavBarB-main">
            <div className="NavBarB-logo"> </div>

            <div className="NavBarB-links">
                <div className="NavBarB-links__bikes  NavSize">Bikes</div>
                <div className="NavBarB-links__trail NavSize">Trail</div>
                <div className="NavBarB-links__downhill NavSize">Downhill</div>
                <div className="NavBarB-links__works NavSize">S-works</div>
                <div className="NavBarB-links__inside NavSize">Inside specialized</div>
            </div>

            <div className="NavBarB-icons">
                <div className="search-icon"></div>
                <div className="cart-icon"></div>
            </div>


        </div>
        </div>
    )
}

export default NavBarBottom
