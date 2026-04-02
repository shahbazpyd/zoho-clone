import React from "react";
import "../styles/main.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>Digital complaint box for every business</h1>

          <p>
            Checklist for scaling a business often looks like this: bigger
            office, bigger team, bigger deals. Yet in thinking big, the
            customer care that defined the early days is forgotten.
          </p>

          <button className="primary-btn">TRY ZOHO DESK</button>
        </div>

        {/* RIGHT CONTENT (UI Mock) */}
        <div className="hero-right">
          <div className="mock-circle">
            <span>🎧</span>
          </div>

          <div className="floating-box">📞</div>
          <div className="floating-box email">✉️</div>
          <div className="floating-box chat">💬</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;