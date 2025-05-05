import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesAndStories"; // Optional CSS

const PushupChallenge = () => {
  return (
    <div className="challenge-page">
      <h2>7-Day Push-up Challenge</h2>
      <p>Complete a set number of push-ups each day to boost your strength!</p>

      {/* Add more challenge details here */}

      <Link to="/challenges" className="back-button">
        ⬅ Back to Challenges
      </Link>
    </div>
  );
};

export default PushupChallenge;
