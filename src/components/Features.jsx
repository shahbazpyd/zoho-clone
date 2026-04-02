import React, { useState } from "react";
import "../styles/main.css";

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
    <section className="features">
      <div className="features-container">
        
        {/* LEFT SIDE */}
        <div className="accordion">
          {data.map((item, index) => (
            <div key={index} className="accordion-item">
              
              <div
                className="accordion-title"
                onClick={() => toggleItem(index)}
              >
                <h3>{item.title}</h3>
                <span>{activeIndexes.includes(index) ? "−" : "+"}</span>
              </div>

              <div
                className={`accordion-content ${
                  activeIndexes.includes(index) ? "open" : ""
                }`}
              >
                <p>{item.content}</p>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE MOCK */}
        <div className="features-preview">
          <div className="preview-box">
            <p>📊 UI Preview Area</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;