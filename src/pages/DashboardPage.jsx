import React, { useState, useEffect } from 'react';
import BatchAllocation from '../components/BatchAllocation';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  // Sample state for candidates (you would replace this with actual API data)
  const [candidates, setCandidates] = useState([]);
  
  useEffect(() => {
    // Simulate API call to fetch candidate data
    const sampleCandidates = [
      { name: "John Doe", email: "john@example.com", certifications: ["AWS", "Java"] },
      { name: "Jane Smith", email: "jane@example.com", certifications: ["Azure", ".NET"] },
      { name: "James Brown", email: "james@example.com", certifications: ["Python"] }
    ];
    setCandidates(sampleCandidates);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      
      <div className="my-4">
        <h3 className="text-xl font-semibold">Candidate Statistics</h3>
        <p>Total Candidates: {candidates.length}</p>
        <p>Total Batches: 3</p> {/* This can be calculated dynamically */}
      </div>
      
      <div className="my-4">
        <h3 className="text-xl font-semibold">Batch Allocation</h3>
        <BatchAllocation candidates={candidates} />
      </div>
      
      <div className="my-4">
        <Link to="/reports" className="bg-blue-500 text-white p-2 rounded">Generate Reports</Link>
      </div>
    </div>
  );
};

export default DashboardPage;
