import React from "react";
import "./Hero.css";
import heroImg from "../assets/hero.png";
import middleLogo from "../assets/middle_logo.png";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-image">
          <img src={heroImg} alt="hero" className="left-logo"/>
          <img src={middleLogo} alt="middle-logo" className="middle-logo" />
        </div>
      <div className=" hero-wrapper">
        {/* CENTER IMAGE */}
        

        {/* TOP LEFT LOGO */}
        

        {/* CONTENT */}
        <div className="hero-content">

          {/* LEFT */}
          <div className="hero-left">
            <h1>Digital complaint box for every business</h1>
          </div>

          {/* RIGHT */}
          <div className="hero-right-text">
            <p>
              Checklist for scaling a business often looks like this: bigger office,
              bigger team, bigger deals. Yet in thinking big, the customer care that
              defined the early days is forgotten. But Indian businesses know how
              to care.
            </p>

            <button className="primary-btn">TRY ZOHO DESK</button>
          </div>

        </div>

        {/* CENTER IMAGE */}
        {/* <div className="hero-image">
          <img src={heroImg} alt="hero" />
        </div> */}

       

      

      </div>
    </section>
  );
};

export default Hero;