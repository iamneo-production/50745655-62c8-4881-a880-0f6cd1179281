import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="/About" className="logo"><b>NovaGuard Insurance</b></a>
          <ul className="links">
            <a href='/Home'><li>Home</li></a>
            <a href="/About"><li>About Us</li></a>
            <a href='/Feed'><li>Feedback</li></a>
            <a href='/Login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>Looking For an Insurance ?</h1>
            <p>NovaGuard offers various life insurance products that provide financial protection to policyholders and their families in the event of unfortunate circumstances such as death, disability, or critical illness...</p>
            <a href='/Moreinfo'><button>More Info</button></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
