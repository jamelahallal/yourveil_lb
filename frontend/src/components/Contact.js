import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <span className="section-label">Get in Touch</span>
          <h1 className="contact__title">
            Contact <em>Us</em>
          </h1>
          <p className="contact__subtitle">
            We'd love to hear from you. Reach out with any questions about our
            fabrics, orders, or just to say hello.
          </p>
        </div>

        <div className="contact__layout">
          {/* Info Card */}
          <div className="contact__info-card">
            <div className="contact__info-header">
              <h2 className="contact__info-title">We're Here for You</h2>
              <p className="contact__info-desc">
                Our team is always ready to assist you with care, kindness, and
                a quick response.
              </p>
            </div>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div>
                  <div className="contact__info-label">Location</div>
                  <div className="contact__info-value">Lebanon</div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">📱</div>
                <div>
                  <div className="contact__info-label">WhatsApp</div>
                  <div className="contact__info-value">
                    <a
                      href="https://wa.me/96170000000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">📸</div>
                <div>
                  <div className="contact__info-label">Instagram</div>
                  <div className="contact__info-value">
                    <a
                      href="https://instagram.com/yourveillb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourveillb
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">⏱️</div>
                <div>
                  <div className="contact__info-label">Response Time</div>
                  <div className="contact__info-value">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="contact__divider" />

            <p className="contact__social-title">Follow Our Journey</p>
            <div className="contact__social-links">
              <a
                className="contact__social-link"
                href="https://instagram.com/yourveillb"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                📸
              </a>
              <a
                className="contact__social-link"
                href="https://wa.me/96170000000"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-card">
            {!submitted ? (
              <>
                <h2 className="contact__form-title">Send a Message</h2>
                <p className="contact__form-desc">
                  Whether it's a question, feedback, or an order inquiry — we're
                  always happy to hear from you.
                </p>

                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="firstName"
                        placeholder="Your first name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        className="form-input"
                        type="text"
                        name="lastName"
                        placeholder="Your last name"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone (Optional)</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        placeholder="+961 ..."
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      className="form-select"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      <option value="order">Order Inquiry</option>
                      <option value="fabric">Fabric Question</option>
                      <option value="custom">Custom Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn--primary form-submit">
                    Send Message
                  </button>

                  <p className="contact__form-note">
                    We typically respond within 24 hours ✦
                  </p>
                </form>
              </>
            ) : (
              <div className="contact__success">
                <div className="contact__success-icon">✦</div>
                <h3 className="contact__success-title">Message Received</h3>
                <p className="contact__success-text">
                  Thank you for reaching out. We'll get back to you within 24
                  hours with care and attention.
                  <br />
                  <br />
                  — Your Veil LB Team
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
