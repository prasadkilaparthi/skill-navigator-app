import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      {/* Display aggregated statistics, e.g., total candidates, total batches */}
      <p>Total Candidates: 100</p>
      <p>Total Batches: 4</p>
    </div>
  );
};

export default Dashboard;
