import React from 'react'
import "./ShoppingCart.scss"
import CartEmpty from "../../Components/CartEmpty/CartEmpty"
import CartItems from "../../Components/CartItems/CartItems"
import {connect} from "react-redux"
import { selectCartItems,selectCartItemsPrice } from '../../Redux/bikes/helperFunctions';
import {createStructuredSelector} from "reselect"


const ShoppingCart = ({cart,total}) => {
    const cartItem=cart.map(item=> <CartItems key={item.id} item={item}/>)
    return (
        <div className="container-cart">
            {cart.length>0 ? <div className="cartItem">{cartItem} {total>0 ? <div className="priceT">Total price : <span className="total-price">{total} $</span></div> : null}    <p className="paynow">PAY NOW</p></div> : <CartEmpty/>}       
              
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cart:selectCartItems,
    total:selectCartItemsPrice
})

export default connect(mapStateToProps,null)(ShoppingCart);
