import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeedbackPage = () => {
  return (
    <div>
      <main className="p-6">
        <h2 className="text-xl">Feedback</h2>
        <FeedbackForm />
      </main>

    </div>
  );
};

export default FeedbackPage;
