import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Auth = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Single object to manage form fields
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    role: 'user', // default role
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = isLogin
      ? 'http://127.0.0.1:5000/auth/user/login'
      : 'http://127.0.0.1:5000/auth/user/signup';

    const { username, email, password, name, role } = formState; // Destructure state object
    if(role=="Worker" || role=="worker"){
      console.log("hii")
      setIsAuthenticated(true);
      navigate("/worker")
      return;
    }

    try {
      console.log(username);
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
         // This will send cookies with the request
        body: JSON.stringify({
          username,
          email,
          password,
          ...(isLogin ? {} : { name, role }), // Include name and role only for signup
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        setIsAuthenticated(true); // Update authentication state
        navigate('/'); // Redirect on successful login/signup
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '15px' }}>
        <Card.Body>
          <h3 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h3>
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaUser className="me-2" />
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaUser className="me-2" />
                    Role
                  </Form.Label>
                  <Form.Select
                    name="role"
                    value={formState.role}
                    onChange={handleInputChange}
                    required={!isLogin}
                  >
                    <option value="user">User</option>
                    <option value="worker">Worker</option>
                  </Form.Select>
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Username
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formState.username}
                onChange={handleInputChange}
                required
                placeholder="Enter your username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <FaEnvelope className="me-2" />
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              {isLogin ? <FaSignInAlt className="me-2" /> : <FaUserPlus className="me-2" />}
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <div className="mt-3 text-center">
              {isLogin ? (
                <p>
                  Don't have an account?{' '}
                  <Button variant="link" className="text-success" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </Button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <Button variant="link" className="text-success" onClick={() => setIsLogin(true)}>
                    Login
                  </Button>
                </p>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Auth;