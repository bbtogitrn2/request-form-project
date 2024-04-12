import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, then navigate to the home page
    navigate('/home');
  };

  return (
    <div className="login-wrapper">
      <div className="login-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <div className="helper-links">
            <button type="button" onClick={() => navigate('/register')}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
