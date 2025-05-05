import React from "react";
import { Link } from "react-router-dom";
import "./FatLoss.css";

const FatLoss = () => {
  return (
    <div className="fatloss-container">
      <h1 className="section-title">🔥 Fat Loss Program</h1>
      <p className="section-description">
        High-intensity workouts designed to maximize fat burning and endurance.
      </p>
      
      <h2 className="tips-title">Tips & Tricks for Effective Fat Loss</h2>
      <ul className="tips-list">
        <li>🚶 Stay Active: Aim for at least 10,000 steps daily.</li>
        <li>🍏 Eat More Protein: Helps preserve muscle while losing fat.</li>
        <li>💦 Stay Hydrated: Water boosts metabolism and curbs hunger.</li>
        <li>⏳ Do Intermittent Fasting: Helps control calorie intake.</li>
        <li>🏋️‍♂️ Strength Training: Muscle burns more calories at rest.</li>
      </ul>
      
      <h2 className="videos-title">🎥 Fat Loss Workouts</h2>
      <div className="videos-container">
        <iframe src="https://www.youtube.com/embed/-qcA-GqCVeI" title="Fat Loss Workout 1" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/IT94xC35u6k" title="Fat Loss Workout 2" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/Crda1Sv9mks" title="Fat Loss Workout 3" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/Bzh7HIjvYZc" title="Fat Loss Workout 4" allowFullScreen></iframe>
      </div>

      <h2 className="workout-title">💪 Best Exercises for Fat Loss</h2>
      <ul className="workout-list">
        <li>🔥 High-Intensity Interval Training (HIIT)</li>
        <li>🏃‍♂️ Running or Sprinting</li>
        <li>🦵 Squats and Lunges</li>
        <li>💪 Push-ups and Burpees</li>
        <li>🚴 Cycling or Rowing</li>
      </ul>

      <Link to="/" className="back-button">🏠 Back to Home</Link>
    </div>
  );
};

export default FatLoss;
