import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef();

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Debug: Log the credentials (remove after testing)
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", EMAILJS_PUBLIC_KEY);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      console.log("EmailJS Success:", result);

      if (result.status === 200) {
        setFormSubmitted(true);
        formRef.current.reset();
      }
    } catch (err) {
      console.error("EmailJS Error Details:", err);

      // Better error messages
      if (err.text === "Invalid template ID") {
        setErrorMessage(
          "Invalid template configuration. Please check EmailJS setup.",
        );
      } else if (err.text === "Invalid service ID") {
        setErrorMessage("Invalid email service configuration.");
      } else if (err.text === "Unauthorized") {
        setErrorMessage("Authentication failed. Please check your public key.");
      } else {
        setErrorMessage(
          `Failed to send message: ${err.text || "Unknown error"}`,
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setErrorMessage("");
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">&lt;contact /&gt;</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-grid">
          <div className="card reveal">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              Send a Message
            </h3>
            <div
              className={`form-fields ${formSubmitted ? "hide" : ""}`}
              id="form-fields"
            >
              <form ref={formRef} id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="What would you like to discuss?"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                {errorMessage && (
                  <div
                    style={{
                      color: "#ff4444",
                      fontSize: "0.8rem",
                      marginBottom: "1rem",
                      padding: "0.5rem",
                      background: "rgba(255,68,68,0.1)",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a10 10 0 1 0 10 10" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Transmit Message
                    </>
                  )}
                </button>
              </form>
            </div>
            <div
              className={`success-msg ${formSubmitted ? "show" : ""}`}
              id="success-msg"
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(0,245,255,.1)",
                  border: "1px solid rgba(0,245,255,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  boxShadow: "0 0 20px rgba(0,245,255,.3)",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00f5ff"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#fff",
                  marginBottom: ".5rem",
                }}
              >
                Message Transmitted
              </p>
              <p
                style={{
                  fontSize: ".85rem",
                  color: "var(--c-muted)",
                  marginBottom: "1rem",
                }}
              >
                I'll get back to you soon!
              </p>
              <button
                onClick={resetForm}
                style={{
                  fontSize: ".72rem",
                  fontFamily: "var(--font-mono)",
                  color: "rgba(0,245,255,.7)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Send another message
              </button>
            </div>
          </div>
          <div className="contact-info reveal reveal-delay-1">
            <div className="card">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-meta">Email</div>
                  <div className="contact-val">
                    <a href="mailto:mursalabbas023@gmail.com">
                      mursalabbas023@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="contact-item">
                <div
                  className="contact-icon"
                  style={{
                    background: "rgba(124,58,237,.07)",
                    borderColor: "rgba(124,58,237,.2)",
                    color: "#7c3aed",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-meta">Location</div>
                  <div className="contact-val">Pakistan</div>
                </div>
              </div>
            </div>
            <div className="status-card">
              <div className="status-head">
                <span className="status-dot"></span>
                <span className="status-label">Status</span>
              </div>
              <p className="status-title">Open to Projects</p>
              <p className="status-desc">
                Available for freelance projects, collaborations, or just a
                conversation about web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;