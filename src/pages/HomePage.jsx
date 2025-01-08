import React from "react";
import Dashboard from "../components/Dashboard";


const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Welcome to Skill Navigator</h2>
      <Dashboard />
    </div>
  );
};

export default HomePage;
