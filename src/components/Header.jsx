import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Skill Navigator</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/candidates" className="mr-4">Candidates</Link>
          <Link to="/feedback" className="mr-4">Feedback</Link>
          <Link to="/reports" className="mr-4">Reports</Link>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
