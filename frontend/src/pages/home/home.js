import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Testimonials from './testimonals';
import axios from "axios"

const Home = () => {


 
  const navigate=useNavigate()
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5" style={{backgroundImage:"url('https://img.freepik.com/premium-photo/old-electronic-devices-recycle-logo-e-waste-recycling-concept_878453-6575.jpg')"}}>
  
        <div className="container">
          <h1 className="display-4" style={{mixBlendMode:"difference"}}>Responsible E-Waste Recycling</h1>
          <p className="lead" style={{mixBlendMode:"difference"}}>
            Your one-stop solution for safe and eco-friendly disposal of electronic waste.
          </p>
          <a  className="btn btn-success btn-lg mt-3" onClick={()=>{navigate("/services")}}>Learn More</a>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-5">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">Collection</h3>
                  <p className="card-text">
                    We provide free and convenient e-waste collection services at your doorstep.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">Recycling</h3>
                  <p className="card-text">
                    We responsibly recycle your old electronics, ensuring minimal environmental impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title">Data Destruction</h3>
                  <p className="card-text">
                    Our certified data destruction process ensures your sensitive information stays secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

        {/* Card 1: We Collect */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-recycle fa-3x mb-3 text-success"></i>
              <h5 className="card-title">We Collect</h5>
              <p className="card-text">
                We methodically collect the electronic and electric waste materials from the client sites for further disposal.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: We Dispose */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-dumpster fa-3x mb-3 text-danger"></i>
              <h5 className="card-title">We Dispose</h5>
              <p className="card-text">
                We diligently dispose of the hazardous materials from the sorting, keeping environmental safety on top.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: We Sort */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-sort fa-3x mb-3 text-primary"></i>
              <h5 className="card-title">We Sort</h5>
              <p className="card-text">
                Our world-class system of sorting the collected E-Waste ensures proper management of scrapped materials.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: We Certify */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-certificate fa-3x mb-3 text-warning"></i>
              <h5 className="card-title">We Certify</h5>
              <p className="card-text">
                Once we have disposed of the E-Waste, as a token of appreciation, we felicitate our clients with certifications.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>



      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-5">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <h4>Eco-Friendly Solutions</h4>
              <p>We follow environmentally responsible practices, ensuring zero waste to landfill.</p>
            </div>
            <div className="col-md-4">
              <h4>Certified Processes</h4>
              <p>Our recycling processes are certified by regulatory authorities, ensuring compliance with laws.</p>
            </div>
            <div className="col-md-4">
              <h4>Convenience & Reliability</h4>
              <p>Our service is fast, convenient, and trusted by thousands of individuals and businesses.</p>
            </div>
          </div>
        </div>
      </section>


      <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

        {/* Card 1: E-Waste Collection Drives */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-trash-alt fa-3x mb-3 text-success"></i>
              <h5 className="card-title">E-Waste Collection Drives</h5>
              <p className="card-text">
                We periodically organize E-Waste collection drives, where we encourage people to dispose of expired products.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Awareness Programs */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-bullhorn fa-3x mb-3 text-warning"></i>
              <h5 className="card-title">Awareness Programs</h5>
              <p className="card-text">
                We regularly conduct E-Waste awareness programs in schools, colleges, offices, and residential societies.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Trade Fairs and Exhibitions */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-store-alt fa-3x mb-3 text-info"></i>
              <h5 className="card-title">Trade Fairs and Exhibitions</h5>
              <p className="card-text">
                We participate in Trade Fairs to showcase our services and share information on E-Waste management.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Seminars and Webinars */}
        <div className="col">
          <div className="card h-100 text-center">
            <div className="card-body">
              <i className="fas fa-chalkboard-teacher fa-3x mb-3 text-primary"></i>
              <h5 className="card-title">Seminars and Webinars</h5>
              <p className="card-text">
                We regularly hold on-ground seminars and online webinars to discuss various aspects of E-Waste management.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

      {/* Call to Action Section */}
      <section className="bg-success text-light text-center py-5">
        <div className="container">
          <h2 className="mb-3">Ready to Recycle?</h2>
          <p className="lead mb-4">
            Join us in reducing electronic waste and protecting the planet. Book a free pickup today!
          </p>
          <a  className="btn btn-light btn-lg" onClick={()=>{navigate("/schedule-pickup")}}>Book a Pickup</a>
        </div>
      </section>
    <Testimonials/>
    </div>

  );
};

export default Home;
