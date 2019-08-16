import React, { Component } from 'react'
import NavBarUpper from "./NavBarUpper/NavBarUpper";
import NavBarBottom from "./NavBarBottom/NavBarBottom";
import "./NavBar.scss"

class NavBar extends Component {
    render() {
        return (
            <div className="Nav">
               <NavBarUpper/> 
               <NavBarBottom/>
            </div>
        )
    }
}
export default NavBar;
