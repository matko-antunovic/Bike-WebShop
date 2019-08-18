import React from 'react'
import "./HomeVideo.scss"

const HomeVideo = () => {
    return (
        <div className="home-video">
            <h1 className="home-video__title">THE ALL NEW STUMPJUMPER</h1>
            <div className="video-wrapper">
            <iframe width="80%" height="90%" title="yt" src="https://www.youtube.com/embed/yiNyUvYb7AM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default HomeVideo
