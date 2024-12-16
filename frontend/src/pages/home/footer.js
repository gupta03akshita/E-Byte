import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        {/* Upper Section with Features, Explore, etc. */}
        <Row className="justify-content-center text-center text-md-start">
          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Features</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Curved text generator</a></li>
              <li><a href="#" className="text-light text-decoration-none">Photo effects</a></li>
              <li><a href="#" className="text-light text-decoration-none">Image enhancer</a></li>
              <li><a href="#" className="text-light text-decoration-none">Add text to photos</a></li>
              <li><a href="#" className="text-light text-decoration-none">Video trimmer</a></li>
              <li><a href="#" className="text-light text-decoration-none">Convert videos to MP4</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Explore</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Design ideas</a></li>
              <li><a href="#" className="text-light text-decoration-none">Custom prints</a></li>
              <li><a href="#" className="text-light text-decoration-none">Color palette generator</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Apps</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Community</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Online communities</a></li>
              <li><a href="#" className="text-light text-decoration-none">Creators</a></li>
              <li><a href="#" className="text-light text-decoration-none">Developers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Affiliates program</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Download</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">iOS</a></li>
              <li><a href="#" className="text-light text-decoration-none">Android</a></li>
              <li><a href="#" className="text-light text-decoration-none">Windows</a></li>
              <li><a href="#" className="text-light text-decoration-none">Mac</a></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h6 className="text-uppercase mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms and Privacy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Sales</a></li>
            </ul>
          </Col>
        </Row>

        {/* Follow Us Section */}
        <Row className="mt-4 text-center">
          <Col>
            <h6 className="text-uppercase mb-3">Follow Us</h6>
            <div>
              <a href="https://facebook.com" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" className="text-light me-3">
                <FaPinterest />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Text Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
