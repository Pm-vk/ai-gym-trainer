import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import WorkoutPlans from "./components/WorkoutPlans";
import NutritionGuide from "./components/NutritionGuide";
import UserDashboard from "./components/UserDashboard";
import ExerciseDemo from "./components/ExerciseDemo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Auth from "./components/Auth";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import MuscleGain from "./components/MuscleGain";
import FatLoss from "./components/FatLoss";
import AthleticPerformance from "./components/AthleticPerformance";
import FreePlan from "./components/FreePlan";
import BasicPlan from "./components/BasicPlan";
import PremiumPlan from "./components/PremiumPlan";
import ChallengesAndStories from "./components/ChallengesAndStories";
import AskAI from "./components/AskAI";
import Signup from "./components/Signup";
import PushupChallenge from "./components/PushupChallenge";

const App = () => {
  const [user, setUser] = useState(null); // ✅ Define state for user

  return (
    <Router>
      {/* Chatbot will be accessible on every page */}
      <Chatbot />

      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutPlans />} />
        <Route path="/nutrition" element={<NutritionGuide />} />
        <Route path="/progress" element={<UserDashboard />} />
        <Route path="/exercises" element={<ExerciseDemo />} />
        <Route path="/subscribe" element={<SubscriptionPlans />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login setUser={setUser} />} />{" "}
        {/* ✅ Pass setUser */}
        <Route path="/signup" element={<Signup setUser={setUser} />} />{" "}
        {/* ✅ Pass setUser */}
        <Route path="/profile" element={<ProfilePage user={user} />} />{" "}
        {/* ✅ Pass user */}
        <Route path="/muscle-gain" element={<MuscleGain />} />
        <Route path="/fat-loss" element={<FatLoss />} /> {/* Add this route */}
        <Route
          path="/workout-details/athletic-performance"
          element={<AthleticPerformance />}
        />
        <Route path="/subscribe/free" element={<FreePlan />} />
        <Route path="/subscribe/basic" element={<BasicPlan />} />
        <Route path="/subscribe/premium" element={<PremiumPlan />} />
        <Route
          path="/challenges-and-stories"
          element={<ChallengesAndStories />}
        />
        <Route path="/askai" element={<AskAI />} /> {/* 🔥 New Route */}
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/challenges/1" element={<PushupChallenge />} />
      </Routes>
    </Router>
  );
};

export default App;
