import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can clear token or perform other logout actions here
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to JWT project</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={() => navigate('/register')}>Go to Register</button>
      </div>
    </div>
  );
};

export default Dashboard;
