import React from 'react'
import Hero from "../../Components/Landing/HeroImage/Hero";
import HomeIntro from "../../Components/Landing/HomeIntro/HomeIntro";
import HomeCategories from "../../Components/Landing/HomeCategories/HomeCategories"
import HomeBreaker from "../../Components/Landing/HomeBreaker/HomeBreaker"
import HomeVideo from "../../Components/Landing/HomeVideo/HomeVideo"
import "./Landing.scss"


const Landing = () => {
    return (
        <div className="Landing"> 
            <Hero/>
            <HomeIntro/>
            <HomeCategories/>
            <HomeBreaker/>
            <HomeVideo/>
        </div>
    )
}

export default Landing
