import React from 'react'
import NavBarUpper from "./NavBarUpper/NavBarUpper";
import NavBarBottom from "./NavBarBottom/NavBarBottom";
import "./NavBar.scss"

export const NavBar=({handleClick,drawer})=>{

        return (
            <div className="NavBarUpper">
               <NavBarUpper/> 
               <NavBarBottom drawer={drawer} handleClick={handleClick}/>
            </div>
        )
        }

export default NavBar;
