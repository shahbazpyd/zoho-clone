import React, { useState } from "react";
import "./FormSection.css";
import zoho_logo from "../assets/form_zoho.png";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.phone.length < 10) newErrors.phone = "Phone must be 10 digits";

    return newErrors;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Form Submitted Successfully!");

      // RESET
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
      });
    }
  };

  return (
    <section class="form-section">
      <div class="form-card">
        <div class="form-left">
          <img src={zoho_logo} alt="logo" />
          <h2>Experience unwavering stability</h2>
        </div>

        <div class="form-right">
          <label>Name*</label>
          <input type="text" placeholder="What do we call you?" />

          <label>Email address*</label>
          <input
            type="email"
            placeholder="Please enter your business email ID"
          />

          <label>Phone</label>
          <input type="text" placeholder="+91 Phone" />

          <button class="submit-btn">SUBMIT REQUEST</button>

          <p class="privacy">
            By submitting this form, you agree to the processing of personal
            data according to our Privacy Policy.
          </p>
        </div>
      </div>

      <div class="footer">
        <p>Terms of Service | Privacy Policy</p>
        <p>© 2026, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default FormSection;
