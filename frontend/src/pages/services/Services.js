// src/Services.js

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const servicesData = [
  {
    title: 'E-Waste Collection',
    description: 'We provide hassle-free e-waste collection services right from your doorstep, ensuring safe disposal.',
    icon: 'fas fa-recycle',
  },
  {
    title: 'E-Waste Disposal',
    description: 'Our team ensures that e-waste is disposed of in an environmentally friendly manner, following all regulations.',
    icon: 'fas fa-trash-alt',
  },
  {
    title: 'Recycling Services',
    description: 'We recycle various electronic components, ensuring that reusable materials are recovered and reused.',
    icon: 'fas fa-recycle',
  },
  {
    title: 'Data Destruction',
    description: 'Secure data destruction services to protect your information before recycling your electronic devices.',
    icon: 'fas fa-user-shield',
  },
];

const Services = () => {
    const items = [
        "Desktop Computers",
        "Laptop Computers",
        "Hard Drives",
        "Notebooks, tablets, Handheld devices",
        "Servers",
        "Consumer Electronics",
        "DVD Players",
        "Fax Machines, Scanners, Postal machines",
        "CRT monitors, LED, LCD and all monitors",
        "Medical Electronics",
        "All Batteries, any kind or size",
        "LCD displays",
        "Audio Video Equipment",
        "Cell Phones",
        "Connectors, wiring, cabling, Metal Racks",
        "UPS equipment",
        "Television Production Equipment",
        "Stereos",
        "Server Racks",
        "IT equipment",
        "Radios, Calculators",
        "Office Copiers",
        "Telecommunication Equipment"
      ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <p className="text-center mb-5">
        We offer a range of comprehensive e-waste management services to help you dispose of your electronic waste responsibly.
      </p>
      <div className="row">
        {servicesData.map((service, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card shadow-sm border-success text-center">
              <div className="card-body">
                <i className={`${service.icon} fa-3x text-success mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button className="btn btn-success">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    

      <div className="container my-5">
      <h2 className="text-center mb-4">Items We Take</h2>
      <p className="text-center mb-5">
        We accept a wide range of electronic waste for recycling. Here’s a list of items we take:
      </p>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm border-success text-center">
              <div className="card-body">
                <h5 className="card-title">{item}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
