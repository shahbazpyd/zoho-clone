import React from "react";
import "../styles/main.css";

// IMPORT SVG ICONS
import { FiSettings } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { FiShield } from "react-icons/fi";

const WhyChoose = () => {
  return (
    <section className="why">
      <div className="why-container">

        <h2>Why choose Zoho Desk?</h2>

        <div className="why-grid">

          <div className="why-card">
            <FiSettings className="icon" />
            <h3>Quick implementation</h3>
            <p>
              Dedicated onboarding program for faster implementation than most help desk software.
            </p>
          </div>

          <div className="why-card">
            <FaRupeeSign className="icon" />
            <h3>No hidden costs</h3>
            <p>
              Upfront pricing plans so you only pay what’s quoted and get every rupee’s worth.
            </p>
          </div>

          <div className="why-card">
            <FiFileText className="icon" />
            <h3>Simple contracts</h3>
            <p>
              Adjust your plan any time and enjoy easy cancellations with no forced renewals.
            </p>
          </div>

          <div className="why-card">
            <FiShield className="icon" />
            <h3>Always secure</h3>
            <p>
              Built with top-grade security, your data stays protected in world-class facilities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;