import React from 'react'
import "./Work.scss";
import Button from "../../Reusable/Buttton/Button";

const Work = () => {
    return (
        <div className="work">
            <h2 className="work-title">WHY WORK HERE</h2>
            <p className="work-text">If there’s one thing that unites the people who work here, it’s this: We believe that bicycles have the power to change lives. That’s why we’re always looking for passionate people from all disciplines who share in this belief and who
                 are looking to play an active role in inspiring and getting more people on bikes. Are you ready to make a difference?</p>
            <Button text="SEARCH JOB OPENINGS" bck="black" color="#fff" padding="2rem" width="40rem" />
        </div>
    )
}

export default Work;
