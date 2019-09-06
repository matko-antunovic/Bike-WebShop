import React from 'react'
import "./Drawer.scss"
import LinkURL from "../Reusable/Link/Link"

const Drawer = ({drawer,handleClick}) => {
    return (
        <div className={`${drawer ? "open" : null} drawer`}>

        <LinkURL handleClick={handleClick} linkURL="/bikes">SHOP</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/trail">TRAIL</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/downhill">DOWNHILL</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/section/s-works">S-WORKS</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/retailer">RETAILERS</LinkURL>
        <LinkURL handleClick={handleClick} linkURL="/story">ABOUT</LinkURL>
        </div>
    )
}

export default Drawer
