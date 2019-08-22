import React from 'react'
import "./Section.scss";

import Card from "../Card/Card"

const Section = ({info}) => {
  
    return (
        <div className="section">
            <div className="section-container">
                <h1 className="section-title">{info.title}</h1>
                <Card link={info.items.map(item=>item)}/>
            </div>
        </div>
    )
}

export default Section
