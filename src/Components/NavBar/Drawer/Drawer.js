import React from 'react'
import "./Drawer.scss"
import LinkURL from "../../Reusable/Link/Link"

const Drawer = ({drawer,handleClick}) => {
    return (
        <div className={`${drawer ? "open" : null} drawer`}>

        <LinkURL handleClick={handleClick} linkURL="/bikes">SHOP</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/trail">TRAIL</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/downhill">DOWNHILL</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/s-works">S-WORKS</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/retailer">RETAILERS</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/story">ABOUT</LinkURL>
{/*          
           <span> <Link style={{ textDecoration: 'none', color: 'white' }} to="/section/trail">TRAIL</Link></span>
           <span><Link style={{ textDecoration: 'none', color: 'white' }} to="/section/downhill">DOWNHILL</Link></span>
           <span><Link style={{ textDecoration: 'none', color: 'white' }} to="/section/s-works">S-WORKS</Link></span>
           <span><Link style={{ textDecoration: 'none', color: 'white' }} to="/retailer">RETAILERS</Link></span> 
           <span>  <Link style={{ textDecoration: 'none', color: 'white' }} to="/story">ABOUT</Link></span>  */}
        </div>
    )
}

export default Drawer
