import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaMapMarkerAlt />
          <h4>Address</h4>
          <p>1196 Sadashiv Peth, Pune, Maharashtra</p>
        </div>

        <div className="contact-card">
          <FaPhone />
          <h4>Phone</h4>
          <p>+91 8208256708</p>
        </div>

        <div className="contact-card">
          <FaEnvelope />
          <h4>Email</h4>
          <p>rahulwadadekar@gmail.com</p>
        </div>

      </div>
    </section>
  );
}
