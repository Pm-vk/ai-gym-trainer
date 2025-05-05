import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NutritionGuide.css";

const NutritionGuide = () => {
  const [calories, setCalories] = useState(null);
  const [goal, setGoal] = useState("maintenance");
  const [userData, setUserData] = useState({
    weight: "",
    height: "",
    age: "",
    activity: "sedentary",
  });

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const calculateCalories = () => {
    const { weight, height, age, activity } = userData;
    if (!weight || !height || !age) {
      alert("Please enter valid details!");
      return;
    }
    const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    let dailyCalories = BMR * activityMultipliers[activity];

    if (goal === "weight-loss") dailyCalories -= 500;
    if (goal === "muscle-gain") dailyCalories += 500;

    setCalories(Math.round(dailyCalories));
  };

  return (
    <div className="nutrition-container">
      <h1>AI-Powered Nutrition Guide</h1>
      <p>Personalized meal plans to achieve your fitness goals.</p>

      <div className="calorie-calculator">
        <h2>Calorie Intake Calculator</h2>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={userData.weight}
          onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={userData.height}
          onChange={(e) => setUserData({ ...userData, height: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
        />
        <select
          value={userData.activity}
          onChange={(e) => setUserData({ ...userData, activity: e.target.value })}
        >
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Lightly active (1-3 days exercise)</option>
          <option value="moderate">Moderately active (3-5 days exercise)</option>
          <option value="active">Active (6-7 days exercise)</option>
          <option value="veryActive">Very Active (intense daily exercise)</option>
        </select>

        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="maintenance">Maintain Weight</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
        </select>

        <button onClick={calculateCalories}>Calculate Calories</button>

        {calories && <p className="calorie-result">Daily Calories: {calories} kcal</p>}
      </div>

      <div className="meal-plan">
        <h2>Suggested Meal Plan</h2>
        {goal === "maintenance" && <p>Balanced diet with proteins, carbs, and healthy fats.</p>}
        {goal === "weight-loss" && <p>Low-calorie meals with high fiber and lean proteins.</p>}
        {goal === "muscle-gain" && <p>High-protein meals with complex carbs and healthy fats.</p>}
      </div>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default NutritionGuide;
