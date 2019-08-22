import React, { Component } from 'react'
import "./Bikes.scss"
import Hero from "../../Components/Shop/Hero/Hero"
import Sidebar from "../../Components/Shop/MainShop/Sidebar/Sidebar"
import Products from "../../Components/Shop/MainShop/Products/Products"

class Bikes extends Component {
    render() {
        return (
            <div className="bikes">
                <Hero/>
                <div className="divider">
                <Sidebar/>
                <Products/>
                </div>
            </div>
        )
    }
}

export default Bikes;
