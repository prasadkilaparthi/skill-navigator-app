import React from "react";
import CandidateForm from "../components/CandidateForm";

const CandidatesPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Candidate Management</h2>
      <CandidateForm />
    </div>
  );
};

export default CandidatesPage;
