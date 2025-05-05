import React from "react";
import "./WorkoutsPage.css";

const WorkoutsPage = () => {
  return (
    <div className="workouts-container">
      <h1>Workouts</h1>
      <p>Select workouts for your fitness goals.</p>

      <section className="workout-section">
        <h2>🔥 Chest Workouts</h2>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/1V3vpcaxRYQ" 
          title="Chest Workout"
          allowFullScreen
        ></iframe>
      </section>

      <section className="workout-section">
        <h2>🏋️ Bench Press</h2>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/hWbUlkb5Ms4" 
          title="Bench Press"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default WorkoutsPage;
