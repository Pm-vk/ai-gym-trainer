import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="homepage-navbar">
        <div className="logo-container">
          <h1 className="logo">AI Gym Trainer</h1>
        </div>
        <div className="nav-links">
          <Link to="/login" className="login-button">Login</Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="homepage-header">
        <div className="hero-content centered">
          <h1>AI Gym Trainer</h1>
          <p>Your personal AI-powered fitness guide</p>
          <Link to="/subscribe" className="header-button">Get Started</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features centered">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card move-left">
            <h3>Personalized Workouts</h3>
            <p>AI-generated workout plans</p>
            <Link to="/workouts" className="feature-button">Explore</Link>
          </div>
          <div className="feature-card move-right">
            <h3>Nutrition Advice</h3>
            <p>Customized meal plans</p>
            <Link to="/nutrition" className="feature-button">Get Plan</Link>
          </div>
          <div className="feature-card move-left">
            <h3>Progress Tracking</h3>
            <p>Monitor your gains and fitness</p>
            <Link to="/progress" className="feature-button">Track</Link>
          </div>
          <div className="feature-card move-right">
            <h3>Exercise Demos</h3>
            <p>Watch expert-led videos</p>
            <Link to="/exercises" className="feature-button">Watch</Link>
          </div>
        </div>
      </section>

      {/* Fitness Challenges & Transformation Stories Section */}
      <section className="challenges-stories-section centered">
        <h2>Fitness Challenges & Transformation Stories</h2>
        <p>Take on challenges and get inspired by real transformation stories.</p>
        <div className="buttons-container">
          <Link to="/challenges-and-stories" className="explore-button">Explore Fitness Journeys</Link>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription centered">
        <h2>Subscription Plans</h2>
        <p>Access premium AI coaching with our exclusive plans.</p>
        <Link to="/subscribe" className="subscribe-button">Subscribe Now</Link>
      </section>
      
      {/* Community Hub Section */}
      <section className="community-hub centered">
        <h2>Community Hub</h2>
        <p>Join discussions, share experiences, and get fitness advice.</p>
        <Link to="/askai" className="askai-button">Join the Discussion</Link> {/* 🔥 Links to AskAI Page */}
      </section>
      
      {/* Footer */}
      <footer className="homepage-footer centered">
        <div className="footer-content">
          <p>Contact us: <a href="mailto:support@aigymtrainer.com">support@aigymtrainer.com</a></p>
          <p>&copy; 2025 AI Gym Trainer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
