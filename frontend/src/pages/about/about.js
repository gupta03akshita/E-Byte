// src/About.js

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Welcome to E-Waste Recycle Hub</h1>
      <p className="text-center mb-5">
        We’re the leading provider of comprehensive waste management services in India, ensuring services ranging from collection and disposal of waste to recycling and generation of renewable energy. As a pioneer in asset management and electronics recycling, we have been delivering world-class services to ensure discarded electronic items are efficiently managed, disposed of, and recycled.
      </p>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <img 
              src="https://ewasterecyclehub.com/wp-content/uploads/2018/07/a.jpg" 
              alt="E-Waste Recycling"
              className="card-img-top" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">Our Services</h2>
              <p className="card-text">
                Our meticulously devised and carefully sorted dynamic portfolio of services includes the following:
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-recycle text-success me-2"></i>
                  Comprehensive and eco-friendly recycling services
                </li>
                <li>
                  <i className="fas fa-gem text-success me-2"></i>
                  Metal extraction solution
                </li>
                <li>
                  <i className="fas fa-sitemap text-success me-2"></i>
                  End-to-end E-Waste recycling
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <img 
              src="https://ewasterecyclehub.com/wp-content/uploads/2018/07/facebook.jpg" 
              alt="Recycling Facility"
              className="card-img-top" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">Why Electronic Waste Management?</h2>
              <p className="card-text">
                Electronic waste (e-waste) is one of the fastest-growing pollution evils worldwide. It has been proved that neglecting meticulous management of disposal protocols of toxic substances has the potential to contaminate the environment and threaten human health.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <img 
              src="https://ewasterecyclehub.com/wp-content/uploads/2024/05/repair7x5.png" 
              alt="E-Waste Items"
              className="card-img-top" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">What is E-waste?</h2>
              <p className="card-text">
                Electronic waste (e-waste) comprises waste electronics/electrical goods that are proven unfit for their originally anticipated usage. Items that have expired or reached their end of life are also categorized under this waste. These usually include items like computers, monitors, servers, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <img 
              src="https://recykal.com/wp-content/uploads/2024/02/fdewqfwqefwq-1.png" 
              alt="E-Waste Management Process"
              className="card-img-top" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">Is e-waste dangerous?</h2>
              <p className="card-text">
                Although not hazardous in their original state, dismantling and processing of these items pose serious hazards to human health and the environment. Electronics products must be appropriately processed prior to disposal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">What to Do?</h2>
          <p className="card-text">
            What do you do about your old smartphone or laptop when you purchase a new one? Have you thought about disposing of them the right way to avoid causing harm to the environment? Do you mind recycling them to help the economy and give these items a new lease of life?
          </p>
          <p className="card-text">
            That’s what we do! Collection and recovery of waste is one of the major challenges in the present age. We help manage E-Waste in a sustainable and greener way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
