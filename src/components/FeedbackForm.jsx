import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log(feedback);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border rounded">
      <label>Feedback:
        <textarea value={feedback} onChange={handleChange} className="block w-full p-2 mb-4" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
