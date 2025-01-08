import React, { useState } from 'react';
import FileUpload from './FIleUpload';
import { validateEmail } from '../utils/Validation';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    specialization: '',
    phoneNumber: '',
    certifications: '',
    internshipDetails: '',
    coursesCompleted: '',
    linkedin: '',
    github: '',
    languagesKnown: '',
  });
  
  const [fileUploads, setFileUploads] = useState({
    certifications: null,
    internshipDetails: null,
    coursesCompleted: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (name, file) => {
    setFileUploads({ ...fileUploads, [name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email!');
      return;
    }
    // Handle form submission (e.g., call API)
    console.log(formData, fileUploads);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 border rounded">
      <h2 className="text-2xl font-semibold mb-4">Candidate Registration</h2>

      <label className="block mb-2">Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />
      </label>
      
      <label className="block mb-2">Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />
      </label>
      
      <label className="block mb-2">Degree:
        <input 
          type="text" 
          name="degree" 
          value={formData.degree} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />
      </label>

      <label className="block mb-2">Specialization:
        <input 
          type="text" 
          name="specialization" 
          value={formData.specialization} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />
      </label>

      <label className="block mb-2">Phone Number:
        <input 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
          required 
        />
      </label>

      <label className="block mb-2">Certifications (e.g., AWS, Azure):
        <input 
          type="text" 
          name="certifications" 
          value={formData.certifications} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <label className="block mb-2">Internship Details:
        <input 
          type="text" 
          name="internshipDetails" 
          value={formData.internshipDetails} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <label className="block mb-2">Courses Completed (e.g., Udemy, Coursera):
        <input 
          type="text" 
          name="coursesCompleted" 
          value={formData.coursesCompleted} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <label className="block mb-2">LinkedIn Profile:
        <input 
          type="url" 
          name="linkedin" 
          value={formData.linkedin} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <label className="block mb-2">GitHub Profile:
        <input 
          type="url" 
          name="github" 
          value={formData.github} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <label className="block mb-2">Programming Languages Known:
        <input 
          type="text" 
          name="languagesKnown" 
          value={formData.languagesKnown} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
      </label>

      <FileUpload name="certifications" onFileUpload={handleFileUpload} />
      <FileUpload name="internshipDetails" onFileUpload={handleFileUpload} />
      <FileUpload name="coursesCompleted" onFileUpload={handleFileUpload} />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
    </form>
  );
};

export default CandidateForm;
