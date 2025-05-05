import React from "react";
import { Link } from "react-router-dom";

const ExerciseDemo = () => {
  return (
    <div className="exercise-container">
      <h1>Exercise Demonstrations</h1>
      <p>Watch videos to learn the correct form.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ExerciseDemo;
