import React from 'react'
import "./VideoAbout.scss"

const VideoAbout = () => {
    return (
        <div className="video-about">
            <h2>WE BELIEVE CYCLING CHANGES LIVES</h2>
         <iframe 
                title="about"
                width="100%" 
                height="90%" 
                src="https://www.youtube.com/embed/5emg5HORbaY" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoAbout
