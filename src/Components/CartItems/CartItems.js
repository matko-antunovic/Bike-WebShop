import React from 'react'
import "./CartItems.scss"

const CartItems = ({item}) => {
    console.log(item)

    return (
        <div className="cart-items">

            <div className="item-container">
                <div className="cart-item">
                    <img className="cart-item__img" src={item.imageUrl[0]} alt="smh" />

                    <div className="cart-item__details">
                    <p>{item.name}</p>
                    <p>{item.price} $ </p>
                    <div className="quantity-container">
                        <p>Quantity: {item.quantity} </p>
                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default (CartItems)
