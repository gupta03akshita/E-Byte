import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Testimonials = () => {
  const[data,setdata]=useState(null);
  useEffect(()=>{
    const postFeedback = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/getFeedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Add your request body data here if needed
          }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // Assuming the response is in JSON format
        const data = await response.json();
        
        // Check if the "success" field is true
        if (data.success) {
          console.log('Feedback:', data);
          setdata(data.feedback)
          // Do something with the feedback (e.g., set state in React)
        } else {
          console.error('Error in response:', data);
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    
    postFeedback();

  },[])
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>

      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

        {/* Carousel Items */}
        <div className="carousel-inner">

          {/* Testimonial 1 */}
          <div className="carousel-item active">
            <div className="d-flex flex-column align-items-center">
            <i className="fas fa-user-circle fa-4x text-muted mb-3"></i>
              <i className="fas fa-quote-left fa-2x text-muted mb-3"></i>
              <p className="testimonial-text text-center px-3">
                "E-Byte provided exceptional service in helping us dispose of our electronic waste safely. Their team was professional and made the process easy for us."
              </p>
              <h5 className="mt-3">John Doe</h5>
              <p className="text-muted">CEO, Tech Solutions</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center">
            <i className="fas fa-user-circle fa-4x text-muted mb-3"></i>
              <i className="fas fa-quote-left fa-2x text-muted mb-3"></i>
              <p className="testimonial-text text-center px-3">
                "Our office was cluttered with old electronics, but E-Byte's collection drive made it easy to clear up the space. Fantastic service and environmentally conscious!"
              </p>
              <h5 className="mt-3">Jane Smith</h5>
              <p className="text-muted">Manager, Green Solutions Inc.</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Robert Brown"
                className="rounded-circle mb-3"
              />
              <i className="fas fa-quote-left fa-2x text-muted mb-3"></i>
              <p className="testimonial-text text-center px-3">
                "I highly recommend E-Byte for their awareness programs. They are making a real difference in educating people about the importance of proper e-waste disposal."
              </p>
              <h5 className="mt-3">Robert Brown</h5>
              <p className="text-muted">Director, Eco-Friendly Co.</p>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
};

export default Testimonials;
