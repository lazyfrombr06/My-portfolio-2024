import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
         <style>
        {`
          .container {
            text-align: center;
            margin-top: 10%;
            color: #333;
            font-family: Arial, sans-serif;
          }

          .error-code {
            font-size: 6rem;
            margin: 0;
            color: #ff6b6b;
          }

          .error-message {
            font-size: 1.5rem;
            margin: 0.5rem 0;
            color: #777;
          }

          .home-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #ff6b6b;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .home-button:hover {
            background-color: #ff4949;
          }
        `}
      </style>
      <div className="animation">
        <h1 className="error-code">404</h1>
        <p className="error-message">Page Not Found</p>
      </div>
      <button className="home-button" onClick={handleReturnHome}>
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
