import React from "react";
import "./ProfilePage.css";

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Your Profile</h2>
      {user ? (
        <>
          {/* User Info Section */}
          <div className="profile-section">
            <div className="avatar">{user.email.charAt(0).toUpperCase()}</div>
            <p className="profile-info"><strong>Name:</strong> {user.name || "User"}</p>
            <p className="profile-info"><strong>Email:</strong> {user.email}</p>
          </div>

          {/* Subscription Details */}
          <div className="subscription-section">
            <h3>Subscription</h3>
            <p><strong>Plan:</strong> Premium</p>
            <p><strong>Status:</strong> Active</p>
            <button className="manage-subscription">Manage Subscription</button>
          </div>

          {/* Workout & Nutrition Progress */}
          <div className="progress-section">
            <h3>Your Progress</h3>
            <p><strong>Workouts Completed:</strong> 15</p>
            <p><strong>Nutrition Score:</strong> 80%</p>
            <button className="view-progress">View Progress</button>
          </div>

          {/* AI Chatbot Section */}
          <div className="chatbot-section">
            <h3>Need Assistance?</h3>
            <button className="chatbot-button">Chat with AI Trainer</button>
          </div>

          {/* Fitness Goals Section */}
          <div className="fitness-goals-section">
            <h3>Fitness Goals</h3>
            <p>Stay on track with your goals and achieve new milestones.</p>
            <button className="edit-goals">Edit Goals</button>
          </div>

          {/* Favorite Workouts Section */}
          <div className="favorite-workouts-section">
            <h3>Favorite Workouts</h3>
            <p>Access your saved workouts quickly.</p>
            <button className="view-workouts">View Workouts</button>
          </div>

          {/* AI-Generated Workouts Section */}
          <div className="ai-workouts-section">
            <h3>AI-Generated Workouts</h3>
            <p>Get personalized workouts based on your fitness goals.</p>
            <div className="workout-list">
              {/* Full Body Strength */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/2MoGxae-zyo"
                  title="Full Body Strength Workout"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>Full Body Strength</strong> - 45 min</p>
                <button className="save-workout">Save Workout</button>
              </div>

              {/* HIIT Cardio Blast */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/ml6cT4AZdqI"
                  title="HIIT Cardio Blast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>HIIT Cardio Blast</strong> - 30 min</p>
                <button className="save-workout">Save Workout</button>
              </div>

              {/* Yoga & Flexibility */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/v7AYKMP6rOE"
                  title="Yoga & Flexibility"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>Yoga & Flexibility</strong> - 40 min</p>
                <button className="save-workout">Save Workout</button>
              </div>

              {/* Core & Abs */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/1919eTCoESo"
                  title="Core & Abs Workout"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>Core & Abs</strong> - 25 min</p>
                <button className="save-workout">Save Workout</button>
              </div>

              {/* Strength Training */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/U0bhE67HuDY"
                  title="Strength Training"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>Strength Training</strong> - 50 min</p>
                <button className="save-workout">Save Workout</button>
              </div>

              {/* Endurance Boost */}
              <div className="workout-item">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/Rl7agOorL3o"
                  title="Endurance Boost Workout"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p><strong>Endurance Boost</strong> - 35 min</p>
                <button className="save-workout">Save Workout</button>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button className="logout-button">Logout</button>
        </>
      ) : (
        <p className="login-message">Please login to view your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;
