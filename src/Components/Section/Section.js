import React from 'react'
import "./Section.scss";

import Card from '../Reusable/Card/Card';

const Section = ({info}) => {
    // console.log("U SECTIONU" ,info.items)
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
