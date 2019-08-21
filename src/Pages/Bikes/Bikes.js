import React, { Component } from 'react'
import "./Bikes.scss"
import Hero from "../../Components/Shop/Hero/Hero"
import Sidebar from "../../Components/Shop/MainShop/Sidebar/Sidebar"

class Bikes extends Component {
    render() {
        return (
            <div className="bikes">
                <Hero/>
                <Sidebar/>
            </div>
        )
    }
}

export default Bikes;
