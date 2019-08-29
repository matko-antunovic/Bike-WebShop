import React from 'react'
import {Link} from "react-router-dom"


const LinkURL = ({children,linkURL,handleClick}) => {
    return (
        <span onClick={handleClick}> <Link style={{display:"block", textDecoration: 'none', color: 'white' }} to={`${linkURL}`}>{children}</Link></span>
    )
}

export default LinkURL;
