import React, { useState } from "react";
import "../styles/main.css";

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
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email required";
    if (formData.phone.length < 10)
      newErrors.phone = "Phone must be 10 digits";

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
    <section className="form-section">
      <div className="form-container">

        <h2>Get Started with Zoho Desk</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />

          <button type="submit" className="primary-btn">
            SUBMIT
          </button>

        </form>

      </div>
    </section>
  );
};

export default FormSection;