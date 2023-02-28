import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const formatPhoneNumber = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, "");
    if (phoneNumber.length === 10) {
      phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
    e.target.value = phoneNumber;
    setPhone(phoneNumber);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^.{1,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const messageRegex = /^.{0,500}$/;

    if (
      nameRegex.test(name) &&
      emailRegex.test(email) &&
      phoneRegex.test(phone) &&
      messageRegex.test(message)
    ) {
      // send email to beltz.a@outlook.com with the submitted information
      alert("Your message has been submitted!");
    } else {
      alert("Please enter valid information in all fields.");
    }
  };

  return (
    <div className="form-container">
      <h2>Book Consultation Now</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-input">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Please type your name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="contact-input">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Please type your email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="contact-input">
          <label htmlFor="phone">Phone:</label>
          <input
            placeholder="Please type your phone #"
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            onInput={formatPhoneNumber}
          />
        </div>
        <div className="contact-input" style={{ position: "relative" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Please type a brief message"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          <span
            className={`${
              charCount > 500 ? "char-counter-red" : "char-counter"
            }`}
          >
            {charCount}/500
          </span>
        </div>
        <button className="contact-submit-btn btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
