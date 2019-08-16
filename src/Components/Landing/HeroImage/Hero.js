import React from "react";
import "./Hero.scss"
import Button from "../../Reusable/Buttton/Button"

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
          <div className="Hero__text--title">
        <p>WE HAVE</p>
        <p>THE WORKS</p>
        </div>
        <p className="Hero__text--subtitle">
          ITS ALL FUN AND GAMES UNTIL YOU CATCH TOO MUCH AIR
        </p>{" "}
        <Button text="DEMO 8-FR" height="4rem" width="15rem" bck="#4e4e4e" margin="3rem 0" weight="700" size="1.3rem"/>
      </div>

      <div className="CTA">
          <p className="upper">TAKE A DEEPER LOOK AT THE</p>
           <p className="bottom">2019 S-WORKS LINE UP</p>
           </div>
    </div>
  );
};

export default Hero;
