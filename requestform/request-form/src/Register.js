import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here, then navigate to the login page
    navigate('/login');
  };

  return (
    <div className="register-wrapper">
      <div className="register-panel">
        <form className="register-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Create Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <div className="helper-links">
            <button type="button" onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
