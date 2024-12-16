import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

const FeedbackPage = () => {
  const feedbackRef = useRef('');  // Replacing useState with useRef
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Get the current value from the ref
    const feedback = feedbackRef.current.value;

    // Assuming you have an endpoint to send feedback
    try {
      const response = await fetch('http://localhost:5000/user/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         credentials: 'include',
        body: JSON.stringify({" feedback":"amazing" }),
      });

      if (response.ok) {
        setSubmitted(true);
        feedbackRef.current.value = '';  // Clear the textarea after submission
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Error submitting feedback');
      }
    } catch (error) {
      setError('Error submitting feedback. Please try again later.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '600px', padding: '20px', borderRadius: '15px' }}>
        <Card.Body>
          <h3 className="text-center mb-4">Feedback</h3>
          
          {submitted && <Alert variant="success">Thank you for your feedback!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                ref={feedbackRef}  // Use ref instead of value and onChange
                placeholder="Enter your feedback message"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Submit Feedback
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeedbackPage;
