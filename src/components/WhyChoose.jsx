import React from "react";
import "../styles/main.css";
import why_first from "../assets/why_first.png";
import why_second from "../assets/why_second.png";
import why_third from "../assets/why_third.png";
import why_fourth from "../assets/why_fourth.png";


// IMPORT SVG ICONS
// import { FiSettings } from "react-icons/fi";
// import { FaRupeeSign } from "react-icons/fa";
// import { FiFileText } from "react-icons/fi";
// import { FiShield } from "react-icons/fi";

const WhyChoose = () => {
  return (
    <section class="why">
      <h2>Why choose Zoho Desk?</h2>

      <div class="why-grid">
        <div class="why-item">
          <div class="icon"><img src={why_first} alt="" /></div>
          <h4>Quick implementation</h4>
          <p>Dedicated onboarding program for faster implementation.</p>
        </div>

        <div class="why-item">
          <div class="icon"><img src={why_second} alt="" /></div>
          <h4>No hidden costs</h4>
          <p>Upfront pricing plans so you only pay what’s quoted.</p>
        </div>

        <div class="why-item">
          <div class="icon"><img src={why_third} alt="" /></div>
          <h4>Simple contracts</h4>
          <p>Adjust your plan anytime with no forced renewals.</p>
        </div>

        <div class="why-item">
          <div class="icon"><img src={why_fourth} alt="" /></div>
          <h4>Always secure</h4>
          <p>Built with top-grade security and safe hosting.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
