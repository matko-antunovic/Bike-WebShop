import React from 'react'
import Hero from "../../Components/Landing/HeroImage/Hero";
import HomeIntro from "../../Components/Landing/HomeIntro/HomeIntro";
import "./Landing.scss"


const Landing = () => {
    return (
        <div className="Landing"> 
            <Hero/>
            <HomeIntro/>
        </div>
    )
}

export default Landing
