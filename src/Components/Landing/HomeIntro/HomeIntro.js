import React from 'react'
import "./HomeIntro.scss"
import Button from "../../Reusable/Buttton/Button"
import {withRouter} from "react-router-dom"

const HomeIntro = ({history}) => {
    return (
        <div className="intro-container">
        <div className="home-intro">
            <h1 className="home-intro__title">Specialized mtb</h1>
            <p className="home-intro__text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <span className="home-intro__button" onClick={()=>{history.push("/story")}}>
            <Button url="/story" text="OUR STORY" size="2rem" bck="black" color="#fff" padding="2rem" weight="500" />
            </span>
        </div>
        </div>
    )
}

export default withRouter(HomeIntro);
