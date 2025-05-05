import React from "react";
import { Link } from "react-router-dom";
import "./ChallengesAndStories.css";

const challenges = [
  { id: 1, name: "7-Day Push-up Challenge", goal: "Increase upper body strength" },
  { id: 2, name: "30-Day Fat Loss Challenge", goal: "Burn fat and improve endurance" },
  { id: 3, name: "Plank Mastery Challenge", goal: "Strengthen core and stability" },
];

const transformations = [
  { id: 1, name: "Karan Mehta", progress: "Lost 15kg in 3 months", story: "Karan followed a consistent routine with a balanced diet, daily workouts, and discipline." },
  { id: 2, name: "Deepak Sharma", progress: "Gained muscle and improved endurance", story: "Deepak incorporated strength training, focused on nutrition, and maintained consistency." },
  { id: 3, name: "Ayesha Khan", progress: "Lost 10kg in 2 months", story: "Ayesha combined yoga, HIIT workouts, and mindful eating to achieve her goal." },
];

const ChallengesAndStories = () => {
  return (
    <div className="challenges-stories-container">
      {/* 🖼 Transformation Banner */}
      <img
        src="https://img.freepik.com/free-photo/beautiful-portrait-women-with-all-kinds-body_23-2149159278.jpg?semt=ais_hybrid"
        alt="Transformation"
        className="transformation-banner"
      />

      <h2 className="section-title">Fitness Challenges & Transformation Stories</h2>
      <p className="section-description">Join challenges and get inspired by real transformation stories.</p>

      <h3 className="category-title">Fitness Challenges</h3>
      <div className="challenge-list">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <h3>{challenge.name}</h3>
            <p>Goal: {challenge.goal}</p>
            <Link
  className="join-challenge"
  onClick={() => window.open(`/challenges/${challenge.id}`, '_blank')}
>
  Join Challenge
</Link>

          </div>
        ))}
      </div>

      <h3 className="category-title">User Transformation Journeys</h3>
      <div className="transformation-list">
        {transformations.map((user) => (
          <div key={user.id} className="transformation-card">
            <div className="transformation-text">
              <h3>{user.name}</h3>
              <p className="progress-highlight">{user.progress}</p>
              <p className="story-text">{user.story}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default ChallengesAndStories;
