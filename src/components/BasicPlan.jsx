import React from "react";
import { Link } from "react-router-dom";
import "./BasicPlan.css";

const BasicPlan = () => {
  return (
    <div className="basic-plan-wrapper">
      <h2 className="basic-plan-title">Basic Plan Dashboard</h2>
      <div className="basic-plan-dashboard">
        <div className="basic-plan-details">
          <h3>Your Subscription</h3>
          <p><strong>Plan:</strong> Basic</p>
          <p><strong>Price:</strong> $9.99/month</p>
          <p><strong>Status:</strong> Active</p>
          <button className="basic-plan-cancel-btn">Cancel Subscription</button>
        </div>

        <div className="basic-plan-features">
          <h3>Plan Benefits</h3>
          <ul>
            <li>✅ Full AI Workouts</li>
            <li>✅ Personalized Diet Plans</li>
            <li>✅ Trainer Chat Support</li>
          </ul>
        </div>

        <div className="basic-plan-payment">
          <h3>Payment Options</h3>
          <button className="basic-plan-pay-btn">Pay with Card</button>
          <button className="basic-plan-pay-btn">Pay with PayPal</button>
        </div>
      </div>

      <Link to="/subscribe"><button className="basic-plan-back-btn">Back to Plans</button></Link>
    </div>
  );
};

export default BasicPlan;