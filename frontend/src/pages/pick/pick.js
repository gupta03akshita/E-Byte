import React, { useState } from 'react';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
// import './ScanWasteForm.css'; // Importing custom CSS for animations

const ScanWasteForm = () => {

  const [formData, setFormData] = useState({
    age: '',
    scrap: '',
    price: '',
    area: '',
    pincode: '',
    nearbyPlace: '',
    wasteAmount: '',
  });

  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false); // For animation

  const handleImageDetection = async () => {
    const url = "https://detect.roboflow.com/e-waste-dataset-r0ojc/43";
    const apiKey = "Bvx0pTIRbRYiKT8pqFyq";
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcHK5DkIKDNtuQN_gjEC4fjCjvGqMVsoLmg&s";
  
    try {
      const response = await fetch(`${url}?api_key=${apiKey}&image=${encodeURIComponent(imageUrl)}`, {
        method: "POST"
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); // Handle the detection result

      // Trigger success animation
      setSuccessMessage("Image uploaded successfully!");
      setShowSuccessAnimation(true);
      setTimeout(() => setShowSuccessAnimation(false), 3000); // Hide animation after 3 seconds
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage("Failed to process the form.");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // Prevent default form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page navigation

    setErrorMessage('');
    setSuccessMessage('');

    try {
      await handleImageDetection();
    } catch (error) {
      console.error("Error processing form:", error.message);
      setErrorMessage("Failed to process the form.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Scan Waste</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Age
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Enter your age"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Scrap
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="scrap"
              value={formData.scrap}
              onChange={handleChange}
              required
              placeholder="Enter type of scrap"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Enter price"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Area
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              placeholder="Enter your area"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Pincode
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              placeholder="Enter your pincode"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Nearby Place
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="nearbyPlace"
              value={formData.nearbyPlace}
              onChange={handleChange}
              required
              placeholder="Enter a nearby place"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Waste Amount
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="wasteAmount"
              value={formData.wasteAmount}
              onChange={handleChange}
              required
              placeholder="Enter waste amount"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Upload Images
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              multiple
              required
            />
          </Col>
        </Form.Group>

        <Button variant="success" type="submit">
          Scan Waste
        </Button>

        {showSuccessAnimation && (
          <div className="success-animation">
            <h3>Upload Successful!</h3>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ScanWasteForm;
