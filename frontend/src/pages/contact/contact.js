// src/Contact.js

import React from 'react';


const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5">
        If you have any questions, suggestions, or requests regarding our e-waste pickup services, feel free to reach out to us!
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Get in Touch</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-success">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Our Location</h2>
              <p>
                E-Waste Recycle Hub <br />
                123 Green Lane <br />
                Eco City, EC 12345 <br />
                <strong>Email:</strong> info@ewasterecyclehub.com <br />
                <strong>Phone:</strong> +1 (234) 567-8901
              </p>
              <h4>Follow Us</h4>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-facebook fa-2x text-primary"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-twitter fa-2x text-info"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="me-3">
                <i className="fab fa-instagram fa-2x text-danger"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
