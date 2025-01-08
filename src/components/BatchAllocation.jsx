import React, { useState } from 'react';

const BatchAllocation = ({ candidates }) => {
  const [allocatedBatches, setAllocatedBatches] = useState([]);

  const allocateBatches = () => {
    const batches = { java: [], net: [], dataEngineering: [] };

    candidates.forEach(candidate => {
      if (candidate.certifications.includes('AWS') || candidate.certifications.includes('Java')) {
        batches.java.push(candidate);
      } else if (candidate.certifications.includes('Azure') || candidate.certifications.includes('.NET')) {
        batches.net.push(candidate);
      } else if (candidate.certifications.includes('Python')) {
        batches.dataEngineering.push(candidate);
      }
    });

    setAllocatedBatches(batches);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Batch Allocation</h2>
      <button onClick={allocateBatches} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Allocate Batches</button>
      <div className="mt-4">
        <h3>Java Batch</h3>
        <ul>{allocatedBatches.java && allocatedBatches.java.map(candidate => <li key={candidate.email}>{candidate.name}</li>)}</ul>
        <h3>.NET Batch</h3>
        <ul>{allocatedBatches.net && allocatedBatches.net.map(candidate => <li key={candidate.email}>{candidate.name}</li>)}</ul>
        <h3>Data Engineering Batch</h3>
        <ul>{allocatedBatches.dataEngineering && allocatedBatches.dataEngineering.map(candidate => <li key={candidate.email}>{candidate.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default BatchAllocation;
