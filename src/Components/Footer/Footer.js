import React from 'react'
import Button from "../Reusable/Buttton/Button"
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer">

        <div className="left-side">
        <div className="input">
        <form className='Footer-Form'>
        <input className='Footer-Form__Input' type='email' name='email' placeholder='Join Our Newsletter'></input>
        <button type='submit' className='Footer-Form__Submit'>JOIN</button>
        </form>
            </div>

            <p>By submitting your email address you agree to the</p>
            <span>Terms & Conditions</span>
        </div>

        <div className="middle">
            <span className="tags">Contact Us</span>
            <span className="tags">FAQ's</span>
            <span className="tags">Returns</span>
            <span className="tags">Warranty</span>
            <span className="tags">Test The Best</span>
            <span className="tags">Bicycle Registration</span>
            <span className="tags">Safety Notifications</span>
            <span className="tags">Terms of use</span>
            <span className="tags">Counterfit Awarness</span>
            <span className="tags">Careers</span>
        </div>

        <div className="right-side">
        <Button size="1.6rem" bck="#d32e2e" padding="1.5rem 3rem" text="FIND A RETAILER" color="#fff"/>
        <div  className="logos">
        <div className="logo-I sizeup"></div>
        <div className="logo-T sizeup"></div>
        <div className="logo-f sizeup"></div>
        <div className="logo-y sizeup"></div>
        </div>
        </div>
        </div>
    )
}

export default Footer;
