import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AthleticPerformance = () => {
  const [performanceData, setPerformanceData] = useState([
    { day: "Mon", speed: 8, endurance: 75, strength: 50 },
    { day: "Tue", speed: 9, endurance: 78, strength: 55 },
    { day: "Wed", speed: 8.5, endurance: 80, strength: 53 },
    { day: "Thu", speed: 9.2, endurance: 82, strength: 57 },
    { day: "Fri", speed: 9.5, endurance: 85, strength: 60 },
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Athletic Performance</h2>
      <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", background: "#f9f9f9" }}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Performance Tracking</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="speed" stroke="blue" strokeWidth={2} />
            <Line type="monotone" dataKey="endurance" stroke="green" strokeWidth={2} />
            <Line type="monotone" dataKey="strength" stroke="orange" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <button 
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => alert("Performance Analyzed")}
        >
          Analyze Performance
        </button>
      </div>
    </div>
  );
};

export default AthleticPerformance;
