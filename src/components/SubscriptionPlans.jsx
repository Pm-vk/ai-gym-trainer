import React from "react";
import { Link } from "react-router-dom";
import "./SubscriptionPage.css";

const SubscriptionPage = () => {
  const plans = [
    { name: "Free", price: "$0/month", route: "/subscribe/free" },
    { name: "Basic", price: "$9.99/month", route: "/subscribe/basic" },
    { name: "Premium", price: "$19.99/month", route: "/subscribe/premium" },
  ];

  return (
    <div className="subscription-container">
      <h2>Choose Your Plan</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <Link to={plan.route}>
              <button className="subscribe-btn">Subscribe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
