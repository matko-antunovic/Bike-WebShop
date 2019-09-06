import React from 'react'
import "./BackDrop.scss"

const BackDrop = ({bck,handleClick}) => {
    return (
        <div onClick={handleClick} className={`${bck ? "backdrop" : null}`}>
            
        </div>
    )
}

export default BackDrop
