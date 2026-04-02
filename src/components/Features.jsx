import React, { useState } from "react";
import "./Features.css";

const data = [
  {
    title: "Manage all channels from one place",
    content:
      "Emails, texts, DMs, or calls — every customer complaint lands in Zoho Desk's workspace, organised and ready to be solved.",
  },
  {
    title: "Handle volume at scale",
    content:
      "Scale your support operations with automation and smart routing of tickets.",
  },
  {
    title: "Automate repetitive work",
    content:
      "Automate tasks like ticket assignment, notifications, and follow-ups.",
  },
  {
    title: "Track performance",
    content:
      "Measure team performance using built-in analytics and reports.",
  },
  {
    title: "Support in regional languages",
    content:
      "Communicate with customers in multiple regional languages easily.",
  },
];

const Features = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <section class="features">
      <div class="features-header">
        <h2>Customer service software built for the way India serves</h2>
        <p>
          We’ve all seen the complaint box. Simple, sturdy, built for customer
          trust. Its noble purpose still matters, but Indian businesses have
          evolved. Born in rural India, Zoho Desk carries that same spirit of
          service into the digital world.
        </p>
      </div>

      <div class="features-content">
        <div class="accordion">
          <div class="item active">
            <h4>Manage all channels from one place</h4>
            <p>Emails, texts, DMs, or calls—every customer complaint lands in Zoho Desk's workspace, organised and ready to be solved.</p>
          </div>

          <div class="item">
            <h4>Handle volume at scale</h4>
          </div>

          <div class="item">
            <h4>Handle volume at scale</h4>
          </div>

          <div class="item">
            <h4>Automate repetitive work</h4>
          </div>

          <div class="item">
            <h4>Track performance</h4>
          </div>

          <div class="item">
            <h4>Support in regional languages</h4>
          </div>
        </div>

        <div class="feature-image">
          <img src="//www.zohowebstatic.com/sites/zweb/images/desk/zoho-desk-cmb-support-in-regional-languages.svg" />
        </div>
      </div>
    </section>
  );
};

export default Features;
