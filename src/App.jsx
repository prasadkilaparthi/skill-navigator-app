import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CandidatesPage from './pages/CandidatesPage';
import FeedbackPage from './pages/FeedbackPage';
import ReportsPage from './pages/ReportsPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import Assessments from './components/Assessments';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/udashboard" element={<UserDashboard />} />
        <Route path="/assessments" element={<Assessments />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
