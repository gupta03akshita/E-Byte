// src/components/UserDashboard.js

import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { FaUserCircle, FaUpload, FaComments, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error:', error);
        navigate('/login'); // Redirect to login if unauthorized
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Handle feedback submission
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ feedback })
      });

      if (response.ok) {
        setMessage('Feedback submitted successfully!');
        setFeedback('');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while submitting feedback.');
    }
  };

  if (loading) {
    return(
    <div className="container mt-5 d-flex justify-content-center">
   
    
    <Spinner animation="border" className='text-success' />
    </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome, {user.name}!</h2>
      
      <Card className="mb-4">
        <Card.Body>
          <h5 className="text-center"><FaUserCircle /> Your Profile</h5>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
          <Button variant="primary" onClick={() => navigate('/update-profile')}>
            Update Profile
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="text-center"><FaUpload /> Scan Waste</h5>
          <Button variant="success" onClick={() => navigate('/scan-waste')}>
            Start Scanning
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5 className="text-center"><FaComments /> Submit Feedback</h5>
          <Form onSubmit={handleFeedbackSubmit}>
            <Form.Group controlId="feedback">
              <Form.Control
                as="textarea"
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback here..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit Feedback
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {message && <Alert variant="info">{message}</Alert>}
      
      <Card className="mb-4">
        <Card.Body>
          <h5 className="text-center"><FaCheckCircle /> Current Request Status</h5>
          <Button variant="info" onClick={() => navigate('/current-status')}>
            Check Status
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDashboard;
