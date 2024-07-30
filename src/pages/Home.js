import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Event Management Portal</h1>
          <p>Your one-stop solution for organizing and managing events seamlessly.</p>
          <Link to="/event-creation">
            <button className="cta-button">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <section className="features">
        <Link to="/event-creation" className="feature">
          <h2>Easy Event Creation</h2>
          <p>Create events effortlessly with our intuitive interface.</p>
        </Link>
        <Link to="/manage-attendees" className="feature">
          <h2>Manage Attendees</h2>
          <p>Track and manage attendees with ease.</p>
        </Link>
        <Link to="/real-time-updates" className="feature">
          <h2>Real-Time Updates</h2>
          <p>Keep your attendees informed with real-time updates.</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;
