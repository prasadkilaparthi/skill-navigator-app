import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Simulating user role (can be hardcoded or fetched)
  const [role, setRole] = useState("admin"); // Change to "candidate" to test candidate navigation

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Skill Navigator</h1>
        <nav>
          {role === "admin" ? (
            <>
              <Link to="/" className="mr-4">Home</Link>
              <Link to="/feedback" className="mr-4">Feedback</Link>
              <Link to="/reports" className="mr-4">Reports</Link>
              <Link to="/dashboard" className="mr-4">Dashboard</Link>
            </>
          ) : role === "candidate" ? (
            <>
              <Link to="/candidates" className="mr-4">Candidate Form</Link>
              <Link to="/udashboard" className="mr-4">User Dashboard</Link>
            </>
          ) : (
            <span>Please log in to access the navigation</span>
          )}
        </nav>
        {/* Temporary Role Switcher for Testing */}
        <div>
          <button
            className="bg-green-500 px-3 py-1 rounded mr-2"
            onClick={() => setRole("admin")}
          >
            Admin View
          </button>
          <button
            className="bg-blue-500 px-3 py-1 rounded"
            onClick={() => setRole("candidate")}
          >
            Candidate View
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
