import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MuscleGain.css";

const MuscleGain = () => {
  // Array of YouTube workout videos
  const workoutVideos = [
    { src: "https://www.youtube.com/embed/X27F4kgBJKk", title: "🏋️ Muscle Building Workout" },
    { src: "https://www.youtube.com/embed/ZYZ9Dyd_x6Y", title: "💪 Strength Training Routine" },
    { src: "https://www.youtube.com/embed/3ub8RBE7BC8", title: "🔥 Full Body Gains Workout" },
  ];

  // AI Workout Tips
  const aiTips = [
    "💡 Train with compound movements like Squats, Deadlifts, and Bench Press.",
    "💡 Increase protein intake to at least 1.6g per kg of body weight.",
    "💡 Sleep at least 7-9 hours for muscle recovery and strength gain.",
    "💡 Progressive Overload: Increase weights weekly to build muscle.",
    "💡 Don't skip leg day! Leg workouts boost overall muscle growth.",
    "💡 Stay consistent – muscle gain takes time, patience, and proper nutrition.",
  ];

  const [currentTip, setCurrentTip] = useState(aiTips[0]);

  const generateRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * aiTips.length);
    setCurrentTip(aiTips[randomIndex]);
  };

  return (
    <div className="muscle-gain-container">
      <h1>💪 Muscle Gain Program</h1>
      <p>Follow these AI-optimized workouts and tips to build muscle.</p>

      {/* Workout Videos Section */}
      <div className="video-section">
        <h2>📽 AI Workout Videos</h2>
        <div className="video-grid">
          {workoutVideos.map((video, index) => (
            <div key={index} className="video-card">
              <h3>{video.title}</h3>
              <iframe
                width="100%"
                height="200"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* AI-Generated Workout Plan */}
      <div className="workout-plan">
        <h2>🏋️ Weekly Workout Plan</h2>
        <ul>
          <li>✅ Monday - Chest & Triceps</li>
          <li>✅ Tuesday - Back & Biceps</li>
          <li>✅ Wednesday - Rest / Active Recovery</li>
          <li>✅ Thursday - Legs & Abs</li>
          <li>✅ Friday - Shoulders & Arms</li>
          <li>✅ Saturday - Full Body Strength</li>
          <li>✅ Sunday - Rest / Stretching</li>
        </ul>
      </div>

      {/* AI-Generated Tips */}
      <div className="ai-tips">
        <h2>🧠 AI Muscle Gain Tips</h2>
        <p>{currentTip}</p>
        <button className="random-tip-button" onClick={generateRandomTip}>
          🔄 Get a New Tip
        </button>
      </div>

      <Link to="/" className="back-button">🏠 Back to Plans</Link>
    </div>
  );
};

export default MuscleGain;
