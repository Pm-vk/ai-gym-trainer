import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WorkoutPlans.css";

const WorkoutPlans = () => {
  const [favoritePlans, setFavoritePlans] = useState([]);

  const plans = [
    {
      id: "muscle-gain",
      name: "💪 Muscle Gain Plan",
      description: "A 4-week progressive overload plan for building strength and muscle.",
      duration: "4 Weeks",
      img: "/images/muscle-gain.jpg",
      exercises: ["Bench Press", "Deadlifts", "Squats", "Pull-ups", "Bicep Curls"],
    },
    {
      id: "fat-loss",
      name: "🔥 Fat Loss Program",
      description: "High-intensity workouts designed to maximize fat burning and endurance.",
      duration: "6 Weeks",
      img: "/images/fat-loss.jpg",
      exercises: ["Jump Rope", "Burpees", "Mountain Climbers", "HIIT Circuits"],
    },
    {
      id: "athletic-performance",
      name: "🏃‍♂️ Athletic Performance",
      description: "A plan focused on agility, strength, and endurance for athletes.",
      duration: "8 Weeks",
      img: "/images/athlete.jpg",
      exercises: ["Sprints", "Plyometrics", "Agility Drills", "Box Jumps"],
    },
  ];

  const toggleFavorite = (planId) => {
    setFavoritePlans((prevFavorites) =>
      prevFavorites.includes(planId)
        ? prevFavorites.filter((id) => id !== planId)
        : [...prevFavorites, planId]
    );
  };

  return (
    <div className="workout-container">
      <h1 className="section-title">🔥 AI-Generated Workout Plans</h1>
      <p className="section-description">Get personalized workouts based on your fitness goals.</p>

      <div className="plans-list">
        {plans.map((plan) => (
          <Link
            key={plan.id}
            to={plan.id === "muscle-gain" ? "/muscle-gain" : plan.id === "fat-loss" ? "/fat-loss" : `/workout-details/${plan.id}`}
            target="_blank"
            className="plan-card-link"
          >
            <div className="plan-card">
              <img src={plan.img} alt={plan.name} className="plan-image" />
              <h3 className="plan-title">{plan.name}</h3>
              <p>{plan.description}</p>
              <span className="plan-duration">⏳ {plan.duration}</span>
              <ul className="exercise-list">
                {plan.exercises.map((exercise, index) => (
                  <li key={index}>✅ {exercise}</li>
                ))}
              </ul>
              <div className="buttons-container">
                <button
                  className="favorite-button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(plan.id);
                  }}
                >
                  {favoritePlans.includes(plan.id) ? "⭐ Unfavorite" : "☆ Favorite"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/" className="back-button">🏠 Back to Home</Link>
    </div>
  );
};

export default WorkoutPlans;