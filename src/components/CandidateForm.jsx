import React, { useState } from "react";
import FileUpload from "./FIleUpload"
import { validateEmail } from "../utils/Validation";
import UserDashboard from "./UserDashboard";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    specialization: "",
    phoneNumber: "",
    linkedin: "",
    github: "",
    languagesKnown: "",
  });

  const [fileUploads, setFileUploads] = useState({
    certifications: null,
    internshipDetails: null,
    coursesCompleted: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (name, file) => {
    setFileUploads({ ...fileUploads, [name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email!");
      return;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/api/candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, ...fileUploads }),
      });

      if (response.ok) {
        alert("Candidate registered successfully!");
        setIsSubmitted(true); // Navigate to dashboard
      } else {
        const errorData = await response.json();
        alert(`Failed to submit form: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  if (isSubmitted) {
    return <UserDashboard userName={formData.name} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 border rounded shadow-lg bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Candidate Registration Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Degree:</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2">LinkedIn Profile:</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block mb-2">GitHub Profile:</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div>
          <label className="block mb-2">Programming Languages Known:</label>
          <input
            type="text"
            name="languagesKnown"
            value={formData.languagesKnown}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
        <FileUpload name="certifications" onFileUpload={handleFileUpload} />
        <FileUpload name="internshipDetails" onFileUpload={handleFileUpload} />
        <FileUpload name="coursesCompleted" onFileUpload={handleFileUpload} />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default CandidateForm;
