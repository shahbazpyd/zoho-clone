import React from "react";
import "./Trusted.css";

// IMPORT LOGOS
import godrej from "../assets/logos/godrej.png";
import creditaccess from "../assets/logos/creditaccess.png";
import strata from "../assets/logos/strata.png";
import icici from "../assets/logos/icici.png";
import india from "../assets/logos/india.png";
import youtube from "../assets/video-thumb.png"

const Trusted = () => {
  return (
    <section class="trusted-section">
      <button class="meet-btn">Meet Zoho Desk</button>
      <div class="trusted-card">
        <div class="trusted-top">
          <h3>
            Trusted by <br /> 100,000+ businesses globally
          </h3>

          <div class="trusted-right">
            <div class="video-box">
              <img src={youtube} />
              <div class="play-btn">▶</div>
            </div>
          </div>
        </div>
        <div class="logos">
          <img src={godrej} />
          <img src={creditaccess} />
          <img src={strata} />
          <img src={icici} />
          <img src={india} />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
