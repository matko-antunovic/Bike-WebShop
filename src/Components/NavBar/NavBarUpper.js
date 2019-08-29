import React from 'react'
import NavBarUpper from "./NavBarUpper/NavBarUpper";
import NavBarBottom from "./NavBarBottom/NavBarBottom";
import Drawer from "./Drawer/Drawer"
import "./NavBarUpper.scss"

export const NavBar=({handleClick,drawer})=>{

        return (
            <div className="NavBarUpper">
               <NavBarUpper/> 
               <NavBarBottom drawer={drawer} handleClick={handleClick}/>
            </div>
        )
        }

export default NavBar;
