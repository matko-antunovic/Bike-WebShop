import React from 'react'
import "./ShoppingCart.scss"
import CartEmpty from "../../Components/CartEmpty/CartEmpty"
import CartItems from "../../Components/CartItems/CartItems"
import {connect} from "react-redux"

const ShoppingCart = ({cart}) => {
    const cartItem=cart.map(item=> <CartItems key={item.name} item={item}/>)
    return (
        <div className="container-cart">
            {cart.length>0 ? cartItem : <CartEmpty/>}            
        </div>
    )
}
const mapStateToProps=state=>({
    cart:state.bikes.cart,
})

export default connect(mapStateToProps,null)(ShoppingCart);
