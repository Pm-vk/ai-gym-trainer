import React from "react";
import { Link } from "react-router-dom";
import "./SubscriptionPage.css";

const FreePlan = () => {
  return (
    <div className="plan-details">
      <h2>Free Plan</h2>
      <p>Perfect for beginners looking for AI-generated workouts.</p>
      <ul>
        <li>Basic AI Workouts</li>
        <li>Limited Diet Plans</li>
        <li>Community Support</li>
      </ul>
      <Link to="/subscribe"><button className="back-btn">Back to Plans</button></Link>
    </div>
  );
};

export default FreePlan;
