import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LearningHub</h1>
          <p>Learn skills, earn certificates, and grow your career.</p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn">Explore Courses</Link>
            <Link to="/certificates" className="btn btn-outline">Get Certificate</Link>
            {/* Login Button */}
            <Link to="/login" className="btn btn-login">Login</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>COURSES</h2>
          <p>Choose from a variety of courses to upgrade your skills.</p>
          <Link to="/courses" className="link-btn">LET'S START YOUR JOURNEY</Link>
        </div>

        <div className="feature-card">
          <h2>CERTIFICATES</h2>
          <p>Earn verified certificates to boost your career opportunities.</p>
          <Link to="/certificates" className="link-btn">DOWNLOAD NOW</Link>
        </div>

        <div className="feature-card">
          <h2>DASHBOARD</h2>
          <p>Track your learning progress and achievements in one place.</p>
          <Link to="/dashboard" className="link-btn">START NOW</Link>
        </div>

        <div className="feature-card">
          <h2>PROFILE</h2>
          <p>Manage your account, settings, and enrolled courses.</p>
          <Link to="/profile" className="link-btn">VIEW NOW</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
