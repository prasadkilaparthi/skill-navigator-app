import React from "react";

const Assessments = ({ userName }) => {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Test your knowledge on React fundamentals, including components, state, and props.",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Assess your skills in closures, async programming, and ES6+ features.",
    },
    {
      id: 3,
      title: "Web Development with HTML & CSS",
      description: "Evaluate your understanding of web development and styling principles.",
    },
    {
      id: 4,
      title: "Node.js for Backend Development",
      description: "Test your ability to build scalable backend services using Node.js and Express.",
    },
    {
      id: 5,
      title: "Database Design and SQL",
      description: "Assess your proficiency in designing databases and writing SQL queries.",
    },
  ];

  const handleTakeAssessment = (courseTitle) => {
    alert(`Starting assessment for ${courseTitle}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">
        Welcome, {userName}!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Take an assessment to test your knowledge in the following areas:
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button
              onClick={() => handleTakeAssessment(course.title)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Take Assessment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessments;
