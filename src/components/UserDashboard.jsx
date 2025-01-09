import React from "react";

const UserDashboard = ({ userName }) => {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React, including components, state, and props.",
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into closures, async programming, and ES6+ features.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 3,
      title: "Web Development with HTML & CSS",
      description: "Master the basics of web development and design beautiful websites.",
      link: "https://www.w3schools.com/",
    },
    {
      id: 4,
      title: "Node.js for Backend Development",
      description: "Build scalable backend services using Node.js and Express.",
      link: "https://nodejs.dev/learn",
    },
    {
      id: 5,
      title: "Database Design and SQL",
      description: "Learn to design databases and write efficient SQL queries.",
      link: "https://www.sqltutorial.org/",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-600">
        Welcome, {userName}!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Here are some recommended courses for you:
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
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
