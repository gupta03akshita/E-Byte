import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './pages/home/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/Services';
import Contact from './pages/contact/contact';
import Pick from './pages/pick/pick';
import Blog from './pages/blog/Blog';
import Auth from './pages/auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from "./pages/Dashboard/Dashboard"
import FeedbackPage from './pages/feedback/Feedback';
import Worker from "./pages/worker/Worker"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route path="/worker" element={<PrivateRoute element={<Worker />} isAuthenticated={isAuthenticated} />} />
        <Route path="/" element={<PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} />} />
        <Route path="/feedback" element={<PrivateRoute element={<FeedbackPage />} isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<PrivateRoute element={<About />} isAuthenticated={isAuthenticated} />} />
        <Route path="/services" element={<PrivateRoute element={<Services />} isAuthenticated={isAuthenticated} />} />
        <Route path="/contact" element={<PrivateRoute element={<Contact />} isAuthenticated={isAuthenticated} />} />
        <Route path="/schedule-pickup" element={<PrivateRoute element={<Pick />} isAuthenticated={isAuthenticated} />} />
        <Route path="/blogs" element={<PrivateRoute element={<Blog />} isAuthenticated={isAuthenticated} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
