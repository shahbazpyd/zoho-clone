import React from "react";
import "../styles/main.css";

// IMPORT LOGOS
import godrej from "../assets/logos/godrej.png";
import creditaccess from "../assets/logos/creditaccess.png";
import strata from "../assets/logos/strata.png";
import icici from "../assets/logos/icici.png";
import india from "../assets/logos/india.png";

const Trusted = () => {
  return (
    <section className="trusted">
      <div className="trusted-container">
        
        {/* LEFT */}
        <div className="trusted-left">
          <h3>Trusted by</h3>
          <h2>100,000+ businesses globally</h2>

          <div className="logos">
            <img src={godrej} alt="godrej" />
            <img src={creditaccess} alt="creditaccess" />
            <img src={strata} alt="strata" />
            <img src={icici} alt="icici" />
            <img src={india} alt="india" />
          </div>
        </div>

        {/* RIGHT (VIDEO MOCK) */}
        <div className="trusted-right">
          <div className="video-box">
            <span className="play-btn">▶</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Trusted;