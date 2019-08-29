import React from 'react'
import "./CartEmpty.scss"
import Button from "../Reusable/Buttton/Button"
import {Link} from "react-router-dom"

const CartEmpty = () => {
    return (
        <div className="cart">
            <div className="cart-top">
            <h1 className="top-title">SHOPPING CART</h1>
            <Link to="/bikes" className="top-link">Continue Shopping</Link>
            </div>


            <div className="cart-middle">
            <h1 className="middle-title">Your Shopping Cart is Empty</h1>
            <p className="middle-txt">Nothin' to see here.</p>
            <p className="middle-txt mb">Check out your wishlist items.</p>
            <Link to="/bikes">
            <Button text="VIEW WISH LIST" width="20rem" size="1.4rem" color="#fff" padding="1.5rem .45rem" bck="black" /></Link>
            <Link to="/bikes" className="middle-link">Continue Shopping</Link>
            </div>


            <div className="cart-bottom">
            <div className="bottom-L">
                <p className="bottom-p titleL">Contact Us</p>
                <p className="bottom-p">8:00am - 6:00pm, Monday-Friday</p>
                <p className="bottom-p">877-808-8154</p>
                <p className="bottom-p email">ridercare@specialized.com</p>
            </div>
            <div className="bottom-M">
                <p className="bottom-p">Helpful Links</p>
                <p className="bottom-p a">Frequently Asked Questions</p>
                <p className="bottom-p a">Return Policy</p>
                <p className="bottom-p a">Frequently Asked Questions</p>
            </div>
            <div className="bottom-R">
                <p className="bottom-p">We Accept</p>
                <div className="card">
                    <div className="card-V"></div>
                    <div className="card-T"></div>
                    <div className="card-AE"></div>
                    <div className="card-M"></div>
                    <div className="card-P"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CartEmpty;