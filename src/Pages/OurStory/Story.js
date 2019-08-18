import React from 'react'
import "./Story.scss";
import FirstPoster from "../../Components/Posters/First/FirstPoster"
import SecondPoster from "../../Components/Posters/Second/SecondPoster"
import ThirdPoster from '../../Components/Posters/Third/ThirdPoster';
import VideoAbout from '../../Components/Posters/VideoAbout/VideoAbout';
import Work from '../../Components/Posters/Work/Work';

const Story = () => {
    return (
        <div className="story">
            <FirstPoster/>
            <SecondPoster/>
            <ThirdPoster/>
            <VideoAbout/>
            <Work/>
        </div>
    )
}

export default Story
