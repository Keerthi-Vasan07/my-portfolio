import React, { useState } from "react";
import { Element, Link } from "react-scroll";
import ShinyText from "../../assets/ShinyText/ShinyText.jsx";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ShinyText Nav Link */}
      <div
        style={{
          position: "fixed",
          top: "0.2vh",
          left: "80vw",
          width: "15vw",
          height: "5vh",
          padding: "1vw",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <Link to="contact" smooth={true} duration={500} spy={true} offset={-80}>
          <ShinyText text="contact" disabled={false} speed={3} />
        </Link>
      </div>

      {/* Contact Section */}
      <Element name="contact" className="contact-section">
        {/* Left Form */}
        <div className="contact-container">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send</button>
          </form>

          <div className="contact-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:your-email@example.com">Email Me</a>
          </div>
        </div>

        {/* Right 3D Model */}
        <div className="spline-embed">
          <iframe
            src="https://my.spline.design/deskcopy-P4rKnt0ZlvK8S94DcAuhIT60/"  // Replace this URL with your own
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="3D Contact"
          ></iframe>
          <div className="watermark-cover"></div>
        </div>
      </Element>
    </>
  );
};

export default Contact;
