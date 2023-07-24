import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to NovaGuard Life Insurance</h1>
      <p>Protecting Your Future, Ensuring Peace of Mind</p>
      <a href='/signup'><button className="cta-btn">Register Now</button></a>
    </div>
  );
};

export default HomePage;
