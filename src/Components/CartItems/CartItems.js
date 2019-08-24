import React from 'react'
import "./CartItems.scss"
import {connect} from "react-redux"
import {addBikeToCart,decreaseQ} from "../../Redux/bikes/bikesActions";

const CartItems = ({item,addBikeToCart,decreaseQ}) => {
    console.log(item)
    return (
        <div className="cart-items">

        
            <div className="item-container">
            {item ? 
                <div className="cart-item">
                    <img className="cart-item__img" src={item.imageUrl[0]} alt="smh" />

                    <div className="cart-item__details">
                    <p>{item.name}</p>
                    <p>{item.price} $ </p>
                    <div className="quantity-container">
                        Quantity:  <span onClick={()=>decreaseQ(item)} className="minus"> - </span> <span className="quantity-num">{item.quantity}</span>  <span onClick={()=>addBikeToCart(item)} className="plus"> + </span>
                    </div>
                    </div>

                </div>: null}
            </div> 
            
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    addBikeToCart:(item)=>{
        dispatch(addBikeToCart(item))
      },
      decreaseQ:(item)=>{
        dispatch(decreaseQ(item))
      }
})



export default connect(null,mapDispatchToProps)(CartItems)
