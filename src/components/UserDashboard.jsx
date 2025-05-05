import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [muscleMass, setMuscleMass] = useState("");
  const [progress, setProgress] = useState([]);
  const [aiSuggestion, setAiSuggestion] = useState("");

  useEffect(() => {
    if (progress.length > 0) {
      generateAISuggestions();
    }
  }, [progress]);

  const handleSubmit = () => {
    if (weight && bodyFat && muscleMass) {
      const newEntry = {
        date: new Date().toLocaleDateString(),
        weight: Number(weight),
        bodyFat: Number(bodyFat),
        muscleMass: Number(muscleMass),
      };
      setProgress([...progress, newEntry]);
      setWeight("");
      setBodyFat("");
      setMuscleMass("");
    }
  };

  const generateAISuggestions = () => {
    if (progress.length === 0) return;
    const latest = progress[progress.length - 1];

    if (latest.bodyFat > 25) {
      setAiSuggestion("Consider more cardio workouts and a balanced diet with lean proteins.");
    } else if (latest.muscleMass < 30) {
      setAiSuggestion("Focus on strength training and increase protein intake.");
    } else {
      setAiSuggestion("You're on track! Keep pushing towards your fitness goals.");
    }
  };

  const chartData = {
    labels: progress.map((entry) => entry.date),
    datasets: [
      {
        label: "Weight (kg)",
        data: progress.map((entry) => entry.weight),
        borderColor: "cyan",
        backgroundColor: "rgba(0, 255, 255, 0.3)",
      },
      {
        label: "Body Fat (%)",
        data: progress.map((entry) => entry.bodyFat),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.3)",
      },
      {
        label: "Muscle Mass (%)",
        data: progress.map((entry) => entry.muscleMass),
        borderColor: "lime",
        backgroundColor: "rgba(50, 205, 50, 0.3)",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Your Fitness Dashboard</h1>
      <p>Track your workouts, progress, and diet.</p>

      <nav className="dashboard-nav">
        <Link to="/">🏠 Home</Link>
        <Link to="/workouts">💪 Workouts</Link>
      </nav>

      <section className="progress-tracking">
        <h2>Progress Tracking</h2>
        <div className="progress-inputs">
          <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <input type="number" placeholder="Body Fat (%)" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
          <input type="number" placeholder="Muscle Mass (%)" value={muscleMass} onChange={(e) => setMuscleMass(e.target.value)} />
          <button onClick={handleSubmit}>Save Progress</button>
        </div>
      </section>

      <section className="progress-chart">
        <h2>Progress Over Time</h2>
        {progress.length > 0 ? <Line data={chartData} /> : <p>No progress data yet.</p>}
      </section>

      <section className="ai-suggestions">
        <h2>AI Workout Suggestions</h2>
        <p>{aiSuggestion || "Log your progress to receive AI suggestions!"}</p>
      </section>
    </div>
  );
};

export default UserDashboard;
