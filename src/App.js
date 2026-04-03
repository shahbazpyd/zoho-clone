import React, { useState, useRef } from "react";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Features from "./components/Features";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import FormSection from "./components/FormSection";
// import Footer from "./components/Footer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleTryZoho = () => {
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <Hero onTryZoho={handleTryZoho} />
      <Trusted />
      <Features />
      <WhyChoose />
      <CTA />
      <div ref={formRef}>
        {showForm && <FormSection />}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;