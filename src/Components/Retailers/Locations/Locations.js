import React from 'react'
import "./Locations.scss"

const Locations = ({number,name,address1,
    address2,address3,storeUrl}) => {
    return (
        <div className="location">


            <div className="location-column__2">
            <div className="details">
                <h2 className="details__title">{name}</h2>
                <p className="details__name"> {address1}</p>
                <p className="details__adress">{address2}</p>
                <p className="details__num">{address3}</p>
                <p className="details__link">Get directions</p>
                <p className="details__link">{storeUrl}</p>
                </div>
            </div>

            <div className="location-column__3">
            <div className="details">
                <h2>OPENING HOURS</h2>
                <p className="details__hours"> Sunday: 12:00 PM - 5:00 PM</p>
                <p className="details__hours">Monday: 11:00 AM - 8:00 PM</p>
                <p className="details__hours">Tuesday: 11:00 AM - 8:00 PM</p>
                <p className="details__hours">Wednesday: 11:00 AM - 8:00 PM</p>
                <p className="details__hours">Thursday: 11:00 AM - 8:00 PM</p>
                <p className="details__hours">Friday: 11:00 AM - 8:00 PM</p>
                <p className="details__hours">Saturday: 11:00 AM - 6:00 PM</p>
                </div>
            </div>

            
        </div>
    )
}

export default Locations
