import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ebyte from "../../assests/ebyte.png";

const Navbar = () => {
  const navigate = useNavigate();
  const style = {
    height: "40px",
    filter: 'invert(1)',
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(false); // Close the navbar when an item is clicked
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., remove tokens, clear user state)
    localStorage.removeItem('token'); // Example: clear token from local storage
    // You may want to also reset any user context or state if you're using Context API or Redux
    navigate('/login'); // Redirect to login page after logout
    handleNavClick(); // Close the navbar
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success text-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" onClick={() => { navigate("/"); }}>
            <img src={ebyte} style={style} alt="Logo" />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNav} // Toggle navbar state
            aria-controls="navbarNavDropdown" 
            aria-expanded={isNavOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} justify-content-center`} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" onClick={() => { navigate("/"); handleNavClick(); }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" onClick={() => { navigate("/services"); handleNavClick(); }}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" onClick={() => { navigate("/about"); handleNavClick(); }}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" onClick={() => { navigate("/contact"); handleNavClick(); }}>Contact</a>
              </li>
            
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-light" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" onClick={() => { navigate("/blogs"); handleNavClick(); }}>Blogs</a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => { navigate("/feedback"); handleNavClick(); }} >Feedback</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" onClick={handleLogout}>Logout</a> {/* Logout link */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
