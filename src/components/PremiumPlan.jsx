import React from "react";
import { Link } from "react-router-dom";
import "./PremiumPlan.css";

const PremiumPlan = () => {
  return (
    <div className="premium-plan-container">
      <h2>Premium Plan Dashboard</h2>
      <div className="premium-plan-dashboard">
        
        {/* Subscription Details */}
        <div className="premium-plan-details">
          <h3>Your Subscription</h3>
          <p><strong>Plan:</strong> Premium</p>
          <p><strong>Price:</strong> $19.99/month</p>
          <p><strong>Status:</strong> Active</p>
          <button className="premium-plan-cancel-btn">Cancel Subscription</button>
        </div>

        {/* Exclusive Features */}
        <div className="premium-plan-features">
          <h3>Premium Benefits</h3>
          <ul>
            <li>🚀 All Basic Features</li>
            <li>🎥 Live Trainer Sessions</li>
            <li>⚡ Priority 24/7 Support</li>
          </ul>
        </div>

        {/* Payment Options */}
        <div className="premium-plan-payment">
          <h3>Payment Options</h3>
          <button className="premium-plan-button">Pay with Card</button>
          <button className="premium-plan-button">Pay with PayPal</button>
        </div>

        {/* Book a Live Session */}
        <div className="premium-plan-trainer-session">
          <h3>Book a Live Trainer Session</h3>
          <button className="premium-plan-book-session-btn">Schedule Now</button>
        </div>

      </div>

      <Link to="/subscribe">
        <button className="premium-plan-back-btn">Back to Plans</button>
      </Link>
    </div>
  );
};

export default PremiumPlan;
